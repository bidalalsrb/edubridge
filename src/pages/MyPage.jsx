import { FileText, UserCircle2 } from 'lucide-react'

const mySubmissions = [
  { id: 'P-301', service: '행사 기획', status: '제출완료', date: '2026-02-19' },
  { id: 'P-300', service: '캠프 운영', status: '승인완료', date: '2026-02-18' },
  { id: 'P-299', service: '특강 강사', status: '검토중', date: '2026-02-17' },
]

export function MyPage() {
  return (
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <UserCircle2 className="h-10 w-10 text-[#336fea]" />
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">마이페이지</h1>
            <p className="text-sm font-semibold text-slate-500">나의 입찰/제안서 관리</p>
          </div>
        </div>
      </header>

      <section className="space-y-3 px-6 py-6">
        {mySubmissions.map((row) => (
          <article key={row.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#336fea]">
                <FileText className="h-4 w-4" /> {row.id}
              </span>
              <span className="text-xs font-semibold text-slate-400">{row.date}</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{row.service}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">상태: {row.status}</p>
          </article>
        ))}
      </section>
    </>
  )
}
