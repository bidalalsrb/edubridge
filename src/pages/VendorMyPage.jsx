import { useEffect } from 'react'
import { BriefcaseBusiness, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { USER_ROLE, setStoredUserRole } from '../lib/userRole'

export function VendorMyPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setStoredUserRole(USER_ROLE.vendor)
  }, [])

  const menuItems = [
    { label: '프로필 등록/수정', desc: '대학이 확인할 업체/강사 프로필 관리', to: '/provider-register' },
    { label: '대학 입찰 공고', desc: '공고 확인 후 바로 지원', to: '/request' },
    { label: '입찰 내역', desc: '제출한 제안서 상태 확인', to: '/submissions' },
    { label: '업체 리스트 보기', desc: '카테고리 기반 시장 탐색', to: '/offer' },
  ]

  return (
    <section className="space-y-3 px-4 py-4">
      <header className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-8 w-8 text-brand-600" />
            <div>
              <h1 className="text-lg font-black text-slate-900">업체 마이페이지</h1>
              <p className="text-xs font-semibold text-slate-500">입찰/프로필 관리 중심</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setStoredUserRole(USER_ROLE.university)
              navigate('/my')
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
          >
            대학 전환
          </button>
        </div>
      </header>

      <article className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold text-slate-500">요약</p>
        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[11px] font-semibold text-slate-500">제출완료</p>
            <p className="text-lg font-black text-slate-900">1</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[11px] font-semibold text-slate-500">검토중</p>
            <p className="text-lg font-black text-slate-900">1</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-2">
            <p className="text-[11px] font-semibold text-slate-500">승인완료</p>
            <p className="text-lg font-black text-brand-700">1</p>
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
