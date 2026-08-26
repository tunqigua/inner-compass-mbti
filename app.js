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
    blindspots: ["讨论感受时先给方案，对方会觉得没有被听见；先复述一句感受再回应。", "协作低效时独自接手，负担会集中到自己身上；先明确一次分工和期限。"],
    fields: ["能独立深挖复杂问题", "目标清晰且有长期视角", "允许基于证据调整系统", "低干扰、少重复协调"],
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
    blindspots: ["选项太多时不断分析，行动会被推后；先定一个可撤回的小实验。", "对方表达情绪时继续追问逻辑，回应会显得疏远；先确认对方想被倾听还是讨论。"],
    fields: ["允许持续追问原理", "有时间独立验证想法", "评价标准重视推理质量", "可以先探索再收敛"],
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
    blindspots: ["推进节奏过快时，团队会来不及说明阻力；决策前多问一次异议。", "讨论困难时只看效率，未说出的感受会变成阻力；先留两分钟听完。"],
    fields: ["目标和决策边界清晰", "能调动资源推进结果", "反馈直接且节奏明确", "允许优化流程与标准"],
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
    blindspots: ["新鲜感消退后转向新点子，旧任务会停在中途；今天先收完一个最小版本。", "讨论时不断挑战观点，对方会感到被针对；先说明你在讨论想法而不是评价人。"],
    fields: ["问题开放且允许试验", "能与不同观点交锋", "迭代快、反馈周期短", "有清晰节点帮助收尾"],
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
    blindspots: ["身边人情绪低落时把责任揽过来，自己的精力会被耗尽；先问对方需要什么支持。", "认同一件事的意义后不断加码，边界会变模糊；答应前先看一次时间表。"],
    fields: ["工作与价值感能够连接", "有安静时间深入理解", "关系真诚且边界清楚", "允许长期打磨影响"],
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
    blindspots: ["意见冲突时先沉默，需求会一直没有被看见；先说一个具体事实和一个需要。", "等待状态完全合适再行动，想法会停在脑海里；先做十分钟的最小一步。"],
    fields: ["目标符合个人价值", "有自主节奏和表达空间", "尊重个体差异", "反馈具体而不过度控制"],
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
    blindspots: ["团队卡住时接过所有责任，其他人会失去参与空间；先问谁愿意承担下一步。", "对回应很敏感时继续照顾全场，自己的状态会被忽略；会后留十分钟检查精力。"],
    fields: ["能看见他人成长", "协作目标有共同意义", "沟通开放且回应及时", "责任边界清楚"],
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
    blindspots: ["同时启动很多想法，注意力会被切碎；本周只保留一个必须收尾的项目。", "兴奋时马上答应新请求，之后会挤压休息；先隔十分钟再确认承诺。"],
    fields: ["接触新问题与不同的人", "允许跨领域连接想法", "有自主空间调整路径", "用清晰节点帮助收尾"],
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
    blindspots: ["协作时默认大家理解规则，遗漏说明会造成返工；开始前确认一次标准。", "安排突然变化时立刻抗拒，新的有效信息会被挡住；先问清变化影响哪一步。"],
    fields: ["流程与责任边界明确", "标准稳定且可验证", "能提前获知重要变化", "重视质量与持续交付"],
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
    blindspots: ["别人提出请求时先答应，自己的安排会被不断挤压；先说需要查看时间再回复。", "关系紧张时避免开口，不满会慢慢累积；先约一个十分钟的具体沟通。"],
    fields: ["团队关系稳定互相支持", "职责具体且节奏可预期", "细致投入能被看见", "请求与边界可以直说"],
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
    blindspots: ["压力上升时直接接管，团队的信息会变少；分配任务前先听一轮现场判断。", "遇到不同方法时只看效率，有价值的例外会被忽略；先问对方依据是什么。"],
    fields: ["目标、权限和责任明确", "信息及时且标准一致", "能组织资源解决问题", "反馈基于事实与结果"],
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
    blindspots: ["现场回应变冷时反复猜测原因，注意力会离开手头任务；先核对一个具体事实。", "收到批评后把它当成关系信号，情绪会停留很久；先区分建议内容和表达方式。"],
    fields: ["有稳定协作和及时回应", "工作能直接帮助具体的人", "流程清晰且关系友善", "贡献能得到具体反馈"],
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
    blindspots: ["关系需要确认时保持沉默，对方会把空间理解成疏远；先发一句当前状态。", "任务进入重复阶段后降低投入，收尾质量会波动；把最后一步拆成可见清单。"],
    fields: ["问题具体且能亲手验证", "自主度高、干扰较少", "反馈来自真实运行结果", "允许根据现场快速调整"],
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
    blindspots: ["冲突出现时先退开，重要需求会一直没被讨论；先写下一句想表达的事实。", "反馈语气尖锐时把它当成自我否定，有用信息会一起被丢掉；先只摘出可执行部分。"],
    fields: ["环境尊重个人节奏", "工作能连接感官与价值", "沟通温和且具体", "有空间用作品表达判断"],
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
    blindspots: ["机会出现时立即行动，后续成本会被低估；重大选择前写下一个最坏结果。", "高强度状态持续太久，身体信号会被盖住；结束后安排一段固定恢复时间。"],
    fields: ["目标现实且反馈即时", "能在现场快速做决定", "节奏有变化但边界清楚", "结果可以被直接观察"],
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
    blindspots: ["话题变得沉重时先活跃气氛，真正的问题会被推迟；先陪对方把一句话说完。", "现场反馈冷淡时立刻怀疑自己，判断会随气氛摆动；隔一天再评价这次表现。"],
    fields: ["能与人和真实场景互动", "反馈及时且氛围开放", "允许灵活回应现场", "任务成果具体可见"],
    relationships: "你慷慨而有感染力，让人容易感到被欢迎。提前谈谈时间、金钱与边界，也给彼此留出安静空间，会让快乐拥有更稳的承托。",
    reading: "你让生活发生在此刻，也让周围的人更容易感受到活力。即时回应是你的天赋，但并不是每个重要问题都能在当下解决。愿意陪一段关系走过安静甚至有些无聊的时刻，会让热情长出更深的根。"
  }
];

const questions = [
  { axis: "EI", keyedPole: "E", text: "聚会散场后，我通常还有精力继续聊天或参加下一场活动。" },
  { axis: "SN", keyedPole: "S", text: "学一道新菜时，清楚的步骤和用量比「凭感觉」更让我安心。" },
  { axis: "TF", keyedPole: "T", text: "朋友吐槽工作时，我通常先梳理事实和责任，再回应情绪。" },
  { axis: "JP", keyedPole: "J", text: "出门旅行前，我喜欢提前收好行李并确认安排。" },
  { axis: "EI", keyedPole: "I", text: "遇到卡住的问题，我更需要先独自想清楚，再找人讨论。" },
  { axis: "SN", keyedPole: "N", text: "看完电影后，我常继续琢磨它没有明说的含义。" },
  { axis: "TF", keyedPole: "F", text: "会影响他人的决定里，我会优先考虑每个人的处境和感受。" },
  { axis: "JP", keyedPole: "P", text: "休息日不排满计划、醒来再决定做什么，会让我更自在。" },
  { axis: "EI", keyedPole: "E", text: "小组讨论中，我常在说出来的过程中把想法理清。" },
  { axis: "SN", keyedPole: "S", text: "听别人讲一件事时，我会先确认具体发生了什么。" },
  { axis: "TF", keyedPole: "T", text: "出现分歧时，即使气氛紧张，我也会先检验双方的逻辑。" },
  { axis: "JP", keyedPole: "J", text: "开始工作前，我习惯先排好优先级和步骤。" },
  { axis: "EI", keyedPole: "I", text: "连续几天社交后，我需要独处一段时间恢复精力。" },
  { axis: "SN", keyedPole: "N", text: "接手新项目时，我会先形成整体图景，再补充细节。" },
  { axis: "TF", keyedPole: "F", text: "朋友难过时，我通常先陪伴和回应感受，再讨论办法。" },
  { axis: "JP", keyedPole: "P", text: "计划进行中出现更好的想法时，我愿意立即调整方向。" },
  { axis: "EI", keyedPole: "E", text: "进入新环境时，我通常会主动和周围的人搭话。" },
  { axis: "SN", keyedPole: "S", text: "回忆一次旅行时，我先想起的通常是具体画面和发生过的细节。" },
  { axis: "TF", keyedPole: "T", text: "如果规则一致且有效，即使有人暂时不喜欢，我仍会考虑坚持它。" },
  { axis: "JP", keyedPole: "J", text: "对重要的事，我更喜欢提前完成并留出余量。" },
  { axis: "EI", keyedPole: "I", text: "即使和最好的朋友相处愉快，回家后我仍需要一个人安静一会儿。" },
  { axis: "SN", keyedPole: "N", text: "比起一件事现在的样子，它未来可能变成什么更容易吸引我。" },
  { axis: "TF", keyedPole: "F", text: "两个人发生冲突时，我会先理解各自的委屈和处境。" },
  { axis: "JP", keyedPole: "P", text: "面对多种做法时，我喜欢先试几种，再决定最终方案。" }
];

