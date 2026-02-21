import { Bell, ChevronRight, FileText, Megaphone } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OngoingQuoteCard } from '../components/home/OngoingQuoteCard'
import { PremiumBanner } from '../components/home/PremiumBanner'
import { ServiceGrid } from '../components/home/ServiceGrid'
import { services } from '../components/home/data'

export function HomePage() {
  const navigate = useNavigate()
  const [activeTab] = useState('vendor')

  const onClickService = (service) => {
    const params = new URLSearchParams({ tab: activeTab, service: service.title })
    navigate(`/bid-notices?${params.toString()}`)
  }

  const onClickOngoingHistory = () => {
    const params = new URLSearchParams({
      tab: activeTab,
      service: '캠프 운영',
      status: '검토중',
      price: '4,500,000원',
      duration: '3주',
      date: '2026-02-19',
    })
    navigate(`/submissions?${params.toString()}`)
  }

  return (
    <section className="space-y-4 px-4 py-4">
      <article className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold text-slate-500">에듀브릿지 홈</p>
        <p className="mt-1 text-lg font-black text-slate-900">오늘 확인할 항목이 3개 있어요</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button type="button" onClick={() => navigate('/request')} className="rounded-xl bg-slate-50 px-3 py-2 text-left">
            <Megaphone className="h-4 w-4 text-brand-600" />
            <p className="mt-1 text-xs font-bold text-slate-700">새 공고</p>
          </button>
          <button type="button" onClick={() => navigate('/submissions')} className="rounded-xl bg-slate-50 px-3 py-2 text-left">
            <FileText className="h-4 w-4 text-brand-600" />
            <p className="mt-1 text-xs font-bold text-slate-700">내역</p>
          </button>
          <button type="button" onClick={() => navigate('/alerts')} className="rounded-xl bg-slate-50 px-3 py-2 text-left">
            <Bell className="h-4 w-4 text-brand-600" />
            <p className="mt-1 text-xs font-bold text-slate-700">알림</p>
          </button>
        </div>
      </article>

      <OngoingQuoteCard onClickHistory={onClickOngoingHistory} />
      <ServiceGrid services={services} onClickService={onClickService} />
      <PremiumBanner />

      <button
        type="button"
        onClick={() => navigate('/request')}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
      >
        <span className="text-sm font-bold text-slate-700">대학 입찰 공고 전체 보기</span>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </button>
    </section>
  )
}
