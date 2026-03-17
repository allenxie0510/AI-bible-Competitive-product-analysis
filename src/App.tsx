/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Brain, Users, Layout, Cpu, Globe, DollarSign, 
  Target, ShieldAlert, CheckCircle2, ChevronRight, Star, 
  Download, Activity, TrendingUp, Zap, MessageSquare, 
  Mic, Smartphone, Search, Layers, Briefcase, GraduationCap,
  Heart, Rocket, AlertTriangle, Lightbulb, Map, Clock
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TRADITIONAL_APPS, AI_APPS, USER_PERSONAS, AI_USER_PERSONAS, AppInfo } from './constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Section = ({ title, icon: Icon, children, id }: { title: string, icon: any, children: React.ReactNode, id?: string }) => (
  <section id={id} className="py-16 border-b border-slate-100 last:border-0">
    <div className="flex items-center gap-3 mb-10">
      <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
    </div>
    {children}
  </section>
);

interface AppCardProps {
  key?: string | number;
  app: AppInfo;
  type: 'traditional' | 'ai';
}

const AppCard = ({ app, type }: AppCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-1">{app.name}</h3>
        <p className="text-slate-500 text-sm font-medium">{app.developer} • {app.launchDate}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        {app.rating && (
          <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-sm font-bold">
            <Star size={14} fill="currentColor" />
            {app.rating}
          </div>
        )}
        {app.downloads && (
          <div className="flex items-center gap-1 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
            <Download size={14} />
            {app.downloads}
          </div>
        )}
        {app.scale && (
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-bold">
            <Users size={14} />
            {app.scale}
          </div>
        )}
      </div>
    </div>

    {app.model && (
      <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1 text-sm">
          <Brain size={16} className="text-indigo-500" />
          AI 模型
        </div>
        <p className="text-slate-600 text-sm">{app.model}</p>
      </div>
    )}

    <div className="space-y-6">
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">核心功能</h4>
        <div className="flex flex-wrap gap-2">
          {app.features.map((f, i) => (
            <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium border border-slate-100">
              {f}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">设计亮点</h4>
        <ul className="space-y-2">
          {app.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6 border-t border-slate-50">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">商业模式</span>
          <span className="text-sm font-bold text-slate-900">{app.businessModel}</span>
        </div>
      </div>

      {app.swot && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <p className="text-[10px] font-bold uppercase text-emerald-600 mb-1">优势 (Strengths)</p>
            <p className="text-xs text-emerald-800 leading-tight">{app.swot.strengths[0]}</p>
          </div>
          <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
            <p className="text-[10px] font-bold uppercase text-rose-600 mb-1">劣势 (Weaknesses)</p>
            <p className="text-xs text-rose-800 leading-tight">{app.swot.weaknesses[0]}</p>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const StatCard = ({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
    <div className={cn("p-4 rounded-2xl", color)}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('traditional');

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <TrendingUp size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">全球查经 APP 竞品分析 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: '概览', id: 'overview' },
              { label: '传统巨头', id: 'traditional' },
              { label: 'AI 创新', id: 'ai-powered' },
              { label: '深度分析', id: 'deep-dive' },
              { label: '差异化策略', id: 'strategy' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
            下载 PDF 报告
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {/* Hero Section */}
        <header id="overview" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-8">
              <Zap size={16} />
              竞品分析报告
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              全球基督徒 <span className="text-indigo-600">查经与灵修</span> APP 市场调研
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-slate-400" />
                <span>分析师：AI 产品顾问</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-slate-400" />
                <span>日期：2026年3月17日</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-slate-400" />
                <span>目标用户：全球基督徒</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <StatCard 
              label="市场领导者" 
              value="YouVersion (5亿+)" 
              icon={BookOpen} 
              color="bg-indigo-50 text-indigo-600" 
            />
            <StatCard 
              label="AI 增长率" 
              value="+240% 同比" 
              icon={TrendingUp} 
              color="bg-emerald-50 text-emerald-600" 
            />
            <StatCard 
              label="核心焦点" 
              value="AI 个性化灵修" 
              icon={Brain} 
              color="bg-amber-50 text-amber-600" 
            />
          </div>
        </header>

        {/* Executive Summary */}
        <Section title="执行摘要" icon={Zap}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">市场格局</h3>
              <p className="text-slate-600 leading-relaxed">传统巨头地位稳固，但 AI + 灵修领域仍是一片蓝海，蕴含巨大的创新空间。</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">用户演变</h3>
              <p className="text-slate-600 leading-relaxed">用户对个性化灵修、智能问答及深度社区互动的需求日益增长，不再满足于简单阅读。</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">关键要素</h3>
              <p className="text-slate-600 leading-relaxed">跨语言支持、离线功能及数据隐私是全球化竞争中的核心差异化因素。</p>
            </div>
          </div>
        </Section>

        {/* Traditional Apps */}
        <Section id="traditional" title="全球下载量 TOP 5 传统查经 APP" icon={BookOpen}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRADITIONAL_APPS.map((app) => (
              <AppCard key={app.id} app={app} type="traditional" />
            ))}
          </div>
        </Section>

        {/* AI Apps */}
        <Section id="ai-powered" title="AI 功能 TOP 5 查经 APP" icon={Brain}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_APPS.map((app) => (
              <AppCard key={app.id} app={app} type="ai" />
            ))}
          </div>
        </Section>

        {/* Deep Dive Analysis */}
        <Section id="deep-dive" title="Multi-dimensional Deep Dive" icon={Activity}>
          <div className="space-y-16">
            {/* User Personas */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Users size={24} className="text-indigo-600" />
                用户画像与需求分析
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-6">传统 APP 用户分布</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={USER_PERSONAS}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {USER_PERSONAS.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">普通信徒 (60%)：</span> 日常阅读、读经计划，偏好 YouVersion。</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                      <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">深度学习者 (25%)：</span> 原文研究、神学探索，偏好 Bible Gateway。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-6">AI APP 用户分布</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={AI_USER_PERSONAS}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {AI_USER_PERSONAS.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36}/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">数字原住民 (40%)：</span> 对话式学习、即时回答，追求效率。</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">忙碌职场人 (30%)：</span> 个性化、碎片化学习，注重灵活性。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UX Design Contrast */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 text-white p-10 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Layout size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Layout size={24} className="text-indigo-400" />
                  用户体验 (UX) 设计对比
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4">信息架构</h4>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-center gap-2"><ChevronRight size={16} /> YouVersion：扁平化，3步触达核心</li>
                      <li className="flex items-center gap-2"><ChevronRight size={16} /> Bible Gateway：树状，功能分层清晰</li>
                      <li className="flex items-center gap-2"><ChevronRight size={16} /> Bible AI：对话优先，ChatGPT 式界面</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4">综合评价</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-2xl">
                        <p className="text-xs text-slate-500 mb-1">导航清晰度</p>
                        <p className="text-sm font-bold">YouVersion / AI 类领先</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl">
                        <p className="text-xs text-slate-500 mb-1">操作效率</p>
                        <p className="text-sm font-bold">YouVersion / Bible AI 最佳</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-600 text-white p-10 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Cpu size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Cpu size={24} className="text-indigo-200" />
                  技术架构与商业模式
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-4">核心能力</h4>
                    <p className="text-indigo-50 leading-relaxed">传统 APP 侧重于 <span className="font-bold">内容管理与同步</span>，而 AI APP 核心在于 <span className="font-bold">NLP 对话与 RAG 算法</span>。</p>
                  </div>
                  <div>
                    <h4 className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-4">成本结构</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-white/10 p-4 rounded-2xl">
                        <p className="text-xs text-indigo-200 mb-1">传统模式</p>
                        <p className="text-sm font-bold">固定成本 (存储/带宽)</p>
                      </div>
                      <div className="flex-1 bg-white/10 p-4 rounded-2xl">
                        <p className="text-xs text-indigo-200 mb-1">AI 模式</p>
                        <p className="text-sm font-bold">可变成本 (AI 调用量)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Globalization & Localization */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Globe size={24} className="text-indigo-600" />
                全球化与本地化
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">YouVersion</p>
                  <p className="text-sm font-bold text-slate-900 mb-1">1700+ 语言</p>
                  <p className="text-xs text-slate-500">全球覆盖最广，拥有专门的区域团队。</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Bible Gateway</p>
                  <p className="text-sm font-bold text-slate-900 mb-1">50+ 语言</p>
                  <p className="text-xs text-slate-500">专注于全球主要语言和学术译本。</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Bible AI</p>
                  <p className="text-sm font-bold text-slate-900 mb-1">50+ 语言</p>
                  <p className="text-xs text-slate-500">原生 AI 翻译能力，支持对话式学习。</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Logos</p>
                  <p className="text-sm font-bold text-slate-900 mb-1">10+ 语言</p>
                  <p className="text-xs text-slate-500">在核心神学研究语言中进行深度本地化。</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Strategy & Opportunities */}
        <Section id="strategy" title="市场机会与差异化策略" icon={Target}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">产品差异化建议：AI 灵修伴侣</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">情感智能识别</h4>
                      <p className="text-sm text-slate-600">通过情绪感知推荐相关经文，建立深层情感连接。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">灵命成长追踪</h4>
                      <p className="text-sm text-slate-600">AI 驱动的属灵阶段评估，提供个性化的进阶学习路径。</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">中英双语语境</h4>
                      <p className="text-sm text-slate-600">针对海外华人市场，提供中英对照及双语 AI 解释。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-rose-50 text-rose-600">
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">神学安全护栏</h4>
                      <p className="text-sm text-slate-600">人机协作审核机制，确保 AI 输出的神学准确性与安全性。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[3rem] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">MVP 路线图</h3>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-indigo-500/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500" />
                    <p className="text-xs font-bold text-indigo-400 uppercase mb-1">第一阶段：0-3 个月</p>
                    <p className="text-sm font-medium">多译本阅读 + 基础 AI 问答</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-indigo-500/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-700" />
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">第二阶段：3-6 个月</p>
                    <p className="text-sm font-medium">祷告助手 + 社区协作功能</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-indigo-500/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-700" />
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">第三阶段：6-12 个月</p>
                    <p className="text-sm font-medium">虚拟导师 + 教会 SaaS 整合</p>
                  </div>
                </div>
              </div>
              <button className="mt-12 w-full py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-500 transition-all">
                查看完整战略方案
              </button>
            </div>
          </div>

          {/* Risks & Mitigation */}
          <div className="bg-rose-50 border border-rose-100 p-10 rounded-[3rem]">
            <h3 className="text-2xl font-bold text-rose-900 mb-8 flex items-center gap-3">
              <AlertTriangle size={28} />
              风险评估与应对策略
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-rose-800 mb-2">技术风险</h4>
                <p className="text-sm text-rose-700/80 mb-4">AI 幻觉 / 神学错误</p>
                <div className="p-3 bg-white/50 rounded-xl text-xs font-bold text-rose-900">
                  应对：神学顾问委员会审核 + RAG 知识库
                </div>
              </div>
              <div>
                <h4 className="font-bold text-rose-800 mb-2">市场风险</h4>
                <p className="text-sm text-rose-700/80 mb-4">YouVersion 的免费统治地位</p>
                <div className="p-3 bg-white/50 rounded-xl text-xs font-bold text-rose-900">
                  应对：聚焦个性化灵修，避开同质化竞争
                </div>
              </div>
              <div>
                <h4 className="font-bold text-rose-800 mb-2">隐私风险</h4>
                <p className="text-sm text-rose-700/80 mb-4">敏感属灵数据泄露</p>
                <div className="p-3 bg-white/50 rounded-xl text-xs font-bold text-rose-900">
                  应对：端侧 AI 处理 + 本地优先存储
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Conclusion */}
        <footer className="mt-24 text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-indigo-200">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">结语</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            市场正在从“获取内容”转向“个性化灵命成长”。
            最终胜出的产品将是 <span className="font-bold text-indigo-600">神学准确性</span>、
            <span className="font-bold text-indigo-600">AI 个性化</span> 与 
            <span className="font-bold text-indigo-600">情感连接</span> 的完美结合。
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-200" />
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">报告结束</span>
            <div className="h-px w-12 bg-slate-200" />
          </div>
        </footer>
      </main>
    </div>
  );
}