const answerOptions = [
  { value: -2, label: "完全不像我" },
  { value: -1, label: "不太像我" },
  { value: 0, label: "看情况" },
  { value: 1, label: "比较像我" },
  { value: 2, label: "非常像我" }
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

const LEGACY_STORAGE_KEY = "inner-compass-progress-v1";
const PROGRESS_STORAGE_KEY = "ic-progress";
const LAST_RESULT_STORAGE_KEY = "ic-last-result";
const RESULT_VERSION = 1;
const QUIZ_VERSION = "24q-v1";
const PROGRESS_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const AXIS_ORDER = ["EI", "SN", "TF", "JP"];
const EXPERIENCE_STORAGE_PREFIXES = ["ic-", "inner-compass-"];
const QUESTION_ADVANCE_DELAY_MS = 220;
const DEVELOPING_DURATION_MS = 900;
const DEVELOPING_HARD_LIMIT_MS = 1200;
const DEVELOPING_ASSET_WAIT_MS = 150;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const personalityVisuals = {
  INTJ: { color: "#6f657f", ink: "#f8f3e9", tone: "high" },
  INTP: { color: "#7d7088", ink: "#f8f3e9", tone: "soft" },
  ENTJ: { color: "#62576f", ink: "#f8f3e9", tone: "high" },
  ENTP: { color: "#89758d", ink: "#241f26", tone: "mid" },
  INFJ: { color: "#63766e", ink: "#f8f3e9", tone: "high" },
  INFP: { color: "#7d8b79", ink: "#1e2822", tone: "soft" },
  ENFJ: { color: "#587365", ink: "#f8f3e9", tone: "high" },
  ENFP: { color: "#8b9270", ink: "#20251c", tone: "mid" },
  ISTJ: { color: "#5f707a", ink: "#f8f3e9", tone: "high" },
  ISFJ: { color: "#74868b", ink: "#182326", tone: "soft" },
  ESTJ: { color: "#536a74", ink: "#f8f3e9", tone: "high" },
  ESFJ: { color: "#87959a", ink: "#1d2527", tone: "soft" },
  ISTP: { color: "#806d58", ink: "#f8f3e9", tone: "high" },
  ISFP: { color: "#978068", ink: "#251f19", tone: "soft" },
  ESTP: { color: "#74604f", ink: "#f8f3e9", tone: "high" },
  ESFP: { color: "#a08767", ink: "#261f17", tone: "mid" }
};
const neutralResultVisual = { color: "#817e78", ink: "#fffdf7", tone: "high" };

const typesGrid = $("#types-grid");
const detailDialog = $("#detail-dialog");
const detailContent = $("#detail-content");
const testDialog = $("#test-dialog");
const questionStage = $("#question-stage");
const resultStage = $("#result-stage");
const questionTitle = $("#question-title");
const questionCount = $("#question-count");
const testProgressMeta = $("#test-progress-meta");
const questionCaption = $("#question-caption");
const answerScale = $("#answer-scale");
const previousQuestion = $("#previous-question");
const progressTrack = $("#progress-track");
const progressBar = $("#progress-bar");
const progressSteps = $("#progress-steps");
const testStatus = $("#test-status");
const heroStartTest = $("#hero-start-test");
const heroBrowseTypes = $("#hero-browse-types");
const restartProgress = $("#restart-progress");
const experienceShell = $("#experience-shell");
const completionActions = $("#completion-actions");
const reviewAnswers = $("#review-answers");
const generateResult = $("#generate-result");
const answerReview = $("#answer-review");
const answerReviewList = $("#answer-review-list");
const liveDevelopPreview = $("#live-develop-preview");
const liveDevelopWindow = $("#live-develop-window");
const liveDevelopIconA = $("#live-develop-icon-a");
const liveDevelopIconB = $("#live-develop-icon-b");
const liveDevelopCount = $("#live-develop-count");
const developingStage = $("#developing-stage");
const developingCopy = $("#developing-copy");
const developingPhoto = $("#developing-photo");
const developingIcon = $("#developing-icon");
const developingColor = $(".developing-color", developingPhoto);
const skipDeveloping = $("#skip-developing");
const resultPhoto = $("#result-photo");
const resultCaption = $("#result-caption");
const resultStampDate = $("#result-stamp-date");
const resultState = $("#result-state");
const resultCandidates = $("#result-candidates");
const resultColumns = $("#result-columns");
const resultFields = $("#result-fields");
const lastResultEntry = $("#open-last-result");
const clearLocalDataButton = $("#clear-local-data");
const guideDialog = $("#guide-dialog");
const guideContent = $("#guide-dialog-content");
const shareDialog = $("#share-dialog");
const sharePreview = $("#share-preview");
const downloadResult = $("#download-result");
const copyResultLink = $("#copy-result-link");
const toast = $("#toast");

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let advanceTimer = null;
let advanceToken = 0;
let developingTimer = null;
let developingFallbackTimer = null;
let developingStartTimer = null;
let developingEndHandler = null;
let developingToken = 0;
let developingCommitPending = false;
let shutterTimer = null;
let liveDevelopActiveIcon = liveDevelopIconA;
let liveDevelopIconToken = 0;
let toastTimer = null;
let stateFocusTimer = null;
const dialogReturnFocus = new WeakMap();
let experienceState = "question";
let answerLocked = false;
let answerReviewOpen = false;
let currentResult = null;
let shareBlobPromise = null;
let shareObjectUrl = "";
let routeSyncing = false;
let currentRouteReturn = "#home";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getPersonalityIcon(code) {
  return `assets/personality-icons/v1/${String(code).toLowerCase()}.webp`;
}

function getPreviewIconCode(scores) {
  return personalities
    .map((type, index) => {
      const fit = AXIS_ORDER.reduce((total, axis) => {
        const meta = axisMeta[axis];
        const direction = type.code.includes(meta.left) ? 1 : -1;
        const score = scores[axis];
        return total + (score === 0 ? 0 : direction === Math.sign(score) ? Math.abs(score) : -Math.abs(score));
      }, 0);
      return { code: type.code, fit, index };
    })
    .sort((a, b) => b.fit - a.fit || a.index - b.index)[0]?.code || "INFJ";
}

function renderTypes() {
  const existingCards = $$(".type-card", typesGrid);
  if (existingCards.length === personalities.length) {
    existingCards.forEach(card => {
      card.setAttribute("href", `#type/${card.dataset.type}`);
      applyPersonalityVisual(card, card.dataset.type);
    });
    return;
  }

  typesGrid.innerHTML = personalities.map((type, index) => {
    const group = groupMeta[type.group];
    return `
      <a class="type-card native-paper" href="#type/${type.code}" data-type="${type.code}" data-group="${type.group}" aria-label="查看 ${type.code} ${escapeHtml(type.name)} 人格解读">
        <div class="native-window type-photo">
          <img src="${getPersonalityIcon(type.code)}" alt="" width="512" height="512" loading="lazy" decoding="async">
        </div>
        <div class="native-caption type-border"><div class="type-title"><strong>${type.code}</strong><span>${escapeHtml(type.name)}</span></div><p>${escapeHtml(type.tagline)}</p><small>${group.code} · ${group.label}</small></div>
        <img class="native-frame" src="assets/frames/native-polaroid-frame-v1.webp" alt="" aria-hidden="true" width="1130" height="1392" loading="lazy" decoding="async">
      </a>`;
  }).join("");
  $$(".type-card", typesGrid).forEach(card => applyPersonalityVisual(card, card.dataset.type));
}

function getPersonalityVisual(code) {
  return personalityVisuals[String(code).toUpperCase()] || personalityVisuals.INFJ;
}

function applyPersonalityVisual(root, code) {
  if (!root) return;
  const visual = getPersonalityVisual(code);
  const photo = root.matches(".type-photo, .detail-photo, #developing-photo, #result-photo")
    ? root
    : $(".type-photo, .detail-photo, #developing-photo, #result-photo", root);
  if (!photo) return;
  photo.style.setProperty("--personality-color", visual.color);
  photo.style.setProperty("--personality-ink", visual.ink);
  photo.dataset.tone = visual.tone;
}

function openPersonality(code, trigger = null, { updateHistory = true } = {}) {
  const type = personalities.find(item => item.code === code);
  if (!type) return;
  const group = groupMeta[type.group];
  const visual = getPersonalityVisual(type.code);
  rememberDialogFocus(detailDialog, trigger);
  detailContent.innerHTML = `
    <div class="detail-layout">
      <article class="detail-polaroid native-paper">
        <div class="detail-photo native-window" style="--personality-color:${visual.color};--personality-ink:${visual.ink}" data-tone="${visual.tone}">
          <img class="personality-icon" src="${getPersonalityIcon(type.code)}" alt="" width="512" height="512" decoding="async">
          <strong>${type.code}</strong><span>${escapeHtml(type.name)}</span>
        </div>
        <footer class="detail-caption native-caption"><p class="polaroid-caption">${group.code} · ${group.label}</p></footer>
        <img class="native-frame" src="assets/frames/native-polaroid-frame-v1.webp" alt="" aria-hidden="true" width="1130" height="1392" decoding="async">
      </article>
      <div class="detail-copy">
        <p class="detail-group">${group.label} · ${group.code}</p>
        <h2 class="detail-code" id="detail-title">${type.code} · ${escapeHtml(type.name)}</h2>
        <p class="detail-tagline">${escapeHtml(type.tagline)}</p>
        <div class="detail-sections">
          <section class="detail-section"><h3>性格特征</h3><ul>${type.features.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
          <section class="detail-section"><h3>相对顺手的方式</h3><ul>${type.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
          <section class="detail-section"><h3>值得留意的惯性</h3><ul>${type.blindspots.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
          <section class="detail-section"><h3>更舒适的工作环境</h3><ul>${type.fields.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
          <section class="detail-section detail-section-wide"><h3>关系中的你</h3><p>${escapeHtml(type.relationships)}</p></section>
        </div>
        <p class="detail-disclaimer">这是对常见倾向的温和描述，不代表能力高低，也不是对你的完整定义。任何类型都能在不同环境中学习新的表达方式。</p>
      </div>
    </div>`;
  if (!detailDialog.open) detailDialog.showModal();
  document.body.classList.add("dialog-open");
  if (updateHistory) pushOverlayRoute(`#type/${type.code}`, "detail");
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function setupTypeInteractions() {
  typesGrid.addEventListener("click", event => {
    const card = event.target.closest(".type-card");
    if (card && event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      openPersonality(card.dataset.type, card);
    }
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

  $("[data-close-detail]").addEventListener("click", () => closeRoutedDialog(detailDialog));
  detailDialog.addEventListener("close", () => restoreDialogFocus(detailDialog));
  detailDialog.addEventListener("click", event => {
    if (event.target === detailDialog) closeRoutedDialog(detailDialog);
  });
}

function setupReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(item => {
      item.classList.remove("reveal-pending");
      item.classList.add("is-visible");
    });
    return;
  }
  const revealItem = item => {
    item.classList.remove("reveal-pending");
    item.classList.add("is-visible");
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealItem(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: "0px 0px 180px" });
  items.forEach(item => {
    const bounds = item.getBoundingClientRect();
    const isInInitialViewport = bounds.top < window.innerHeight + 180 && bounds.bottom > -45;
    if (isInInitialViewport) revealItem(item);
    else {
      item.classList.add("reveal-pending");
      observer.observe(item);
    }
  });
}

function setupTypeImageLoading() {
  const images = $$(".type-photo img", typesGrid);
  if (!images.length) return;

  const loadImages = (items, priority = "low") => {
    items.forEach(image => {
      image.fetchPriority = priority;
      image.loading = "eager";
    });
  };
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(connection?.saveData);
  const warmFirstRows = () => loadImages(images.slice(0, 4));

  if (!saveData) {
    if ("requestIdleCallback" in window) window.requestIdleCallback(warmFirstRows, { timeout: 1800 });
    else window.setTimeout(warmFirstRows, 700);
  }

  if (!("IntersectionObserver" in window)) {
    if (!saveData) loadImages(images, "auto");
    return;
  }
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    loadImages(images, "auto");
    observer.disconnect();
  }, { rootMargin: "1000px 0px" });
  observer.observe(typesGrid);
}

