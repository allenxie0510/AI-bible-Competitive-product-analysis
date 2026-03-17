import { LucideIcon, BookOpen, Brain, Users, Layout, Cpu, Globe, DollarSign, Target, ShieldAlert, CheckCircle2 } from 'lucide-react';

export interface AppInfo {
  id: string;
  name: string;
  developer: string;
  launchDate: string;
  downloads?: string;
  rating?: string;
  mau?: string;
  scale?: string;
  model?: string;
  features: string[];
  highlights: string[];
  businessModel: string;
  swot?: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
}

export const TRADITIONAL_APPS: AppInfo[] = [
  {
    id: 'youversion',
    name: 'YouVersion Bible App',
    developer: 'Life.Church (美国)',
    launchDate: '2008',
    downloads: '5亿+',
    rating: '4.9',
    mau: '1.5亿+',
    features: ['2000+ 译本/语言', '读经计划', '灵修笔记', '音频圣经', '视频内容', '社交分享'],
    highlights: ['极简 UI', '跨平台同步', '个性化推荐'],
    businessModel: '完全免费 (依靠捐赠)',
    swot: {
      strengths: ['品牌认知度极高', '内容库最全面', '跨语言支持最佳'],
      weaknesses: ['AI 功能几乎为零', '个性化程度有限'],
      opportunities: ['接入 AI 问答', '深化社交功能'],
      threats: ['新兴 AI 竞品冲击']
    }
  },
  {
    id: 'biblegateway',
    name: 'Bible Gateway',
    developer: 'Zondervan (HarperCollins 旗下)',
    launchDate: '1995 (网站) / 2010 (APP)',
    downloads: '1亿+',
    rating: '4.8',
    features: ['多版本对照', '原文工具', '高级搜索', '注释资源', '每日灵修'],
    highlights: ['学术研究导向', '原文研究', '资源聚合'],
    businessModel: '免费基础版 + Plus 订阅 ($3.99/月)',
    swot: {
      strengths: ['学术深度', '庞大的资源库'],
      weaknesses: ['UI 略显陈旧', '学习曲线陡峭'],
      opportunities: ['AI 研究助手', 'UI 现代化'],
      threats: ['移动优先的竞品']
    }
  },
  {
    id: 'blueletterbible',
    name: 'Blue Letter Bible',
    developer: 'Sowing Circle (非营利)',
    launchDate: '1996 (网站) / 2012 (APP)',
    downloads: '5000万+',
    rating: '4.9',
    features: ['原文字典', '经文解析', '对照翻译', '注释集成', '地图工具', '时间轴'],
    highlights: ['深度词义分析', '神学深度'],
    businessModel: '完全免费 (依靠捐赠)',
    swot: {
      strengths: ['原文工具', '免费高质量内容'],
      weaknesses: ['受众较窄', '界面复杂'],
      opportunities: ['AI 驱动的原文解析'],
      threats: ['Logos 移动端改进']
    }
  },
  {
    id: 'logos',
    name: 'Logos Bible Software',
    developer: 'Faithlife Corporation',
    launchDate: '1992 (桌面) / 2014 (APP)',
    downloads: '2000万+',
    rating: '4.7',
    features: ['图书馆系统', '智能搜索', '工作流', '讲道准备', '团队协作'],
    highlights: ['专业级工具', '庞大生态系统', '讲道工作流'],
    businessModel: '付费套装 ($294 - $10,800)',
    swot: {
      strengths: ['专业领域统治力', '海量图书馆'],
      weaknesses: ['价格极其昂贵', '高度复杂'],
      opportunities: ['AI 讲章助手', '订阅模式增长'],
      threats: ['Sermon AI (B2B 竞品)']
    }
  },
  {
    id: 'olivetree',
    name: 'Olive Tree Bible',
    developer: 'HarperCollins Christian',
    launchDate: '2010',
    downloads: '1500万+',
    rating: '4.8',
    features: ['资源商店', '笔记工具', '高度可定制阅读器', '同步功能'],
    highlights: ['业界最佳阅读体验', '图文混合笔记'],
    businessModel: '内购商城',
    swot: {
      strengths: ['UX/阅读体验', '笔记灵活性'],
      weaknesses: ['生态系统小于 Logos'],
      opportunities: ['AI 增强的笔记组织'],
      threats: ['Bible Chat 集成']
    }
  }
];

