import { Bell, Clock3 } from 'lucide-react'

const alerts = [
  { id: 1, title: '제안서 검토가 시작되었습니다.', time: '방금', type: '진행' },
  { id: 2, title: '행사 기획 제안서가 승인되었습니다.', time: '10분 전', type: '승인' },
  { id: 3, title: '캠프 운영 입찰 일정이 업데이트되었습니다.', time: '1시간 전', type: '일정' },
]

export function AlertsPage() {
  return (
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">알림</h1>
        <p className="mt-1 text-sm font-semibold text-slate-500">최근 입찰/제출 상태 알림</p>
      </header>

      <section className="space-y-3 px-6 py-6">
        {alerts.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#edf4ff] px-2 py-1 text-xs font-bold text-[#336fea]">
                <Bell className="h-3.5 w-3.5" /> {item.type}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                <Clock3 className="h-3.5 w-3.5" /> {item.time}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-700">{item.title}</p>
          </article>
        ))}
      </section>
    </>
  )
}