function isValidAnswers(value) {
  return Array.isArray(value)
    && value.length === questions.length
    && value.every(answer => answer === null || (Number.isInteger(answer) && answer >= -2 && answer <= 2));
}

function discardProgressStorage() {
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    // No action needed when storage is unavailable.
  }
}

function isFreshProgressTimestamp(value, now = Date.now()) {
  return Number.isFinite(value)
    && value > 0
    && value <= now + (5 * 60 * 1000)
    && now - value <= PROGRESS_TTL_MS;
}

function migrateProgress() {
  try {
    if (localStorage.getItem(PROGRESS_STORAGE_KEY)) return;
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if (!legacy || !isValidAnswers(legacy.answers) || !isFreshProgressTimestamp(legacy.updatedAt)) {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      return;
    }
    const firstEmpty = legacy.answers.findIndex(value => value === null);
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
      version: 2,
      answers: legacy.answers,
      currentQuestion: firstEmpty === -1 ? questions.length - 1 : firstEmpty,
      updatedAt: legacy.updatedAt
    }));
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    // A private browsing context may make storage unavailable.
  }
}

function readProgressRecord() {
  try {
    migrateProgress();
    const saved = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY));
    if (!saved
      || saved.version !== 2
      || !isValidAnswers(saved.answers)
      || !isFreshProgressTimestamp(saved.updatedAt)) {
      discardProgressStorage();
      return null;
    }
    return saved;
  } catch {
    discardProgressStorage();
    return null;
  }
}

function updateHeroProgressEntry() {
  if (!heroStartTest || !heroBrowseTypes || !restartProgress) return;
  const saved = readProgressRecord();
  const answeredCount = saved ? saved.answers.filter(value => value !== null).length : 0;
  const hasProgress = answeredCount > 0;
  heroStartTest.textContent = hasProgress
    ? `继续测试 · ${answeredCount}/${questions.length}`
    : "开始测试";
  heroBrowseTypes.hidden = hasProgress;
  restartProgress.hidden = !hasProgress;
}

function loadProgress() {
  const saved = readProgressRecord();
  if (!saved) {
    answers = Array(questions.length).fill(null);
    currentQuestion = 0;
    return false;
  }
  answers = saved.answers.slice();
  const firstEmpty = answers.findIndex(value => value === null);
  currentQuestion = firstEmpty === -1 ? questions.length - 1 : firstEmpty;
  return true;
}

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
      version: 2,
      answers,
      currentQuestion,
      updatedAt: Date.now()
    }));
  } catch {
    // The test still works when storage is unavailable.
  }
  updateHeroProgressEntry();
}

function clearProgress() {
  discardProgressStorage();
  updateHeroProgressEntry();
}

function getStoredScores(result) {
  return Object.fromEntries(AXIS_ORDER.map(axis => [axis, result.axes.find(item => item.axis === axis)?.score]));
}

function isValidCompletedAt(value) {
  return typeof value === "string"
    && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value)
    && Number.isFinite(Date.parse(value));
}

