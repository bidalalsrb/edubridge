import { Bell, Clock3 } from 'lucide-react'

const alerts = [
  { id: 1, title: '제안서 검토가 시작되었습니다.', time: '방금', type: '진행' },
  { id: 2, title: '행사 기획 제안서가 승인되었습니다.', time: '10분 전', type: '승인' },
  { id: 3, title: '캠프 운영 입찰 일정이 업데이트되었습니다.', time: '1시간 전', type: '일정' },
]

export function AlertsPage() {
  const getTypeClassName = (type) => {
    if (type === '승인') return 'bg-emerald-100 text-emerald-700'
    if (type === '진행') return 'bg-blue-100 text-blue-700'
    return 'bg-amber-100 text-amber-700'
  }

  return (
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">알림</h1>
        <p className="mt-1 text-sm font-semibold text-brand-600">최근 입찰/제출 상태 알림</p>
      </header>

      <section className="space-y-3 px-6 py-6">
        {alerts.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-brand-600">A-{String(item.id).padStart(3, '0')}</p>
                <h2 className="text-xl font-black tracking-tight text-slate-900">{item.title}</h2>
              </div>
              <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${getTypeClassName(item.type)}`}>
                <Bell className="h-3.5 w-3.5" /> {item.type}
              </span>
            </div>

            <div className="space-y-1 text-sm font-semibold text-slate-600">
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" /> 수신 시각: {item.time}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
