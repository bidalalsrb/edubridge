import { Building2, Search, User } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-brand-100 bg-white px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-[0_8px_18px_-14px_rgba(47,107,255,0.9)]">
          <Building2 className="h-5 w-5" />
        </div>
        <p className="text-[28px] font-black tracking-tight text-slate-900">에듀브릿지</p>
      </div>
      <div className="flex items-center gap-3 text-slate-500">
        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-brand-50">
          <Search className="h-4 w-4 text-slate-500" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-brand-50">
          <User className="h-4 w-4 text-slate-600" />
        </div>
      </div>
    </header>
  )
}