function saveLastResult(result) {
  const stored = {
    version: RESULT_VERSION,
    quizVersion: QUIZ_VERSION,
    scores: getStoredScores(result),
    code: result.code,
    boundaryState: result.boundaryState,
    completedAt: result.completedAt
  };
  try {
    localStorage.setItem(LAST_RESULT_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    return false;
  }
  updateLastResultEntry();
  return true;
}

function loadLastResult() {
  try {
    const stored = JSON.parse(localStorage.getItem(LAST_RESULT_STORAGE_KEY));
    if (!stored || stored.version !== RESULT_VERSION || stored.quizVersion !== QUIZ_VERSION) return null;
    if (!isValidCompletedAt(stored.completedAt) || !isValidScores(stored.scores)) return null;
    const rebuilt = buildResultFromScores(stored.scores, stored.completedAt);
    if (stored.code !== rebuilt.code || stored.boundaryState !== rebuilt.boundaryState) return null;
    return rebuilt;
  } catch {
    return null;
  }
}

function updateLastResultEntry() {
  if (!lastResultEntry) return;
  lastResultEntry.hidden = !loadLastResult();
}

function clearExperienceStorage() {
  try {
    Object.keys(localStorage)
      .filter(key => EXPERIENCE_STORAGE_PREFIXES.some(prefix => key.startsWith(prefix)))
      .forEach(key => localStorage.removeItem(key));
  } catch {
    // Keep the controls usable if storage is unavailable.
  }
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  currentResult = null;
  shareBlobPromise = null;
  updateLastResultEntry();
  updateHeroProgressEntry();
}

function requestClearLocalData() {
  const confirmed = window.confirm("清除后，当前浏览器中的未完成进度和上次结果都无法恢复。确定清除吗？");
  if (!confirmed) return;
  clearExperienceStorage();
  showToast("未完成进度和上次结果已清除。");
}

function cancelAdvance() {
  clearTimeout(advanceTimer);
  advanceTimer = null;
  advanceToken += 1;
  answerLocked = false;
  if (answerScale) answerScale.disabled = false;
}

function cancelDeveloping() {
  clearTimeout(developingTimer);
  clearTimeout(developingFallbackTimer);
  clearTimeout(developingStartTimer);
  developingTimer = null;
  developingFallbackTimer = null;
  developingStartTimer = null;
  if (developingEndHandler && developingColor) {
    developingColor.removeEventListener("animationend", developingEndHandler);
  }
  developingEndHandler = null;
  developingCommitPending = false;
  developingToken += 1;
}

function setExperienceState(nextState, { focus = true } = {}) {
  clearTimeout(stateFocusTimer);
  experienceState = nextState;
  if (experienceShell) experienceShell.dataset.appState = nextState;
  const stages = {
    question: questionStage,
    developing: developingStage,
    result: resultStage
  };
  Object.entries(stages).forEach(([state, stage]) => {
    if (!stage) return;
    const active = state === nextState;
    stage.hidden = !active;
    stage.inert = !active;
  });
  if (testProgressMeta) testProgressMeta.hidden = nextState !== "question";
  const labels = {
    question: "question-title",
    developing: "developing-copy",
    result: "result-heading"
  };
  if (testDialog && labels[nextState]) testDialog.setAttribute("aria-labelledby", labels[nextState]);
  if (!focus) return;
  const focusTarget = nextState === "question"
    ? questionTitle
    : nextState === "result"
      ? $("#result-heading")
      : developingStage;
  if (focusTarget) {
    if (nextState === "developing") {
      focusTarget.tabIndex = -1;
      focusTarget.setAttribute("aria-labelledby", "developing-copy");
    }
    stateFocusTimer = window.setTimeout(() => {
      if (experienceState !== nextState || !testDialog.open || focusTarget.hidden) return;
      focusTarget.focus({ preventScroll: true });
    }, 30);
  }
}

function triggerShutter() {
  clearTimeout(shutterTimer);
  if (!liveDevelopPreview) return;
  liveDevelopPreview.classList.remove("is-exposing");
  void liveDevelopPreview.offsetWidth;
  liveDevelopPreview.classList.add("is-exposing");
  shutterTimer = window.setTimeout(() => {
    liveDevelopPreview.classList.remove("is-exposing");
  }, 280);
}

function showTest(trigger = null, { updateHistory = true } = {}) {
  rememberDialogFocus(testDialog, trigger);
  const resumed = loadProgress();
  answerReviewOpen = false;
  currentResult = null;
  if (!testDialog.open) testDialog.showModal();
  document.body.classList.add("dialog-open");
  if (updateHistory) pushOverlayRoute("#test", "test");
  setExperienceState("question", { focus: false });
  renderQuestion(false);
  if (resumed && answers.some(value => value !== null)) {
    showToast(`上次没完成，已恢复到第 ${currentQuestion + 1} 题。`);
  }
}

function closeTest({ updateRoute = true, returnToTypes = false } = {}) {
  cancelAdvance();
  cancelDeveloping();
  clearTimeout(stateFocusTimer);
  clearTimeout(shutterTimer);
  if (experienceState === "question" && answers.some(value => value !== null)) saveProgress();
  closeDialog(testDialog);
  if (updateRoute) clearOverlayRoute(returnToTypes ? "#types" : currentRouteReturn);
  if (returnToTypes) focusTypesWall();
}

function setupProgressSteps() {
  if (!progressSteps) return;
  progressSteps.replaceChildren();
}

function isQuestionnaireComplete() {
  return answers.every(value => Number.isInteger(value));
}

function getIncompleteMessage() {
  const remaining = answers.filter(value => !Number.isInteger(value)).length;
  return `还差 ${remaining} 题，完成后才能查看结果。`;
}

function renderAnswerReviewList() {
  if (!answerReviewList) return;
  answerReviewList.innerHTML = questions.map((question, index) => {
    const selected = answerOptions.find(option => option.value === answers[index]);
    const current = index === currentQuestion;
    const state = selected ? `已选择${selected.label}` : "尚未作答";
    const number = String(index + 1).padStart(2, "0");
    const label = selected ? `${number} · ${selected.label}` : `${number} · 未作答`;
    return `<button type="button" data-review-question="${index}" class="${current ? "is-current" : ""}"${current ? ' aria-current="step"' : ""} aria-label="第 ${index + 1} 题，${state}">${label}</button>`;
  }).join("");
}

function syncCompletionState() {
  const complete = isQuestionnaireComplete();
  if (completionActions) completionActions.hidden = !complete;
  if (generateResult) generateResult.disabled = !complete;
  if (!complete) answerReviewOpen = false;
  if (answerReview) answerReview.hidden = !complete || !answerReviewOpen;
  if (complete && answerReviewOpen) renderAnswerReviewList();
}

function syncQuestionProgress() {
  const answeredCount = answers.filter(value => value !== null).length;
  const label = `${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;
  questionCount.textContent = label;
  if (questionCaption) questionCaption.textContent = label;
  progressTrack.setAttribute("aria-valuenow", String(answeredCount));
  progressBar.style.width = `${(answeredCount / questions.length) * 100}%`;
}

function renderQuestion(animate = true) {
  cancelAdvance();
  const question = questions[currentQuestion];
  questionTitle.textContent = question.text;
  previousQuestion.disabled = currentQuestion === 0;
  syncQuestionProgress();
  syncLiveDevelopPreview();
  syncCompletionState();
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
  if (!input || answerLocked || experienceState !== "question") return;
  answers[currentQuestion] = Number(input.value);
  saveProgress();
  syncQuestionProgress();
  syncLiveDevelopPreview();
  syncCompletionState();
  testStatus.textContent = `${answerOptions.find(item => item.value === Number(input.value)).label}，已选择`;
  triggerShutter();

  if (answerReviewOpen) {
    answerLocked = false;
    answerScale.disabled = false;
    renderAnswerReviewList();
    testStatus.textContent = `第 ${currentQuestion + 1} 题已更新。`;
    return;
  }

  if (currentQuestion === questions.length - 1) {
    answerLocked = false;
    answerScale.disabled = false;
    testStatus.textContent = "24 题已完成，可以回看答案或查看显影结果。";
    return;
  }

  answerLocked = true;
  answerScale.disabled = true;
  const token = ++advanceToken;
  advanceTimer = window.setTimeout(() => {
    if (token !== advanceToken || experienceState !== "question" || !testDialog.open) return;
    answerLocked = false;
    answerScale.disabled = false;
    currentQuestion += 1;
    renderQuestion();
  }, QUESTION_ADVANCE_DELAY_MS);
}

function getStrength(score) {
  const absolute = Math.abs(score);
  if (absolute === 0) return "均衡";
  if (absolute <= 2) return "接近中点";
  if (absolute <= 5) return "轻微偏向";
  if (absolute <= 8) return "明显偏向";
  return "鲜明偏向";
}

function isValidScores(value) {
  return value !== null
    && typeof value === "object"
    && AXIS_ORDER.every(axis => Number.isInteger(value[axis]) && value[axis] >= -12 && value[axis] <= 12);
}

function scorePartialAnswers(answerValues) {
  if (!isValidAnswers(answerValues)) return null;
  const scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
  let answered = 0;
  questions.forEach((question, index) => {
    const value = answerValues[index];
    if (value === null) return;
    answered += 1;
    const meta = axisMeta[question.axis];
    scores[question.axis] += value * (question.keyedPole === meta.left ? 1 : -1);
  });
  return {
    scores,
    answered,
    total: questions.length,
    complete: answered === questions.length
  };
}

function scoreAnswers(answerValues = answers) {
  const partial = scorePartialAnswers(answerValues);
  return partial?.complete ? partial.scores : null;
}

function getAbstractTone(scores) {
  const tones = {
    EI: ["#775f55", "#697582"],
    SN: ["#8a785e", "#756985"],
    TF: ["#63727b", "#8b6f74"],
    JP: ["#647066", "#82745f"]
  };
  const strongestAxis = AXIS_ORDER.reduce((best, axis) => (
    Math.abs(scores[axis]) > Math.abs(scores[best]) ? axis : best
  ), AXIS_ORDER[0]);
  if (AXIS_ORDER.every(axis => scores[axis] === 0)) return neutralResultVisual.color;
  return tones[strongestAxis][scores[strongestAxis] >= 0 ? 0 : 1];
}

function buildAbstractDevelopModel(scores, answered, total = questions.length) {
  if (!isValidScores(scores) || !Number.isInteger(answered) || answered < 0 || answered > total) return null;
  const progress = answered / total;
  const magnitude = AXIS_ORDER.reduce((sum, axis) => sum + Math.abs(scores[axis]), 0) / 48;
  const balance = AXIS_ORDER.reduce((sum, axis) => sum + scores[axis], 0) / 48;
  return {
    scores: { ...scores },
    answered,
    total,
    complete: answered === total,
    progress,
    variables: {
      "--develop-progress": progress.toFixed(4),
      "--develop-unrevealed": `${Math.max(0, Math.round(96 * (1 - progress)))}%`,
      "--develop-opacity": Math.min(0.94, 0.05 + (progress * 0.76) + (magnitude * 0.1)).toFixed(3),
      "--develop-inset": `${Math.max(5, Math.round(28 - (progress * 19) - (magnitude * 4)))}%`,
      "--develop-texture": Math.min(0.34, 0.04 + (progress * 0.22) + (magnitude * 0.05)).toFixed(3),
      "--develop-grid": Math.min(0.31, 0.03 + (progress * 0.18) + (Math.abs(scores.SN) / 120)).toFixed(3),
      "--develop-flow": Math.min(0.4, 0.03 + (progress * 0.25) + (Math.abs(scores.JP) / 100)).toFixed(3),
      "--develop-light": Math.min(0.38, 0.02 + (progress * 0.22) + (Math.abs(scores.EI) / 110)).toFixed(3),
      "--develop-tone": getAbstractTone(scores),
      "--develop-angle": `${Math.round(balance * 18)}deg`
    }
  };
}

function getAbstractDevelopModel(answerValues) {
  const partial = scorePartialAnswers(answerValues);
  return partial ? buildAbstractDevelopModel(partial.scores, partial.answered, partial.total) : null;
}

function getVisualBoundaryState(result) {
  return result.boundaryState === "one-tie" ? "tie" : result.boundaryState;
}

function applyAbstractDevelopModel(target, model, boundaryState = "open") {
  if (!target || !model) return;
  target.dataset.answered = String(model.answered);
  AXIS_ORDER.forEach(axis => {
    target.dataset[`score${axis[0]}${axis[1].toLowerCase()}`] = String(model.scores[axis]);
  });
  target.dataset.boundaryState = boundaryState;
  const abstractLayer = target.matches(".abstract-exposure") ? null : $(".abstract-exposure", target);
  if (abstractLayer) abstractLayer.dataset.boundaryState = boundaryState;
  [target, abstractLayer].filter(Boolean).forEach(layer => {
    Object.entries(model.variables).forEach(([name, value]) => layer.style.setProperty(name, value));
  });
}

function syncLiveDevelopIcon(code) {
  const nextIcon = liveDevelopActiveIcon === liveDevelopIconA ? liveDevelopIconB : liveDevelopIconA;
  if (!nextIcon || !liveDevelopActiveIcon) return;
  const source = getPersonalityIcon(code);
  const token = ++liveDevelopIconToken;
  nextIcon.dataset.iconCode = code;
  nextIcon.src = source;
  const swap = () => {
    if (token !== liveDevelopIconToken) return;
    liveDevelopActiveIcon.classList.remove("is-active");
    nextIcon.classList.add("is-active");
    liveDevelopActiveIcon = nextIcon;
  };
  void decodeImage(nextIcon).then(swap);
}

function getResultDisplayCode(result) {
  return result.boundaryState === "typed" || result.boundaryState === "near"
    ? result.code
    : result.boundaryState === "one-tie"
      ? "X"
      : "OPEN";
}

function syncLiveDevelopPreview() {
  const model = getAbstractDevelopModel(answers);
  if (!model || !liveDevelopPreview || !liveDevelopWindow) return;
  const previewCode = getPreviewIconCode(model.scores);
  const previewVisual = model.complete
    ? getResultPresentation(buildResultFromScores(model.scores)).visual
    : {
      color: model.variables["--develop-tone"],
      ink: "#f8f3e9",
      tone: "high"
    };
  const progress = model.progress;
  const magnitude = AXIS_ORDER.reduce((sum, axis) => sum + Math.abs(model.scores[axis]), 0) / 48;
  const iconOpacity = Math.min(0.78, 0.18 + (progress * 0.48) + (magnitude * 0.12));
  const iconGray = Math.max(0, 0.82 - (progress * 0.82));
  const iconSaturation = Math.min(1, 0.28 + (progress * 0.72));
  const iconBlur = Math.max(0, 2.4 - (progress * 2.4));

  applyAbstractDevelopModel(liveDevelopWindow, model, "open");
  liveDevelopWindow.style.setProperty("--personality-color", previewVisual.color);
  liveDevelopWindow.style.setProperty("--personality-ink", previewVisual.ink);
  liveDevelopWindow.style.setProperty("--live-icon-opacity", iconOpacity.toFixed(3));
  liveDevelopWindow.style.setProperty("--live-icon-gray", iconGray.toFixed(3));
  liveDevelopWindow.style.setProperty("--live-icon-saturation", iconSaturation.toFixed(3));
  liveDevelopWindow.style.setProperty("--live-icon-blur", `${iconBlur.toFixed(2)}px`);
  syncLiveDevelopIcon(previewCode);
  if (liveDevelopCount) liveDevelopCount.textContent = `${String(model.answered).padStart(2, "0")} / ${model.total}`;
  liveDevelopPreview.setAttribute("aria-hidden", "true");
}

function expandCandidateCodes(axes) {
  return axes.reduce((codes, item) => {
    const meta = axisMeta[item.axis];
    const letters = item.isTie ? [meta.left, meta.right] : [item.selected];
    return codes.flatMap(code => letters.map(letter => code + letter));
  }, [""]);
}

function buildResultFromScores(rawScores, completedAt = new Date().toISOString()) {
  if (!isValidScores(rawScores)) throw new TypeError("Invalid result scores");
  const scores = Object.fromEntries(AXIS_ORDER.map(axis => [axis, rawScores[axis]]));

  const axes = AXIS_ORDER.map(axis => {
    const meta = axisMeta[axis];
    const score = scores[axis];
    const isTie = score === 0;
    const selected = isTie ? null : score > 0 ? meta.left : meta.right;
    return {
      axis,
      score,
      selected,
      letter: selected || "X",
      isTie,
      strength: getStrength(score),
      nearBoundary: !isTie && Math.abs(score) <= 2,
      markerIndex: Math.max(0, Math.min(8, Math.round(((12 - score) / 24) * 8)))
    };
  });
  const code = axes.map(item => item.letter).join("");
  const tieCount = axes.filter(item => item.isTie).length;
  const nearCount = axes.filter(item => item.nearBoundary).length;
  const boundaryState = tieCount === 4
    ? "open"
    : tieCount >= 2
      ? "mixed"
      : tieCount === 1
        ? "one-tie"
        : nearCount > 0
          ? "near"
          : "typed";
  const profile = tieCount === 0 ? personalities.find(item => item.code === code) || null : null;
  return {
    version: RESULT_VERSION,
    quizVersion: QUIZ_VERSION,
    code,
    exactCode: profile?.code || null,
    profile,
    axes,
    scores,
    tieCount,
    nearCount,
    boundaryState,
    candidateCodes: expandCandidateCodes(axes),
    completedAt: isValidCompletedAt(completedAt) ? completedAt : new Date().toISOString()
  };
}

function calculateResult() {
  const scores = scoreAnswers(answers);
  if (!scores) throw new Error(getIncompleteMessage());
  return buildResultFromScores(scores);
}

function getDateStamp(dateValue = new Date()) {
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
  const parts = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(Number.isFinite(date.getTime()) ? date : new Date());
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}.${values.month}.${values.day}`;
}

function getResultPresentation(result) {
  const nearAxes = result.axes.filter(item => item.nearBoundary).map(item => item.axis);
  if (result.tieCount === 0 && result.profile) {
    const contextual = nearAxes.length
      ? ` ${nearAxes.join("、")} 维度接近中点，先把它看作边界状态，不需要强行归类。`
      : "";
    return {
      name: result.profile.name,
      stateLabel: result.boundaryState === "near" ? "本次人格快照 · 有维度接近中点" : "本次人格快照",
      caption: `${result.code} · ${result.profile.name}`,
      summary: `${result.profile.tagline}${contextual}`,
      reading: `${result.profile.reading}${contextual}`,
      iconCode: result.code,
      visual: getPersonalityVisual(result.code),
      candidates: []
    };
  }

  const candidates = result.tieCount === 1
    ? result.candidateCodes.map(code => personalities.find(item => item.code === code)).filter(Boolean)
    : [];
  if (result.tieCount === 1) {
    return {
      name: "这张快照还没完全显影",
      stateLabel: "本次人格快照 · 一个维度落在中点",
      caption: `${result.code} · 还没完全显影`,
      summary: "本次快照中有一个维度刚好落在中点，不需要强行选择一端；邻近组合仅供比较。",
      reading: "先比较两个邻近组合，保留符合经验的部分，不必勉强认领。",
      iconCode: null,
      visual: neutralResultVisual,
      candidates
    };
  }
  if (result.tieCount === 4) {
    return {
      name: "这张快照保留着多种可能",
      stateLabel: "本次人格快照 · 四组偏好都在中点",
      caption: `${result.code} · 保留多种可能`,
      summary: "四组分数都落在中点，不生成固定四字母组合；这不代表每一题都选择了中间。",
      reading: "保留符合经验的部分，对不符合的部分继续观察，不必勉强认领。",
      iconCode: null,
      visual: neutralResultVisual,
      candidates: []
    };
  }
  return {
    name: "一张多重曝光的快照",
    stateLabel: "本次人格快照 · 多个维度落在中点",
    caption: `${result.code} · 多重曝光`,
    summary: "多个维度没有形成明确偏向，因此不把任何固定 16 型作为主结果。",
    reading: "保留符合经验的部分，对不符合的部分继续观察，不必勉强认领。",
    iconCode: null,
    visual: neutralResultVisual,
    candidates: []
  };
}

function populateResult(result) {
  const presentation = getResultPresentation(result);
  const visual = presentation.visual;
  const visualBoundaryState = getVisualBoundaryState(result);
  const showPerson = visualBoundaryState === "typed" || visualBoundaryState === "near";
  const abstractModel = buildAbstractDevelopModel(result.scores, questions.length);
  const displayCode = getResultDisplayCode(result);

  $("#result-type").textContent = displayCode;
  $("#result-name").textContent = presentation.name;
  $("#result-seal-code").textContent = displayCode;
  const resultIcon = $("#result-icon");
  if (showPerson && presentation.iconCode) {
    resultIcon.src = getPersonalityIcon(presentation.iconCode);
    resultIcon.hidden = false;
  } else {
    resultIcon.removeAttribute("src");
    resultIcon.hidden = true;
  }
  resultState.textContent = presentation.stateLabel;
  $("#result-summary").textContent = presentation.summary;
  $("#result-reading-copy").textContent = presentation.reading;
  resultColumns.hidden = result.tieCount > 0;
  $("#result-strengths").innerHTML = result.profile
    ? result.profile.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")
    : "";
  $("#result-blindspots").innerHTML = result.profile
    ? result.profile.blindspots.map(item => `<li>${escapeHtml(item)}</li>`).join("")
    : "";
  if (resultFields) {
    resultFields.innerHTML = result.profile
      ? result.profile.fields.map(item => `<li>${escapeHtml(item)}</li>`).join("")
      : "";
  }
  resultCandidates.hidden = presentation.candidates.length === 0;
  resultCandidates.innerHTML = presentation.candidates.length
    ? `<p>邻近组合</p><div>${presentation.candidates.map(item => `<span><strong>${item.code}</strong>${escapeHtml(item.name)}</span>`).join("")}</div>`
    : "";
  resultStage.dataset.resultState = result.boundaryState;

  if (resultPhoto) {
    resultPhoto.classList.toggle("is-iconless", !showPerson);
    applyAbstractDevelopModel(resultPhoto, abstractModel, visualBoundaryState);
    resultPhoto.style.setProperty("--personality-color", visual.color);
    resultPhoto.style.setProperty("--personality-ink", visual.ink);
    resultPhoto.dataset.tone = visual.tone;
    resultPhoto.dataset.resultState = result.boundaryState;
  }
  if (resultCaption) resultCaption.textContent = presentation.caption.replace(result.code, displayCode);
  if (resultStampDate) resultStampDate.textContent = getDateStamp(result.completedAt);

  $("#dimension-bars").innerHTML = result.axes.map(item => {
    const meta = axisMeta[item.axis];
    const leftDominant = item.selected === meta.left;
    const rightDominant = item.selected === meta.right;
    const selectedName = leftDominant ? meta.leftName : meta.rightName;
    const preference = item.isTie ? "两端均衡" : `${selectedName} · ${item.strength}`;
    const dots = Array.from({ length: 9 }, (_, index) =>
      `<i class="dimension-dot${index === item.markerIndex ? " is-marker" : ""}"></i>`
    ).join("");
    const contextNote = item.nearBoundary ? "接近中点，继续观察" : item.isTie ? "本次没有偏向任何一端" : item.strength;
    const leftLetter = item.isTie ? "X" : meta.left;
    const rightLetter = item.isTie ? "" : meta.right;
    return `<div class="dimension-row${item.isTie ? " is-tied" : item.nearBoundary ? " is-near" : ""}" aria-label="${meta.leftName}到${meta.rightName}：${preference}，${contextNote}">
      <span class="dimension-letter${item.isTie ? " is-zero-mark" : leftDominant ? " is-dominant" : ""}">${leftLetter}</span>
      <div class="dimension-track-wrap">
        <div class="dimension-labels"><strong>${preference}</strong><span>${contextNote}</span></div>
        <div class="dimension-track dimension-dot-track" aria-hidden="true">${dots}</div>
      </div>
      <span class="dimension-letter${item.isTie ? " is-zero-placeholder" : rightDominant ? " is-dominant" : ""}" aria-hidden="${item.isTie ? "true" : "false"}">${rightLetter}</span>
    </div>`;
  }).join("");
}

function decodeImage(image) {
  if (!image) return Promise.resolve();
  if (image.complete && image.naturalWidth) return Promise.resolve();
  if (typeof image.decode === "function") return image.decode().catch(() => {});
  return new Promise(resolve => {
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });
}

function armDevelopingCompletion(token) {
  const complete = () => finishDeveloping(token);
  if (developingColor) {
    developingEndHandler = event => {
      if (event.target !== developingColor || event.animationName !== "develop-color-scan") return;
      complete();
    };
    developingColor.addEventListener("animationend", developingEndHandler);
  }
  developingTimer = window.setTimeout(complete, DEVELOPING_DURATION_MS);
}

function beginDeveloping() {
  cancelAdvance();
  cancelDeveloping();
  if (!isQuestionnaireComplete()) {
    setExperienceState("question", { focus: false });
    syncCompletionState();
    showToast(getIncompleteMessage());
    return;
  }
  currentResult = calculateResult();
  const presentation = getResultPresentation(currentResult);
  const iconSource = presentation.iconCode ? getPersonalityIcon(presentation.iconCode) : "";
  const visualBoundaryState = getVisualBoundaryState(currentResult);
  const showPerson = (visualBoundaryState === "typed" || visualBoundaryState === "near") && Boolean(iconSource);
  const abstractModel = buildAbstractDevelopModel(currentResult.scores, questions.length);
  const liveModel = getAbstractDevelopModel(answers);
  const liveProgress = liveModel?.progress ?? 1;
  const developingStartOpacity = Math.min(0.78, 0.08 + (liveProgress * 0.62));
  const developingStartGray = Math.max(0, 0.82 - (liveProgress * 0.82));
  const developingStartSaturation = Math.min(1, 0.28 + (liveProgress * 0.72));
  const developingStartBlur = `${Math.max(0, 2.4 - (liveProgress * 2.4)).toFixed(2)}px`;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const token = ++developingToken;

  if (developingPhoto) {
    applyAbstractDevelopModel(developingPhoto, abstractModel, visualBoundaryState);
    developingPhoto.style.setProperty("--personality-color", presentation.visual.color);
    developingPhoto.style.setProperty("--personality-ink", presentation.visual.ink);
    developingPhoto.style.setProperty("--develop-start-opacity", developingStartOpacity.toFixed(3));
    developingPhoto.style.setProperty("--develop-start-gray", developingStartGray.toFixed(3));
    developingPhoto.style.setProperty("--develop-start-saturation", developingStartSaturation.toFixed(3));
    developingPhoto.style.setProperty("--develop-start-blur", developingStartBlur);
    developingPhoto.dataset.tone = presentation.visual.tone;
    developingPhoto.dataset.resultState = currentResult.boundaryState;
  }
  if (developingIcon) {
    if (showPerson) {
      developingIcon.src = iconSource;
      developingIcon.hidden = false;
    } else {
      developingIcon.removeAttribute("src");
      developingIcon.hidden = true;
    }
  }
  populateResult(currentResult);
  developingStage.classList.remove("is-developing");
  if (skipDeveloping) skipDeveloping.hidden = true;

  if (reducedMotion) {
    showResult(currentResult);
    return;
  }

  setExperienceState("developing");
  if (developingCopy) developingCopy.textContent = "照片正在显影";
  testStatus.textContent = "照片正在显影。";
  developingFallbackTimer = window.setTimeout(
    () => finishDeveloping(token),
    DEVELOPING_HARD_LIMIT_MS
  );

  const imagesToDecode = [$("#result-icon")];
  if (showPerson) imagesToDecode.push(developingIcon);
  Promise.race([
    Promise.allSettled(imagesToDecode.map(decodeImage)),
    new Promise(resolve => {
      developingStartTimer = window.setTimeout(resolve, DEVELOPING_ASSET_WAIT_MS);
    })
  ]).then(() => {
    clearTimeout(developingStartTimer);
    developingStartTimer = null;
    if (token !== developingToken || experienceState !== "developing" || !testDialog.open) return;
    void developingStage.offsetWidth;
    developingStage.classList.add("is-developing");
    armDevelopingCompletion(token);
  });
}

function finishDeveloping(token = developingToken) {
  if (token !== developingToken || experienceState !== "developing" || developingCommitPending) return;
  const result = currentResult || calculateResult();
  cancelDeveloping();
  const commitToken = developingToken;
  developingCommitPending = true;
  const commit = () => {
    if (!developingCommitPending || commitToken !== developingToken || experienceState !== "developing" || !testDialog.open) return;
    developingCommitPending = false;
    showResult(result);
  };
  commit();
}

function showResult(result = calculateResult(), { persist = true, clearDraft = true, updateRoute = true } = {}) {
  cancelAdvance();
  cancelDeveloping();
  currentResult = result;
  populateResult(result);

  if (persist) saveLastResult(result);
  if (clearDraft) clearProgress();
  setExperienceState("result");
  resultStage.classList.remove("is-arriving");
  void resultStage.offsetWidth;
  resultStage.classList.add("is-arriving");
  if (experienceShell) experienceShell.scrollTop = 0;
  const presentation = getResultPresentation(result);
  testStatus.textContent = `${presentation.stateLabel}：${getResultDisplayCode(result)}，${presentation.name}`;
  shareBlobPromise = createShareImageBlob(result).catch(() => null);
  if (updateRoute) replaceOverlayRoute(getShareHash(result), "result");
}

function retryTest() {
  const confirmed = window.confirm("再测一次会开始一份新的快照，上次结果仍会保留。确定继续吗？");
  if (!confirmed) return;
  cancelAdvance();
  cancelDeveloping();
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  currentResult = null;
  shareBlobPromise = null;
  answerReviewOpen = false;
  clearProgress();
  setExperienceState("question", { focus: false });
  renderQuestion(false);
  replaceOverlayRoute("#test", "test");
  showToast("新的测试已开始，上次结果仍会保留。");
}

function restartSavedProgress(trigger = null) {
  const saved = readProgressRecord();
  const answeredCount = saved ? saved.answers.filter(value => value !== null).length : 0;
  if (!answeredCount) {
    updateHeroProgressEntry();
    showTest(trigger);
    return;
  }
  const confirmed = window.confirm("清除未完成进度并从第 1 题重新开始吗？上次结果仍会保留。");
  if (!confirmed) return;
  cancelAdvance();
  cancelDeveloping();
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  currentResult = null;
  answerReviewOpen = false;
  shareBlobPromise = null;
  clearProgress();
  showTest(trigger);
  showToast("未完成进度已清除，已从第 1 题重新开始。");
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

function getShareHash(result) {
  const scores = AXIS_ORDER.map(axis => result.axes.find(item => item.axis === axis).score).join(",");
  const date = result.completedAt.slice(0, 10);
  return `#result/v${RESULT_VERSION}/${scores}/${result.code}/${result.boundaryState}/${date}`;
}

function parseShareHash(hash = window.location.hash) {
  const match = /^#result\/v1\/(-?\d+,-?\d+,-?\d+,-?\d+)\/([EIX][SNX][TFX][JPX])\/(typed|near|one-tie|mixed|open)\/(\d{4}-\d{2}-\d{2})$/.exec(hash);
  if (!match) return null;
  const scoreValues = match[1].split(",").map(Number);
  const scores = Object.fromEntries(AXIS_ORDER.map((axis, index) => [axis, scoreValues[index]]));
  const completedAt = `${match[4]}T00:00:00.000Z`;
  if (!isValidScores(scores) || !isValidCompletedAt(completedAt) || getDateIso(completedAt) !== match[4]) return null;
  try {
    const result = buildResultFromScores(scores, completedAt);
    if (result.code !== match[2] || result.boundaryState !== match[3]) return null;
    return result;
  } catch {
    return null;
  }
}

function getDateIso(value) {
  const date = new Date(value);
  return Number.isFinite(date.getTime()) ? date.toISOString().slice(0, 10) : "";
}

function getShareUrl(result) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = getShareHash(result).slice(1);
  return url.protocol === "file:" ? "" : url.href;
}

function loadCanvasImage(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const characters = Array.from(String(text));
  let line = "";
  let lineIndex = 0;
  characters.forEach(character => {
    if (lineIndex >= maxLines) return;
    const candidate = line + character;
    if (context.measureText(candidate).width > maxWidth && line) {
      context.fillText(line, x, y + lineIndex * lineHeight);
      line = character;
      lineIndex += 1;
    } else {
      line = candidate;
    }
  });
  if (line && lineIndex < maxLines) context.fillText(line, x, y + lineIndex * lineHeight);
  return y + (Math.min(lineIndex + 1, maxLines) * lineHeight);
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("无法生成分享图片")), "image/png");
  });
}

