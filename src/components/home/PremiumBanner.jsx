import { ChevronRight, ShieldCheck } from 'lucide-react'

export function PremiumBanner() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold text-brand-700">추천</p>
      <div className="mt-2 flex items-center justify-between gap-4">
        <div>
          <p className="text-base font-black text-slate-900">검증된 업체 매칭 가이드</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">운영 이력, 만족도 기준으로 업체를 빠르게 찾으세요.</p>
        </div>
        <ShieldCheck className="h-10 w-10 text-brand-600" />
      </div>
      <button type="button" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700">
        가이드 보기 <ChevronRight className="h-4 w-4" />
      </button>
    </section>
  )
}
