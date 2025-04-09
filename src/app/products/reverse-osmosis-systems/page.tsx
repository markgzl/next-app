'use client';

import Image from 'next/image';
import { Icon, IconName } from '@/components/kit/icon';

const features = [
  {
    title: '高效过滤',
    description: '采用先进的反渗透技术，有效去除水中的杂质、重金属和有害物质',
    icon: 'Filter'
  },
  {
    title: '智能监控',
    description: '实时监测水质状况，确保净化效果始终保持最佳状态',
    icon: 'Activity'
  },
  {
    title: '节能环保',
    description: '低能耗设计，减少水资源浪费，为环境保护贡献力量',
    icon: 'Leaf'
  },
  {
    title: '安装便捷',
    description: '模块化设计，易于安装维护，适合各种安装环境',
    icon: 'Wrench'
  }
];

const specifications = [
  { label: '过滤精度', value: '0.0001微米' },
  { label: '日处理量', value: '400加仑/天' },
  { label: '回收率', value: '75%' },
  { label: '工作压力', value: '0.1-0.4MPa' },
  { label: '进水温度', value: '5-38℃' },
  { label: '电源要求', value: 'AC 220V/50Hz' }
];

export default function ReverseOsmosisSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/products/ro-system-hero.jpg"
          alt="反渗透系统"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">反渗透净水系统</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">专业的水处理解决方案，为您提供纯净健康的饮用水</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">产品特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-background rounded-lg shadow-sm">
                <div className="mb-4">
                  <Icon name={feature.icon as IconName} className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">技术规格</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec) => (
              <div key={spec.label} className="p-4 bg-background rounded-lg shadow-sm flex justify-between items-center">
                <span className="font-medium">{spec.label}</span>
                <span className="text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">选择专业的水处理方案</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">我们的反渗透系统为您提供安全可靠的饮用水解决方案</p>
          <button className="bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
}