async function createShareImageBlob(result) {
  if (document.fonts?.ready) {
    try {
      await Promise.race([
        document.fonts.ready,
        new Promise(resolve => window.setTimeout(resolve, 800))
      ]);
    } catch {}
  }
  const presentation = getResultPresentation(result);
  const icon = presentation.iconCode ? await loadCanvasImage(getPersonalityIcon(presentation.iconCode)) : null;
  const visual = presentation.visual;
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("当前浏览器不支持分享图片");

  context.fillStyle = "#d8d0c1";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#fffdf7";
  context.fillRect(72, 54, 936, 1234);
  const photoX = 132;
  const photoY = 114;
  const photoSize = 816;
  const abstractModel = buildAbstractDevelopModel(result.scores, questions.length);
  const tone = abstractModel?.variables["--develop-tone"] || visual.color;

  context.save();
  context.beginPath();
  context.rect(photoX, photoY, photoSize, photoSize);
  context.clip();
  context.fillStyle = visual.color;
  context.fillRect(photoX, photoY, photoSize, photoSize);

  const exposure = context.createRadialGradient(
    photoX + (photoSize * 0.72),
    photoY + (photoSize * 0.28),
    photoSize * 0.04,
    photoX + (photoSize * 0.58),
    photoY + (photoSize * 0.46),
    photoSize * 0.7
  );
  exposure.addColorStop(0, "rgba(255, 253, 247, 0.54)");
  exposure.addColorStop(0.46, "rgba(255, 253, 247, 0.08)");
  exposure.addColorStop(1, "rgba(34, 33, 30, 0.18)");
  context.fillStyle = exposure;
  context.fillRect(photoX, photoY, photoSize, photoSize);

  context.save();
  context.globalAlpha = 0.18 + (Math.abs(result.scores.TF) / 160);
  context.fillStyle = tone;
  context.beginPath();
  context.ellipse(
    photoX + photoSize * (0.34 + (result.scores.EI / 120)),
    photoY + photoSize * (0.48 - (result.scores.SN / 160)),
    photoSize * (0.2 + (Math.abs(result.scores.EI) / 120)),
    photoSize * (0.28 + (Math.abs(result.scores.TF) / 140)),
    result.scores.JP * (Math.PI / 180),
    0,
    Math.PI * 2
  );
  context.fill();
  context.restore();

  context.save();
  context.globalAlpha = 0.08 + (Math.abs(result.scores.SN) / 180);
  context.strokeStyle = visual.ink;
  context.lineWidth = 2;
  const gridStep = 42 + Math.round((12 - Math.abs(result.scores.JP)) * 1.5);
  for (let offset = -photoSize; offset <= photoSize * 2; offset += gridStep) {
    context.beginPath();
    context.moveTo(photoX + offset, photoY);
    context.lineTo(photoX + offset + (result.scores.JP * 6), photoY + photoSize);
    context.stroke();
  }
  context.restore();

  context.save();
  context.globalAlpha = 0.1 + (Math.abs(result.scores.JP) / 110);
  context.strokeStyle = tone;
  context.lineWidth = 18;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(photoX - 20, photoY + photoSize * 0.72);
  context.bezierCurveTo(
    photoX + photoSize * 0.24,
    photoY + photoSize * (0.48 - (result.scores.JP / 90)),
    photoX + photoSize * 0.68,
    photoY + photoSize * (0.84 + (result.scores.EI / 120)),
    photoX + photoSize + 20,
    photoY + photoSize * 0.38
  );
  context.stroke();
  context.restore();

  let noiseSeed = AXIS_ORDER.reduce((seed, axis, index) => seed + ((result.scores[axis] + 12) * (index + 11)), 97);
  context.save();
  context.fillStyle = visual.ink;
  context.globalAlpha = 0.08;
  for (let index = 0; index < 180; index += 1) {
    noiseSeed = (noiseSeed * 16807) % 2147483647;
    const px = photoX + ((noiseSeed % 10000) / 10000) * photoSize;
    noiseSeed = (noiseSeed * 16807) % 2147483647;
    const py = photoY + ((noiseSeed % 10000) / 10000) * photoSize;
    context.fillRect(px, py, 1.2, 1.2);
  }
  context.restore();
  context.restore();

  if (icon) {
    const size = 450;
    context.drawImage(icon, 468, 270, size, size);
  }

  context.fillStyle = visual.ink;
  context.textAlign = icon ? "left" : "center";
  context.font = '700 96px "Songti SC", "STSong", serif';
  context.fillText(getResultDisplayCode(result), icon ? 184 : 540, 790);
  context.font = '700 46px "Songti SC", "STSong", serif';
  if (icon) {
    drawWrappedText(context, presentation.name, 184, 858, 700, 56, 2);
  } else {
    context.fillText(presentation.name, 540, 858, 760);
  }

  context.fillStyle = "#22211e";
  context.textAlign = "left";
  context.font = '400 30px "Noto Sans SC", sans-serif';
  drawWrappedText(context, presentation.summary, 132, 1008, 816, 48, 2);

  context.strokeStyle = "#8b867e";
  context.fillStyle = "#22211e";
  context.lineWidth = 3;
  context.font = '700 22px "Noto Sans SC", sans-serif';
  result.axes.forEach((axis, index) => {
    const meta = axisMeta[axis.axis];
    const x = 138 + index * 204;
    const y = 1138;
    const lineStart = x + 34;
    const lineEnd = x + 154;
    const marker = lineStart + (axis.markerIndex / 8) * (lineEnd - lineStart);
    if (axis.isTie) {
      context.save();
      context.globalAlpha = 0.62;
      context.textAlign = "center";
      context.fillText("X", x + 94, y + 7);
      context.restore();
    } else {
      context.textAlign = "left";
      context.fillText(meta.left, x, y + 7);
      context.textAlign = "right";
      context.fillText(meta.right, x + 188, y + 7);
    }
    context.beginPath();
    context.moveTo(lineStart, y);
    context.lineTo(lineEnd, y);
    context.stroke();
    context.beginPath();
    context.arc(marker, y, 8, 0, Math.PI * 2);
    context.fill();
  });

  context.fillStyle = "#9c3a2e";
  context.textAlign = "left";
  context.font = '700 26px "Noto Sans SC", sans-serif';
  context.fillText("向内生长 · 人格拍立得", 132, 1190);
  context.fillStyle = "#6a665f";
  context.textAlign = "right";
  context.font = '400 24px "Noto Sans SC", sans-serif';
  context.fillText(getDateStamp(result.completedAt), 948, 1190);
  context.fillText("tunqigua.github.io/inner-compass-mbti/", 948, 1240);
  return canvasToBlob(canvas);
}

