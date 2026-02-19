import { Bell, HandCoins, Home, Settings2 } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <footer className="grid grid-cols-4 border-t border-slate-200 bg-white px-3 py-3 text-center text-slate-400">
      <button
        className={cn('flex flex-col items-center gap-1', location.pathname === '/' ? 'text-[#336fea]' : '')}
        onClick={() => navigate('/')}
      >
        <Home className="h-5 w-5" />
        <span className="text-[20px] font-bold">홈</span>
      </button>
      <button
        className={cn('flex flex-col items-center gap-1', location.pathname === '/submissions' ? 'text-[#336fea]' : '')}
        onClick={() => navigate('/submissions')}
      >
        <HandCoins className="h-5 w-5" />
        <span className="text-[20px] font-semibold">내역</span>
      </button>
      <button
        className={cn('relative flex flex-col items-center gap-1', location.pathname === '/alerts' ? 'text-[#336fea]' : '')}
        onClick={() => navigate('/alerts')}
      >
        <Bell className="h-5 w-5" />
        <span className="text-[20px] font-semibold">알림</span>
      </button>
      <button
        className={cn('flex flex-col items-center gap-1', location.pathname === '/my' ? 'text-[#336fea]' : '')}
        onClick={() => navigate('/my')}
      >
        <Settings2 className="h-5 w-5" />
        <span className="text-[20px] font-semibold">마이</span>
      </button>
    </footer>
  )
}
