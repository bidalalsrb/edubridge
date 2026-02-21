import { ArrowLeft, CalendarDays, Wallet } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getUniversityNoticeById } from '../data/marketplaceData'

export function NoticeCreatePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const noticeId = searchParams.get('noticeId')

  const editNotice = useMemo(() => {
    if (!noticeId) return null
    return getUniversityNoticeById(noticeId)
  }, [noticeId])

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 이전
      </button>

      <Card className="border-[#d7dfea]">
        <CardHeader>
          <CardTitle className="text-xl font-black">{editNotice ? '공고 수정' : '공고 등록'}</CardTitle>
          <p className="text-sm font-semibold text-slate-500">대학 입찰 공고를 등록하면 제안합니다 탭의 업체/강사가 지원할 수 있습니다.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs font-bold text-[#336fea]">공고 제목</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">{editNotice?.title || '예: 2026 2학기 창업 멘토링 프로그램'}</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-[#336fea]">예산</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-slate-500">
                <Wallet className="h-4 w-4" /> {editNotice?.budget || '예: 3,500,000원'}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-[#336fea]">마감일</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-slate-500">
                <CalendarDays className="h-4 w-4" /> {editNotice?.dueDate || '예: 2026-03-25'}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs font-bold text-[#336fea]">공고 상세</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">행사 목적, 대상, 일정, 운영 요구사항을 작성합니다.</p>
          </div>

          <Button className="h-11 w-full">{editNotice ? '공고 수정하기' : '공고 등록하기'}</Button>
        </CardContent>
      </Card>
    </section>
  )
}
