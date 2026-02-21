import { Outlet } from 'react-router-dom'
import { AppHeader } from '../home/AppHeader'
import { BottomNav } from '../home/BottomNav'

export function AppLayout() {
  return (
    <main className="app-compact bg-shell-300 px-3 py-3">
      <div className="mx-auto h-full w-full lg:w-[60%]">
        <div className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-brand-200/80 bg-shell-200 shadow-[0_24px_55px_-32px_rgba(37,99,235,0.45)]">
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
