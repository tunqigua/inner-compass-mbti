"use strict";

const groupMeta = {
  analyst: { label: "思辨者", code: "NT", en: "Conceptual Thinkers" },
  diplomat: { label: "共情者", code: "NF", en: "Meaning Seekers" },
  sentinel: { label: "守序者", code: "SJ", en: "Steady Builders" },
  explorer: { label: "体验者", code: "SP", en: "Present Explorers" }
};

const personalities = [
  {
    code: "INTJ",
    name: "远见构筑者",
    group: "analyst",
    tagline: "从复杂中看见结构，也愿意为长远目标铺出一条清晰的路。",
    features: ["独立思考，不轻易把共识当作答案", "习惯从系统与长期影响理解问题", "重视自主、能力与持续改善"],
    strengths: ["拆解复杂问题并建立清晰模型", "为长期目标设计可执行的策略", "在独立工作中保持专注与标准"],
    blindspots: ["可能低估情绪沟通对合作的影响", "面对低效或反复协调时容易失去耐心"],
    fields: ["战略研究", "产品与系统设计", "数据分析", "长期复杂项目"],
    relationships: "你重视真诚、能力与边界，常以解决问题表达在意。若能在给出方案之前先回应感受，并把关心直接说出来，关系会更有温度。",
    reading: "你倾向先在心里搭起一幅完整地图，再决定从哪里开始。独立让你保持清醒，远见让你不只解决眼前的问题；与此同时，允许计划被现实与他人的感受轻轻修正，也会让你的构想更有生命力。"
  },
  {
    code: "INTP",
    name: "概念解构者",
    group: "analyst",
    tagline: "喜欢拆开习以为常的答案，追问它为何成立，又能否有另一种解释。",
    features: ["对概念、原理与边界充满好奇", "思想自主，乐于挑战默认前提", "需要足够空间让想法自然生长"],
    strengths: ["抽象推理与发现逻辑矛盾", "把陌生领域连接成新的理解", "不被表面答案限制探索范围"],
    blindspots: ["过度分析时可能把行动一再推后", "面对他人的情绪需要时回应不够及时"],
    fields: ["理论与应用研究", "技术研发", "数据建模", "概念设计"],
    relationships: "你常通过分享想法建立连接，也很看重彼此的自由。比起频繁确认，你更相信真实的理解；清楚回应与兑现小约定，会让重要的人更有安全感。",
    reading: "你的思维像一间不断扩建的实验室：每个结论都可以再次被检验，每个规则都值得追问边界。这样的开放使你看见别人忽略的路径；而把一个足够好的想法带到现实，比等待完美答案更能让好奇产生影响。"
  },
  {
    code: "ENTJ",
    name: "目标推进者",
    group: "analyst",
    tagline: "善于把远大的目标转译为方向、次序，以及有推进力的行动。",
    features: ["目标清晰，习惯主动承担决策", "快速识别资源、阻力与优先级", "愿意为更高标准推动改变"],
    strengths: ["确立方向并组织复杂协作", "在不确定中做出果断选择", "持续推动计划从构想到落地"],
    blindspots: ["推进节奏过快时可能给人压力", "容易用效率视角覆盖尚未说出的感受"],
    fields: ["组织战略", "创业与商业", "运营管理", "复杂项目领导"],
    relationships: "你欣赏坦率、有能力且可靠的伙伴，也愿意为共同未来投入。分享一点控制权，给倾听留出不以结论为目的的空间，会让亲密与合作都更平衡。",
    reading: "你很自然地寻找方向：什么值得投入，谁能一起完成，下一步如何更有效。行动与掌控感让你感到踏实；但有些重要的关系并不需要立刻被优化。偶尔放慢速度，也是一种不失力量的领导方式。"
  },
  {
    code: "ENTP",
    name: "可能性辩手",
    group: "analyst",
    tagline: "在观点碰撞里发现可能，也乐于把旧问题重新命名。",
    features: ["思维敏捷，常同时看见多种解释", "享受探索、试验与观点交锋", "对新鲜问题有强烈的启动能量"],
    strengths: ["快速产生并连接不同创意", "重新定义卡住团队的问题", "在变化里即时调整策略"],
    blindspots: ["新鲜感消退后可能不容易收尾", "思辨式交流有时会被理解为攻击"],
    fields: ["创新咨询", "商业拓展", "内容传播", "产品探索"],
    relationships: "你需要思想火花，也需要自主空间。对你而言，讨论本身可能是一种亲近；尊重对方的情绪边界，并把最重要的灵感落实为承诺，会让连接更稳。",
    reading: "你擅长打开门，而不是守在一扇门前。世界在你眼里很少只有一个版本，这让你充满创造力，也让重复与收尾显得沉闷。选择少数真正重要的可能，并陪它们走过无聊的中段，会让自由变得更有重量。"
  },
  {
    code: "INFJ",
    name: "深层洞察者",
    group: "diplomat",
    tagline: "能感知未说出口的需要，也在意一件事更长远的意义。",
    features: ["内省而敏锐，容易捕捉情绪暗流", "重视价值、意义与深层一致", "对人保有理想，也需要独处恢复"],
    strengths: ["深度倾听并理解复杂感受", "把人与长远意义连接起来", "为重要价值保持耐心与投入"],
    blindspots: ["容易替他人承受过多情绪", "理想与责任感可能让自己的边界变模糊"],
    fields: ["用户研究", "教育与内容", "社会创新", "品牌与文化策略"],
    relationships: "你珍视深度、忠诚与相互理解，宁愿拥有少数真实连接，也不愿停留在表面。越早说出自己的需要，越不容易在体谅与沉默中慢慢耗尽。",
    reading: "你经常在语言之前感受到意义，在决定之前先看见它将如何影响人。深度是你的礼物，也可能成为重量。你不必理解每一个人，也不必总是成为安静的容器；把自己也放进关怀的范围里，是更完整的善意。"
  },
  {
    code: "INFP",
    name: "价值守望者",
    group: "diplomat",
    tagline: "以内在价值辨认方向，用想象力保存生活尚未展开的可能。",
    features: ["情感细腻，重视真诚与内外一致", "想象丰富，容易被象征与故事触动", "愿意守护个人认定的重要价值"],
    strengths: ["理解个体独特而复杂的处境", "用创意表达难以直说的感受", "在压力下仍保留价值判断"],
    blindspots: ["可能回避必要的冲突与现实协商", "理想中的可能会把行动推迟到以后"],
    fields: ["写作与叙事", "艺术与设计", "公益与支持", "人本研究"],
    relationships: "你渴望被真正看见，也愿意给予不带评判的理解。明确边界、时间和现实约定，并不会伤害善意，反而能保护彼此最珍贵的部分。",
    reading: "你依靠内在的罗盘，而不是外界的掌声决定什么重要。丰富感受让世界拥有更多层次，也可能让现实显得粗糙。无需等到完全准备好；一次小而真实的行动，往往比完美想象更接近你想守护的生活。"
  },
  {
    code: "ENFJ",
    name: "关系点灯人",
    group: "diplomat",
    tagline: "善于看见他人的潜力，并把一群人带向共同相信的方向。",
    features: ["对群体情绪与关系变化很敏感", "表达自然，愿意主动建立连接", "习惯把成长与共同价值放在心上"],
    strengths: ["激发他人的信心与行动", "协调差异并凝聚共同方向", "把抽象愿景说得真切可感"],
    blindspots: ["容易承担不属于自己的责任", "过于在意回应时会忽略自身状态"],
    fields: ["教育培训", "人才发展", "社区组织", "公共传播"],
    relationships: "你通常主动、温暖，也愿意为关系投入心力。允许他人自己解决问题，也允许自己接受照顾，会让亲密不再只建立在你的付出之上。",
    reading: "你像一盏朝向他人的灯，常比对方更早看见他的潜力。连接与鼓舞给你能量，但持续照亮所有人也会疲惫。真正成熟的关怀包括尊重他人的节奏，以及承认自己也有需要被接住的时候。"
  },
  {
    code: "ENFP",
    name: "灵感连接者",
    group: "diplomat",
    tagline: "总能在人和世界之间，看见尚未被打开的新可能。",
    features: ["好奇而热情，容易被新的意义点亮", "擅长跨越差异建立自然连接", "需要自由、变化与真诚表达"],
    strengths: ["激发创意与团队活力", "快速理解不同人的独特之处", "在变化中发现新的行动入口"],
    blindspots: ["可能开始很多，却难以完成全部", "容易因当下热情而承诺过量"],
    fields: ["创意策略", "内容与社区", "体验设计", "早期创业"],
    relationships: "你表达热烈，也需要自由与新鲜感。稳定跟进、把小事兑现、在兴奋之外谈谈日常，会让一瞬间的共鸣慢慢长成信任。",
    reading: "你很容易感受到“还可以这样”的兴奋，并把这份可能传递给身边的人。灵感是你的火种，却不必让每一颗火种都长成篝火。学会选择、安排与收尾，不会削弱自由，只会让真正重要的热情走得更远。"
  },
  {
    code: "ISTJ",
    name: "稳序执行者",
    group: "sentinel",
    tagline: "用责任、事实与清晰标准，让事情长期可靠地运转。",
    features: ["务实有序，重视承诺与可验证事实", "习惯提前理解规则与责任边界", "在稳定流程里保持耐心与精确"],
    strengths: ["精确处理细节与复杂流程", "以稳定行动兑现长期承诺", "发现风险并维护交付质量"],
    blindspots: ["可能把熟悉的规则视为不言自明", "面对突然变化时需要更多适应时间"],
    fields: ["运营与交付", "质量控制", "财务审计", "工程与合规"],
    relationships: "你常用行动而非语言表达关心，也看重可靠与长期。把期待、担忧与感受说得更清楚，会减少他人从沉默里猜测你的心意。",
    reading: "你相信可靠不是一句承诺，而是日复一日可被看见的行动。秩序让你集中精力，也让身边的人感到安心。面对变化时，不必立刻拥抱所有新事物；允许自己小步试验，稳定也可以拥有弹性。"
  },
  {
    code: "ISFJ",
    name: "温柔照料者",
    group: "sentinel",
    tagline: "记得那些微小而重要的细节，把关心安静地放进日常行动。",
    features: ["体贴实际，容易留意他人的具体需要", "看重熟悉关系、责任与稳定节奏", "愿意用持续投入维护值得的事"],
    strengths: ["细致照顾并记住重要细节", "为团队提供稳定而耐心的支持", "在关系与现实需要之间协调"],
    blindspots: ["不容易拒绝他人的请求", "回避冲突时会把自己的需要搁置太久"],
    fields: ["客户服务", "教育支持", "行政协作", "照护与协调"],
    relationships: "你愿意默默付出，也努力维护稳定。练习清楚地说“不”，同时接受他人的照顾，会让关系从单向给予走向更对等的相互支持。",
    reading: "你把爱放在细节里：一句记得、一次提前准备、一份可靠陪伴。正因如此，你的疲惫也常不容易被看见。边界不是拒绝关心，而是让关心能够持续；你的需要与他人的需要同样值得被认真对待。"
  },
  {
    code: "ESTJ",
    name: "现实组织者",
    group: "sentinel",
    tagline: "把规则、责任与资源放在合适的位置，让目标有序发生。",
    features: ["直接务实，习惯迅速建立结构", "责任意识强，愿意对结果负责", "重视效率、清晰标准与可预测性"],
    strengths: ["快速决策并明确分工", "管理流程、资源与交付节奏", "在混乱中建立可执行秩序"],
    blindspots: ["压力下可能过度主导", "容易低估不同方法与情绪信息的价值"],
    fields: ["项目管理", "运营与治理", "公共行政", "销售管理"],
    relationships: "你偏爱清楚的承诺与可预期的合作。让规则可以讨论，让表达多一点缓冲，并不等于放弃原则，反而会提升关系面对变化的韧性。",
    reading: "你相信明确能够减少不必要的混乱，也习惯站出来让事情继续前进。这份承担让人安心；但人并不总按流程运作。有时先理解阻力来自哪里，再决定如何推进，会比更用力地推动更有效。"
  },
  {
    code: "ESFJ",
    name: "群体维系者",
    group: "sentinel",
    tagline: "通过及时的关照与共同仪式，让身边的人感到归属。",
    features: ["合群而负责，擅长感知现场氛围", "重视回应、礼节与关系中的确定性", "愿意用实际服务表达对人的重视"],
    strengths: ["维护关系并促进具体合作", "营造让人安心的团队氛围", "及时察觉并回应现实需要"],
    blindspots: ["可能过度在意外界评价", "面对批评或分歧时容易把它带回心里"],
    fields: ["社区运营", "人才服务", "客户关系", "活动组织"],
    relationships: "你表达关心直接，也重视对方的回应。与其反复猜测别人需要什么，不如主动询问；允许差异存在，关系反而会少一些隐形压力。",
    reading: "你擅长把“我们”照顾好，让人被记住、被欢迎、被放进共同生活里。归属感对你很重要，但并非所有沉默都是否定，也并非所有分歧都意味着疏远。把自我价值放回自己手中，会让给予更从容。"
  },
  {
    code: "ISTP",
    name: "冷静实践者",
    group: "explorer",
    tagline: "冷静看清事物如何运作，再用精准行动解决眼前问题。",
    features: ["观察敏锐，先看事实再做反应", "独立务实，偏好亲手理解系统", "在即时挑战中保持冷静与灵活"],
    strengths: ["迅速排除故障并找到关键点", "压力下保持清楚而有效的行动", "用技术与实践把想法变为现实"],
    blindspots: ["情绪表达的存在感可能较低", "对长期约束与重复流程容易失去耐心"],
    fields: ["工程与技术", "现场运营", "原型制作", "工艺与产品实现"],
    relationships: "你尊重空间，也常用实际帮助表达在意。主动说明计划、变化与感受，哪怕只是一句简短确认，也能避免你的独立被误读为疏远。",
    reading: "你更相信亲手验证，而不是冗长说明。临场专注让你在复杂局面里找到最实际的出口，也使过度安排显得束缚。给未来留一点基本承诺，不会夺走自由，反而让重要的人知道如何与你并肩。"
  },
  {
    code: "ISFP",
    name: "感知创作者",
    group: "explorer",
    tagline: "敏锐感受当下细节，让价值与审美成为可触摸的表达。",
    features: ["温和灵活，对环境与感官细节敏锐", "重视真实体验，不喜欢强迫他人", "常以作品、行动或陪伴表达内在价值"],
    strengths: ["将感受转化为细腻的审美表达", "体察个体差异并给予空间", "根据现场变化自然地调整行动"],
    blindspots: ["可能回避冲突与远期规划", "容易把尖锐批评理解为对自我的否定"],
    fields: ["视觉与体验设计", "手工艺", "品牌内容", "自然与服务场景"],
    relationships: "你温暖但不侵入，重视真实相处胜过宏大承诺。说出具体需要，讨论更长远的期待，能让安静的在意被对方真正接收到。",
    reading: "你与世界的连接很具体：光线、声音、颜色，以及一个人当下细微的变化。你不急着给感受命名，却会让它在行动与表达中出现。面对重要分歧时，温柔而清楚地开口，也是忠于自己的方式。"
  },
  {
    code: "ESTP",
    name: "临场行动者",
    group: "explorer",
    tagline: "迅速发现现实中的机会，并在行动反馈中不断调整方向。",
    features: ["行动导向，乐于直接进入真实情境", "对现场、人群与机会变化反应敏锐", "偏好即时反馈与可见的实际结果"],
    strengths: ["快速决策并把握稍纵即逝的机会", "在压力与变化中灵活应对", "用存在感带动现场与谈判节奏"],
    blindspots: ["可能低估长期后果与细节成本", "持续追求刺激时容易忽略身体和情绪信号"],
    fields: ["销售与商务", "创业", "现场运营", "谈判与活动"],
    relationships: "你直接、有趣，也愿意和重要的人一起经历生活。守住关键承诺，偶尔放慢速度聆听情绪信息，会让热烈不只属于当下。",
    reading: "你在现实中思考，也从行动中获得答案。别人还在评估时，你往往已经试出第一条路径。这种勇气带来机会；在重大选择前多看一步长期代价，在高强度之后留一点恢复时间，会让锋芒持续得更久。"
  },
  {
    code: "ESFP",
    name: "氛围点亮者",
    group: "explorer",
    tagline: "用真切热情回应当下，让共同的时刻更有生命力。",
    features: ["外向表达，对人的即时感受很敏锐", "活在当下，愿意把快乐与体验分享", "通过实际陪伴与行动表达关心"],
    strengths: ["快速拉近距离并活跃群体氛围", "创造鲜活、有人情味的体验", "根据现场反馈灵活调整自己"],
    blindspots: ["可能避开枯燥规划与困难话题", "自我评价容易被即时的外界反馈影响"],
    fields: ["表演与内容", "文旅与服务", "活动体验", "造型与陈列"],
    relationships: "你慷慨而有感染力，让人容易感到被欢迎。提前谈谈时间、金钱与边界，也给彼此留出安静空间，会让快乐拥有更稳的承托。",
    reading: "你让生活发生在此刻，也让周围的人更容易感受到活力。即时回应是你的天赋，但并不是每个重要问题都能在当下解决。愿意陪一段关系走过安静甚至有些无聊的时刻，会让热情长出更深的根。"
  }
];

