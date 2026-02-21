import { Building2, Search, User } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#336fea] text-white">
          <Building2 className="h-5 w-5" />
        </div>
        <p className="text-3xl font-extrabold tracking-tight text-[#336fea]">에듀브릿지</p>
      </div>
      <div className="flex items-center gap-3 text-slate-500">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4d2be]">
          <User className="h-4 w-4 text-slate-700" />
        </div>
      </div>
    </header>
  )
}
