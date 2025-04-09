'use client';

import * as React from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof Icons;

export interface IconProps extends Icons.LucideProps {
  name: IconName;
}

export function Icon({ name, size=24, className, ...props }: IconProps) {
  const IconComponent = Icons[name] as React.ComponentType<Icons.LucideProps>;

  if (!IconComponent) {
    console.warn(`Icon ${name} not found in lucide-react`);
    return null;
  }

  return (
    <IconComponent
      className={cn('', className)}
      size={size}
      {...props}
    />
  );
}