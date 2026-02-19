import { CheckCircle2, Clock3, FileText } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function formatCurrency(value) {
  if (!value) return '미입력'
  const numeric = Number(value)
  if (Number.isNaN(numeric)) return value
  return `${numeric.toLocaleString()}원`
}

export function SubmissionHistoryPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const tab = searchParams.get('tab') || 'vendor'
  const service = searchParams.get('service') || '행사 기획'
  const price = searchParams.get('price') || ''
  const duration = searchParams.get('duration') || ''

  const flowText = tab === 'vendor' ? '업체 -> 대학 제안서 제출 내역' : '대학 -> 업체 제안서 제출 내역'

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

  const goProcess = (row) => {
    const params = new URLSearchParams({ tab, service: row.service, status: row.status, price: row.price, duration: row.duration })
    navigate(`/process/${row.id}?${params.toString()}`)
  }

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
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">제안서 제출 내역</h1>
        <p className="mt-1 text-sm font-semibold text-[#336fea]">{flowText}</p>
      </header>

      <section className="space-y-3 px-6 py-6">
        {rows.map((row) => (
          <article key={row.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#336fea]">{row.id}</p>
                <h2 className="text-xl font-black tracking-tight text-slate-900">{row.service}</h2>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-xs font-bold ${
                  row.status === '승인완료'
                    ? 'bg-emerald-100 text-emerald-700'
                    : row.status === '제출완료'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-amber-100 text-amber-700'
                }`}
              >
                {row.status}
              </span>
            </div>

            <div className="space-y-1 text-sm font-semibold text-slate-600">
              <p className="flex items-center gap-2"><FileText className="h-4 w-4" /> 금액: {row.price}</p>
              <p className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> 소요 기간: {row.duration}</p>
              <p>제출일: {row.date}</p>
            </div>

            <div className="mt-3 flex gap-2">
              {row.status === '제출완료' ? (
                <button
                  type="button"
                  onClick={() => goProcess({ ...row, status: '승인완료' })}
                  className="rounded-xl bg-[#336fea] px-4 py-2 text-sm font-bold text-white"
                >
                  제출 승인
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => goDetail(row)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
              >
                <FileText className="h-4 w-4" /> 상세 보기
              </button>
              <button
                type="button"
                onClick={() => goProcess(row)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
              >
                <CheckCircle2 className="h-4 w-4" /> 프로세스 보기
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