function releaseShareObjectUrl() {
  if (!shareObjectUrl) return;
  URL.revokeObjectURL(shareObjectUrl);
  shareObjectUrl = "";
}

function openSharePreview(blob, result) {
  releaseShareObjectUrl();
  rememberDialogFocus(shareDialog, $("#share-result"));
  if (blob) {
    shareObjectUrl = URL.createObjectURL(blob);
    sharePreview.src = shareObjectUrl;
    sharePreview.hidden = false;
    downloadResult.href = shareObjectUrl;
    downloadResult.download = `向内生长-${result.code}-人格拍立得.png`;
    downloadResult.hidden = false;
  } else {
    sharePreview.removeAttribute("src");
    sharePreview.hidden = true;
    downloadResult.hidden = true;
  }
  if (!shareDialog.open) shareDialog.showModal();
  document.body.classList.add("dialog-open");
  if (!routeSyncing && history.state?.icOverlay !== "share") {
    history.pushState({ icOverlay: "share", returnHash: window.location.hash }, "", window.location.href);
  }
}

async function shareResult() {
  const result = currentResult || calculateResult();
  const presentation = getResultPresentation(result);
  const sharableUrl = getShareUrl(result);
  const text = `我的本次人格快照是 ${getResultDisplayCode(result)} · ${presentation.name}。${presentation.summary}`;
  const blob = await (shareBlobPromise || createShareImageBlob(result).catch(() => null));
  shareBlobPromise = Promise.resolve(blob);

  if (blob && navigator.share && typeof File === "function") {
    const file = new File([blob], `向内生长-${result.code}-人格拍立得.png`, { type: "image/png" });
    const filePayload = { files: [file], title: "向内生长｜我的人格快照", text };
    if (sharableUrl) filePayload.url = sharableUrl;
    try {
      if (!navigator.canShare || navigator.canShare({ files: [file] })) {
        await navigator.share(filePayload);
        showToast("系统分享面板已打开。");
        return;
      }
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  openSharePreview(blob, result);
}

function rememberDialogFocus(dialog, trigger = null) {
  const candidate = trigger instanceof Event ? trigger.currentTarget : trigger || document.activeElement;
  if (candidate instanceof HTMLElement && !dialogReturnFocus.has(dialog)) {
    dialogReturnFocus.set(dialog, candidate);
  }
}

function restoreDialogFocus(dialog) {
  if (![detailDialog, guideDialog, testDialog, shareDialog].some(item => item.open)) {
    document.body.classList.remove("dialog-open");
  }
  const target = dialogReturnFocus.get(dialog);
  dialogReturnFocus.delete(dialog);
  if (!(target instanceof HTMLElement) || !document.contains(target)) return;
  const ownerDialog = target.closest("dialog");
  if (ownerDialog && !ownerDialog.open) return;
  target.focus({ preventScroll: true });
}

function isOverlayHash(hash = window.location.hash) {
  return hash === "#test"
    || hash.startsWith("#type/")
    || hash.startsWith("#article/")
    || hash.startsWith("#result/");
}

function pushOverlayRoute(hash, kind) {
  if (routeSyncing || window.location.hash === hash) return;
  const currentHash = window.location.hash || "#home";
  if (!isOverlayHash(currentHash)) currentRouteReturn = currentHash;
  history.pushState({ icOverlay: kind, returnHash: currentRouteReturn }, "", hash);
}

function replaceOverlayRoute(hash, kind) {
  if (routeSyncing) return;
  history.replaceState({ icOverlay: kind, returnHash: currentRouteReturn }, "", hash);
}

function clearOverlayRoute(targetHash = currentRouteReturn || "#home") {
  const safeTarget = isOverlayHash(targetHash) ? "#home" : targetHash || "#home";
  history.replaceState({ icBase: true }, "", safeTarget);
}

function closeRoutedDialog(dialog) {
  closeDialog(dialog);
  clearOverlayRoute();
}

function focusTypesWall() {
  const title = $("#types-title");
  const section = $("#types");
  window.requestAnimationFrame(() => {
    section?.scrollIntoView({ block: "start" });
    title?.focus({ preventScroll: true });
  });
}

function openResultView(result, trigger = null, { updateHistory = true, source = "stored" } = {}) {
  rememberDialogFocus(testDialog, trigger);
  if (!testDialog.open) testDialog.showModal();
  document.body.classList.add("dialog-open");
  showResult(result, { persist: false, clearDraft: false, updateRoute: false });
  if (updateHistory) pushOverlayRoute(getShareHash(result), "result");
  if (source === "stored") showToast("已打开上次结果。");
  if (source === "shared") showToast("朋友分享的人格快照已打开。");
}

function openLastResult(trigger = null) {
  const result = loadLastResult();
  if (!result) {
    updateLastResultEntry();
    showToast("暂时没有上次结果。");
    return;
  }
  openResultView(result, trigger, { source: "stored" });
}

function requestTestExit({ updateRoute = true, returnToTypes = false } = {}) {
  if (experienceState === "question" && answers.some(value => value !== null)) {
    const confirmed = window.confirm("照片还没完成，确定暂时退出吗？进度会保存在当前浏览器，下次可以继续。");
    if (!confirmed) return false;
  }
  closeTest({ updateRoute, returnToTypes });
  return true;
}

function setupTest() {
  setupProgressSteps();
  $$('[data-start-test]').forEach(button => button.addEventListener("click", event => showTest(event.currentTarget)));
  $$('[data-close-test]').forEach(button => button.addEventListener("click", () => {
    if (experienceState === "result") closeTest({ returnToTypes: true });
    else requestTestExit();
  }));
  answerScale.addEventListener("change", handleAnswer);
  previousQuestion.addEventListener("click", () => {
    cancelAdvance();
    if (currentQuestion > 0) {
      currentQuestion -= 1;
      saveProgress();
      renderQuestion();
    }
  });
  reviewAnswers?.addEventListener("click", () => {
    if (!isQuestionnaireComplete()) return;
    answerReviewOpen = true;
    syncCompletionState();
    const currentButton = $(`[data-review-question="${currentQuestion}"]`, answerReviewList);
    currentButton?.focus({ preventScroll: true });
  });
  answerReviewList?.addEventListener("click", event => {
    const button = event.target.closest("[data-review-question]");
    if (!button) return;
    const index = Number(button.dataset.reviewQuestion);
    if (!Number.isInteger(index) || index < 0 || index >= questions.length) return;
    cancelAdvance();
    currentQuestion = index;
    saveProgress();
    renderQuestion();
  });
  generateResult?.addEventListener("click", () => {
    if (!isQuestionnaireComplete()) {
      showToast(getIncompleteMessage());
      return;
    }
    beginDeveloping();
  });
  restartProgress?.addEventListener("click", event => restartSavedProgress(event.currentTarget));
  $("#retry-test").addEventListener("click", retryTest);
  $("#share-result").addEventListener("click", shareResult);
  testDialog.addEventListener("close", () => restoreDialogFocus(testDialog));
  lastResultEntry?.addEventListener("click", event => openLastResult(event.currentTarget));
  clearLocalDataButton?.addEventListener("click", requestClearLocalData);

  document.addEventListener("keydown", event => {
    if (!testDialog.open || experienceState !== "question" || answerLocked) return;
    if (!/^[1-5]$/.test(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
    const options = $$('input[name="answer"]', answerScale);
    const input = options[Number(event.key) - 1];
    if (!input) return;
    event.preventDefault();
    input.click();
  });
}

function setupShare() {
  const requestCloseShare = () => {
    if (history.state?.icOverlay === "share") history.back();
    else closeDialog(shareDialog);
  };
  $("[data-close-share]").addEventListener("click", requestCloseShare);
  copyResultLink.addEventListener("click", async () => {
    const result = currentResult || calculateResult();
    const url = getShareUrl(result);
    const text = url || `${result.code} · ${getResultPresentation(result).name}`;
    let copied = false;
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        copied = true;
      } catch {
        copied = false;
      }
    }
    if (!copied) copied = copyTextFallback(text);
    showToast(copied ? "链接复制好了。" : "暂时无法复制链接，请长按保存图片。");
  });
  shareDialog.addEventListener("close", () => {
    releaseShareObjectUrl();
    restoreDialogFocus(shareDialog);
  });
  shareDialog.addEventListener("click", event => {
    if (event.target === shareDialog) requestCloseShare();
  });
}

function openGuide(key, trigger = null, { updateHistory = true } = {}) {
  const article = guideArticles[key];
  if (!article) return;
  rememberDialogFocus(guideDialog, trigger);
  guideContent.innerHTML = `
    <p class="article-kicker">${escapeHtml(article.kicker)}</p>
    <h2 id="guide-dialog-title">${escapeHtml(article.title)}</h2>
    <p class="article-lead">${escapeHtml(article.lead)}</p>
    ${article.sections.map(([title, copy]) => `<h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p>`).join("")}
    <div class="reflection"><strong>留给自己的一问</strong><p>${escapeHtml(article.reflection)}</p></div>`;
  guideDialog.showModal();
  document.body.classList.add("dialog-open");
  if (updateHistory) pushOverlayRoute(`#article/${key}`, "article");
}

function setupGuides() {
  $$('[data-guide]').forEach(button => button.addEventListener("click", () => openGuide(button.dataset.guide, button)));
  $("[data-close-guide]").addEventListener("click", () => closeRoutedDialog(guideDialog));
  guideDialog.addEventListener("close", () => restoreDialogFocus(guideDialog));
  guideDialog.addEventListener("click", event => {
    if (event.target === guideDialog) closeRoutedDialog(guideDialog);
  });
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
      closeRoutedDialog(dialog);
    });
  });
  shareDialog.addEventListener("cancel", event => {
    event.preventDefault();
    if (history.state?.icOverlay === "share") history.back();
    else closeDialog(shareDialog);
  });
  testDialog.addEventListener("cancel", event => {
    event.preventDefault();
    if (experienceState === "result") closeTest({ returnToTypes: true });
    else requestTestExit();
  });
}

