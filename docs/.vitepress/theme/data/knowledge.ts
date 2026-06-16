export type KnowledgeCategory =
  | 'AI 基础认知'
  | '主流大模型体系'
  | 'AIGC 应用细分'
  | 'AI 配套技术'
  | '前端 & 网页搭建'
  | '数据 & 存储'
  | 'AI 行业 & 场景应用'
  | '进阶常识'

export type SourceLevel = '官方已核' | '双源可追溯' | '待人工复核'

export type KnowledgeCard = {
  id: string
  title: string
  category: KnowledgeCategory
  summary: string
  plain: string
  officialPoint: string
  beginnerTakeaway: string
  caution: string
  useCases: string[]
  tags: string[]
  version: string
  updated: string
  sourceLevel: SourceLevel
  sourceName: string
  sourceUrl: string
  image: string
}

export const categories: Array<'全部' | KnowledgeCategory> = [
  '全部',
  'AI 基础认知',
  '主流大模型体系',
  'AIGC 应用细分',
  'AI 配套技术',
  '前端 & 网页搭建',
  '数据 & 存储',
  'AI 行业 & 场景应用',
  '进阶常识'
]

export const sourceLevels: Array<'全部' | SourceLevel> = [
  '全部',
  '官方已核',
  '双源可追溯',
  '待人工复核'
]


export type LearningLevel = '初学必看' | '进阶必看'

export type LearningMeta = {
  level: LearningLevel
  learningGoal: string
  prerequisites: string[]
  related: string[]
  next: string[]
}

