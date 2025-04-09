'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '/next-app/home', label: '首页' },
  {
    href: '/next-app/products',
    label: '产品',
    children: [
      { href: '/next-app/products/water-filtration-systems', label: '水过滤系统' },
      { href: '/next-app/products/reverse-osmosis-systems', label: '反渗透系统' },
    ],
  },
  { href: '/next-app/contractors', label: '承包商' },
  { href: '/next-app/news', label: '新闻' },
  { href: '/next-app/contact', label: '联系我们' },
];

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  children?: Array<{ href: string; label: string; }>;
}

const NavLink = ({ href, label, isActive }: NavLinkProps) => (
  <Link
    href={href}
    className={`${isActive ? 'text-foreground font-medium border-b-2 border-foreground' : 'text-foreground/60 hover:text-foreground/80'} px-3 py-1.5 transition-all`}
  >
    {label}
  </Link>
);


export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/next-app" className="flex items-center space-x-2">
              <Image
                src="/vercel.svg"
                alt="Logo"
                width={32}
                height={32}
                className="dark:invert"
              />
              <span className="font-bold text-xl">Company</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <NavLink
                  href={link.href}
                  label={link.label}
                  isActive={pathname === link.href || !!(link.children?.some(child => pathname === child.href))}
                >
                  {link.children}
                </NavLink>
                {link.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${pathname === child.href ? 'bg-muted' : ''} block px-4 py-2 text-sm hover:bg-muted transition-colors`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden p-2 hover:bg-muted rounded-md">
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <SheetClose asChild>
                      <NavLink
                        href={link.href}
                        label={link.label}
                        isActive={pathname === link.href || !!(link.children?.some(child => pathname === child.href))}
                      >
                        {link.children}
                      </NavLink>
                    </SheetClose>
                    {link.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className={`${pathname === child.href ? 'text-foreground font-medium' : 'text-foreground/60'} block py-1.5 text-sm hover:text-foreground/80 transition-colors`}
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}