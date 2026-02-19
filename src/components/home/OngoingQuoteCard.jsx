export function OngoingQuoteCard() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[44px] font-black tracking-[-0.06em] text-slate-900">진행 중인 견적</h2>
        <button type="button" className="text-[28px] font-semibold tracking-[-0.03em] text-slate-400">
          전체보기 ›
        </button>
      </div>

      <article className="rounded-[24px] border border-[#d4e1fb] bg-[#eaf1ff] p-6">
        <span className="inline-flex rounded-full bg-[#336fea] px-4 py-1.5 text-[22px] font-bold tracking-[-0.03em] text-white">
          실시간 입찰 중
        </span>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[46px] font-black leading-[1.05] tracking-[-0.06em] text-slate-900">2024 여름방학 AI 캠프 운영 대행</p>
            <p className="mt-1 text-[30px] font-semibold tracking-[-0.04em] text-slate-500">마감 D-3 · 총 45개 품목</p>
          </div>
          <div className="text-right">
            <p className="text-[24px] font-semibold text-slate-400">현재 최저가</p>
            <p className="text-[54px] font-black leading-none tracking-[-0.06em] text-[#336fea]">4,500,000원</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full border-2 border-white bg-emerald-400" />
              <span className="h-8 w-8 rounded-full border-2 border-white bg-slate-900" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[14px] font-bold text-slate-600">
                +6
              </span>
            </div>
            <span className="text-[28px] font-bold tracking-[-0.04em] text-slate-600">8개 업체 참여 중</span>
          </div>
          <button className="rounded-xl bg-[#336fea] px-4 py-2 text-[24px] font-bold tracking-[-0.03em] text-white">내역 확인</button>
        </div>
      </article>
    </section>
  )
}
