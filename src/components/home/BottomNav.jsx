import { ClipboardList, HandCoins, Home, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { USER_ROLE, getStoredUserRole, inferUserRoleFromPath, setStoredUserRole } from '../../lib/userRole'

export function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [role, setRole] = useState(getStoredUserRole())

  useEffect(() => {
    const inferred = inferUserRoleFromPath(location.pathname)
    if (!inferred || inferred === role) return
    setRole(inferred)
    setStoredUserRole(inferred)
  }, [location.pathname, role])

  const isVendor = role === USER_ROLE.vendor
  const isHome = location.pathname === '/home'
  const isNotice = isVendor
    ? location.pathname === '/request' || location.pathname.startsWith('/request/notices/')
    : location.pathname === '/offer' || location.pathname.startsWith('/offer/') || location.pathname.startsWith('/profile/')
  const isHistory = isVendor
    ? location.pathname === '/submissions' || location.pathname.startsWith('/proposal') || location.pathname.startsWith('/process/')
    : location.pathname === '/my/notices' || location.pathname.startsWith('/my/notices/') || location.pathname.startsWith('/notice-create')
  const isMy = isVendor
    ? location.pathname.startsWith('/vendor/my') || location.pathname.startsWith('/provider-register')
    : location.pathname === '/my'

  const goHome = () => {
    navigate('/home')
  }

  const goNotice = () => {
    navigate(isVendor ? '/request' : '/offer')
  }

  const goHistory = () => {
    navigate(isVendor ? '/submissions' : '/my/notices')
  }

  const goMy = () => {
    const nextRole = isVendor ? USER_ROLE.vendor : USER_ROLE.university
    setStoredUserRole(nextRole)
    navigate(isVendor ? '/vendor/my' : '/my')
  }

  return (
    <footer className="grid grid-cols-4 border-t border-brand-100 bg-white px-2 py-2 text-center text-slate-400">
      <button className={cn('flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-lg transition-colors', isHome ? 'bg-brand-50 text-brand-700' : '')} onClick={goHome}>
        <Home className="h-5 w-5" />
        <span className="text-[12px] font-semibold">홈</span>
      </button>
      <button
        className={cn('flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-lg transition-colors', isNotice ? 'bg-brand-50 text-brand-700' : '')}
        onClick={goNotice}
      >
        <ClipboardList className="h-5 w-5" />
        <span className="text-[12px] font-semibold">공고</span>
      </button>
      <button
        className={cn('relative flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-lg transition-colors', isHistory ? 'bg-brand-50 text-brand-700' : '')}
        onClick={goHistory}
      >
        <HandCoins className="h-5 w-5" />
        <span className="text-[12px] font-semibold">내역</span>
      </button>
      <button
        className={cn('flex min-h-[56px] flex-col items-center justify-center gap-1 rounded-lg transition-colors', isMy ? 'bg-brand-50 text-brand-700' : '')}
        onClick={goMy}
      >
        <UserRound className="h-5 w-5" />
        <span className="text-[12px] font-semibold">마이페이지</span>
      </button>
    </footer>
  )
}
