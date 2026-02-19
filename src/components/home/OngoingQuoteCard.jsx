export function OngoingQuoteCard({ onClickHistory }) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">진행 중인 견적</h2>
        <button type="button" className="text-sm font-semibold text-slate-400">
          {/*전체보기 ›*/}
        </button>
      </div>

      <article className="rounded-2xl border border-[#d4e1fb] bg-[#eaf1ff] p-5">
        <span className="inline-flex rounded-full bg-[#336fea] px-3 py-1 text-xs font-bold text-white">
          실시간 입찰 중
        </span>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-3xl font-black leading-tight tracking-tight text-slate-900">2024 여름방학 AI 캠프 운영 대행</p>
            <p className="mt-1 text-base font-semibold text-slate-500">마감 D-3 · 총 45개 품목</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-400">현재 최저가</p>
            <p className="text-3xl font-black leading-none tracking-tight text-[#336fea]">4,500,000원</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full border-2 border-white bg-emerald-400" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-slate-900" />
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[10px] font-bold text-slate-600">
                +6
              </span>
            </div>
            <span className="text-sm font-bold text-slate-600">8개 업체 참여 중</span>
          </div>
          <button
            type="button"
            onClick={onClickHistory}
            className="rounded-xl bg-[#336fea] px-3 py-2 text-sm font-bold text-white"
          >
            내역 확인
          </button>
        </div>
      </article>
    </section>
  )
}
