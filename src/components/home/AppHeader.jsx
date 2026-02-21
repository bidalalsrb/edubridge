import { Building2, User } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_8px_18px_-10px_rgba(47,91,255,0.9)]">
          <Building2 className="h-5 w-5" />
        </div>
        <p className="text-3xl font-extrabold tracking-tight text-brand-600">에듀브릿지</p>
      </div>
      <div className="flex items-center gap-3 text-slate-500">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-150 bg-brand-50">
          <User className="h-4 w-4 text-brand-700" />
        </div>
      </div>
    </header>
  )
}
