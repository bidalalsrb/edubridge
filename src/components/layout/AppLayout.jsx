import { Outlet } from 'react-router-dom'
import { AppHeader } from '../home/AppHeader'
import { BottomNav } from '../home/BottomNav'

export function AppLayout() {
  return (
    <main className="app-compact min-h-screen bg-[#eff2f7] px-3 ">
      <div className="mx-auto w-full lg:w-[60%]">
        <div className="mx-auto w-full overflow-hidden rounded-[20px] border border-slate-200 bg-[#f3f5f9] shadow-[0_20px_55px_-35px_rgba(37,99,235,0.5)]">
          <AppHeader />
          <div className="border-t border-slate-100 bg-[#f8f9fc]">
            <Outlet />
          </div>
          <BottomNav />
        </div>
      </div>
    </main>
  )
}