const questions = [
  { axis: "EI", keyedPole: "E", text: "参加一场有不少陌生人的活动后，我通常会比之前更有精神。" },
  { axis: "SN", keyedPole: "S", text: "学习新事物时，具体示例和明确步骤最能帮助我理解。" },
  { axis: "TF", keyedPole: "T", text: "做艰难决定时，我通常先寻找一套对所有人都一致的原则。" },
  { axis: "JP", keyedPole: "J", text: "有明确计划和截止节点时，我会更安心。" },
  { axis: "EI", keyedPole: "I", text: "遇到复杂问题时，我更愿意先独自想清楚，再和别人讨论。" },
  { axis: "SN", keyedPole: "N", text: "面对一条信息，我常会联想到它背后的可能性与隐含意义。" },
  { axis: "TF", keyedPole: "F", text: "当决定会影响他人时，我会把每个人的感受与处境放在重要位置。" },
  { axis: "JP", keyedPole: "P", text: "旅行或休息日里，我喜欢保留足够空间，临时决定安排。" },
  { axis: "EI", keyedPole: "E", text: "在小组讨论中，我常常是一边说，一边把想法理清。" },
  { axis: "SN", keyedPole: "S", text: "做判断前，我更信任可核实的事实与亲身经验。" },
  { axis: "TF", keyedPole: "T", text: "讨论分歧时，即使气氛不太舒服，我也会先检验观点是否合乎逻辑。" },
  { axis: "JP", keyedPole: "J", text: "开始工作前，我通常先排好顺序，并尽量按计划推进。" },
  { axis: "EI", keyedPole: "I", text: "连续参与多场社交活动后，我需要一段安静时间恢复。" },
  { axis: "SN", keyedPole: "N", text: "开始一项任务时，我常先形成整体图景，再逐步补充细节。" },
  { axis: "TF", keyedPole: "F", text: "朋友向我诉说烦恼时，我通常先回应感受，再一起寻找办法。" },
  { axis: "JP", keyedPole: "P", text: "出现新信息时，我愿意调整方向，即使原计划已经开始。" },
  { axis: "EI", keyedPole: "E", text: "进入一个新环境时，我通常会主动和周围的人建立联系。" },
  { axis: "SN", keyedPole: "S", text: "描述一件事时，我倾向按照实际发生的细节来讲。" },
  { axis: "TF", keyedPole: "T", text: "如果一个方案有效且标准一致，即使有人一时不喜欢，我仍愿意考虑推进。" },
  { axis: "JP", keyedPole: "J", text: "我倾向提前完成重要事项，减少最后一刻的变数。" },
  { axis: "EI", keyedPole: "I", text: "即使和熟悉的人相处很愉快，独处仍是我主要的充电方式。" },
  { axis: "SN", keyedPole: "N", text: "比起事情现在是什么样，我更容易被它未来可能变成什么吸引。" },
  { axis: "TF", keyedPole: "F", text: "在价值冲突中，我更关注不同选择会怎样影响具体的人。" },
  { axis: "JP", keyedPole: "P", text: "面对有多种可能的任务，我喜欢先探索一阵，再决定最终方案。" }
];

