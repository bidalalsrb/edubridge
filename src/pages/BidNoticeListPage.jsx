import { ArrowLeft, CalendarDays, Clock3, MapPin, Wallet } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const noticeCatalog = {
  고등학교: [
    {
      id: 'N-HS-101',
      title: '고등학교 진로체험 캠프 운영',
      org: '서울미래고등학교',
      due: '2026-03-03',
      budget: '4,800,000원',
      duration: '2주',
    },
    {
      id: 'N-HS-102',
      title: 'AI 기초 실습 특강 운영',
      org: '한빛고등학교',
      due: '2026-03-07',
      budget: '3,600,000원',
      duration: '10일',
    },
  ],
  저학년: [
    {
      id: 'N-LG-201',
      title: '저학년 코딩 사고력 프로그램',
      org: '푸른초등학교',
      due: '2026-03-05',
      budget: '2,200,000원',
      duration: '3주',
    },
    {
      id: 'N-LG-202',
      title: '저학년 창의 메이커 교실',
      org: '새빛초등학교',
      due: '2026-03-10',
      budget: '2,800,000원',
      duration: '2주',
    },
  ],
}

function getDefaultNotices(service) {
  return [
    {
      id: `N-${service}-001`,
      title: `${service} 맞춤형 운영 공고`,
      org: '에듀브릿지 파트너 기관',
      due: '2026-03-12',
      budget: '3,000,000원',
      duration: '2주',
    },
  ]
}

export function BidNoticeListPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const tab = searchParams.get('tab') || 'vendor'
  const service = searchParams.get('service') || '고등학교'
  const directionText = tab === 'vendor' ? '업체 -> 대학 입찰 공고' : '대학 -> 업체 입찰 공고'

  const notices = useMemo(() => {
    return noticeCatalog[service] || getDefaultNotices(service)
  }, [service])

  const onClickNotice = (notice) => {
    const params = new URLSearchParams({
      tab,
      service,
      noticeId: notice.id,
      noticeTitle: notice.title,
      noticeOrg: notice.org,
      noticeDate: notice.due,
      noticeBudget: notice.budget,
      noticeDuration: notice.duration,
    })
    navigate(`/proposal?${params.toString()}`)
  }

  return (
    <>
      <header className="flex items-center gap-4 border-b border-slate-100 bg-white px-6 py-5">
        <button type="button" onClick={() => navigate(-1)} className="text-slate-700">
          <ArrowLeft className="h-7 w-7" />
        </button>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">입찰 공고 목록</h1>
          <p className="mt-1 text-sm font-semibold text-[#336fea]">{directionText}</p>
        </div>
      </header>

      <section className="space-y-3 px-6 py-6">
        <article className="rounded-2xl border border-[#dbe4f5] bg-[#f4f7fc] p-4">
          <p className="text-xs font-bold text-[#336fea]">선택한 서비스 항목</p>
          <h2 className="text-xl font-black tracking-tight text-slate-900">{service}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-600">공고를 선택하면 제안서 작성 화면으로 이동합니다.</p>
        </article>

        {notices.map((notice) => (
          <button
            key={notice.id}
            type="button"
            onClick={() => onClickNotice(notice)}
            className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#336fea]">{notice.id}</p>
                <h2 className="text-xl font-black tracking-tight text-slate-900">{notice.title}</h2>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">접수중</span>
            </div>

            <div className="space-y-1 text-sm font-semibold text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 기관: {notice.org}
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> 마감일: {notice.due}
              </p>
              <p className="flex items-center gap-2">
                <Wallet className="h-4 w-4" /> 예산: {notice.budget}
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" /> 예상 기간: {notice.duration}
              </p>
            </div>
          </button>
        ))}
      </section>
    </>
  )
}
