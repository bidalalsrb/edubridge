import { cn } from '../../lib/utils'

export function Card({ className, ...props }) {
  return <section className={cn('rounded-2xl border border-brand-150 bg-white shadow-[0_10px_24px_-20px_rgba(51,111,234,0.5)]', className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <header className={cn('space-y-1.5 p-5 pb-3', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-lg font-semibold text-slate-900', className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-slate-500', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-5 pt-0', className)} {...props} />
}
