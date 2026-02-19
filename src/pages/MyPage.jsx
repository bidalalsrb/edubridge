import { FileText, UserCircle2 } from 'lucide-react'

const mySubmissions = [
  { id: 'P-301', service: '행사 기획', status: '제출완료', date: '2026-02-19' },
  { id: 'P-300', service: '캠프 운영', status: '승인완료', date: '2026-02-18' },
  { id: 'P-299', service: '특강 강사', status: '검토중', date: '2026-02-17' },
]

export function MyPage() {
  const getStatusClassName = (status) => {
    if (status === '승인완료') return 'bg-emerald-100 text-emerald-700'
    if (status === '제출완료') return 'bg-blue-100 text-blue-700'
    return 'bg-amber-100 text-amber-700'
  }

  return (
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <UserCircle2 className="h-10 w-10 text-[#336fea]" />
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">마이페이지</h1>
            <p className="mt-1 text-sm font-semibold text-[#336fea]">나의 입찰/제안서 관리</p>
          </div>
        </div>
      </header>

      <section className="space-y-3 px-6 py-6">
        {mySubmissions.map((row) => (
          <article key={row.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#336fea]">{row.id}</p>
                <h2 className="text-xl font-black tracking-tight text-slate-900">{row.service}</h2>
              </div>
              <span className={`rounded-full px-2 py-1 text-xs font-bold ${getStatusClassName(row.status)}`}>
                {row.status}
              </span>
            </div>

            <div className="space-y-1 text-sm font-semibold text-slate-600">
              <p className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> 서비스: {row.service}
              </p>
              <p>제출일: {row.date}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
