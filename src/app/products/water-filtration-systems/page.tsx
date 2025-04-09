'use client';

import Image from 'next/image';
import { Icon, IconName } from '@/components/kit/icon';

const features = [
  {
    title: '全面过滤',
    description: '采用多级过滤系统，有效去除水中的杂质、氯气和有机物',
    icon: 'Filter'
  },
  {
    title: '长效使用',
    description: '高品质滤芯设计，使用寿命长，维护成本低',
    icon: 'Clock'
  },
  {
    title: '安全可靠',
    description: '采用食品级材料，确保饮用水安全，符合卫生标准',
    icon: 'Shield'
  },
  {
    title: '适用广泛',
    description: '适用于家庭、商业和工业用水过滤，满足不同场景需求',
    icon: 'Home'
  }
];

const specifications = [
  { label: '过滤精度', value: '5微米-0.5微米' },
  { label: '流量', value: '10-20GPM' },
  { label: '工作压力', value: '0.2-0.6MPa' },
  { label: '工作温度', value: '5-40℃' },
  { label: '滤芯寿命', value: '6-12个月' },
  { label: '接口规格', value: '3/4"-1"' }
];

export default function WaterFiltrationSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/products/water-filtration-hero.jpg"
          alt="水过滤系统"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">水过滤系统</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">专业的水处理设备，为您提供清洁安全的用水保障</p>
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
          <p className="text-xl mb-8 max-w-2xl mx-auto">我们的水过滤系统为您提供全面的水质保障解决方案</p>
          <button className="bg-background text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
            立即咨询
          </button>
        </div>
      </section>
    </div>
  );
}