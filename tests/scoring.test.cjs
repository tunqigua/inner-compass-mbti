"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8").replace(/\ninit\(\);\s*$/, "\n");
const storage = new Map();
const node = { querySelector: () => node };
const context = vm.createContext({
  document: { querySelector: () => node },
  localStorage: {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: key => storage.delete(key)
  },
  window: { location: { hash: "" } },
  URL,
  Intl,
  console
});
vm.runInContext(source, context);
const api = vm.runInContext(`({
  questions, axisMeta, AXIS_ORDER, personalities,
  scorePartialAnswers, scoreAnswers, buildResultFromScores,
  calculateResult, getResultPresentation, getShareHash, parseShareHash,
  saveLastResult, loadLastResult, isValidCompletedAt,
  setAnswers(value) { answers = value; }
})`, context);
const axes = [...api.AXIS_ORDER];
const zero = () => Object.fromEntries(axes.map(axis => [axis, 0]));
const snapshot = value => JSON.parse(JSON.stringify(value));
const date = "2026-10-20T03:00:00.000Z";

function answersFromDirections(directionsByAxis) {
  const indices = zero();
  return api.questions.map(question => {
    const direction = directionsByAxis[question.axis][indices[question.axis]++];
    return direction * (question.keyedPole === api.axisMeta[question.axis].left ? 1 : -1);
  });
}

function resultFromDirections(directionsByAxis) {
  api.setAnswers(answersFromDirections(directionsByAxis));
  return api.calculateResult();
}

function allAxes(directions) {
  return Object.fromEntries(axes.map(axis => [axis, directions]));
}

test("all 16 clear profiles retain the expected polarity and full scores", () => {
  for (const profile of api.personalities) {
    const directions = Object.fromEntries(axes.map((axis, index) => [axis,
      Array(6).fill(profile.code[index] === api.axisMeta[axis].left ? 2 : -2)
    ]));
    const result = resultFromDirections(directions);
    assert.equal(result.code, profile.code);
    assert.equal(result.boundaryState, "typed");
    assert.equal(result.resolvedTieCount, 0);
    assert.ok(result.axes.every(axis => Math.abs(axis.score) === 12));
  }
});

test("exact total ties use answer frequency, retain real scores, and disclose the rule", () => {
  const result = resultFromDirections(allAxes([2, -1, -1, 0, 0, 0]));
  assert.equal(result.code, "INFP");
  assert.equal(result.boundaryState, "near");
  assert.equal(result.resolvedTieCount, 4);
  assert.equal(result.tieCount, 0);
  assert.deepEqual(snapshot(result.scores), zero());
  assert.deepEqual(snapshot(result.tieBreaks), { EI: -1, SN: -1, TF: -1, JP: -1 });
  assert.ok(result.axes.every(axis => axis.nearBoundary && axis.resolvedTie && axis.markerIndex === 4));
  assert.match(api.getResultPresentation(result).summary, /次数更多/);
  assert.match(api.getResultPresentation(result).stateLabel, /参考方向/);
  assert.match(api.getResultPresentation(result).shareSummary, /总分持平.*参考方向/);
  const inverse = resultFromDirections(allAxes([-2, 1, 1, 0, 0, 0]));
  assert.equal(inverse.code, "ESTJ");
});

test("frequency never overturns a nonzero total", () => {
  const result = resultFromDirections(allAxes([2, 2, -1, -1, -1, 0]));
  assert.equal(result.code, "ESTJ");
  assert.ok(result.axes.every(axis => axis.score === 1 && !axis.resolvedTie));
  assert.deepEqual(snapshot(result.tieBreaks), zero());
});