const answerOptions = [
  { value: -2, label: "完全不像我" },
  { value: -1, label: "比较不像我" },
  { value: 0, label: "介于两者" },
  { value: 1, label: "比较像我" },
  { value: 2, label: "很像我" }
];

const axisMeta = {
  EI: { left: "E", right: "I", leftName: "外向", rightName: "内向", leftCopy: "互动与外部反馈", rightCopy: "独处与内部整理" },
  SN: { left: "S", right: "N", leftName: "实感", rightName: "直觉", leftCopy: "事实与具体经验", rightCopy: "模式与未来可能" },
  TF: { left: "T", right: "F", leftName: "思考", rightName: "情感", leftCopy: "原则、逻辑与效果", rightCopy: "价值、处境与影响" },
  JP: { left: "J", right: "P", leftName: "判断", rightName: "感知", leftCopy: "结构与完成感", rightCopy: "弹性与开放选择" }
};

const guideArticles = {
  emotion: {
    kicker: "情绪 · 自我觉察",
    title: "如何读懂自己的情绪模式",
    lead: "情绪不是需要被修好的故障。它更像一封来信，提醒你有什么正在被忽略。",
    sections: [
      ["先把感受与解释分开", "“我很失落”是一种感受；“没有人真正重视我”则是我们对处境的解释。先不急着证明解释是否正确，只辨认身体和情绪正在发生什么，内在空间就会稍微变宽。"],
      ["寻找重复出现的触发点", "偶尔的波动不必被过度分析。更值得留意的是：什么情境总让你紧绷？什么关系里你经常沉默？你最常在哪一刻否定自己？重复，比强度更能透露真实需要。"],
      ["让情绪成为信息，而非命令", "看见愤怒，不等于必须立刻反击；承认害怕，也不等于只能后退。情绪提供方向线索，而你仍然可以选择如何回应。"]
    ],
    reflection: "下一次情绪出现时，试着问：它想保护什么？它希望我看见什么需要？"
  },
  label: {
    kicker: "人格 · 成长",
    title: "人格类型不是标签，而是起点",
    lead: "真正的理解不会让你变窄。它会帮助你看清自动反应，也让你拥有新的选择。",
    sections: [
      ["偏好不等于能力", "偏好独处的人也能成为出色的演讲者，重视逻辑的人同样可以细腻共情。类型描述的是你更自然的起点，不是你能够抵达的边界。"],
      ["环境会改变我们的呈现", "安全、压力、文化、角色与人生阶段，都会影响我们如何行动。若一次结果与你的自我感受不同，不必急着否定其中任何一方，可以继续观察自己在不同情境里的变化。"],
      ["把盲点变成练习方向", "成长不是把自己改造成另一种类型，而是学会在需要时使用不那么熟悉的方式。每一次有意识的选择，都在扩大你对自己的自由。"]
    ],
    reflection: "哪一项描述让你感到被理解？哪一项让你想反驳？两者都可能是值得继续探索的入口。"
  },
  relationship: {
    kicker: "关系 · 边界",
    title: "当不同的人，靠近彼此",
    lead: "差异不一定意味着不合适。有时只是彼此在使用不同的语言表达同一种在意。",
    sections: [
      ["先理解对方如何获得安全感", "有人从频繁交流中确认连接，有人需要独处后才能回来；有人依靠计划安心，有人保留弹性才觉得自在。差异常常不是拒绝，而是不同的恢复方式。"],
      ["描述需要，不替对方下定义", "“你总是很冷漠”会让关系进入防御；“当消息很久没有回应，我会不安，希望我们约定一个方式”则让彼此有机会解决具体问题。"],
      ["边界让亲密能够呼吸", "健康的靠近并不要求两个人完全相同。能说出什么可以、什么不可以，也能尊重对方的“不”，亲密才不必靠猜测与牺牲维持。"]
    ],
    reflection: "在一段重要关系里，你真正想得到的是什么？你是否已经用对方能听懂的方式说过？"
  }
};

