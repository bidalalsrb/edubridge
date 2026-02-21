import { cn } from '../../lib/utils'

export function TabSwitch({ tabs, activeTab, onChange }) {
  return (
    <nav className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={cn(
            'rounded-xl py-2 text-xl font-black tracking-tight transition-all',
            activeTab === tab.key ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500',
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
