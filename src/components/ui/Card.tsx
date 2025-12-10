import React from 'react'
import { cn } from '../../utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'dark'
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variants = {
    default: 'bg-black/50 backdrop-blur-lg border border-white/10',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10',
    dark: 'bg-zinc-900/50 border border-zinc-800',
  }

  return (
    <div
      className={cn('rounded-lg p-6 shadow-2xl', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}

