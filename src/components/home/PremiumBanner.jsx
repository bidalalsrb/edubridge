import { ShieldCheck } from 'lucide-react'

export function PremiumBanner() {
  return (
    <section className="mt-8 rounded-2xl bg-[linear-gradient(120deg,#07122b_0%,#122a5b_55%,#1c2e56_100%)] px-4 py-5 text-white">
      <p className="text-sm font-semibold text-[#7cb0ff]">프리미엄 파트너십</p>
      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-2xl font-black leading-tight tracking-tight">우수 검증 업체 매칭 가이드 확인하기</p>
        <ShieldCheck className="h-12 w-12 text-slate-300" />
      </div>
    </section>
  )
}
