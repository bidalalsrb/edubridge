import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getMyUniversityNotices } from '../data/marketplaceData'

export function MyNoticesPage() {
  const navigate = useNavigate()
  const notices = getMyUniversityNotices()

  const onEdit = (noticeId) => navigate(`/notice-create?noticeId=${noticeId}`)
  const onStatus = (noticeId) => navigate(`/my/notices/status/${noticeId}`)
  const onDirectRequest = () => navigate('/offer')

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate('/my')} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 마이페이지
      </button>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-black">내 공고 조회/수정</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {notices.map((notice) => (
            <article key={notice.id} className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-[#336fea]">{notice.id}</p>
              <h3 className="text-lg font-black text-slate-900">{notice.title}</h3>
              <p className="text-sm font-semibold text-slate-600">{notice.school} · {notice.service} · {notice.status}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">마감 {notice.dueDate} · 예산 {notice.budget}</p>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <Button size="sm" variant="secondary" onClick={() => onEdit(notice.id)}>수정</Button>
                <Button size="sm" variant="secondary" onClick={() => onStatus(notice.id)}>진행현황</Button>
                <Button size="sm" onClick={onDirectRequest}>업체 제안요청</Button>
              </div>
            </article>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
