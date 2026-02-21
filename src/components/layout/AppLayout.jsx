import { Outlet } from 'react-router-dom'
import { AppHeader } from '../home/AppHeader'
import { BottomNav } from '../home/BottomNav'

export function AppLayout() {
  return (
    <main className="app-compact bg-shell-300 px-3 py-3">
      <div className="mx-auto h-full w-full lg:w-[60%]">
        <div className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-[18px] border border-brand-100 bg-shell-200 shadow-[0_14px_32px_-24px_rgba(37,99,235,0.45)]">
          <AppHeader />
          <div className="flex-1 overflow-y-auto border-y border-brand-100/70 bg-shell-50">
            <Outlet />
          </div>
          <BottomNav />
        </div>
      </div>
    </main>
  )
}
