import { cn } from '../../lib/utils'

export function Tabs({ children, className }) {
  return <div className={cn(className)}>{children}</div>
}

export function TabsList({ className, ...props }) {
  return (
    <div
      className={cn('inline-flex h-11 items-center rounded-xl bg-shell-100 p-1 text-slate-500', className)}
      {...props}
    />
  )
}

export function TabsTrigger({ className, active = false, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-1.5 text-sm font-semibold transition-all',
        active ? 'bg-white text-brand-700 shadow-[0_4px_10px_-8px_rgba(47,107,255,0.7)]' : 'hover:text-slate-700',
        className,
      )}
      {...props}
    />
  )
}

export function TabsContent({ className, ...props }) {
  return <div className={cn('mt-4', className)} {...props} />
}
