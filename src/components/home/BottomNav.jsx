import { Bell, HandCoins, Home, Settings2 } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/offer' || location.pathname === '/request'

  return (
    <footer className="grid grid-cols-4 border-t border-brand-100 bg-white px-3 py-3 text-center text-slate-400">
      <button className={cn('flex flex-col items-center gap-1 transition-colors', isHome ? 'text-brand-600' : '')} onClick={() => navigate('/offer')}>
        <Home className="h-5 w-5" />
        <span className="text-[20px] font-bold">홈</span>
      </button>
      <button
        className={cn('flex flex-col items-center gap-1 transition-colors', location.pathname === '/submissions' ? 'text-brand-600' : '')}
        onClick={() => navigate('/submissions')}
      >
        <HandCoins className="h-5 w-5" />
        {/*<span className="text-[20px] font-semibold">내역</span>*/}
      </button>
      <button
        className={cn('relative flex flex-col items-center gap-1 transition-colors', location.pathname === '/alerts' ? 'text-brand-600' : '')}
        onClick={() => navigate('/alerts')}
      >
        <Bell className="h-5 w-5" />
        {/*<span className="text-[20px] font-semibold">알림</span>*/}
      </button>
      <button
        className={cn('flex flex-col items-center gap-1 transition-colors', location.pathname === '/my' ? 'text-brand-600' : '')}
        onClick={() => navigate('/my')}
      >
        <Settings2 className="h-5 w-5" />
        <span className="text-[20px] font-semibold">마이</span>
      </button>
    </footer>
  )
}
