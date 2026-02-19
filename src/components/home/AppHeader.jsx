import { Building2, Search, User } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#336fea] text-white">
          <Building2 className="h-6 w-6" />
        </div>
        <p className="text-[44px] font-extrabold tracking-[-0.06em] text-[#336fea]">에듀브릿지</p>
      </div>
      <div className="flex items-center gap-3 text-slate-500">
        <Search className="h-7 w-7" />
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4d2be]">
          <User className="h-5 w-5 text-slate-700" />
        </div>
      </div>
    </header>
  )
}
