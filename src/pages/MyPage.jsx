import { useEffect } from 'react'
import { Building2, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { USER_ROLE, setStoredUserRole } from '../lib/userRole'

export function MyPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setStoredUserRole(USER_ROLE.university)
  }, [])

  const menuItems = [
    { label: '공고 등록', desc: '새 대학 입찰 공고 등록', to: '/notice-create' },
    { label: '내 공고 목록', desc: '등록한 공고 조회/수정', to: '/my/notices' },
    { label: '진행 현황', desc: '공고별 지원 및 상태 확인', to: '/my/notices' },
    { label: '업체 리스트', desc: '업체/강사 리스트 탐색', to: '/offer' },
  ]

  return (
    <section className="space-y-3 px-4 py-4">
      <header className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-brand-600" />
            <div>
              <h1 className="text-lg font-black text-slate-900">대학 마이페이지</h1>
              <p className="text-xs font-semibold text-slate-500">공고 등록과 지원자 관리를 한 번에</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setStoredUserRole(USER_ROLE.vendor)
              navigate('/vendor/my')
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
          >
            업체 전환
          </button>
        </div>
      </header>

      <article className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold text-slate-500">요약</p>
        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[11px] font-semibold text-slate-500">운영중 공고</p>
            <p className="text-lg font-black text-slate-900">2</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[11px] font-semibold text-slate-500">신규 지원</p>
            <p className="text-lg font-black text-slate-900">5</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[11px] font-semibold text-slate-500">검토 필요</p>
            <p className="text-lg font-black text-rose-500">2</p>
          </div>
        </div>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => navigate(item.to)}
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left hover:bg-slate-50"
          >
            <span>
              <p className="text-sm font-bold text-slate-800">{item.label}</p>
              <p className="text-xs font-semibold text-slate-500">{item.desc}</p>
            </span>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        ))}
      </article>
    </section>
  )
}
