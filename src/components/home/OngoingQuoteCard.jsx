export function OngoingQuoteCard({ onClickHistory }) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-bold text-slate-500">이번 달 진행 현황</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-4xl font-black tracking-tight text-slate-900">4,500,000원</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">진행 중인 공고 예상 정산 금액</p>
        </div>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">입찰 3건 진행중</span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center">
        <div>
          <p className="text-xs font-semibold text-slate-500">검토중</p>
          <p className="text-lg font-black text-slate-900">2</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500">승인완료</p>
          <p className="text-lg font-black text-slate-900">1</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500">마감임박</p>
          <p className="text-lg font-black text-rose-500">1</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onClickHistory}
        className="mt-4 w-full rounded-lg border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700"
      >
        입찰 내역 전체 보기
      </button>
    </section>
  )
}
