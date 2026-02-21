import { Building2, BriefcaseBusiness, HandCoins, Home } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/offer' || location.pathname === '/request'
  const isVendorMy = location.pathname.startsWith('/vendor/my')
  const isUniversityMy = location.pathname === '/my' || location.pathname.startsWith('/my/')

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
        <span className="text-[20px] font-semibold">내역</span>
      </button>
      <button
        className={cn('relative flex flex-col items-center gap-1 transition-colors', isVendorMy ? 'text-brand-600' : '')}
        onClick={() => navigate('/vendor/my')}
      >
        <BriefcaseBusiness className="h-5 w-5" />
        <span className="text-[20px] font-semibold">업체</span>
      </button>
      <button
        className={cn('flex flex-col items-center gap-1 transition-colors', isUniversityMy ? 'text-brand-600' : '')}
        onClick={() => navigate('/my')}
      >
        <Building2 className="h-5 w-5" />
        <span className="text-[20px] font-semibold">대학</span>
      </button>
    </footer>
  )
}
