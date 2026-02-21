import { cn } from '../../lib/utils'

const variants = {
  default: 'bg-brand-600 text-white hover:bg-brand-700 shadow-[0_10px_18px_-14px_rgba(47,107,255,0.95)]',
  secondary: 'border border-brand-100 bg-white text-slate-700 hover:bg-shell-100',
  ghost: 'bg-transparent text-slate-700 hover:bg-shell-100',
}

const sizes = {
  default: 'h-11 px-4 py-2',
  sm: 'h-10 px-3 text-sm',
  lg: 'h-12 px-6',
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
