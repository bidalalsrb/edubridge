import { ShieldCheck } from 'lucide-react'

export function PremiumBanner() {
  return (
    <section className="mt-8 rounded-[24px] bg-[linear-gradient(120deg,#07122b_0%,#122a5b_55%,#1c2e56_100%)] px-5 py-6 text-white">
      <p className="text-[26px] font-semibold tracking-[-0.04em] text-[#7cb0ff]">프리미엄 파트너십</p>
      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-[48px] font-black leading-[1.05] tracking-[-0.06em]">우수 검증 업체 매칭 가이드 확인하기</p>
        <ShieldCheck className="h-16 w-16 text-slate-300" />
      </div>
    </section>
  )
}
