import { FileText, UserCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const mySubmissions = [
  { id: 'P-301', service: '행사 기획', status: '제출완료', date: '2026-02-19', price: '3,000,000원', duration: '2주' },
  { id: 'P-300', service: '캠프 운영', status: '승인완료', date: '2026-02-18', price: '4,200,000원', duration: '3주' },
  { id: 'P-299', service: '특강 강사', status: '검토중', date: '2026-02-17', price: '2,100,000원', duration: '2주' },
]

export function MyPage() {
  const navigate = useNavigate()

  const getStatusClassName = (status) => {
    if (status === '승인완료') return 'bg-emerald-100 text-emerald-700'
    if (status === '제출완료') return 'bg-blue-100 text-blue-700'
    return 'bg-amber-100 text-amber-700'
  }

  const goSubmissionHistory = () => {
    navigate('/submissions')
  }

  const goNoticeCreate = () => {
    navigate('/notice-create')
  }

  const goNoticeManage = () => {
    navigate('/my/notices')
  }

  const goNoticeStatus = () => {
    navigate('/my/notices')
  }

  const goDirectRequest = () => {
    navigate('/offer')
  }

  const goProviderRegister = () => {
    navigate('/provider-register')
  }

  const goSubmissionDetail = (row) => {
    const params = new URLSearchParams({
      service: row.service,
      status: row.status,
      price: row.price,
      duration: row.duration,
      date: row.date,
    })
    navigate(`/proposal-detail/${row.id}?${params.toString()}`)
  }

  return (
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <UserCircle2 className="h-10 w-10 text-brand-600" />
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">마이페이지</h1>
            <p className="mt-1 text-sm font-semibold text-brand-600">나의 입찰/제안서 관리</p>
          </div>
        </div>
      </header>

      <section className="space-y-3 px-6 py-6">
        <article className="rounded-2xl border border-brand-300 bg-brand-50 p-4">
          <p className="text-xs font-bold text-brand-600">대학 기능</p>
          <h2 className="text-xl font-black tracking-tight text-slate-900">공고 관리</h2>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button type="button" onClick={goNoticeCreate} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">등록
            </button>
            <button type="button" onClick={goNoticeManage} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
              조회
            </button>
            <button type="button" onClick={goNoticeStatus} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
              진행현황
            </button>
            <button type="button" onClick={goDirectRequest} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
              업체 직접 제안요청
            </button>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-bold text-brand-600">업체/프리랜서 기능</p>
          <h2 className="text-xl font-black tracking-tight text-slate-900">업체 등록</h2>
          <p className="mt-1 text-sm font-semibold text-slate-600">대학이 직접 제안 요청할 수 있도록 프로필을 등록합니다.</p>
          <button type="button" onClick={goProviderRegister} className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
            업체 등록하기
          </button>
        </article>

        <button
          type="button"
          onClick={goSubmissionHistory}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left"
        >
          <p className="text-xs font-bold text-brand-600">제안서 내역</p>
          <h2 className="text-xl font-black tracking-tight text-slate-900">전체 제출 내역 보기</h2>
          <p className="mt-1 text-sm font-semibold text-slate-600">클릭하면 제안서 제출 내역 페이지로 이동합니다.</p>
        </button>

        {mySubmissions.map((row) => (
          <button
            type="button"
            key={row.id}
            onClick={() => goSubmissionDetail(row)}
            className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-left"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-brand-600">{row.id}</p>
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
              <p>제안 금액: {row.price}</p>
              <p>소요 기간: {row.duration}</p>
              <p>제출일: {row.date}</p>
            </div>
          </button>
        ))}
      </section>
    </>
  )
}
