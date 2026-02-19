import { cn } from '../../lib/utils'

const variants = {
  default: 'bg-[#3182f6] text-white hover:bg-[#1f6fe5]',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

const sizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-11 px-6',
}

export function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
