import { cn } from '../../lib/utils'

export function Tabs({ children, className }) {
  return <div className={cn(className)}>{children}</div>
}

export function TabsList({ className, ...props }) {
  return (
    <div
      className={cn('inline-flex h-11 items-center rounded-xl bg-brand-200 p-1 text-slate-500', className)}
      {...props}
    />
  )
}

export function TabsTrigger({ className, active = false, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-1.5 text-sm font-medium transition-all',
        active ? 'bg-white text-brand-700 shadow-sm' : 'hover:text-slate-700',
        className,
      )}
      {...props}
    />
  )
}

export function TabsContent({ className, ...props }) {
  return <div className={cn('mt-4', className)} {...props} />
}