function parseOverlayRoute(hash = window.location.hash) {
  if (hash === "#test") return { kind: "test" };
  const typeMatch = /^#type\/([A-Za-z]{4})$/.exec(hash);
  if (typeMatch) {
    const code = typeMatch[1].toUpperCase();
    return personalities.some(item => item.code === code) ? { kind: "detail", code } : { kind: "invalid" };
  }
  const articleMatch = /^#article\/([a-z-]+)$/.exec(hash);
  if (articleMatch) return guideArticles[articleMatch[1]] ? { kind: "article", key: articleMatch[1] } : { kind: "invalid" };
  if (hash.startsWith("#result/")) {
    const result = parseShareHash(hash);
    return result ? { kind: "result", result } : { kind: "invalid-result" };
  }
  return null;
}

function closeDialogsExcept(except = null) {
  [detailDialog, guideDialog, testDialog].forEach(dialog => {
    if (dialog !== except && dialog.open) {
      if (dialog === testDialog) closeTest({ updateRoute: false });
      else closeDialog(dialog);
    }
  });
}

function handleRouteChange({ fromPop = false } = {}) {
  const route = parseOverlayRoute();
  if (history.state?.returnHash && !isOverlayHash(history.state.returnHash)) {
    currentRouteReturn = history.state.returnHash;
  }

  if (shareDialog.open && history.state?.icOverlay !== "share") closeDialog(shareDialog);
  if (history.state?.icOverlay === "share") return;

  if (!route) {
    if (testDialog.open && experienceState === "question" && answers.some(value => value !== null) && fromPop) {
      const confirmed = window.confirm("照片还没完成，确定暂时退出吗？进度会保存在当前浏览器，下次可以继续。");
      if (!confirmed) {
        history.pushState({ icOverlay: "test", returnHash: window.location.hash || "#home" }, "", "#test");
        return;
      }
    }
    routeSyncing = true;
    closeDialogsExcept();
    routeSyncing = false;
    return;
  }

  if (route.kind === "invalid" || route.kind === "invalid-result") {
    routeSyncing = true;
    closeDialogsExcept();
    clearOverlayRoute("#home");
    routeSyncing = false;
    showToast(route.kind === "invalid-result" ? "这张快照的链接失效了，已回到首页。" : "这个链接无效，已回到首页。");
    return;
  }

  routeSyncing = true;
  if (route.kind === "detail") {
    closeDialogsExcept(detailDialog);
    if (!detailDialog.open || $("#detail-title")?.textContent?.slice(0, 4) !== route.code) {
      if (detailDialog.open) closeDialog(detailDialog);
      openPersonality(route.code, null, { updateHistory: false });
    }
  } else if (route.kind === "article") {
    closeDialogsExcept(guideDialog);
    if (!guideDialog.open || $("#guide-dialog-title")?.textContent !== guideArticles[route.key].title) {
      if (guideDialog.open) closeDialog(guideDialog);
      openGuide(route.key, null, { updateHistory: false });
    }
  } else if (route.kind === "test") {
    closeDialogsExcept(testDialog);
    if (!testDialog.open) showTest(null, { updateHistory: false });
  } else if (route.kind === "result") {
    closeDialogsExcept(testDialog);
    openResultView(route.result, null, { updateHistory: false, source: "shared" });
  }
  routeSyncing = false;
}

