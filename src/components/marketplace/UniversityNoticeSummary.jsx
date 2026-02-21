import { Users } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

export function UniversityNoticeSummary({ notices }) {
  return (
    <div className="mt-5 grid gap-3">
      {notices.map((notice) => (
        <Card key={notice.id} className={`relative bg-white ${notice.isMine ? 'border-red-400' : 'border-[#d7dfea]'}`}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#336fea]">{notice.id}</p>
                <h3 className="text-lg font-black text-slate-900">{notice.title}</h3>
                <p className="text-sm font-semibold text-slate-500">{notice.school}</p>
              </div>
              <div className="flex items-center gap-2">
                {notice.isMine ? (
                  <span className="rounded-full bg-[#336fea] px-2 py-1 text-xs font-bold text-white">내가 등록한 공고</span>
                ) : null}
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">{notice.status}</span>
              </div>
            </div>

            <div className="mt-3 grid gap-2 text-sm font-semibold text-slate-600 md:grid-cols-3">
              <p>마감일: {notice.dueDate}</p>
              <p>예산: {notice.budget}</p>
              <p className="inline-flex items-center gap-1">
                <Users className="h-4 w-4" /> 지원자 {notice.applicants.length}명
              </p>
            </div>

            <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-600">
              {notice.applicants.map((applicant) => applicant.name).join(', ')} 지원
            </div>

          </CardContent>
        </Card>
      ))}
    </div>
  )
}
