export function BidHistoryPanel({ activeServiceTitle, history, onOpenMyPage }) {
  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onOpenMyPage}
          className="text-xl font-black tracking-tight text-slate-800 transition hover:text-brand-600"
        >
          나의 입찰내역
        </button>
        <span className="text-sm font-semibold text-brand-600">선택: {activeServiceTitle}</span>
      </div>
      <div className="space-y-2">
        {history.slice(0, 3).map((row) => (
          <div key={row.id} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
            <span className="text-sm font-semibold text-slate-700">{row.service}</span>
            <span className="text-sm font-bold text-brand-600">{row.status}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