const STORAGE_KEY = "inner-compass-progress-v1";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const typesGrid = $("#types-grid");
const detailDialog = $("#detail-dialog");
const detailContent = $("#detail-content");
const testDialog = $("#test-dialog");
const questionStage = $("#question-stage");
const resultStage = $("#result-stage");
const questionTitle = $("#question-title");
const questionCount = $("#question-count");
const answerScale = $("#answer-scale");
const previousQuestion = $("#previous-question");
const progressTrack = $("#progress-track");
const progressBar = $("#progress-bar");
const testStatus = $("#test-status");
const guideDialog = $("#guide-dialog");
const guideContent = $("#guide-dialog-content");
const toast = $("#toast");

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let advanceTimer = null;
let toastTimer = null;
let lastFocusedElement = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTypes() {
  typesGrid.innerHTML = personalities.map((type, index) => {
    const group = groupMeta[type.group];
    return `
      <button class="type-card reveal" type="button" data-type="${type.code}" data-group="${type.group}" style="--delay: ${(index % 4) * 55}ms" aria-label="查看 ${type.code} ${escapeHtml(type.name)} 的详细解读">
        <span class="type-card-inner">
          <span class="type-card-top"><span>${String(index + 1).padStart(2, "0")}</span>${group.en}</span>
          <span class="type-card-code">${type.code}</span>
          <h3>${escapeHtml(type.name)}</h3>
          <span class="type-card-summary">${escapeHtml(type.tagline)}</span>
          <span class="type-card-bottom"><span>${group.label} · ${group.code}</span><span class="type-card-arrow" aria-hidden="true">↗</span></span>
        </span>
      </button>`;
  }).join("");
}

