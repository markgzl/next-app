'use client';

import Image from 'next/image';
import { Icon, IconName } from '@/components/kit/icon';

const advantages = [
  {
    title: '快速结算',
    description: '7天内完成付款，确保您的现金流稳定',
    icon: 'DollarSign'
  },
  {
    title: '项目管理',
    description: '专业的项目管理系统，提高工作效率',
    icon: 'ClipboardList'
  },
  {
    title: '技术支持',
    description: '24/7全天候技术支持，解决您的问题',
    icon: 'HeadSet'
  },
  {
    title: '资源共享',
    description: '共享优质资源，助力业务发展',
    icon: 'Share'
  }
];

const process = [
  {
    title: '注册认证',
    description: '填写基本信息，完成资质认证',
    icon: 'UserCheck'
  },
  {
    title: '项目对接',
    description: '根据专业领域匹配合适项目',
    icon: 'Link'
  },
  {
    title: '合同签署',
    description: '线上完成合同签署，便捷高效',
    icon: 'FileText'
  },
  {
    title: '开始合作',
    description: '立即开始项目，享受专业服务',
    icon: 'Play'
  }
];

export default function Contractors() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/contractors/hero.jpg"
          alt="承包商服务"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">承包商服务</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">专业的承包商服务平台，助力您的业务发展</p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">服务优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="p-6 bg-background rounded-lg shadow-sm">
                <div className="mb-4">
                  <Icon name={advantage.icon as IconName} className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}          
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">合作流程</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="p-6 bg-background rounded-lg shadow-sm relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <Icon name="ChevronRight" className="size-6 text-muted-foreground" />
                  </div>
                )}
                <div className="mb-4">
                  <Icon name={step.icon as IconName} className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始合作</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">加入我们的承包商网络，获取更多商业机会</p>
          <button className="bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
            立即注册
          </button>
        </div>
      </section>
    </div>
  );
}