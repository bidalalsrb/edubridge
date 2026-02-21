import { useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export function UniversityNoticeManager({ notices, directTarget }) {
  const [activeNoticeId, setActiveNoticeId] = useState(notices[0]?.id)

  const activeNotice = useMemo(() => {
    return notices.find((item) => item.id === activeNoticeId) || notices[0]
  }, [activeNoticeId, notices])

  return (
    <div className="mt-5 space-y-5">
      <Card className="border-brand-200">
        <CardHeader>
          <CardTitle className="text-xl font-black">대학 입찰 공고 등록</CardTitle>
          <p className="text-sm font-semibold text-slate-500">대학은 공고를 등록하고, 지원한 업체/강사를 한 화면에서 확인합니다.</p>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs font-bold text-brand-600">공고 제목</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">예: 2026 여름방학 AI 집중캠프 운영</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs font-bold text-brand-600">예산/마감일</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">예: 5,000,000원 / 2026-03-20</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 md:col-span-2">
            <p className="text-xs font-bold text-brand-600">요청 상세</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">행사 목적, 대상, 진행 방식, 필수 조건을 입력합니다.</p>
          </div>
          <Button className="md:col-span-2">입찰 공고 등록</Button>
        </CardContent>
      </Card>

      {directTarget ? (
        <Card className="border-brand-600 bg-brand-50">
          <CardContent className="p-4">
            <p className="text-xs font-bold text-brand-600">직접 제안 요청 대상</p>
            <p className="text-lg font-black text-slate-900">{directTarget.name}</p>
            <p className="text-sm font-semibold text-slate-600">{directTarget.role}에게 해당 공고 참여를 요청할 수 있습니다.</p>
          </CardContent>
        </Card>
      ) : null}

      <Card className="border-brand-200">
        <CardHeader>
          <CardTitle className="text-xl font-black">내 입찰 공고 및 지원자</CardTitle>
          <div className="flex flex-wrap gap-2">
            {notices.map((notice) => (
              <Button
                key={notice.id}
                variant={notice.id === activeNoticeId ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setActiveNoticeId(notice.id)}
              >
                {notice.id}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-bold text-brand-600">{activeNotice.id}</p>
            <h3 className="text-lg font-black text-slate-900">{activeNotice.title}</h3>
            <p className="text-sm font-semibold text-slate-600">
              {activeNotice.school} · 마감 {activeNotice.dueDate} · 예산 {activeNotice.budget}
            </p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>지원자</TableHead>
                <TableHead>구분</TableHead>
                <TableHead>제안가</TableHead>
                <TableHead>상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeNotice.applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className="font-semibold text-slate-800">{applicant.name}</TableCell>
                  <TableCell>{applicant.type}</TableCell>
                  <TableCell>{applicant.proposal}</TableCell>
                  <TableCell>{applicant.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