function openPersonality(code, trigger = null) {
  const type = personalities.find(item => item.code === code);
  if (!type) return;
  const group = groupMeta[type.group];
  lastFocusedElement = trigger || document.activeElement;
  detailContent.innerHTML = `
    <header class="detail-hero">
      <div>
        <span class="detail-group"><i></i>${group.label} · ${group.code} / ${group.en}</span>
        <h2 class="detail-code" id="detail-title">${type.code}</h2>
        <p class="detail-name">${escapeHtml(type.name)}</p>
        <p class="detail-tagline">${escapeHtml(type.tagline)}</p>
      </div>
      <div class="detail-seal" aria-hidden="true"><span>${type.code}</span><i></i></div>
    </header>
    <div class="detail-body">
      <section class="detail-block">
        <h3><span>01</span> 性格特征</h3>
        <ul>${type.features.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3><span>02</span> 自然优势</h3>
        <ul>${type.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3><span>03</span> 可能的盲点</h3>
        <ul>${type.blindspots.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3><span>04</span> 可能自在的领域</h3>
        <ul>${type.fields.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block detail-block-wide">
        <h3><span>05</span> 关系中的你</h3>
        <p>${escapeHtml(type.relationships)}</p>
      </section>
      <p class="detail-disclaimer"><span aria-hidden="true">○</span><span>这是对常见倾向的温和描述，不代表能力高低，也不是对你的完整定义。任何类型都能在不同环境中学习新的表达方式。</span></p>
    </div>`;
  detailDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function setupTypeInteractions() {
  typesGrid.addEventListener("click", event => {
    const card = event.target.closest(".type-card");
    if (card) openPersonality(card.dataset.type, card);
  });

  $$(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $$(".filter-chip").forEach(item => {
        const active = item === chip;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      const filter = chip.dataset.filter;
      $$(".type-card", typesGrid).forEach(card => {
        card.hidden = filter !== "all" && card.dataset.group !== filter;
      });
      const count = filter === "all" ? 16 : 4;
      typesGrid.setAttribute("aria-label", `当前显示 ${count} 种人格类型`);
    });
  });

  $("[data-close-detail]").addEventListener("click", () => closeDialog(detailDialog));
  detailDialog.addEventListener("close", restoreFocus);
  detailDialog.addEventListener("click", event => {
    if (event.target === detailDialog) closeDialog(detailDialog);
  });
}

function setupReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(item => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -45px" });
  items.forEach(item => observer.observe(item));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== questions.length) return;
    answers = saved.answers.map(value => Number.isInteger(value) && value >= -2 && value <= 2 ? value : null);
    const firstEmpty = answers.findIndex(value => value === null);
    currentQuestion = firstEmpty === -1 ? questions.length - 1 : firstEmpty;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, updatedAt: Date.now() }));
  } catch {
    // The test still works when storage is unavailable.
  }
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // No action needed.
  }
}

function showTest() {
  lastFocusedElement = document.activeElement;
  loadProgress();
  testDialog.showModal();
  document.body.classList.add("dialog-open");
  if (answers.every(value => value !== null)) {
    showResult();
  } else {
    resultStage.hidden = true;
    questionStage.hidden = false;
    $("#test-progress-meta").hidden = false;
    progressTrack.hidden = false;
    renderQuestion(false);
    if (answers.some(value => value !== null)) showToast("已继续上次未完成的进度");
  }
}

function closeTest() {
  clearTimeout(advanceTimer);
  closeDialog(testDialog);
}

function renderQuestion(animate = true) {
  clearTimeout(advanceTimer);
  const question = questions[currentQuestion];
  const answeredCount = answers.filter(value => value !== null).length;
  questionCount.textContent = `${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;
  questionTitle.textContent = question.text;
  previousQuestion.disabled = currentQuestion === 0;
  progressTrack.setAttribute("aria-valuenow", String(answeredCount));
  progressBar.style.width = `${(answeredCount / questions.length) * 100}%`;
  testStatus.textContent = `第 ${currentQuestion + 1} 题，共 ${questions.length} 题`;

  answerScale.innerHTML = `<legend class="sr-only">选择与你的符合程度</legend>${answerOptions.map(option => {
    const checked = answers[currentQuestion] === option.value ? "checked" : "";
    const id = `answer-${currentQuestion}-${option.value + 2}`;
    return `<div class="scale-option">
      <input type="radio" name="answer" id="${id}" value="${option.value}" ${checked}>
      <label for="${id}"><span class="scale-dot" aria-hidden="true"></span><span>${option.label}</span></label>
    </div>`;
  }).join("")}`;

  if (animate) {
    questionStage.classList.remove("is-changing");
    void questionStage.offsetWidth;
    questionStage.classList.add("is-changing");
  }
  window.setTimeout(() => questionTitle.focus({ preventScroll: true }), 30);
}

function handleAnswer(event) {
  const input = event.target.closest('input[name="answer"]');
  if (!input) return;
  answers[currentQuestion] = Number(input.value);
  saveProgress();
  const answeredCount = answers.filter(value => value !== null).length;
  progressTrack.setAttribute("aria-valuenow", String(answeredCount));
  progressBar.style.width = `${(answeredCount / questions.length) * 100}%`;
  testStatus.textContent = `${answerOptions.find(item => item.value === Number(input.value)).label}，已选择`;

  clearTimeout(advanceTimer);
  advanceTimer = window.setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
    } else {
      showResult();
    }
  }, 430);
}

function getStrength(score) {
  const absolute = Math.abs(score);
  if (absolute === 0) return "两端均衡";
  if (absolute <= 2) return "轻微倾向";
  if (absolute <= 5) return "温和倾向";
  if (absolute <= 8) return "较明显倾向";
  return "鲜明倾向";
}

function calculateResult() {
  const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  questions.forEach((question, index) => {
    const value = answers[index] ?? 0;
    const meta = axisMeta[question.axis];
    scores[question.axis] += value * (question.keyedPole === meta.left ? 1 : -1);
  });

  const axes = Object.keys(axisMeta).map(axis => {
    const meta = axisMeta[axis];
    const score = scores[axis];
    const leftPercent = Math.round(50 + (score / 12) * 50);
    const selected = score >= 0 ? meta.left : meta.right;
    return {
      axis,
      score,
      leftPercent,
      rightPercent: 100 - leftPercent,
      selected,
      strength: getStrength(score),
      nearBoundary: Math.abs(score) <= 2
    };
  });
  const code = axes.map(item => item.selected).join("");
  const profile = personalities.find(item => item.code === code) || personalities[0];
  return { code, profile, axes };
}

function showResult() {
  clearTimeout(advanceTimer);
  saveProgress();
  const result = calculateResult();
  const nearCount = result.axes.filter(item => item.nearBoundary).length;
  questionStage.hidden = true;
  resultStage.hidden = false;
  $("#test-progress-meta").hidden = true;
  progressTrack.hidden = true;

  $("#result-type").textContent = result.code;
  $("#result-name").textContent = result.profile.name;
  $("#result-seal-code").textContent = result.code;
  $("#result-summary").textContent = `${result.profile.tagline} 这是一张理解偏好的地图，不是对你的定义。`;
  $("#result-reading-copy").textContent = result.profile.reading + (nearCount >= 2
    ? " 你的多个维度靠近中点，说明你可能会随情境灵活切换，不必急着选定唯一答案。"
    : nearCount === 1
      ? " 其中一个维度较接近中点，这份灵活也许会让你在相邻类型中看见自己。"
      : "");
  $("#result-strengths").innerHTML = result.profile.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  $("#result-blindspots").innerHTML = result.profile.blindspots.map(item => `<li>${escapeHtml(item)}</li>`).join("");

  $("#dimension-bars").innerHTML = result.axes.map(item => {
    const meta = axisMeta[item.axis];
    const leftDominant = item.selected === meta.left;
    const preference = leftDominant ? `${meta.leftName} ${item.leftPercent}%` : `${meta.rightName} ${item.rightPercent}%`;
    return `<div class="dimension-row" aria-label="${meta.leftName} ${item.leftPercent}%，${meta.rightName} ${item.rightPercent}%，${item.strength}">
      <span class="dimension-letter ${leftDominant ? "is-dominant" : ""}">${meta.left}</span>
      <div class="dimension-track-wrap">
        <div class="dimension-labels"><span>${meta.leftCopy}</span><strong>${preference} · ${item.strength}</strong><span>${meta.rightCopy}</span></div>
        <div class="dimension-track" aria-hidden="true"><i class="dimension-fill" style="width:${item.leftPercent}%"></i></div>
      </div>
      <span class="dimension-letter ${leftDominant ? "" : "is-dominant"}">${meta.right}</span>
    </div>`;
  }).join("");

  resultStage.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  window.setTimeout(() => $("#result-heading").focus({ preventScroll: true }), 120);
  testStatus.textContent = `测试完成。你的本次人格倾向是 ${result.code}，${result.profile.name}`;
}

function retryTest() {
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  clearProgress();
  resultStage.hidden = true;
  questionStage.hidden = false;
  $("#test-progress-meta").hidden = false;
  progressTrack.hidden = false;
  renderQuestion(false);
  showToast("已清空上次答案，重新开始");
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  textarea.remove();
  return copied;
}

async function shareResult() {
  const result = calculateResult();
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("result", result.code);
  const text = `我的本次人格倾向是 ${result.code} · ${result.profile.name}。${result.profile.tagline}`;
  const sharableUrl = url.protocol === "file:" ? "" : url.href;
  const payload = { title: "向内生长｜我的人格倾向", text };
  if (sharableUrl) payload.url = sharableUrl;
  if (navigator.share) {
    try {
      await navigator.share(payload);
      showToast("分享面板已打开");
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  const shareText = sharableUrl ? `${text}\n${sharableUrl}` : text;
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(shareText);
      showToast("结果摘要已复制到剪贴板");
      return;
    } catch {
      // Fall through to the local copy method below.
    }
  }
  showToast(copyTextFallback(shareText) ? "结果摘要已复制到剪贴板" : "暂时无法自动分享，请截屏保存结果");
}

function setupTest() {
  $$('[data-start-test]').forEach(button => button.addEventListener("click", showTest));
  $$('[data-close-test]').forEach(button => button.addEventListener("click", closeTest));
  answerScale.addEventListener("change", handleAnswer);
  previousQuestion.addEventListener("click", () => {
    clearTimeout(advanceTimer);
    if (currentQuestion > 0) {
      currentQuestion -= 1;
      renderQuestion();
    }
  });
  $("#retry-test").addEventListener("click", retryTest);
  $("#share-result").addEventListener("click", shareResult);
  testDialog.addEventListener("close", restoreFocus);
}

function openGuide(key, trigger) {
  const article = guideArticles[key];
  if (!article) return;
  lastFocusedElement = trigger || document.activeElement;
  guideContent.innerHTML = `
    <p class="article-kicker">${escapeHtml(article.kicker)}</p>
    <h2 id="guide-dialog-title">${escapeHtml(article.title)}</h2>
    <p class="article-lead">${escapeHtml(article.lead)}</p>
    ${article.sections.map(([title, copy]) => `<h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p>`).join("")}
    <div class="reflection"><strong>留给自己的一问</strong><p>${escapeHtml(article.reflection)}</p></div>`;
  guideDialog.showModal();
  document.body.classList.add("dialog-open");
}

function setupGuides() {
  $$('[data-guide]').forEach(button => button.addEventListener("click", () => openGuide(button.dataset.guide, button)));
  $("[data-close-guide]").addEventListener("click", () => closeDialog(guideDialog));
  guideDialog.addEventListener("close", restoreFocus);
  guideDialog.addEventListener("click", event => {
    if (event.target === guideDialog) closeDialog(guideDialog);
  });
}

function restoreFocus() {
  if (!detailDialog.open && !guideDialog.open && !testDialog.open) {
    document.body.classList.remove("dialog-open");
  }
  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setupPageChrome() {
  const header = $("#site-header");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  [detailDialog, guideDialog].forEach(dialog => {
    dialog.addEventListener("cancel", event => {
      event.preventDefault();
      closeDialog(dialog);
    });
  });
  testDialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeTest();
  });
}

function handleSharedResult() {
  const code = new URLSearchParams(window.location.search).get("result")?.toUpperCase();
  if (!personalities.some(item => item.code === code)) return;
  window.setTimeout(() => {
    openPersonality(code);
    showToast(`这是一份朋友分享的 ${code} 人格解读`);
  }, 700);
}

async function setupVisitorCount() {
  const counter = $("#visitor-count");
  const livePath = "/inner-compass-mbti";
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  if (!counter || window.location.hostname !== "tunqigua.github.io" || currentPath !== livePath) return;

  const storageKey = "inner-compass-visitor-count-v1";
  const formatter = new Intl.NumberFormat("zh-CN");
  const renderCount = value => {
    const views = Number(value);
    if (!Number.isSafeInteger(views) || views < 1) return false;
    counter.textContent = `${formatter.format(views)} 人`;
    try { localStorage.setItem(storageKey, String(views)); } catch {}
    return true;
  };

  try { renderCount(localStorage.getItem(storageKey)); } catch {}

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  const params = new URLSearchParams({
    site: "tunqigua.github.io",
    path: livePath
  });
  const apiBase = "https://page-views-api.ratneshc.com/api/v1";

  try {
    const trackRequest = fetch(`${apiBase}/track?${params}`, {
      cache: "no-store",
      keepalive: true,
      signal: controller.signal
    });

    const viewsResponse = await fetch(`${apiBase}/views?${params}`, {
      cache: "no-store",
      signal: controller.signal
    });
    if (viewsResponse.ok) {
      const payload = await viewsResponse.json();
      renderCount(payload.views);
    }

    const trackResponse = await trackRequest;
    if (trackResponse.ok) {
      const refreshedResponse = await fetch(`${apiBase}/views?${params}`, {
        cache: "no-store",
        signal: controller.signal
      });
      if (refreshedResponse.ok) {
        const refreshedPayload = await refreshedResponse.json();
        renderCount(refreshedPayload.views);
      }
    }
  } catch {
    // Keep the last valid numeric value if the optional live refresh is unavailable.
  } finally {
    window.clearTimeout(timeout);
  }
}

function init() {
  renderTypes();
  setupTypeInteractions();
  setupTest();
  setupGuides();
  setupPageChrome();
  setupReveal();
  handleSharedResult();
  setupVisitorCount();
}

init();