test("neutral, uniform, and equally frequent answers retain honest boundary results", () => {
  for (const values of [Array(24).fill(0), Array(24).fill(1), Array(24).fill(-2)]) {
    api.setAnswers(values);
    const result = api.calculateResult();
    assert.equal(result.code, "XXXX");
    assert.equal(result.boundaryState, "open");
    assert.equal(result.profile, null);
  }
  const result = resultFromDirections({ ...allAxes([2, 2, 2, 2, 2, 2]), EI: [1, -1, 0, 0, 0, 0] });
  assert.equal(result.code, "XSTJ");
  assert.equal(result.boundaryState, "one-tie");
  assert.deepEqual([...result.candidateCodes], ["ESTJ", "ISTJ"]);
});

test("incomplete and invalid answers cannot produce a result", () => {
  api.setAnswers(Array(24).fill(null));
  assert.equal(api.scoreAnswers(Array(24).fill(null)), null);
  assert.throws(() => api.calculateResult());
  for (const values of [[], Array(24).fill(3), Array(24).fill(0.5), Array(24).fill("1")]) {
    assert.equal(api.scorePartialAnswers(values), null);
  }
});

test("v2 shares preserve frequency evidence and raw scores; legacy v1 links still open", () => {
  const result = resultFromDirections(allAxes([2, -1, -1, 0, 0, 0]));
  result.completedAt = date;
  const hash = api.getShareHash(result);
  assert.match(hash, /^#result\/v2\/0,0,0,0\/-1,-1,-1,-1\/INFP\/near\/2026-10-20$/);
  const rebuilt = api.parseShareHash(hash);
  assert.equal(rebuilt.code, result.code);
  assert.equal(rebuilt.boundaryState, result.boundaryState);
  assert.deepEqual(snapshot(rebuilt.tieBreaks), snapshot(result.tieBreaks));
  assert.deepEqual(snapshot(rebuilt.scores), snapshot(result.scores));
  assert.equal(api.parseShareHash("#result/v1/0,3,-3,6/XSFJ/one-tie/2026-10-20").code, "XSFJ");
  assert.equal(api.parseShareHash("#result/v1/0,0,0,0/XXXX/open/2026-10-20").code, "XXXX");
  assert.equal(api.parseShareHash("#result/v1/12,12,12,12/ESTJ/typed/2026-10-20").code, "ESTJ");
});

test("shares reject invalid metadata, inconsistent types, versions, and calendar dates", () => {
  const hashes = [
    "#result/v2/0,0,0,0/3,0,0,0/EXXX/mixed/2026-10-20",
    "#result/v2/1,0,0,0/1,0,0,0/EXXX/mixed/2026-10-20",
    "#result/v2/0,0,0,0/-1,-1,-1,-1/ESTJ/near/2026-10-20",
    "#result/v2/0,0,0,0/-1,-1,-1,-1/INFP/typed/2026-10-20",
    "#result/v2/13,0,0,0/0,0,0,0/EXXX/mixed/2026-10-20",
    "#result/v2/0,0,0,0/0,0,0,0/XXXX/open/2026-02-31",
    "#result/v3/0,0,0,0/0,0,0,0/XXXX/open/2026-10-20",
    "#result/v1/0,0,0,0/ESTJ/typed/2026-10-20"
  ];
  for (const hash of hashes) assert.equal(api.parseShareHash(hash), null, hash);
  assert.equal(api.isValidCompletedAt("2026-02-31T00:00:00.000Z"), false);
  assert.equal(api.isValidCompletedAt("2026-10-20T00:00:00Z"), true);
  assert.throws(() => api.buildResultFromScores(zero(), date, { ...zero(), EI: 3 }));
});

test("new and legacy saved results reopen consistently, while corrupted evidence is rejected", () => {
  storage.clear();
  const result = resultFromDirections(allAxes([2, -1, -1, 0, 0, 0]));
  result.completedAt = date;
  assert.equal(api.saveLastResult(result), true);
  assert.deepEqual(snapshot(api.loadLastResult()), snapshot(result));
  const stored = JSON.parse(storage.get("ic-last-result"));
  storage.set("ic-last-result", JSON.stringify({ ...stored, tieBreaks: { ...stored.tieBreaks, EI: 4 } }));
  assert.equal(api.loadLastResult(), null);
  const noEvidence = { ...stored };
  delete noEvidence.tieBreaks;
  storage.set("ic-last-result", JSON.stringify(noEvidence));
  assert.equal(api.loadLastResult(), null);
  storage.set("ic-last-result", JSON.stringify({
    version: 1, quizVersion: "24q-v1", scores: zero(), code: "XXXX", boundaryState: "open", completedAt: date
  }));
  const legacy = api.loadLastResult();
  assert.equal(legacy.code, "XXXX");
  assert.equal(legacy.resolvedTieCount, 0);
  assert.equal(api.parseShareHash(api.getShareHash(legacy)).code, "XXXX");
});

test("resolved and unresolved dimensions coexist through sharing and storage", () => {
  const examples = [
    { scores: { EI: 0, SN: 0, TF: 2, JP: 8 }, tieBreaks: { EI: 2, SN: 0, TF: 0, JP: 0 }, code: "EXTJ", state: "one-tie" },
    { scores: { EI: 0, SN: 0, TF: 0, JP: 8 }, tieBreaks: { EI: -2, SN: 0, TF: 0, JP: 0 }, code: "IXXJ", state: "mixed" }
  ];
  for (const example of examples) {
    const result = api.buildResultFromScores(example.scores, date, example.tieBreaks);
    assert.equal(result.code, example.code);
    assert.equal(result.boundaryState, example.state);
    assert.equal(result.resolvedTieCount, 1);
    assert.match(api.getResultPresentation(result).summary, /EI 维度总分持平/);
    const shared = api.parseShareHash(api.getShareHash(result));
    assert.equal(shared.code, example.code);
    assert.equal(shared.boundaryState, example.state);
    assert.deepEqual(snapshot(shared.tieBreaks), example.tieBreaks);
    assert.equal(api.saveLastResult(result), true);
    assert.deepEqual(snapshot(api.loadLastResult()), snapshot(result));
  }
});

test("exhaustive six-answer model confirms fewer unresolved ties without directional bias", () => {
  let oldTies = 0;
  let newTies = 0;
  let leftResolutions = 0;
  let rightResolutions = 0;
  const values = [-2, -1, 0, 1, 2];
  for (const a of values) for (const b of values) for (const c of values)
    for (const d of values) for (const e of values) for (const f of values) {
      const directions = [a, b, c, d, e, f];
      const sum = directions.reduce((total, value) => total + value, 0);
      const frequency = directions.reduce((total, value) => total + Math.sign(value), 0);
      const partial = api.scorePartialAnswers(answersFromDirections(allAxes(directions)));
      assert.ok(axes.every(axis => partial.scores[axis] === sum && partial.directionCounts[axis] === frequency));
      const metadata = Object.fromEntries(axes.map(axis => [axis, sum === 0 ? frequency : 0]));
      const result = api.buildResultFromScores(partial.scores, date, metadata);
      if (sum === 0) oldTies++;
      if (result.axes[0].isTie) newTies++;
      if (sum === 0 && frequency > 0) leftResolutions++;
      if (sum === 0 && frequency < 0) rightResolutions++;
      if (sum !== 0) assert.equal(result.axes[0].selected, sum > 0 ? "E" : "I");
    }
  assert.equal(oldTies, 1751);
  assert.equal(newTies, 1001);
  assert.equal(leftResolutions, 375);
  assert.equal(rightResolutions, 375);
  // These rates describe uniform synthetic answers, not real-user accuracy.
  const oldIncomplete = 1 - (1 - oldTies / 15625) ** 4;
  const newIncomplete = 1 - (1 - newTies / 15625) ** 4;
  assert.ok(newIncomplete < oldIncomplete);
  console.log(`Uniform synthetic four-axis incomplete rate: ${(oldIncomplete * 100).toFixed(2)}% -> ${(newIncomplete * 100).toFixed(2)}%`);
});
