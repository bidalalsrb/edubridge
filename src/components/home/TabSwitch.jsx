import { cn } from '../../lib/utils'

export function TabSwitch({ tabs, activeTab, onChange }) {
  return (
    <nav className="grid grid-cols-2 rounded-2xl bg-[#dfe5ef] p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={cn(
            'rounded-xl py-3 text-[38px] font-black tracking-[-0.05em] transition-all',
            activeTab === tab.key ? 'bg-white text-[#336fea] shadow-sm' : 'text-slate-500',
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