function setupHistory() {
  const url = new URL(window.location.href);
  const legacyCode = url.searchParams.get("result")?.toUpperCase();
  if (url.searchParams.has("result")) {
    url.searchParams.delete("result");
    const cleanSearch = url.searchParams.toString();
    const base = `${url.pathname}${cleanSearch ? `?${cleanSearch}` : ""}#home`;
    history.replaceState({ icBase: true }, "", base);
    if (personalities.some(item => item.code === legacyCode)) {
      currentRouteReturn = "#home";
      history.pushState({ icOverlay: "detail", returnHash: "#home" }, "", `#type/${legacyCode}`);
    } else if (legacyCode) {
      showToast("这张快照的链接失效了，已回到首页。");
    }
  } else if (isOverlayHash(window.location.hash) && !history.state?.icOverlay) {
    const originalHash = window.location.hash;
    history.replaceState({ icBase: true }, "", `${url.pathname}${url.search}#home`);
    const route = parseOverlayRoute(originalHash);
    const kind = route?.kind === "detail" ? "detail" : route?.kind === "article" ? "article" : route?.kind === "result" ? "result" : "test";
    history.pushState({ icOverlay: kind, returnHash: "#home" }, "", originalHash);
  } else if (!history.state) {
    history.replaceState({ icBase: true }, "", window.location.href);
  }
  window.addEventListener("popstate", () => handleRouteChange({ fromPop: true }));
  handleRouteChange();
}

function init() {
  migrateProgress();
  updateHeroProgressEntry();
  renderTypes();
  setupTypeInteractions();
  setupTest();
  setupShare();
  setupGuides();
  setupPageChrome();
  setupReveal();
  setupTypeImageLoading();
  updateLastResultEntry();
  setupHistory();
}

init();