export type KnowledgeQuiz = {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const learningLevels: Array<'全部' | LearningLevel> = ['全部', '初学必看', '进阶必看']

const defaultLevelByCategory: Record<KnowledgeCategory, LearningLevel> = {
  'AI 基础认知': '初学必看',
  '主流大模型体系': '初学必看',
  'AIGC 应用细分': '初学必看',
  'AI 配套技术': '初学必看',
  '前端 & 网页搭建': '初学必看',
  '数据 & 存储': '进阶必看',
  'AI 行业 & 场景应用': '进阶必看',
  '进阶常识': '进阶必看'
}

export const learningMeta: Record<string, LearningMeta> = {
  'ai-basic-map': {
    level: '初学必看',
    learningGoal: '区分人工智能、机器学习、深度学习和大模型的包含关系。',
    prerequisites: [],
    related: ['生成式 AI / AIGC', 'Token', 'ChatGPT'],
    next: ['大模型', '提示词']
  },
  'generative-ai-aigc': {
    level: '初学必看',
    learningGoal: '理解生成式 AI 能生成文本、图片、视频和代码，但仍需要复核。',
    prerequisites: ['AI 基础关系图'],
    related: ['AI 图像生成', 'Sora / 视频生成', 'ChatGPT'],
    next: ['提示词', 'AI 幻觉']
  },
  chatgpt: {
    level: '初学必看',
    learningGoal: '知道 ChatGPT 是面向普通用户的 AI 对话产品，适合问答、写作、总结和学习。',
    prerequisites: ['生成式 AI / AIGC'],
    related: ['提示词', 'Token', '上下文窗口'],
    next: ['Codex', 'Agent 智能体']
  },
  html: {
    level: '初学必看',
    learningGoal: '知道 HTML 负责网页结构，CSS 负责样式，JavaScript 负责交互。',
    prerequisites: [],
    related: ['Markdown', 'VitePress', '前端框架地图'],
    next: ['GitHub Pages', 'Vercel']
  },
  markdown: {
    level: '初学必看',
    learningGoal: '掌握用纯文本写标题、列表、链接、图片和代码块。',
    prerequisites: [],
    related: ['HTML', 'VitePress', 'AGENTS.md 与 CLAUDE.md'],
    next: ['GitHub', '个人主页开发流程']
  },
  git: {
    level: '初学必看',
    learningGoal: '理解 Git 是本地版本控制工具，用来记录和回退改动。',
    prerequisites: [],
    related: ['Git 核心流程', 'GitHub'],
    next: ['GitHub 协作流程']
  },
  github: {
    level: '初学必看',
    learningGoal: '理解 GitHub 是远端代码仓库和协作平台，不等同于 Git 本身。',
    prerequisites: ['Git'],
    related: ['Git 核心流程', 'GitHub Pages', 'GitHub 协作流程'],
    next: ['Pull Request', 'GitHub Pages']
  },
  'git-core-flow': {
    level: '初学必看',
    learningGoal: '理解 init、commit、branch、HEAD、.gitignore 和工作区/暂存区/仓库的作用。',
    prerequisites: ['Git'],
    related: ['GitHub', 'Git 后悔药与同步', 'GitHub 协作流程'],
    next: ['GitHub Pages', 'Pull Request']
  },
  'github-pages': {
    level: '初学必看',
    learningGoal: '知道 GitHub Pages 能把静态网页发布成公网链接。',
    prerequisites: ['GitHub', 'HTML', 'Markdown'],
    related: ['VitePress', 'GitHub Actions', 'Vercel'],
    next: ['部署与 CI/CD']
  },
  vercel: {
    level: '初学必看',
    learningGoal: '知道 Vercel 是常见前端部署平台，适合静态站和前端框架项目。',
    prerequisites: ['HTML', 'GitHub'],
    related: ['GitHub Pages', 'VitePress', '前端框架地图'],
    next: ['环境变量', 'CI/CD']
  },
  'codex-agent': {
    level: '初学必看',
    learningGoal: '知道 Codex 是能读写项目文件、运行命令并推进开发任务的 AI 编程代理。',
    prerequisites: ['Git', 'Markdown'],
    related: ['ChatGPT', 'Claude Code', 'Agent 智能体'],
    next: ['Skills', 'AGENTS.md 与 CLAUDE.md']
  },
  'git-undo-sync': {
    level: '进阶必看',
    learningGoal: '区分 discard、reset、revert、fetch、pull、merge 的使用边界。',
    prerequisites: ['Git 核心流程', 'GitHub'],
    related: ['GitHub 协作流程', 'worktree', 'rebase'],
    next: ['多人协作安全规则']
  },
  'github-collaboration': {
    level: '进阶必看',
    learningGoal: '理解 fork、branch、Pull Request、review、issues 和开源贡献流程。',
    prerequisites: ['GitHub', 'Git 核心流程'],
    related: ['Git 后悔药与同步', 'GitHub Pages', 'Codex'],
    next: ['Agent 辅助开发']
  },
  agent: {
    level: '进阶必看',
    learningGoal: '理解 Agent 不是只聊天，而是能规划、调用工具并持续推进任务。',
    prerequisites: ['ChatGPT', '函数调用'],
    related: ['MCP', 'Skills', 'n8n'],
    next: ['权限与安全边界']
  },
  rag: {
    level: '进阶必看',
    learningGoal: '理解知识库问答为什么要先检索资料再生成答案。',
    prerequisites: ['Embedding', '上下文窗口'],
    related: ['FastGPT', 'Dify', '来源校验'],
    next: ['检索质量评估']
  },
  coze: {
    level: '进阶必看',
    learningGoal: '理解扣子 / Coze 属于低代码 AI Bot 与 Agent 搭建平台。',
    prerequisites: ['ChatGPT', 'Agent 智能体'],
    related: ['Dify', 'FastGPT', 'n8n'],
    next: ['工作流编排', '知识库问答']
  },
  dify: {
    level: '进阶必看',
    learningGoal: '理解 Dify 可把模型、提示词、知识库和工作流组合成 AI 应用。',
    prerequisites: ['提示词', 'RAG 检索增强生成'],
    related: ['FastGPT', 'Coze / 扣子', 'n8n'],
    next: ['企业知识库', '工作流自动化']
  },
  fastgpt: {
    level: '进阶必看',
    learningGoal: '理解 FastGPT 更偏知识库问答、RAG 和可视化 AI 应用编排。',
    prerequisites: ['Embedding', 'RAG 检索增强生成'],
    related: ['Dify', '向量数据库', '知识库框架'],
    next: ['检索质量评估']
  },
  n8n: {
    level: '进阶必看',
    learningGoal: '理解 n8n 是工作流自动化工具，可连接应用、API 和 AI 节点。',
    prerequisites: ['API', '函数调用', 'Agent 智能体'],
    related: ['Dify', 'Coze / 扣子', 'Hook'],
    next: ['自动化权限与审计']
  },
  'ai-tool-selection-map': {
    level: '初学必看',
    learningGoal: '按任务类型选择 AI 工具，而不是只追一个最火产品。',
    prerequisites: ['生成式 AI / AIGC', 'ChatGPT'],
    related: ['聊天写作类 AI 工具', '图片生成类 AI 工具', 'AI 搜索工具'],
    next: ['Agent 智能体', 'Dify', 'n8n']
  },
  'ai-chat-writing-tools': {
    level: '初学必看',
    learningGoal: '区分聊天写作工具适合中文日常写作、英文材料、代码辅助和长文档处理。',
    prerequisites: ['ChatGPT', '提示词'],
    related: ['Claude Opus 4.6', '结构化输出', '上下文窗口'],
    next: ['AI 工具选择总览', 'AI 搜索工具']
  },
  'ai-image-tool-selection': {
    level: '初学必看',
    learningGoal: '理解文生图工具的选择要看画质、中文提示、风格一致性和版权复核。',
    prerequisites: ['AI 图像生成', '提示词'],
    related: ['Image2 / 新一代图像模型', '提示词', '评估指标'],
    next: ['AI 视频生成工具', 'AI 工具选择总览']
  },
  'ai-video-tool-selection': {
    level: '进阶必看',
    learningGoal: '知道视频生成工具要重点评估运动稳定性、镜头连续性、成本和生成速度。',
    prerequisites: ['Sora / 视频生成', 'AI 图像生成'],
    related: ['AI 图像生成', '评估指标', '视频生成'],
    next: ['AI 工具选择总览']
  },
  'ai-coding-tool-selection': {
    level: '进阶必看',
    learningGoal: '区分代码补全、对话改代码、项目级 Agent 和中文 IDE 插件的适用场景。',
    prerequisites: ['Git', 'Codex'],
    related: ['Codex', 'Claude Code', 'GitHub 协作流程'],
    next: ['AI 工具选择总览', 'Agent 智能体']
  },
  'ai-office-tool-selection': {
    level: '初学必看',
    learningGoal: '知道办公 AI 的关键不是模型最强，而是能否接入自己正在使用的文档、表格和会议工具。',
    prerequisites: ['生成式 AI / AIGC'],
    related: ['结构化输出', '提示词', 'AI 搜索工具'],
    next: ['AI 工具选择总览']
  },
  'ai-search-tool-selection': {
    level: '初学必看',
    learningGoal: '理解 AI 搜索工具要优先看来源引用、中文/英文覆盖和是否适合查实时信息。',
    prerequisites: ['生成式 AI / AIGC', 'AI 幻觉'],
    related: ['RAG 检索增强生成', '来源校验', '上下文窗口'],
    next: ['RAG 检索增强生成', 'AI 工具选择总览']
  }
}

export function getLearningMeta(card: KnowledgeCard): LearningMeta {
  return (
    learningMeta[card.id] ?? {
      level: defaultLevelByCategory[card.category],
      learningGoal: `理解「${card.title}」的用途、使用边界和常见误区。`,
      prerequisites: [],
      related: card.tags.slice(0, 3),
      next: card.useCases.slice(0, 2)
    }
  )
}

const customQuizzes: Record<string, KnowledgeQuiz> = {
  token: {
    question: '下面关于 Token 的说法，哪一项正确？',
    options: [
      'Token 一定等于一个中文字或一个英文单词',
      'Token 是模型处理文本时使用的基本片段，切分方式会因语言和内容而不同',
      'Token 只影响价格，不影响上下文长度'
    ],
    correctIndex: 1,
    explanation: 'Token 可能是一个字、词的一部分或符号，同时会影响上下文占用和使用量。'
  },
  chatgpt: {
    question: 'ChatGPT 和 GPT 模型是什么关系？',
    options: [
      'ChatGPT 是产品入口，背后可以使用不同模型',
      'ChatGPT 永远只代表一个固定模型',
      'ChatGPT 是一种编程语言'
    ],
    correctIndex: 0,
    explanation: 'ChatGPT 是面向用户的产品，实际可用模型和能力会随版本、套餐与平台更新。'
  },
  html: {
    question: '网页中的 HTML 主要负责什么？',
    options: ['页面结构和内容', '所有视觉样式', '服务器数据库备份'],
    correctIndex: 0,
    explanation: 'HTML 管结构，CSS 管样式，JavaScript 通常负责交互。'
  },
  markdown: {
    question: 'Markdown 最适合用于下面哪个场景？',
    options: ['编写 README、笔记和结构化文档', '替代数据库存储业务数据', '直接控制电脑硬件'],
    correctIndex: 0,
    explanation: 'Markdown 是轻量标记语法，适合文档、知识库和项目说明。'
  },
  git: {
    question: 'Git 的核心用途是什么？',
    options: ['托管视频网站', '记录项目改动并管理版本历史', '生成 AI 图片'],
    correctIndex: 1,
    explanation: 'Git 是版本控制工具；GitHub 才是常见的远端仓库托管与协作平台。'
  },
  github: {
    question: 'Git 和 GitHub 的主要区别是什么？',
    options: [
      'Git 是版本控制工具，GitHub 是仓库托管与协作平台',
      'Git 和 GitHub 完全相同',
      'Git 只能联网使用，GitHub 只能离线使用'
    ],
    correctIndex: 0,
    explanation: 'Git 可以在本地记录历史；GitHub 提供远端仓库、Pull Request、Issues 等协作能力。'
  },
  'git-core-flow': {
    question: '在 Git 中，commit 更接近下面哪个比喻？',
    options: ['删除项目', '保存当前项目状态的一个可追踪快照', '把网页发布到公网'],
    correctIndex: 1,
    explanation: '多个 commit 形成历史链路，每个 commit 都有唯一标识。'
  },
  'git-undo-sync': {
    question: '多人协作分支已经推送到远端后，撤销错误提交通常优先选择什么？',
    options: ['revert', '随便 reset 并强推', '删除 .git 文件夹'],
    correctIndex: 0,
    explanation: 'revert 会生成反向提交，不改写共享历史，通常比 reset 更适合多人协作。'
  },
  'github-pages': {
    question: '手机打开 GitHub Pages 却只看到 README，最可能是什么原因？',
    options: ['手机不支持网页', '发布源选错或没有发布构建后的静态文件', 'GitHub Pages 只能显示图片'],
    correctIndex: 1,
    explanation: '静态框架通常要发布构建后的 dist，并正确设置仓库子路径 base。'
  },
  'codex-agent': {
    question: 'Codex 与普通聊天机器人的关键差别是什么？',
    options: [
      'Codex 只能回答百科问题',
      'Codex 可以在授权范围内读写项目文件、运行命令并验证结果',
      'Codex 不需要任何权限控制'
    ],
    correctIndex: 1,
    explanation: 'Codex 偏执行型，但删除、覆盖、联网和敏感数据操作仍需要边界与确认。'
  },
  agent: {
    question: 'Agent 智能体最关键的特征是什么？',
    options: ['只生成一段文本', '根据目标规划并调用工具持续推进任务', '永远不需要人工确认'],
    correctIndex: 1,
    explanation: 'Agent 的核心是形成“判断—执行—观察—继续”的任务闭环。'
  },
  rag: {
    question: 'RAG 的基本工作顺序是什么？',
    options: ['先检索相关资料，再让模型基于资料回答', '先生成答案，再删除资料', '只把所有文件一次性塞给模型'],
    correctIndex: 0,
    explanation: 'RAG 的核心是先找资料再组织答案，检索质量会直接影响最终结果。'
  },
  dify: {
    question: 'Dify 更适合下面哪种用途？',
    options: ['组合模型、提示词、知识库和工作流搭建 AI 应用', '只做图片压缩', '替代 Git 记录代码历史'],
    correctIndex: 0,
    explanation: 'Dify 是 LLM 应用开发平台，可配置模型、知识库、Agent 和工作流。'
  },
  fastgpt: {
    question: 'FastGPT 的常见重点方向是什么？',
    options: ['视频剪辑', '知识库问答与 RAG 应用', '操作系统安装'],
    correctIndex: 1,
    explanation: 'FastGPT 常用于导入资料、检索内容并构建知识库问答应用。'
  },
  n8n: {
    question: 'n8n 更像下面哪一种工具？',
    options: ['把应用、API、数据库和 AI 节点串起来的自动化流水线', '纯文字编辑器', '只用于生成图片的模型'],
    correctIndex: 0,
    explanation: 'n8n 用节点和工作流连接不同系统，执行真实动作时必须管理凭证和权限。'
  },
  'ai-tool-selection-map': {
    question: '普通人选 AI 工具时，最稳妥的第一步是什么？',
    options: ['先按任务类型选工具，再看价格和访问条件', '只选网上最火的工具', '只看模型参数大小'],
    correctIndex: 0,
    explanation: '聊天写作、图片、视频、代码、办公和搜索的评估标准不同，不能用一个榜单解决所有场景。'
  },
  'ai-chat-writing-tools': {
    question: '聊天写作类工具最应该按什么来选？',
    options: ['自己的语言、文档长度、推理和代码需求', '图标是否好看', '是否一定国外工具才可用'],
    correctIndex: 0,
    explanation: '中文日常写作、英文材料、代码和长文档处理对工具能力要求不同。'
  },
  'ai-image-tool-selection': {
    question: '选择文生图工具时，下面哪项更关键？',
    options: ['只看是否免费', '看画质、提示词理解、风格一致性和版权复核', '完全不需要人工检查'],
    correctIndex: 1,
    explanation: '图片生成适合做草图和配图，但文字、结构、版权和事实细节都要复核。'
  },
  'ai-video-tool-selection': {
    question: '视频生成工具最容易需要重点检查什么？',
    options: ['运动连续性、人物/物体一致性和复杂动作变形', '文件名是否够短', '是否能替代所有后期剪辑'],
    correctIndex: 0,
    explanation: '视频比图片多了时间维度，运动稳定性和镜头连续性是核心检查点。'
  },
  'ai-coding-tool-selection': {
    question: '代码类 AI 工具不应该被当成什么？',
    options: ['写代码和解释代码的助手', '可以辅助测试和改 bug 的工具', '不需要审查就能直接上线的自动程序员'],
    correctIndex: 2,
    explanation: '代码工具能提效，但仍要看 diff、跑测试、保护密钥和确认改动范围。'
  },
  'ai-office-tool-selection': {
    question: '办公 AI 选型最实际的判断标准是什么？',
    options: ['是否接入你正在用的文档、表格、会议和协作软件', '名字是否带 Copilot', '是否能完全替代人工审核'],
    correctIndex: 0,
    explanation: '办公效率工具的价值常来自和现有工作流的集成，而不是单次对话能力。'
  },
  'ai-search-tool-selection': {
    question: 'AI 搜索工具回答重要问题时，必须重点看什么？',
    options: ['是否给出可核对来源和日期', '回答是否足够自信', '页面颜色是否舒服'],
    correctIndex: 0,
    explanation: '搜索类工具的核心价值是带来源的检索总结，重要结论要能回到原文核对。'
  }
}

function buildFallbackQuiz(card: KnowledgeCard): KnowledgeQuiz {
  const correctOption = card.summary
  const distractors = [
    `${card.title} 可以完全替代人工判断，不需要核对来源或结果。`,
    `学习 ${card.title} 只需要记住名称，不需要理解用途和使用边界。`
  ]
  const correctIndex = [...card.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 3
  const options = [...distractors]
  options.splice(correctIndex, 0, correctOption)

  return {
    question: `下面哪项对「${card.title}」的理解更准确？`,
    options,
    correctIndex,
    explanation: `${card.beginnerTakeaway} ${card.caution}`
  }
}

export function getQuiz(card: KnowledgeCard): KnowledgeQuiz {
  return customQuizzes[card.id] ?? buildFallbackQuiz(card)
}

export const cards: KnowledgeCard[] = [
  {
    id: 'responses-api',
    title: 'Responses API',
    category: '主流大模型体系',
    summary: 'OpenAI 用来生成文本、调用工具、处理多模态输入的核心 API 形态。',
    plain: '把它想成“给模型派任务”的总入口：你给说明、输入和工具，模型返回答案或下一步动作。',
    officialPoint: '官方文档把文本生成、工具调用、结构化输出等能力放在 Responses API 工作流中讲解。',
    beginnerTakeaway: '先写清楚任务，再决定要不要给模型工具。',
    caution: '不要把模型回答当数据库事实；重要结论仍要接入来源或检索。',
    useCases: ['问答解释', '写作改写', '多步骤工作流'],
    tags: ['OpenAI', 'API', '多模态'],
    version: 'OpenAI API 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Text generation guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/text',
    image: '/images/cards/responses-api.webp'
  },
  {
    id: 'token',
    title: 'Token',
    category: 'AI 基础认知',
    summary: '模型处理文本时使用的基本片段，可能是一个字、词的一部分或符号。',
    plain: '模型不是逐字“看懂”文本，而是把文本切成小块再处理。输入越长，通常消耗越多 token。',
    officialPoint: 'OpenAI 文档用 token 来描述输入、输出、上下文长度和计费相关限制。',
    beginnerTakeaway: '长文档、长对话、长输出都会占上下文空间。',
    caution: '中文、英文、代码的 token 切分方式不同，不能简单按字数等同。',
    useCases: ['成本估算', '上下文控制', '长文处理'],
    tags: ['上下文', '成本', '限制'],
    version: '通识概念',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Text generation guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/text',
    image: '/images/cards/token.webp'
  },
  {
    id: 'context-window',
    title: '上下文窗口',
    category: 'AI 基础认知',
    summary: '一次请求里模型能参考的输入、历史消息、工具结果和输出空间总量。',
    plain: '它像模型的临时工作台。桌面再大也有限，旧资料太多时，新任务就要做取舍。',
    officialPoint: '模型文档通常会标注上下文长度，应用需要管理输入和输出占用。',
    beginnerTakeaway: '不是把所有资料塞进去就更好，相关、干净、少重复更重要。',
    caution: '上下文窗口不是长期记忆；刷新会话或换请求后需要重新提供关键信息。',
    useCases: ['长对话', '文档总结', '代码审查'],
    tags: ['Context', 'Token', '记忆'],
    version: '按模型标注',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Models documentation',
    sourceUrl: 'https://developers.openai.com/api/docs/models',
    image: '/images/cards/context-window.webp'
  },
  {
    id: 'prompting',
    title: '提示词',
    category: 'AI 基础认知',
    summary: '写给模型的任务说明，决定模型要做什么、按什么标准输出。',
    plain: '好提示词像清楚的工单：目标、背景、限制、输出格式都说清楚，模型就更稳定。',
    officialPoint: '官方指南建议用清晰指令、上下文和结构化要求来提高输出可控性。',
    beginnerTakeaway: '先说目标，再说素材，最后说输出格式。',
    caution: '提示词能改善结果，但不能保证模型永远正确。',
    useCases: ['知识卡片改写', '批量生成提纲', '结构化输出'],
    tags: ['Prompt', '输出格式', '上下文'],
    version: '通识概念',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'OpenAI Prompt engineering guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/prompt-engineering',
    image: '/images/cards/prompting.webp'
  },
  {
    id: 'structured-outputs',
    title: '结构化输出',
    category: '主流大模型体系',
    summary: '让模型按指定 JSON Schema 等结构返回结果，方便程序继续处理。',
    plain: '你不是只让模型“说一段话”，而是让它按表格字段一样填好数据。',
    officialPoint: 'OpenAI 官方支持通过结构化输出约束模型生成符合 schema 的结果。',
    beginnerTakeaway: '需要接数据库、表格或接口时，优先让模型输出结构化数据。',
    caution: '结构正确不代表事实正确，事实仍要来源校验。',
    useCases: ['表单抽取', '批量入库', '自动评分'],
    tags: ['JSON', 'Schema', '自动化'],
    version: 'OpenAI API 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Structured outputs guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/structured-outputs',
    image: '/images/cards/structured-outputs.webp'
  },
  {
    id: 'function-calling',
    title: '函数调用',
    category: '进阶常识',
    summary: '模型按预先定义的参数结构选择外部函数，让程序执行真实动作。',
    plain: '用户说“查天气”，模型负责整理参数，程序真正去查，再把结果交回模型解释。',
    officialPoint: 'OpenAI 官方工具调用文档说明了函数定义、参数 schema 和调用结果回传流程。',
    beginnerTakeaway: '模型做判断，程序做执行。',
    caution: '能调用函数不代表能随便执行危险操作，必须做权限和确认。',
    useCases: ['查询接口', '提交表单', '自动执行任务'],
    tags: ['Tools', 'JSON', 'API'],
    version: 'OpenAI API 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Function calling guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/function-calling',
    image: '/images/cards/function-calling.webp'
  },
  {
    id: 'mcp',
    title: 'MCP',
    category: '进阶常识',
    summary: 'Model Context Protocol 是让 AI 应用连接工具和数据源的开放协议。',
    plain: '它像统一插口：模型应用不只聊天，还能按规则接文件、数据库、浏览器或业务系统。',
    officialPoint: 'MCP 官方介绍将其定位为连接 AI 应用、外部工具和上下文数据的协议。',
    beginnerTakeaway: 'MCP 解决“模型怎么安全接工具”的问题。',
    caution: '协议本身不等于安全，具体工具仍要权限、审计和确认。',
    useCases: ['工具接入', '企业数据查询', '自动化工作流'],
    tags: ['协议', '工具', '上下文'],
    version: 'MCP 官方文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Model Context Protocol docs',
    sourceUrl: 'https://modelcontextprotocol.io/introduction',
    image: '/images/cards/mcp.webp'
  },
  {
    id: 'agent',
    title: 'Agent 智能体',
    category: '进阶常识',
    summary: '能根据目标规划步骤、调用工具、观察结果并继续推进任务的 AI 系统。',
    plain: '普通聊天像回答问题，Agent 更像办事流程：想一步、做一步、看结果、再决定下一步。',
    officialPoint: 'OpenAI Agents/Tools 文档围绕工具、检索、执行和安全控制组织应用能力。',
    beginnerTakeaway: 'Agent 的关键不是“会想”，而是能用工具闭环完成任务。',
    caution: '越能行动，越需要边界：权限、确认、日志、回滚。',
    useCases: ['自动整理资料', '网页操作', '企业流程助手'],
    tags: ['Tools', 'Plan', 'Workflow'],
    version: '按平台能力标注',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Tools guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/tools',
    image: '/images/cards/agent.webp'
  },
  {
    id: 'embeddings',
    title: 'Embedding',
    category: '数据 & 存储',
    summary: '把文本、图片等内容转成向量，让机器比较“语义相似度”。',
    plain: '关键词搜索看字面，Embedding 更像看意思。两段话字不同，但意思近，也可能被找出来。',
    officialPoint: 'OpenAI 官方将 embedding 描述为输入内容的向量表示，可用于搜索、聚类、推荐等任务。',
    beginnerTakeaway: 'Embedding 是语义检索的基础材料。',
    caution: '相似不等于正确，检索结果还要排序、引用和人工校验。',
    useCases: ['语义搜索', 'RAG', '推荐系统'],
    tags: ['Vector', 'Search', 'RAG'],
    version: 'OpenAI API 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Embeddings guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/embeddings',
    image: '/images/cards/embeddings.webp'
  },
  {
    id: 'rag',
    title: 'RAG 检索增强生成',
    category: '数据 & 存储',
    summary: '先从资料库检索相关内容，再让模型基于资料回答。',
    plain: '模型先翻资料，再回答。这样比纯靠记忆更适合企业文档、知识库和最新资料。',
    officialPoint: 'OpenAI 官方检索工具文档支持把文件内容作为模型回答时可引用的上下文。',
    beginnerTakeaway: 'RAG 的核心是“先找资料，再组织答案”。',
    caution: '资料找错时，模型也会认真解释错资料，所以检索质量很关键。',
    useCases: ['企业知识库', '客服问答', '文档助手'],
    tags: ['Retrieval', 'Files', 'Knowledge Base'],
    version: 'OpenAI API 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Retrieval guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/retrieval',
    image: '/images/cards/rag.webp'
  },
  {
    id: 'image-generation',
    title: 'AI 图像生成',
    category: 'AIGC 应用细分',
    summary: '模型根据文本、参考图或编辑指令生成图片，常用于创意设计和视觉草图。',
    plain: '你描述画面，模型负责把描述变成图。主体、风格、构图、用途越清楚，结果越接近期望。',
    officialPoint: 'OpenAI 图像指南覆盖文本生成图片、图片编辑、变体和多模态输入等图像工作流。',
    beginnerTakeaway: '写清楚主体、场景、风格、尺寸和禁忌。',
    caution: '图片里的文字、细小结构和事实细节仍需要人工检查。',
    useCases: ['卡片配图', '概念海报', '产品视觉草稿'],
    tags: ['文生图', '图像编辑', '多模态'],
    version: 'OpenAI Images 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Image generation guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/images',
    image: '/images/cards/image-generation.webp'
  },
  {
    id: 'image2',
    title: 'Image2 / 新一代图像模型',
    category: 'AIGC 应用细分',
    summary: '面向更高质量、更强指令遵循和编辑能力的新一代图像生成能力。',
    plain: '可以理解成“更会听要求的画图模型”。它适合做配图、草图、视觉创意，但仍要复核细节。',
    officialPoint: '本卡只记录官方文档已发布的图像生成与编辑能力，具体模型名、限制和参数以官方页面为准。',
    beginnerTakeaway: '别只说“画好看点”，要说清楚画什么、给谁看、用在哪里。',
    caution: '模型命名、接口参数和可用范围会变动，使用前必须看官方最新文档。',
    useCases: ['知识库手册图', '配图生成', '图片编辑'],
    tags: ['Image2', '图像模型', '官方复核'],
    version: '按官方页面标注',
    updated: '2026-05',
    sourceLevel: '待人工复核',
    sourceName: 'OpenAI Image generation guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/images',
    image: '/images/cards/image2.webp'
  },
  {
    id: 'sora-video',
    title: 'Sora / 视频生成',
    category: 'AIGC 应用细分',
    summary: '根据文本、图片或镜头描述生成视频，重点处理时间、运动和镜头连续性。',
    plain: '图像生成解决一张图，视频生成还要让前后画面连贯。动作、镜头和场景变化都要写清楚。',
    officialPoint: 'OpenAI Sora 页面介绍了从提示生成视频和创意视频工作流相关能力。',
    beginnerTakeaway: '写视频提示词时，要像写分镜：谁、在哪里、怎么动、镜头怎么拍。',
    caution: '人物一致性、物理细节和复杂文字仍要检查。',
    useCases: ['短视频分镜', '产品演示', '教学动画草稿'],
    tags: ['Sora', '文生视频', '镜头'],
    version: 'OpenAI Sora 页面',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Sora',
    sourceUrl: 'https://openai.com/sora/',
    image: '/images/cards/sora-video.webp'
  },
  {
    id: 'evals',
    title: 'Evals 评测',
    category: '进阶常识',
    summary: '用样例、评分规则和指标持续检查 AI 系统质量。',
    plain: '不能只看一次回答漂不漂亮，要看多次是否稳定、有没有编造、速度和成本是否可接受。',
    officialPoint: 'OpenAI Evals 文档用于帮助开发者衡量模型或应用在特定任务上的表现。',
    beginnerTakeaway: '上线前先做小考卷，上线后持续回归测试。',
    caution: '评测集要覆盖真实场景，不要只测简单样例。',
    useCases: ['模型选型', '上线验收', '持续回归测试'],
    tags: ['Benchmark', '质量', '回归'],
    version: 'OpenAI Evals 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Evals guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/evals',
    image: '/images/cards/evals.webp'
  },
  {
    id: 'ffmpeg',
    title: 'FFmpeg',
    category: 'AI 配套技术',
    summary: '常用音视频处理工具，可转码、压缩、裁剪、抽帧和合并媒体文件。',
    plain: '做 AI 视频、语音、素材处理时，它像媒体工具箱，能把素材整理成模型或网页需要的格式。',
    officialPoint: 'FFmpeg 官方文档列出 ffmpeg 命令可读取输入、处理音视频流并输出到文件或其他目标。',
    beginnerTakeaway: '处理音视频格式问题时，先想到 FFmpeg。',
    caution: '命令参数很多，批量处理前先用一个样本验证。',
    useCases: ['视频压缩', '音频提取', '批量转格式'],
    tags: ['CLI', '音视频', '转码'],
    version: '按本机版本记录',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'FFmpeg documentation',
    sourceUrl: 'https://ffmpeg.org/ffmpeg.html',
    image: '/images/cards/ffmpeg.webp'
  },
  {
    id: 'git',
    title: 'Git',
    category: 'AI 配套技术',
    summary: '分布式版本控制系统，用来记录代码变化、回退历史和协作开发。',
    plain: 'Git 像项目的时间机器：每次提交都是一个可追踪节点，出错时能找回历史。',
    officialPoint: 'Git 官方文档提供 init、clone、commit、branch、merge 等核心命令说明。',
    beginnerTakeaway: '改动前看状态，完成后小步提交。',
    caution: '不要随便执行 reset、clean 等破坏性命令，先确认影响范围。',
    useCases: ['代码备份', '协作开发', '版本回退'],
    tags: ['Version Control', 'Commit', 'Branch'],
    version: 'Git 官方文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Git documentation',
    sourceUrl: 'https://git-scm.com/docs',
    image: '/images/cards/git.webp'
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    category: 'AI 配套技术',
    summary: '能在浏览器外运行 JavaScript 的运行时，常用于前端工具链和服务端应用。',
    plain: '网页里的 JavaScript 通常跑在浏览器里，Node.js 让它也能在电脑或服务器上跑。',
    officialPoint: 'Node.js 官方学习文档将其介绍为开源、跨平台的 JavaScript 运行时环境。',
    beginnerTakeaway: '装前端项目依赖、跑 VitePress、写脚本，经常都要用 Node.js。',
    caution: 'Node 版本会影响依赖兼容性，项目最好记录推荐版本。',
    useCases: ['本地开发', '构建工具', '服务端脚本'],
    tags: ['JavaScript', 'Runtime', 'NPM'],
    version: 'Node.js 官方文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Node.js Introduction',
    sourceUrl: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
    image: '/images/cards/nodejs.webp'
  },
  {
    id: 'npm',
    title: 'npm',
    category: 'AI 配套技术',
    summary: 'Node.js 生态常用包管理器，用来安装依赖、运行脚本和发布包。',
    plain: 'package.json 像项目购物清单，npm 负责按清单把依赖装好，再运行脚本。',
    officialPoint: 'npm 官方文档说明 npm 是 JavaScript 包管理器和软件注册表生态的一部分。',
    beginnerTakeaway: '常用命令是 install、run dev、run build。',
    caution: '不要盲目全局安装；项目依赖优先放在本地 package.json。',
    useCases: ['安装依赖', '启动项目', '构建发布'],
    tags: ['Package', 'Scripts', 'Node'],
    version: 'npm 官方文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'npm docs',
    sourceUrl: 'https://docs.npmjs.com/about-npm',
    image: '/images/cards/npm.webp'
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    category: '数据 & 存储',
    summary: '成熟的开源关系型数据库，适合结构化数据、事务和复杂查询。',
    plain: '如果你要认真存用户、订单、知识条目这类结构化数据，PostgreSQL 是很稳的选择。',
    officialPoint: 'PostgreSQL 官方文档将其介绍为对象关系型数据库管理系统。',
    beginnerTakeaway: '需要可靠表结构和查询能力时，用关系型数据库。',
    caution: '表结构、索引和备份策略要提前设计，不然数据多了会慢。',
    useCases: ['业务数据库', '知识库元数据', '报表查询'],
    tags: ['SQL', '事务', '索引'],
    version: 'PostgreSQL 当前文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'PostgreSQL docs',
    sourceUrl: 'https://www.postgresql.org/docs/current/intro-whatis.html',
    image: '/images/cards/postgresql.webp'
  },
  {
    id: 'redis',
    title: 'Redis',
    category: '数据 & 存储',
    summary: '常用内存数据存储系统，适合缓存、计数器、队列和实时数据场景。',
    plain: 'Redis 很快，常被用来放临时但高频访问的数据，比如登录状态、排行榜、任务队列。',
    officialPoint: 'Redis 官方文档介绍了键值数据结构、缓存和实时应用相关能力。',
    beginnerTakeaway: '数据库负责长期存，Redis 常负责快读快写和临时状态。',
    caution: '内存不是无限的，缓存过期策略和持久化方式要配置清楚。',
    useCases: ['缓存', '队列', '限流'],
    tags: ['Cache', 'Key-value', 'Realtime'],
    version: 'Redis 官方文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Redis docs',
    sourceUrl: 'https://redis.io/docs/latest/develop/get-started/',
    image: '/images/cards/redis.webp'
  },
  {
    id: 'vue',
    title: 'Vue',
    category: '前端 & 网页搭建',
    summary: '用于构建用户界面的渐进式 JavaScript 框架。',
    plain: 'Vue 帮你把数据和页面绑定起来：数据变了，界面自动跟着变。',
    officialPoint: 'Vue 官方指南将 Vue 定义为用于构建用户界面的 JavaScript 框架。',
    beginnerTakeaway: '页面有状态、有交互、有组件复用时，Vue 很顺手。',
    caution: '别把所有逻辑都塞进一个组件，数据和组件边界要清楚。',
    useCases: ['交互页面', '组件系统', '单页应用'],
    tags: ['Component', 'Reactive', 'Frontend'],
    version: 'Vue 3',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Vue Introduction',
    sourceUrl: 'https://vuejs.org/guide/introduction.html',
    image: '/images/cards/vue.webp'
  },
  {
    id: 'vitepress',
    title: 'VitePress',
    category: '前端 & 网页搭建',
    summary: '基于 Vite 和 Vue 的静态文档站框架，适合知识库、文档和博客。',
    plain: '你写 Markdown，它负责生成网站。速度快、结构清楚，适合长期维护卡片式知识库。',
    officialPoint: 'VitePress 官方文档说明它是由 Vite 和 Vue 驱动的静态站点生成器。',
    beginnerTakeaway: '知识库优先写内容，样式和导航交给框架。',
    caution: '复杂应用交互很多时，可能需要普通 Vue/Vite 项目。',
    useCases: ['知识库网站', '项目文档', '个人学习站'],
    tags: ['Vue', 'Markdown', '静态站'],
    version: 'VitePress 1.x',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'VitePress guide',
    sourceUrl: 'https://vitepress.dev/guide/what-is-vitepress',
    image: '/images/cards/vitepress.webp'
  },
  {
    id: 'docker',
    title: 'Docker',
    category: 'AI 配套技术',
    summary: '用容器打包应用及其依赖，让应用在不同环境更一致地运行。',
    plain: 'Docker 像给应用装进标准盒子：本地能跑，服务器上也更容易按同样方式跑。',
    officialPoint: 'Docker 官方概览将容器描述为打包应用代码和依赖的标准化单元。',
    beginnerTakeaway: '环境总出问题时，容器能减少“我电脑能跑”的差异。',
    caution: '镜像体积、密钥、网络端口和持久化数据都要认真配置。',
    useCases: ['本地环境', '服务部署', '依赖隔离'],
    tags: ['Container', 'Image', 'Deploy'],
    version: 'Docker 官方文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Docker overview',
    sourceUrl: 'https://docs.docker.com/get-started/docker-overview/',
    image: '/images/cards/docker.webp'
  },
  {
    id: 'github-actions',
    title: 'GitHub Actions',
    category: 'AI 配套技术',
    summary: 'GitHub 提供的自动化工作流工具，可用于测试、构建、部署和定时任务。',
    plain: '你把流程写成配置：代码一提交，它就自动跑测试、打包或部署。',
    officialPoint: 'GitHub 官方文档介绍 Actions 可自动化软件开发工作流。',
    beginnerTakeaway: '重复手工操作，优先考虑自动化。',
    caution: 'CI 里的密钥要用 Secrets 管理，不要写进代码。',
    useCases: ['自动构建', '自动测试', '静态站部署'],
    tags: ['CI/CD', 'Workflow', 'Deploy'],
    version: 'GitHub Docs',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'GitHub Actions docs',
    sourceUrl: 'https://docs.github.com/en/actions/about-github-actions/understanding-github-actions',
    image: '/images/cards/github-actions.webp'
  },
  {
    id: 'owasp-top-10',
    title: 'OWASP Top 10',
    category: '进阶常识',
    summary: 'Web 应用常见安全风险清单，用来提醒开发者关注高频漏洞类型。',
    plain: '它像网站安全体检表：越常见、越危险的问题越应该优先防。',
    officialPoint: 'OWASP Top 10 是 OWASP 发布的 Web 应用安全风险意识文档。',
    beginnerTakeaway: '登录、权限、输入校验、敏感数据都不能凭感觉写。',
    caution: '清单不是完整安全方案，只是优先级提醒。',
    useCases: ['安全检查', '上线审计', '开发规范'],
    tags: ['Security', 'Web', 'Risk'],
    version: 'OWASP Top 10',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OWASP Top 10',
    sourceUrl: 'https://owasp.org/www-project-top-ten/',
    image: '/images/cards/owasp-top-10.webp'
  },
  {
    id: 'web-performance',
    title: '页面性能',
    category: '前端 & 网页搭建',
    summary: '通过加载速度、交互延迟、稳定性和资源体积衡量网页体验。',
    plain: '页面不是“能打开”就够了，还要快、稳、不卡，尤其图片多的知识卡片站。',
    officialPoint: 'web.dev 性能资料围绕加载、响应和视觉稳定等用户体验指标展开。',
    beginnerTakeaway: '图片压缩、懒加载、少发请求，是卡片站的基本功。',
    caution: '性能要用真实设备和网络验证，不只看开发机。',
    useCases: ['图片优化', '移动端体验', '上线验收'],
    tags: ['Performance', 'Images', 'Mobile'],
    version: 'web.dev 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'web.dev performance',
    sourceUrl: 'https://web.dev/learn/performance',
    image: '/images/cards/web-performance.webp'
  },
  {
    id: 'gpt-image-2',
    title: 'GPT Image 2',
    category: '主流大模型体系',
    summary: 'OpenAI 的图像生成模型，适合生成高质量图片、编辑图片和制作视觉素材。',
    plain: '你可以把它理解成“更会听话的 AI 画图工具”：能按提示做海报、PPT 配图、UI 草图和产品视觉。',
    officialPoint: 'OpenAI 模型文档列出了 gpt-image-2，并将图像生成、编辑和多模态工作流放在 Images 指南中说明。',
    beginnerTakeaway: '写提示时说清楚用途、主体、风格、构图、尺寸和不要出现什么。',
    caution: '你语音稿里的具体发布时间、迭代历史、免费额度等动态信息需要以官方最新页面为准，不能当固定事实写死。',
    useCases: ['海报设计', 'PPT 配图', '产品渲染', '社交媒体素材'],
    tags: ['Image 2', 'gpt-image-2', '图像生成'],
    version: 'OpenAI 模型文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Image generation guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/images',
    image: '/images/cards/gpt-image-2.webp'
  },
  {
    id: 'claude-opus-46',
    title: 'Claude Opus 4.6',
    category: '主流大模型体系',
    summary: 'Anthropic 的 Claude 系列模型之一，常被用于复杂写作、规划、分析和代码任务。',
    plain: '如果把模型当同事，Opus 这类模型通常更适合长文推理、写作打磨和复杂计划，而不是只做很短的问答。',
    officialPoint: 'Anthropic 官方模型页面是确认 Claude 具体型号、上下文、可用能力和发布日期的权威来源。',
    beginnerTakeaway: '模型选型要看任务：写作规划看质量，批量任务还要看速度和成本。',
    caution: '不同平台可能默认模型不同，使用前要看当前产品或 API 实际配置。',
    useCases: ['长文写作', '项目规划', '代码分析'],
    tags: ['Claude', 'Opus', '写作'],
    version: 'Anthropic 模型文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Anthropic models overview',
    sourceUrl: 'https://docs.anthropic.com/en/docs/about-claude/models/overview',
    image: '/images/cards/claude-opus-46.webp'
  },
  {
    id: 'windows-voice-typing',
    title: 'Windows + H 语音输入',
    category: 'AI 行业 & 场景应用',
    summary: 'Windows 的快捷语音输入入口，可把口述内容转成文字。',
    plain: '按 Windows + H 后，你可以直接说话，系统把语音转成文字，适合快速录入灵感和知识点草稿。',
    officialPoint: 'Microsoft 支持文档介绍了 Windows 语音输入功能和快捷键入口。',
    beginnerTakeaway: '先口述粗稿，再交给 Agent 整理成卡片。',
    caution: '语音识别会有错字，模型名、命令和链接必须人工复核。',
    useCases: ['快速记笔记', '口述需求', '知识点草稿'],
    tags: ['Windows', '语音输入', '效率'],
    version: 'Windows 支持文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Microsoft voice typing support',
    sourceUrl: 'https://support.microsoft.com/windows/use-voice-typing-to-talk-instead-of-type-on-your-pc-fec94565-c4bd-329d-e59a-af033fa5689f',
    image: '/images/cards/windows-voice-typing.webp'
  },
  {
    id: 'coding-agent-to-general-agent',
    title: '编程 Agent 到通用 Agent',
    category: 'AI 行业 & 场景应用',
    summary: '编程 Agent 正在从只写代码，扩展到文件、浏览器、图像、文档和本地任务执行。',
    plain: '以前像“会写代码的助手”，现在更像“会用电脑的助手”：能改文件、跑命令、查网页、做图片、整理文档。',
    officialPoint: 'OpenAI Codex 和 Anthropic Claude Code 官方文档都将编码代理与终端、文件、工具调用等工作流联系起来。',
    beginnerTakeaway: 'Agent 的价值不只在回答，而在能把任务一步步做完。',
    caution: '能力越通用，越需要权限边界、确认机制和操作日志。',
    useCases: ['开发项目', '整理知识库', '生成文件', '本地自动化'],
    tags: ['Agent', 'Codex', 'Claude Code'],
    version: '官方产品文档',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'OpenAI Codex',
    sourceUrl: 'https://developers.openai.com/codex',
    image: '/images/cards/coding-agent-to-general-agent.webp'
  },
  {
    id: 'claude-code',
    title: 'Claude Code',
    category: '主流大模型体系',
    summary: 'Anthropic 面向开发者的命令行编码代理，通常通过终端和项目文件协作。',
    plain: '它像住在命令行里的开发助手：能读项目、改代码、跑测试，并根据你的指令推进开发任务。',
    officialPoint: 'Anthropic 官方 Claude Code 文档介绍了安装、CLI 使用、记忆和常用工作流。',
    beginnerTakeaway: '适合专业开发者，需要理解项目、命令行和 API/订阅计费方式。',
    caution: '默认模型、计费方式和可替换模型能力要以 Anthropic 当前文档和你的账号配置为准。',
    useCases: ['代码修改', '测试修复', '项目理解'],
    tags: ['Claude Code', 'CLI', '开发者'],
    version: 'Claude Code 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Claude Code docs',
    sourceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
    image: '/images/cards/claude-code.webp'
  },
  {
    id: 'codex-agent',
    title: 'Codex',
    category: '主流大模型体系',
    summary: 'OpenAI 的软件工程代理，可用于理解代码、修改文件、运行命令和辅助开发。',
    plain: '它不只是聊天，还能在你的项目里动手：读文件、改页面、跑构建、做检查，再把结果告诉你。',
    officialPoint: 'OpenAI Codex 文档将 Codex 描述为面向软件开发任务的编码代理。',
    beginnerTakeaway: 'Codex 更偏执行型，适合把想法落成项目文件。',
    caution: '涉及删除、覆盖、联网、安装依赖和发送数据时，要明确授权和确认。',
    useCases: ['本地文件操作', '网页开发', '文档/PPT/Markdown 生成'],
    tags: ['OpenAI', 'Codex', '执行力'],
    version: 'OpenAI Codex 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI Codex',
    sourceUrl: 'https://developers.openai.com/codex',
    image: '/images/cards/codex-agent.webp'
  },
  {
    id: 'skills',
    title: 'Skills',
    category: '进阶常识',
    summary: '把稳定工作流、领域规则和工具说明打包成可复用能力。',
    plain: 'Skill 像一本小操作手册：以后遇到同类任务，Agent 先读手册，再按流程做。',
    officialPoint: 'Anthropic 和 OpenAI 生态都在用技能、工具或指令文件来沉淀可复用工作流。',
    beginnerTakeaway: '先跑通流程，再把稳定步骤写成 skill。',
    caution: 'skill 不能写成空泛口号，要包含输入、步骤、边界和验收标准。',
    useCases: ['去 AI 味改写', '生成日报', '飞书文档规范'],
    tags: ['Skill', '流程复用', 'Agent'],
    version: 'Agent 工作流概念',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'Claude Code skills',
    sourceUrl: 'https://docs.anthropic.com/en/docs/claude-code/skills',
    image: '/images/cards/skills.webp'
  },
  {
    id: 'slash-commands-hooks',
    title: '/命令与 Hook',
    category: '进阶常识',
    summary: '/命令用于快速触发固定动作，Hook 用于在特定事件前后自动执行规则。',
    plain: '/命令像快捷按钮，Hook 像自动提醒器：比如改文件前检查规范，提交前跑测试。',
    officialPoint: 'Claude Code 文档提供 slash commands、hooks 等机制说明，用于自定义开发工作流。',
    beginnerTakeaway: '固定动作做成命令，固定检查做成 Hook。',
    caution: 'Hook 能自动执行命令，必须避免危险命令、敏感信息泄露和无限循环。',
    useCases: ['自动检查', '项目规范', '常用动作快捷化'],
    tags: ['Slash Command', 'Hook', '自动化'],
    version: 'Claude Code 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Claude Code hooks',
    sourceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
    image: '/images/cards/slash-commands-hooks.webp'
  },
  {
    id: 'agent-memory-files',
    title: 'AGENTS.md 与 CLAUDE.md',
    category: '进阶常识',
    summary: '项目内指令文件可记录偏好、规范和长期协作原则，让 Agent 后续遵守。',
    plain: '它像写给 Agent 的项目家规：怎么命名、怎么改文档、哪些事不能碰，都写清楚。',
    officialPoint: 'Codex 使用 AGENTS.md，Claude Code 使用 CLAUDE.md 等记忆文件来承载项目级指令。',
    beginnerTakeaway: '把反复强调的规则写进项目，不要每次都口头重复。',
    caution: '指令文件不能包含密码、私钥和敏感账号信息。',
    useCases: ['项目规范', '飞书修改偏好', '长期记忆'],
    tags: ['AGENTS.md', 'CLAUDE.md', '记忆'],
    version: 'Agent 项目指令',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'Claude Code memory',
    sourceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
    image: '/images/cards/agent-memory-files.webp'
  },
  {
    id: 'api-plugin-function-command',
    title: '接口、插件、函数与指令',
    category: '进阶常识',
    summary: '这些都是让系统从“说话”进入“执行”的不同连接方式。',
    plain: 'API 是对接程序，插件是接外部功能，函数调用是结构化让程序执行，快捷指令是把常用动作包装起来。',
    officialPoint: 'OpenAI 工具调用文档和 MCP 文档都围绕模型如何安全连接外部能力展开。',
    beginnerTakeaway: '先判断任务要不要外部工具，再选择 API、插件、函数或协议。',
    caution: '凡是会改数据、发消息、执行命令的动作，都要权限控制和确认。',
    useCases: ['插件调用', '函数调用', '内置脚本命令'],
    tags: ['API', 'Plugin', 'Function Calling'],
    version: '工具调用通识',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'OpenAI Function calling guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/function-calling',
    image: '/images/cards/api-plugin-function-command.webp'
  },
  {
    id: 'terminal-commands',
    title: '终端命令',
    category: 'AI 配套技术',
    summary: '通过 Shell、PowerShell、批处理或 SSH 命令管理文件、系统、服务和自动化任务。',
    plain: '终端就是用文字操作电脑：复制文件、查看目录、安装依赖、启动服务，都可以用命令完成。',
    officialPoint: 'PowerShell 和各系统 Shell 文档都把命令行作为自动化和系统管理的重要入口。',
    beginnerTakeaway: '先看当前路径和文件，再执行改动命令。',
    caution: '删除、覆盖、kill、权限修改、远程 SSH 命令都要先确认对象和影响。',
    useCases: ['文件管理', '系统运维', '批量自动化'],
    tags: ['Shell', 'PowerShell', 'SSH'],
    version: '命令行通识',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'Microsoft PowerShell documentation',
    sourceUrl: 'https://learn.microsoft.com/powershell/',
    image: '/images/cards/terminal-commands.webp'
  },
  {
    id: 'common-cli-map',
    title: '常用命令速查',
    category: 'AI 配套技术',
    summary: 'pwd、cp、mv、cat、wget、ping、ps、kill、tar、zip、docker、pip 等命令覆盖日常开发高频操作。',
    plain: '这张卡是命令地图：找路径、复制移动、看文件、下载、查网络、看进程、压缩、跑容器、装依赖。',
    officialPoint: '不同命令分别由操作系统、GNU 工具、PowerShell、Docker、Python 等官方文档维护。',
    beginnerTakeaway: '记住用途比死背参数更重要，需要时再查具体参数。',
    caution: '跨 Windows、macOS、Linux 时，同名命令参数可能不同。',
    useCases: ['目录操作', '网络请求', '进程服务', '压缩解压'],
    tags: ['pwd', 'cp', 'docker', 'pip'],
    version: '命令行通识',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'GNU Coreutils manual',
    sourceUrl: 'https://www.gnu.org/software/coreutils/manual/coreutils.html',
    image: '/images/cards/common-cli-map.webp'
  },
  {
    id: 'ffmpeg-commands',
    title: 'FFmpeg 常用能力',
    category: 'AI 配套技术',
    summary: 'ffmpeg 可查看媒体参数、解析音视频、转码格式、压缩视频和提取音频。',
    plain: '遇到视频太大、格式打不开、要抽音频或转 mp4，通常先想到 FFmpeg。',
    officialPoint: 'FFmpeg 官方文档说明 ffmpeg 命令会读取输入文件，处理音视频流，并输出到目标文件。',
    beginnerTakeaway: '先用一个小文件试命令，再批量处理。',
    caution: '转码会影响质量、体积和编码兼容性，参数不要盲目复制。',
    useCases: ['媒体解析', '格式转码', '视频压缩'],
    tags: ['ffmpeg -i', '转码', '音视频'],
    version: 'FFmpeg 文档',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'FFmpeg documentation',
    sourceUrl: 'https://ffmpeg.org/ffmpeg.html',
    image: '/images/cards/ffmpeg-commands.webp'
  },
  {
    id: 'dependency-ecosystem',
    title: '常用依赖生态',
    category: 'AI 配套技术',
    summary: 'Node、Python、Java、Docker 和 FFmpeg 各有常用依赖与包管理方式。',
    plain: '前端常用 npm，Python 常用 pip，Java 常用 Maven，容器用镜像，音视频用编码库。',
    officialPoint: 'npm、pip、Maven、Docker Hub 等官方文档分别维护依赖安装和包管理规范。',
    beginnerTakeaway: '先确认项目语言，再用对应包管理器安装依赖。',
    caution: '全局安装会影响系统环境，项目依赖优先写进项目配置文件。',
    useCases: ['补全依赖', '启动项目', '开发环境搭建'],
    tags: ['npm', 'pip', 'Maven', 'Docker'],
    version: '依赖管理通识',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'npm docs',
    sourceUrl: 'https://docs.npmjs.com/',
    image: '/images/cards/dependency-ecosystem.webp'
  },
  {
    id: 'frontend-framework-map',
    title: '前端框架地图',
    category: '前端 & 网页搭建',
    summary: 'Vue、React、Angular、Next.js、Nuxt、Svelte、SolidJS、UniApp、Taro 等框架服务不同场景。',
    plain: 'Vue 易上手，React 生态大，Angular 更完整厚重，Next/Nuxt 适合服务端渲染，UniApp/Taro 偏跨端。',
    officialPoint: '各框架官方文档分别说明自身定位、组件模型、渲染方式和适用生态。',
    beginnerTakeaway: '先看项目目标：网页、后台、小程序、跨端、还是大型企业系统。',
    caution: '不要只按热度选框架，要看团队经验、生态和部署方式。',
    useCases: ['个人主页', '后台系统', '跨端应用', '静态站'],
    tags: ['Vue', 'React', 'Next.js', 'UniApp'],
    version: '前端通识',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'MDN Client-side frameworks',
    sourceUrl: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries',
    image: '/images/cards/frontend-framework-map.webp'
  },
  {
    id: 'database-map',
    title: '数据库极简归类',
    category: '数据 & 存储',
    summary: '关系型、非关系型、搜索型、时序型和分析型数据库适合不同数据形态。',
    plain: '表格业务数据用 MySQL/PostgreSQL，缓存用 Redis，文档用 MongoDB，搜索用 Elasticsearch，分析用 ClickHouse。',
    officialPoint: '各数据库官方文档会说明自己的数据模型、查询能力和主要应用场景。',
    beginnerTakeaway: '先看数据长什么样，再选数据库。',
    caution: '不要一个库包打天下；搜索、缓存、事务、分析往往需要不同工具。',
    useCases: ['业务系统', '缓存', '全文搜索', '报表分析'],
    tags: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB'],
    version: '数据库通识',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'PostgreSQL docs',
    sourceUrl: 'https://www.postgresql.org/docs/current/intro-whatis.html',
    image: '/images/cards/database-map.webp'
  },
  {
    id: 'remote-networking-basics',
    title: '远程连接与网络中转',
    category: 'AI 配套技术',
    summary: '远程访问、隧道、代理、端口监听和服务托管用于跨设备或跨网络连接服务。',
    plain: '它们像给服务开路：让你从另一台电脑访问本机服务，或把本地服务临时暴露出去。',
    officialPoint: 'SSH、代理、隧道和云服务文档通常会说明认证、端口和访问控制要求。',
    beginnerTakeaway: '能连上不等于安全，先想谁能访问、访问什么、怎么关闭。',
    caution: '内网穿透、端口监听和远程权限必须设置认证、最小权限和日志。',
    useCases: ['远程调试', '服务预览', '跨网络访问'],
    tags: ['SSH', 'Tunnel', 'Proxy', 'Port'],
    version: '网络运维通识',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'OpenSSH manual',
    sourceUrl: 'https://www.openssh.com/manual.html',
    image: '/images/cards/remote-networking-basics.webp'
  },
  {
    id: 'security-risk-taxonomy',
    title: '进程注入与接管风险',
    category: '进阶常识',
    summary: '内存注入、进程挂载、端口劫持、后门驻留、提权等属于高风险安全概念，应只用于防御识别和合规审计。',
    plain: '这些词不是普通自动化，而是可能绕过权限、接管程序或隐藏驻留的危险行为。学习时要站在防守角度。',
    officialPoint: 'MITRE ATT&CK 将提权、持久化、防御规避、命令控制等行为作为攻击技术分类进行防御研究。',
    beginnerTakeaway: '看到“注入、劫持、后门、提权”，先把它归为安全风险。',
    caution: '本知识库不提供入侵、后门、提权、绕过权限或隐蔽驻留的操作步骤。',
    useCases: ['安全意识', '日志审计', '风险识别'],
    tags: ['安全风险', 'MITRE ATT&CK', '防御'],
    version: '防御识别卡',
    updated: '2026-05',
    sourceLevel: '官方已核',
    sourceName: 'MITRE ATT&CK',
    sourceUrl: 'https://attack.mitre.org/',
    image: '/images/cards/security-risk-taxonomy.webp'
  },
  {
    id: 'feishu-doc-preference',
    title: '飞书文档修改偏好',
    category: 'AI 行业 & 场景应用',
    summary: '对飞书文档修改时，不直接覆盖原文，而用紫色文字和删除线标记变更。',
    plain: '这是一条个人协作规则：改文档要像修订模式，让你能看见哪里被改了、原文是什么。',
    officialPoint: '这条来自你的个人偏好，适合写入 AGENTS.md 或 skill，作为项目协作规则。',
    beginnerTakeaway: '偏好规则要写清楚“什么时候用、怎么标记、不能做什么”。',
    caution: '如果目标平台不支持颜色或删除线，要先说明替代标记方式。',
    useCases: ['飞书文档修改', '审阅留痕', '协作规范'],
    tags: ['飞书', '个人偏好', '修订'],
    version: '用户规则',
    updated: '2026-05',
    sourceLevel: '待人工复核',
    sourceName: '用户语音笔记',
    sourceUrl: 'http://192.168.31.55:8000/index.html',
    image: '/images/cards/feishu-doc-preference.webp'
  },
  {
    id: 'personal-homepage-demo',
    title: '个人主页开发流程',
    category: '前端 & 网页搭建',
    summary: '先做基础 demo，再让 Agent 根据项目沉淀原则、组件规范和后续迭代计划。',
    plain: '别一开始就追求完美。先跑起来一个能看的版本，再逐步补视觉、内容、交互和部署。',
    officialPoint: 'VitePress、Vue、React 等官方文档都建议从最小项目开始，逐步扩展结构和组件。',
    beginnerTakeaway: '先可运行，再变好看，再写规范。',
    caution: '不要让 Agent 过早生成太多抽象规范，先让实际页面教你需要什么规则。',
    useCases: ['个人主页', '作品集', '知识库站点'],
    tags: ['Demo', 'Vue', 'VitePress'],
    version: '项目方法卡',
    updated: '2026-05',
    sourceLevel: '双源可追溯',
    sourceName: 'VitePress guide',
    sourceUrl: 'https://vitepress.dev/guide/what-is-vitepress',
    image: '/images/cards/personal-homepage-demo.webp'
  },
  {
    id: 'ai-basic-map',
    title: 'AI 基础关系图',
    category: 'AI 基础认知',
    summary: '人工智能是大范围，机器学习是方法，深度学习是其中一种，大模型是深度学习发展出的重要形态。',
    plain: '先把层级理清：AI 像总学科，机器学习像让机器从数据里学，深度学习像用神经网络学，大模型像规模更大的深度学习模型。',
    officialPoint: 'Stanford 与主流机器学习课程通常把机器学习视为 AI 的重要分支，深度学习是机器学习中的神经网络方法。',
    beginnerTakeaway: '不要把 AI、机器学习、深度学习、大模型混成一个词。',
    caution: '通俗解释可以简化层级，但不要说“大模型等于全部 AI”。',
    useCases: ['入门学习', '术语区分', '课程路线'],
    tags: ['AI', 'ML', 'DL'],
    version: 'AI 通识基础',
    updated: '2026-06',
    sourceLevel: '双源可追溯',
    sourceName: 'Stanford CS229',
    sourceUrl: 'https://cs229.stanford.edu/',
    image: '/images/cards/knowledge-framework.webp'
  },
  {
    id: 'generative-ai-aigc',
    title: '生成式 AI / AIGC',
    category: 'AI 基础认知',
    summary: '生成式 AI 指能生成文本、图片、音频、视频、代码等新内容的 AI。',
    plain: '它不是只做分类判断，而是能产出东西：写文案、画图、生成代码或总结文章。',
    officialPoint: 'OpenAI、Google、Microsoft 等官方材料都把生成式 AI 作为生成内容的模型能力来介绍。',
    beginnerTakeaway: '生成式 AI 的关键词是“生成内容”，AIGC 更偏“AI 生成内容”的应用说法。',
    caution: '能生成不代表一定真实，事实、版权和隐私仍要检查。',
    useCases: ['写作', '配图', '视频草稿', '代码辅助'],
    tags: ['生成式 AI', 'AIGC', '内容生成'],
    version: 'AI 通识基础',
    updated: '2026-06',
    sourceLevel: '双源可追溯',
    sourceName: 'OpenAI ChatGPT',
    sourceUrl: 'https://openai.com/chatgpt/',
    image: '/images/cards/image-generation.webp'
  },
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    category: '主流大模型体系',
    summary: 'OpenAI 面向个人和团队的 AI 对话产品，可用于问答、写作、学习、分析和多模态任务。',
    plain: '你可以把 ChatGPT 当成会对话的 AI 工作台：问问题、改文案、总结资料、分析图片、辅助学习。',
    officialPoint: 'ChatGPT 官方页面和帮助中心是确认功能、套餐、可用模型与隐私设置的权威入口。',
    beginnerTakeaway: 'ChatGPT 是产品入口，不等于某一个固定模型。',
    caution: '回答可能出错；重要内容要看来源、日期和证据。',
    useCases: ['学习问答', '写作润色', '资料总结', '图片理解'],
    tags: ['OpenAI', 'ChatGPT', '对话产品'],
    version: 'OpenAI 官方产品',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'OpenAI ChatGPT',
    sourceUrl: 'https://openai.com/chatgpt/',
    image: '/images/cards/responses-api.webp'
  },
  {
    id: 'html',
    title: 'HTML',
    category: '前端 & 网页搭建',
    summary: 'HTML 是网页内容结构语言，用标签描述标题、段落、链接、图片、表单等页面元素。',
    plain: 'HTML 像网页骨架：告诉浏览器哪里是标题、哪里是图片、哪里是按钮。',
    officialPoint: 'MDN 将 HTML 介绍为用于构建网页结构和内容的标记语言。',
    beginnerTakeaway: 'HTML 管结构，CSS 管样式，JavaScript 管交互。',
    caution: 'HTML 不是编程语言，不负责复杂逻辑。',
    useCases: ['网页结构', '静态页面', '知识卡片内容'],
    tags: ['HTML', '网页', '结构'],
    version: 'MDN Web Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'MDN HTML',
    sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    image: '/images/cards/web-performance.webp'
  },
  {
    id: 'markdown',
    title: 'Markdown',
    category: '前端 & 网页搭建',
    summary: 'Markdown 是轻量标记语法，用纯文本写标题、列表、链接、图片和代码块。',
    plain: '它像好读的文本格式：不用写复杂 HTML，也能写出结构清楚的文档。',
    officialPoint: 'CommonMark 和 Markdown Guide 维护了 Markdown 基础语法与兼容说明。',
    beginnerTakeaway: '写知识库、README、笔记和文档时优先用 Markdown。',
    caution: '不同平台支持的扩展语法不完全一样。',
    useCases: ['README', '知识卡片', '项目说明', '笔记'],
    tags: ['Markdown', 'README', '文档'],
    version: 'Markdown 基础语法',
    updated: '2026-06',
    sourceLevel: '双源可追溯',
    sourceName: 'CommonMark',
    sourceUrl: 'https://commonmark.org/help/',
    image: '/images/cards/knowledge-framework.webp'
  },
  {
    id: 'github',
    title: 'GitHub',
    category: 'AI 配套技术',
    summary: 'GitHub 是代码托管与协作平台，用远端仓库保存、分享和协作管理项目。',
    plain: 'Git 负责记录本地历史，GitHub 负责把仓库放到网上，方便备份、分享和多人协作。',
    officialPoint: 'GitHub 官方文档围绕 repositories、commits、branches、issues、pull requests 等协作功能组织说明。',
    beginnerTakeaway: 'Git 是工具，GitHub 是平台。',
    caution: '公开仓库会被别人看到，不要上传密码、密钥和个人隐私文件。',
    useCases: ['代码备份', '开源项目', '多人协作', '部署触发'],
    tags: ['Repository', 'Remote', 'Collaboration'],
    version: 'GitHub Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'GitHub Docs',
    sourceUrl: 'https://docs.github.com/en/repositories',
    image: '/images/cards/github-actions.webp'
  },
  {
    id: 'git-core-flow',
    title: 'Git 核心流程',
    category: 'AI 配套技术',
    summary: 'Git 通过 init、commit、branch、HEAD、.gitignore 等概念记录项目变化。',
    plain: '普通文件夹 init 后变成仓库；commit 是存档点；branch 是不同开发线；HEAD 表示你现在站在哪个提交上；.gitignore 表示哪些文件不纳入管理。',
    officialPoint: 'Git 官方文档把 init、commit、branch、HEAD 等作为版本控制的基础概念和命令。',
    beginnerTakeaway: '先理解“工作区 → 暂存区 → 本地仓库 → 远端仓库”的流向。',
    caution: '删除 .git 会取消版本管理；操作前要确认是否需要保留历史。',
    useCases: ['初始化项目', '保存历史', '创建分支', '忽略文件'],
    tags: ['init', 'commit', 'branch', 'HEAD'],
    version: 'Git 官方文档',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'Git documentation',
    sourceUrl: 'https://git-scm.com/docs',
    image: '/images/cards/git.webp'
  },
  {
    id: 'git-undo-sync',
    title: 'Git 后悔药与同步',
    category: 'AI 配套技术',
    summary: 'discard、reset、revert、fetch、pull、merge 分别处理放弃修改、回退历史和同步远端。',
    plain: '没提交的改动用 discard；自己分支可谨慎 reset；多人协作优先 revert；同步远端常用 pull，也可 fetch 后再 merge。',
    officialPoint: 'Git 官方文档分别提供 reset、revert、fetch、pull、merge 等命令说明。',
    beginnerTakeaway: '多人协作时优先用 revert，少用会改写历史的 reset/rebase。',
    caution: 'reset、rebase 和强推可能影响别人，协作分支不要随便用。',
    useCases: ['撤销错误', '同步远端', '解决冲突', '安全回退'],
    tags: ['reset', 'revert', 'pull', 'merge'],
    version: 'Git 官方文档',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'Git documentation',
    sourceUrl: 'https://git-scm.com/docs',
    image: '/images/cards/git.webp'
  },
  {
    id: 'github-collaboration',
    title: 'GitHub 协作流程',
    category: 'AI 配套技术',
    summary: 'Fork、branch、Pull Request、review、issues、releases、star 组成 GitHub 协作基础。',
    plain: '没有权限就先 fork 到自己账号，改完开 PR；有协作权限就建分支改，提交 PR 让管理员审核合并。',
    officialPoint: 'GitHub 官方文档将 pull requests 用于提出、讨论和合并代码改动，issues 用于问题跟踪。',
    beginnerTakeaway: '开源贡献的常规路线是 fork → branch → commit → push → Pull Request。',
    caution: '提 PR 前先同步上游最新代码，避免大量冲突。',
    useCases: ['开源贡献', '代码审核', '问题讨论', '版本发布'],
    tags: ['Fork', 'Pull Request', 'Issues', 'Review'],
    version: 'GitHub Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'GitHub Pull Requests',
    sourceUrl: 'https://docs.github.com/en/pull-requests',
    image: '/images/cards/github-actions.webp'
  },
  {
    id: 'github-pages',
    title: 'GitHub Pages',
    category: '前端 & 网页搭建',
    summary: 'GitHub Pages 可把仓库中的静态文件发布成公网网页。',
    plain: '它适合个人主页、文档站、知识库这种静态网站。代码推到 GitHub 后，Pages 会把网页放到一个公开链接上。',
    officialPoint: 'GitHub Pages 官方文档说明可从分支或 GitHub Actions 发布静态站点。',
    beginnerTakeaway: '如果手机看到 README，通常是 Pages 发布源选错或没有发布构建后的 dist。',
    caution: '项目页通常需要正确配置 base 路径，例如 /仓库名/。',
    useCases: ['个人主页', 'VitePress 文档', '静态知识库', '公网预览'],
    tags: ['Pages', 'Static Site', 'Deploy'],
    version: 'GitHub Pages Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'GitHub Pages docs',
    sourceUrl: 'https://docs.github.com/en/pages',
    image: '/images/cards/github-actions.webp'
  },
  {
    id: 'vercel',
    title: 'Vercel',
    category: '前端 & 网页搭建',
    summary: 'Vercel 是前端部署平台，常用于静态站、Next.js 和其他现代前端项目。',
    plain: '你把项目连接到 GitHub，Vercel 可以自动安装依赖、构建网站，并给你一个公网链接。',
    officialPoint: 'Vercel 官方文档覆盖项目导入、构建命令、输出目录、环境变量和部署流程。',
    beginnerTakeaway: 'GitHub Pages 简单免费，Vercel 更适合前端项目自动部署和域名管理。',
    caution: '部署失败时先查 build command、output directory、Node 版本和环境变量。',
    useCases: ['前端部署', '自动预览', '绑定域名', '静态站托管'],
    tags: ['Vercel', 'Deploy', 'Frontend'],
    version: 'Vercel Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'Vercel Docs',
    sourceUrl: 'https://vercel.com/docs',
    image: '/images/cards/web-performance.webp'
  },
  {
    id: 'coze',
    title: '扣子 / Coze',
    category: 'AI 行业 & 场景应用',
    summary: '扣子 / Coze 是用于搭建 AI Bot、Agent、知识库和工作流的低代码平台。',
    plain: '它适合不想从零写代码的人：把模型、知识库、插件和流程拼起来，做一个能对话和办事的机器人。',
    officialPoint: 'Coze 官方文档提供 Bot、插件、工作流和知识库等能力说明。',
    beginnerTakeaway: 'Coze 更偏“快速搭 Bot 和 Agent 应用”。',
    caution: '平台能力、模型接入和发布渠道会更新，具体以官方控制台为准。',
    useCases: ['客服 Bot', '个人助手', '知识库问答', '工作流'],
    tags: ['Coze', '扣子', 'Bot', '低代码'],
    version: 'Coze Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'Coze Docs',
    sourceUrl: 'https://www.coze.com/docs',
    image: '/images/cards/agent.webp'
  },
  {
    id: 'dify',
    title: 'Dify',
    category: 'AI 行业 & 场景应用',
    summary: 'Dify 是开源 LLM 应用开发平台，可组合模型、提示词、知识库、Agent 和工作流。',
    plain: '它像 AI 应用搭建台：你可以配置模型、接知识库、写提示词、设计流程，再发布成应用。',
    officialPoint: 'Dify 官方文档和开源仓库介绍其用于构建生成式 AI 应用、工作流和知识库问答。',
    beginnerTakeaway: 'Dify 适合把“提示词 + 知识库 + 流程”变成可用应用。',
    caution: '自部署要考虑模型密钥、数据库、向量库、权限和运维成本。',
    useCases: ['AI 应用', '知识库问答', '工作流编排', '企业助手'],
    tags: ['Dify', 'LLM App', 'Workflow', 'RAG'],
    version: 'Dify Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'Dify Docs',
    sourceUrl: 'https://docs.dify.ai/en',
    image: '/images/cards/rag.webp'
  },
  {
    id: 'fastgpt',
    title: 'FastGPT',
    category: 'AI 行业 & 场景应用',
    summary: 'FastGPT 是面向知识库问答和 AI 工作流的开源平台，常用于 RAG 应用。',
    plain: '你可以把资料导进去，让系统检索相关内容，再让模型回答；也可以编排简单流程。',
    officialPoint: 'FastGPT 官方文档介绍了知识库、应用编排、工作流和模型接入等能力。',
    beginnerTakeaway: 'FastGPT 的重点是知识库问答和 RAG 应用。',
    caution: '知识库效果取决于文档切分、检索质量和来源复核。',
    useCases: ['企业知识库', '文档问答', 'RAG', '流程编排'],
    tags: ['FastGPT', 'RAG', '知识库'],
    version: 'FastGPT Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'FastGPT Docs',
    sourceUrl: 'https://doc.fastgpt.io/',
    image: '/images/cards/rag.webp'
  },
  {
    id: 'n8n',
    title: 'n8n',
    category: 'AI 行业 & 场景应用',
    summary: 'n8n 是工作流自动化平台，可连接应用、API、数据库和 AI 节点。',
    plain: '它像自动化流水线：某个事件触发后，按步骤调用不同工具，比如读表格、发消息、调用 AI、写数据库。',
    officialPoint: 'n8n 官方文档提供 workflow、nodes、credentials、AI 相关节点和自动化执行说明。',
    beginnerTakeaway: 'n8n 更偏“把很多工具串起来自动执行”。',
    caution: '自动化会真实改数据或发消息，必须管好权限、凭证和日志。',
    useCases: ['自动日报', '消息通知', 'API 串联', 'AI 自动化'],
    tags: ['n8n', 'Workflow', 'Automation', 'AI'],
    version: 'n8n Docs',
    updated: '2026-06',
    sourceLevel: '官方已核',
    sourceName: 'n8n Docs',
    sourceUrl: 'https://docs.n8n.io/',
    image: '/images/cards/api-plugin-function-command.webp'
  },
  {
    id: 'ai-tool-selection-map',
    title: 'AI 工具选择总览',
    category: 'AI 行业 & 场景应用',
    summary: '普通人选 AI 工具时，先按任务分成聊天写作、图片、视频、代码、办公和搜索六类。',
    plain: '不要问“哪个 AI 最强”，先问“我要做什么”。写文章、画图、做视频、写代码、查资料、办公自动化，对工具的要求完全不同。',
    officialPoint: '各类 AI 产品的功能、地区可用性、套餐和限制会持续变化，最终以对应产品官网和帮助中心为准。',
    beginnerTakeaway: '选工具先看任务类型，再看语言、访问条件、价格、质量和是否能接入自己的工作流。',
    caution: '不要把临时榜单当长期答案；价格、免费额度、模型版本和功能入口都会变。',
    useCases: ['个人工具组合', '学习路线规划', '项目选型', '面试解释'],
    tags: ['工具选型', '国内外对比', 'AI 应用'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'OpenAI ChatGPT product page',
    sourceUrl: 'https://openai.com/chatgpt/',
    image: '/images/cards/knowledge-framework.webp'
  },
  {
    id: 'ai-chat-writing-tools',
    title: '聊天写作类 AI 工具',
    category: 'AI 行业 & 场景应用',
    summary: '聊天写作类工具适合写文章、翻译、总结、分析、写代码和多轮问答。',
    plain: '国外代表有 ChatGPT、Claude；国内代表有通义千问、文心一言、Kimi、豆包。中文日常写作用国内工具更顺手，英文材料、复杂推理或代码任务可对比国外工具。',
    officialPoint: '对话类产品通常在官网说明模型、文件理解、多模态、联网搜索、隐私和套餐限制等能力。',
    beginnerTakeaway: '中文写作优先看中文表达和长文档能力；英文、代码和复杂规划优先看推理、上下文和稳定性。',
    caution: '任何聊天工具都可能产生幻觉；重要事实、法律、财务、技术结论必须回到来源核对。',
    useCases: ['中文写作', '英文润色', '长文总结', '代码解释'],
    tags: ['ChatGPT', 'Claude', 'Kimi', '豆包'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'OpenAI ChatGPT product page',
    sourceUrl: 'https://openai.com/chatgpt/',
    image: '/images/cards/responses-api.webp'
  },
  {
    id: 'ai-image-tool-selection',
    title: '图片生成类 AI 工具',
    category: 'AIGC 应用细分',
    summary: '图片生成工具把文字、参考图或草图变成视觉素材，适合配图、海报、概念图和设计草稿。',
    plain: '国外常见 Midjourney、DALL·E、Stable Diffusion；国内常见通义万相、即梦、LiblibAI 等。国内工具中文提示更方便，追求极致风格和画质时可横向比较国外工具。',
    officialPoint: '图像工具通常在官网说明文本生图、图生图、图片编辑、版权/使用条款和付费额度等规则。',
    beginnerTakeaway: '做 CAD 示意图、工程效果图或知识库配图时，先用中文工具快速出草图，再按质量需求升级工具。',
    caution: '图片中的文字、结构、比例、事实细节和版权授权都要人工复核，不适合直接当正式工程图。',
    useCases: ['知识卡片配图', '海报草图', '工程示意图', '产品渲染草案'],
    tags: ['文生图', 'Midjourney', '即梦', 'Stable Diffusion'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'OpenAI Image generation guide',
    sourceUrl: 'https://developers.openai.com/api/docs/guides/images',
    image: '/images/cards/image-generation.webp'
  },
  {
    id: 'ai-video-tool-selection',
    title: '视频生成类 AI 工具',
    category: 'AIGC 应用细分',
    summary: '视频生成工具根据文字或图片生成短视频，重点考验运动稳定性、镜头连续性和生成成本。',
    plain: '国外常见 Sora、Runway、Pika；国内常见可灵、即梦、Vidu。视频生成已经是国内 AI 工具很强的方向之一，但长视频和复杂动作仍需要检查。',
    officialPoint: '视频工具的开放范围、时长限制、分辨率、生成速度、商用规则和价格都以官方页面为准。',
    beginnerTakeaway: '短视频草稿、产品演示和分镜验证可以先试国内工具；复杂镜头要多次测试并保留人工剪辑。',
    caution: '人物一致性、物理动作、复杂运动和长视频稳定性仍是常见风险，不要直接用于严肃交付。',
    useCases: ['短视频分镜', '产品演示草稿', '教学动画', '营销素材'],
    tags: ['Sora', 'Runway', '可灵', 'Vidu'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'OpenAI Sora',
    sourceUrl: 'https://openai.com/sora/',
    image: '/images/cards/sora-video.webp'
  },
  {
    id: 'ai-coding-tool-selection',
    title: '代码编程类 AI 工具',
    category: 'AI 配套技术',
    summary: '代码类 AI 工具可用于补全代码、解释代码、找 bug、写测试和辅助修改项目。',
    plain: '国外常见 GitHub Copilot、Cursor、ChatGPT/Codex；国内常见通义灵码、CodeGeeX、Fitten Code。小脚本和中文注释场景可先用国内免费工具，复杂项目可比较 Cursor、Codex 等项目级工具。',
    officialPoint: '代码工具通常在官方文档说明 IDE 插件、上下文读取、代码补全、代理执行、隐私和计费方式。',
    beginnerTakeaway: '补全工具适合写局部代码；项目级 Agent 适合读文件、改代码、跑命令和验证结果。',
    caution: '代码类 AI 不能代替审查。提交前必须看 diff、跑测试，并避免上传密钥、账号和隐私数据。',
    useCases: ['Python 脚本', '前端项目', 'Bug 修复', '测试用例'],
    tags: ['Cursor', 'Copilot', 'Codex', '通义灵码'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'GitHub Copilot docs',
    sourceUrl: 'https://docs.github.com/en/copilot',
    image: '/images/cards/codex-agent.webp'
  },
  {
    id: 'ai-office-tool-selection',
    title: '办公效率类 AI 工具',
    category: 'AI 行业 & 场景应用',
    summary: '办公 AI 主要用于文档摘要、PPT 草稿、Excel 公式、会议纪要和协作软件内的内容处理。',
    plain: '国外常见 Microsoft Copilot、Google Gemini、Notion AI；国内常见 WPS AI、钉钉 AI、飞书 AI、腾讯文档 AI。选办公 AI 时，集成在哪个办公软件里通常比单次聊天能力更重要。',
    officialPoint: '办公 AI 的可用功能、数据权限、企业管理和收费方式通常由对应办公软件官方说明。',
    beginnerTakeaway: '已经用 WPS、钉钉、飞书或腾讯文档，就优先试它们内置的 AI，迁移成本更低。',
    caution: '涉及公司资料、客户信息和合同内容时，要先确认企业权限、隐私政策和是否允许上传。',
    useCases: ['会议纪要', 'PPT 初稿', '表格公式', '文档摘要'],
    tags: ['WPS AI', '飞书 AI', 'Copilot', '办公自动化'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'Microsoft 365 Copilot',
    sourceUrl: 'https://www.microsoft.com/en-us/microsoft-365/copilot',
    image: '/images/cards/structured-outputs.webp'
  },
  {
    id: 'ai-search-tool-selection',
    title: '搜索知识类 AI 工具',
    category: 'AI 行业 & 场景应用',
    summary: 'AI 搜索工具把联网检索和总结结合起来，适合查资料、看来源、做初步调研。',
    plain: '国外常见 Perplexity、ChatGPT Search、You.com；国内常见 Kimi、秘塔 AI 搜索、天工 AI。查英文前沿资料更适合国外搜索，查中文互联网和国内资料更适合国内工具。',
    officialPoint: '搜索类工具应重点查看是否提供来源链接、引用方式、搜索范围、隐私说明和付费限制。',
    beginnerTakeaway: '搜资料不要只看总结，要点开来源确认日期、原文语境和是否可靠。',
    caution: 'AI 搜索可能引用不完整、误读网页或混合旧信息；用于决策前必须二次核对。',
    useCases: ['资料调研', '竞品搜索', '论文/文章摘要', '来源核验'],
    tags: ['Perplexity', '秘塔 AI 搜索', 'Kimi', '联网搜索'],
    version: '工具选型框架',
    updated: '2026-06',
    sourceLevel: '待人工复核',
    sourceName: 'Perplexity',
    sourceUrl: 'https://www.perplexity.ai/',
    image: '/images/cards/rag.webp'
  }
]
