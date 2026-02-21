import { ArrowLeft, CircleCheck, Users } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getUniversityNoticeById } from '../data/marketplaceData'

export function RequestNoticeDetailPage() {
  const navigate = useNavigate()
  const { noticeId } = useParams()

  const notice = useMemo(() => getUniversityNoticeById(noticeId), [noticeId])

  if (!notice) {
    return (
      <section className="px-6 py-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-semibold text-slate-500">공고를 찾을 수 없습니다.</p>
            <Button className="mt-4" onClick={() => navigate('/request')}>
              제안해주세요로 이동
            </Button>
          </CardContent>
        </Card>
      </section>
    )
  }

  const onApply = () => {
    const params = new URLSearchParams({
      tab: 'request',
      service: notice.service,
      noticeId: notice.id,
      noticeTitle: notice.title,
      noticeOrg: notice.school,
      noticeDate: notice.dueDate,
      noticeBudget: notice.budget,
    })
    navigate(`/proposal?${params.toString()}`)
  }

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate('/request')} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 목록으로
      </button>

      <Card className="border-brand-600">
        <CardHeader>
          <p className="text-xs font-bold text-brand-600">{notice.id}</p>
          <CardTitle className="text-2xl font-black tracking-tight text-slate-900">{notice.title}</CardTitle>
          <p className="text-sm font-semibold text-slate-600">{notice.school}</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 rounded-xl bg-shell-50 p-4 text-sm font-semibold text-slate-700 md:grid-cols-3">
            <p>서비스: {notice.service}</p>
            <p>마감일: {notice.dueDate}</p>
            <p>예산: {notice.budget}</p>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm font-bold text-brand-600">진행 상태</p>
            <ul className="space-y-2">
              {notice.progress.map((step) => (
                <li key={step} className="flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
                  <CircleCheck className="h-4 w-4 text-brand-600" /> {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 rounded-xl bg-brand-50 p-3 text-sm font-semibold text-slate-700">
            <p className="mb-2 inline-flex items-center gap-1 text-brand-700">
              <Users className="h-4 w-4" /> 현재 지원 {notice.applicants.length}명
            </p>
            <p>{notice.applicants.map((applicant) => applicant.name).join(', ')} 지원</p>
          </div>

          <Button className="mt-5 h-11 w-full" onClick={onApply}>
            지원하기
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
