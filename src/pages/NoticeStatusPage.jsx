import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getUniversityNoticeById } from '../data/marketplaceData'

export function NoticeStatusPage() {
  const navigate = useNavigate()
  const { noticeId } = useParams()

  const notice = useMemo(() => getUniversityNoticeById(noticeId), [noticeId])

  if (!notice) {
    return (
      <section className="px-6 py-6">
        <p className="text-sm font-semibold text-slate-500">공고를 찾을 수 없습니다.</p>
      </section>
    )
  }

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate('/my/notices')} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 내 공고 목록
      </button>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-black">공고 진행현황</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs font-bold text-[#336fea]">{notice.id}</p>
          <h2 className="text-lg font-black text-slate-900">{notice.title}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-600">현재 상태: {notice.status}</p>

          <div className="mt-4 space-y-2">
            {notice.progress.map((step, index) => {
              const done = index < notice.progress.length - 1
              return (
                <div key={step} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
                  {done ? <CheckCircle2 className="h-4 w-4 text-[#336fea]" /> : <Circle className="h-4 w-4 text-slate-400" />}
                  <p className="text-sm font-semibold text-slate-700">{step}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
