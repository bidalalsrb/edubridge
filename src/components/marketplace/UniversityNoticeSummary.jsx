import { ChevronRight, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getStatusBadgeClass } from '../../lib/statusBadge'
import { Card, CardContent } from '../ui/card'

export function UniversityNoticeSummary({ notices, onOpenNotice }) {
  const [visibleCount, setVisibleCount] = useState(5)

  useEffect(() => {
    setVisibleCount(5)
  }, [notices])

  const visibleNotices = notices.slice(0, visibleCount)
  const hasMore = notices.length > visibleCount

  return (
    <div className="mt-4 grid gap-2">
      {visibleNotices.map((notice) => (
        <Card
          key={notice.id}
          className={`bg-white ${notice.isMine ? 'border-brand-600' : 'border-slate-200'} ${onOpenNotice ? 'cursor-pointer transition hover:bg-slate-50' : ''}`}
          onClick={onOpenNotice ? () => onOpenNotice(notice) : undefined}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-brand-700">{notice.id}</p>
                <h3 className="line-clamp-1 text-sm font-black text-slate-900">{notice.title}</h3>
                <p className="mt-0.5 text-xs font-semibold text-slate-500">{notice.school}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                  <span>마감 {notice.dueDate}</span>
                  <span>·</span>
                  <span>{notice.budget}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {notice.applicants.length}명</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {notice.isMine ? <span className="rounded-md bg-brand-600 px-2 py-1 text-[11px] font-bold text-white">내가 등록한 공고</span> : null}
                <span className={`rounded-md px-2 py-1 text-[11px] font-bold ${getStatusBadgeClass(notice.status)}`}>{notice.status}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {hasMore ? (
        <button
          type="button"
          onClick={() => setVisibleCount((prev) => prev + 5)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          더보기
        </button>
      ) : null}
    </div>
  )
}
