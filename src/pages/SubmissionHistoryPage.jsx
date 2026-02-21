import { ChevronRight, Clock3, FileText } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getStatusBadgeClass } from '../lib/statusBadge'

function formatCurrency(value) {
  if (!value) return '미입력'
  const numeric = Number(value)
  if (Number.isNaN(numeric)) return value
  return `${numeric.toLocaleString()}원`
}

export function SubmissionHistoryPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const tab = searchParams.get('tab') || 'offer'
  const service = searchParams.get('service') || '행사 기획'
  const price = searchParams.get('price') || ''
  const duration = searchParams.get('duration') || ''

  const rows = useMemo(() => {
    const latest = {
      id: 'P-301',
      service,
      price: formatCurrency(price),
      duration: duration || '미입력',
      status: '제출완료',
      date: '2026-02-19',
    }

    return [
      latest,
      { id: 'P-300', service: '캠프 운영', price: '4,200,000원', duration: '3주', status: '승인완료', date: '2026-02-18' },
      { id: 'P-299', service: '특강 강사', price: '2,100,000원', duration: '2주', status: '검토중', date: '2026-02-17' },
    ]
  }, [duration, price, service])

  const goDetail = (row) => {
    const params = new URLSearchParams({
      tab,
      service: row.service,
      status: row.status,
      price: row.price,
      duration: row.duration,
      date: row.date,
    })
    navigate(`/proposal-detail/${row.id}?${params.toString()}`)
  }

  return (
    <section className="space-y-3 px-4 py-4">
      <header className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold text-slate-500">내역</p>
        <h1 className="text-lg font-black text-slate-900">입찰/제안 내역</h1>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
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
      </header>

      <article className="rounded-2xl border border-slate-200 bg-white p-2">
        {rows.map((row) => (
          <button
            key={row.id}
            type="button"
            onClick={() => goDetail(row)}
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left hover:bg-slate-50"
          >
            <span className="min-w-0 flex-1">
              <p className="text-[11px] font-bold text-brand-700">{row.id}</p>
              <p className="truncate text-sm font-black text-slate-900">{row.service}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                <FileText className="h-3.5 w-3.5" /> {row.price} · <Clock3 className="h-3.5 w-3.5" /> {row.duration}
              </p>
            </span>
            <span className="ml-3 inline-flex items-center gap-2">
              <span className={`rounded-md px-2 py-1 text-[11px] font-bold ${getStatusBadgeClass(row.status)}`}>{row.status}</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </span>
          </button>
        ))}
      </article>
    </section>
  )
}
