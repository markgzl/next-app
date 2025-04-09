'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* Carousel Section */}
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full" autoPlay interval={5000}>
            <CarouselContent>
              <CarouselItem>
                <div className="p-6 text-center">
                  <Image
                    src="/window.svg"
                    alt="Financial Platform"
                    width={400}
                    height={300}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">智能金融平台</h3>
                  <p className="text-foreground/60">为您的业务提供全方位的金融解决方案</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 text-center">
                  <Image
                    src="/file.svg"
                    alt="Business Analytics"
                    width={400}
                    height={300}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">商业数据分析</h3>
                  <p className="text-foreground/60">深入洞察业务数据，助力决策优化</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 text-center">
                  <Image
                    src="/globe.svg"
                    alt="Global Payments"
                    width={400}
                    height={300}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">全球支付网络</h3>
                  <p className="text-foreground/60">安全便捷的跨境支付解决方案</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Modern financial platform for your business
            </h1>
            <p className="text-xl text-foreground/60 mb-8">
              Streamline your business payments, expenses, and financial operations with our all-in-one platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto rounded-full bg-foreground text-background px-8 py-3 text-base font-medium transition-colors hover:bg-foreground/90"
              >
                Start for free
              </Link>
              <Link
                href="#demo"
                className="w-full sm:w-auto rounded-full border border-border px-8 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image
                  src="/window.svg"
                  alt="Payments icon"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Payments</h3>
              <p className="text-foreground/60">
                Process payments globally with intelligent routing and automatic reconciliation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image
                  src="/file.svg"
                  alt="Expenses icon"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expense Management</h3>
              <p className="text-foreground/60">
                Track and manage all your business expenses in one place with detailed analytics.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Image
                  src="/globe.svg"
                  alt="Banking icon"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Banking</h3>
              <p className="text-foreground/60">
                Get powerful banking features designed specifically for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
}