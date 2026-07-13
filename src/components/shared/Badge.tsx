'use client';

import { ShieldCheck } from 'lucide-react';

interface BadgeProps {
  variant?: 'default' | 'small';
  className?: string;
}

export default function Badge({ variant = 'default', className = '' }: BadgeProps) {
  if (variant === 'small') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green ${className}`}
      >
        <ShieldCheck className="h-3.5 w-3.5" />
        Processo Gestor Regularizado
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl border border-green/20 bg-green-50 px-4 py-2.5 ${className}`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green/10">
        <ShieldCheck className="h-4.5 w-4.5 text-green" />
      </div>
      <div className="text-left">
        <p className="text-xs font-bold tracking-wide text-green uppercase">
          Coworking com Processo Gestor
        </p>
        <p className="text-[11px] text-muted">
          Corpo de Bombeiros · Regularizado
        </p>
      </div>
    </div>
  );
}
