import { ArrowLeft, Calendar, ChevronDown, CircleAlert, MapPin, Package, Users, Wallet } from 'lucide-react'
import { cn } from '../../lib/utils'

const categoryOptions = ['캠프', '행사', '특강', '기타']

export function BidRequestScreen({ activeTab, selectedService, onBack, onSubmit }) {
  const directionText =
    activeTab === 'vendor' ? '업체는 대학에게 행사 입찰을 요청합니다.' : '대학은 업체에게 행사 입찰을 요청합니다.'

  return (
    <div className="bg-white">
      <header className="flex items-center gap-4 border-b border-slate-100 px-6 py-5">
        <button type="button" onClick={onBack} className="text-slate-700">
          <ArrowLeft className="h-7 w-7" />
        </button>
        <div>
          <h2 className="text-[42px] font-black tracking-[-0.06em] text-slate-900">행사/캠프 입찰 요청하기</h2>
          <p className="text-[22px] font-semibold tracking-[-0.03em] text-brand-600">{directionText}</p>
        </div>
      </header>

      <section className="space-y-6 bg-shell-50 px-6 py-6">
        <div className="rounded-2xl bg-brand-50 px-4 py-3 text-[24px] font-bold tracking-[-0.03em] text-brand-600">
          선택 서비스: {selectedService}
        </div>

        <div>
          <p className="mb-3 text-[28px] font-extrabold tracking-[-0.04em] text-slate-700">구매 품목 카테고리</p>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((option, idx) => (
              <button
                key={option}
                className={cn(
                  'rounded-full px-5 py-2 text-[24px] font-bold tracking-[-0.03em]',
                  idx === 0 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600',
                )}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[28px] font-extrabold tracking-[-0.04em] text-slate-700">예상 인원 및 예산</p>
          <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-white px-4 py-4">
            <Users className="h-6 w-6 text-slate-400" />
            <span className="flex-1 text-[28px] font-semibold tracking-[-0.03em] text-slate-400">예상 인원을 입력하세요</span>
            <span className="text-[24px] font-semibold text-slate-400">명</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-white px-4 py-4">
            <Wallet className="h-6 w-6 text-slate-400" />
            <span className="flex-1 text-[28px] font-semibold tracking-[-0.03em] text-slate-700">총 예산 범위를 선택하세요</span>
            <ChevronDown className="h-5 w-5 text-slate-400" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[28px] font-extrabold tracking-[-0.04em] text-slate-700">배송 정보</p>
          <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-white px-4 py-4">
            <MapPin className="h-6 w-6 text-slate-400" />
            <span className="text-[28px] font-semibold tracking-[-0.03em] text-slate-400">행사 장소 (또는 학교명)</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-white px-4 py-4">
            <Calendar className="h-6 w-6 text-slate-400" />
            <span className="flex-1 text-[28px] font-semibold tracking-[-0.03em] text-slate-700">mm/dd/yyyy</span>
            <Calendar className="h-5 w-5 text-slate-500" />
          </div>
          <p className="text-[22px] font-semibold tracking-[-0.03em] text-slate-400">행사 희망일을 선택해 주세요.</p>
        </div>

        <div className="space-y-3">
          <p className="text-[28px] font-extrabold tracking-[-0.04em] text-slate-700">상세 요청사항</p>
          <div className="rounded-2xl border border-brand-200 bg-white px-4 py-4 text-[28px] font-semibold tracking-[-0.03em] text-slate-400">
            행사 목적, 대상, 주요 프로그램 등 입찰 업체가 참고할 상세 내용을 입력해 주세요.
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-2xl border border-brand-150 bg-brand-50 px-4 py-4">
          <CircleAlert className="mt-0.5 h-5 w-5 text-brand-600" />
          <p className="text-[24px] font-semibold leading-8 tracking-[-0.03em] text-slate-600">
            제출하신 요청서는 검토 후 업체들에게 공개되며, 실시간으로 입찰이 시작됩니다.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onSubmit(selectedService)}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-4 text-[36px] font-black tracking-[-0.05em] text-white"
        >
          입찰 요청하기 <Package className="h-6 w-6" />
        </button>
      </section>
    </div>
  )
}
