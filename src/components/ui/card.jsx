import { cn } from '../../lib/utils'

export function Card({ className, ...props }) {
  return <section className={cn('rounded-2xl border border-brand-100 bg-white shadow-[0_12px_24px_-20px_rgba(15,23,42,0.22)]', className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <header className={cn('space-y-1.5 p-4 pb-2', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-lg font-semibold text-slate-900', className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-slate-500', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-4 pt-0', className)} {...props} />
}