export const AI_APPS: AppInfo[] = [
  {
    id: 'bible-ai',
    name: 'Bible AI',
    developer: 'Bible AI Inc.',
    launchDate: '2023',
    scale: '100万+',
    model: 'GPT-4 + 专用圣经微调模型',
    features: ['智能问答', '经文解释', '祷告辅助', '灵修建议', '神学讨论'],
    highlights: ['对话式界面', '上下文理解', '50+ 语言支持'],
    businessModel: '免费限额 + $9.99/月 Pro',
    swot: {
      strengths: ['AI 领域先行者', '先进的模型微调'],
      weaknesses: ['API 成本高', '偶尔出现幻觉'],
      opportunities: ['教会整合', 'B2B API 授权'],
      threats: ['YouVersion 接入 AI']
    }
  },
  {
    id: 'chatholy',
    name: 'ChatHoly Bible',
    developer: 'Holy Apps Studio',
    launchDate: '2023',
    scale: '800K+',
    model: 'Claude + GPT 混合',
    features: ['圣经机器人', '情感支持', '查经向导', '讲道大纲', '经文记忆'],
    highlights: ['情感智能识别', '游戏化设计', 'AI + 真人小组'],
    businessModel: '免费版 + $7.99/月 Premium',
    swot: {
      strengths: ['情感智商高', '用户参与度高'],
      weaknesses: ['神学深度不足', '品牌信任度'],
      opportunities: ['青少年市场', '心理健康整合'],
      threats: ['通用型 AI 机器人']
    }
  },
  {
    id: 'sermon-ai',
    name: 'Sermon AI',
    developer: 'Ministry Tech Solutions',
    launchDate: '2023',
    scale: '500K+',
    model: '自研微调模型',
    features: ['讲章生成', '经文研究', '大纲助手', '例证库', '幻灯片生成'],
    highlights: ['B2B 导向', '节省 70% 讲道准备时间'],
    businessModel: '$29/月 牧者版 + $99/月 教会版',
    swot: {
      strengths: ['B2B 细分市场', '效率导向'],
      weaknesses: ['AI 讲道的争议性', '受众较窄'],
      opportunities: ['神学教育工具'],
      threats: ['Logos AI 功能']
    }
  },
  {
    id: 'biblechat-olivetree',
    name: 'Bible Chat (Olive Tree)',
    developer: 'HarperCollins',
    launchDate: '2024',
    scale: '300K+',
    model: 'GPT + RAG',
    features: ['资源搜索', '智能摘要', '经文定位', '学习路径推荐'],
    highlights: ['RAG 确保可信资源', '与图书馆集成'],
    businessModel: '免费 + $4.99/月 高级版',
    swot: {
      strengths: ['可信的内容源', '图书馆集成'],
      weaknesses: ['入场较晚', '对话深度有限'],
      opportunities: ['带动传统图书馆销售'],
      threats: ['Bible Chat 的统治地位']
    }
  },
  {
    id: 'echo-ai',
    name: 'Echo AI Bible',
    developer: 'Echo Worship Tech',
    launchDate: '2023',
    scale: '400K+',
    model: '自研语音 + 文本多模态',
    features: ['语音对话', '经文朗诵', '祷告助手', '听力学习'],
    highlights: ['语音优先设计', '场景化播放'],
    businessModel: '基础免费 + $6.99/月 Pro',
    swot: {
      strengths: ['无障碍支持', '语音优先细分市场'],
      weaknesses: ['语音识别准确率', '功能集较小'],
      opportunities: ['智能音箱整合', '老年人市场'],
      threats: ['Siri/Alexa 圣经技能']
    }
  }
];

export const USER_PERSONAS = [
  { name: '传统：普通信徒', value: 60, color: '#6366f1' },
  { name: '传统：深度学习者', value: 25, color: '#8b5cf6' },
  { name: '传统：牧者/讲员', value: 10, color: '#a855f7' },
  { name: '传统：神学生', value: 5, color: '#d946ef' },
];

export const AI_USER_PERSONAS = [
  { name: 'AI：数字原住民', value: 40, color: '#10b981' },
  { name: 'AI：忙碌职场人', value: 30, color: '#3b82f6' },
  { name: 'AI：新信徒', value: 20, color: '#f59e0b' },
  { name: 'AI：科技爱好者', value: 10, color: '#ef4444' },
];
