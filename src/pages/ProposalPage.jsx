import { ArrowLeft, CalendarDays, Clock3, FileUp, MapPin, Wallet } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function ProposalPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [price, setPrice] = useState('')
  const [duration, setDuration] = useState('')
  const [detail, setDetail] = useState('')
  const [fileName, setFileName] = useState('')

  const tab = searchParams.get('tab') || 'offer'
  const service = searchParams.get('service') || '고등학교'
  const noticeId = searchParams.get('noticeId') || 'N-HS-101'
  const noticeTitle = searchParams.get('noticeTitle') || '2024 Summer AI Coding Camp'
  const noticeOrg = searchParams.get('noticeOrg') || '서울대학교 (Seoul University)'
  const noticeDate = searchParams.get('noticeDate') || '2024-08-10'
  const noticeBudget = searchParams.get('noticeBudget') || '최대 5,000,000 KRW'
  const noticeDuration = searchParams.get('noticeDuration') || '2주'
  const directionText = tab === 'offer' ? '제안합니다: 대학 공고 입찰 제안서' : '제안해주세요: 대학 요청 제안서'

  const isSubmitDisabled = useMemo(() => {
    return !price.trim() || !duration.trim() || !detail.trim()
  }, [price, duration, detail])

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    setFileName(file ? file.name : '')
  }

  const onSubmit = () => {
    const params = new URLSearchParams({ tab, service, price, duration })
    navigate(`/submissions?${params.toString()}`)
  }

  return (
    <>
      <header className="flex items-center gap-4 border-b border-slate-100 bg-white px-6 py-5">
        <button type="button" onClick={() => navigate(-1)} className="text-slate-700">
          <ArrowLeft className="h-7 w-7" />
        </button>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">제안서 작성</h1>
          <p className="text-sm font-semibold text-brand-600">{directionText}</p>
        </div>
      </header>

      <section className="space-y-6 px-6 py-6">
        <article className="rounded-2xl border border-brand-200 bg-shell-100 p-4">
          <span className="rounded-md bg-brand-150 px-2 py-1 text-xs font-bold text-brand-600">공고 요약</span>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">서비스 항목: {service}</span>
            <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-bold text-slate-700">공고번호: {noticeId}</span>
          </div>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-900">{noticeTitle}</h2>
          <div className="mt-3 space-y-2 text-sm font-semibold text-slate-500">
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> {noticeDate}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {noticeOrg}
            </p>
            <p className="flex items-center gap-2">
              <Wallet className="h-4 w-4" /> 예산: {noticeBudget}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> 예상 기간: {noticeDuration}
            </p>
          </div>
        </article>

        <div>
          <label className="mb-2 block text-lg font-extrabold text-slate-700">제안 금액</label>
          <div className="flex items-center rounded-2xl border border-brand-200 bg-white px-4 py-3">
            <input
              type="number"
              min="0"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="금액을 입력해주세요"
              className="flex-1 bg-transparent text-xl font-bold text-slate-700 outline-none placeholder:text-slate-400"
            />
            <span className="text-lg font-bold text-slate-500">원</span>
          </div>
          <p className="mt-2 text-xs font-semibold text-slate-400">예상 부가세 포함 금액을 입력해 주세요.</p>
        </div>

        <div>
          <label className="mb-2 block text-lg font-extrabold text-slate-700">예상 소요 기간</label>
          <div className="flex items-center rounded-2xl border border-brand-200 bg-white px-4 py-3">
            <input
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              placeholder="예: 2주, 1개월"
              className="flex-1 bg-transparent text-lg font-semibold text-slate-700 outline-none placeholder:text-slate-400"
            />
            <Clock3 className="h-5 w-5 text-slate-400" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-lg font-extrabold text-slate-700">제안 상세 내용</label>
          <textarea
            rows={5}
            value={detail}
            onChange={(event) => setDetail(event.target.value)}
            placeholder={`${service} 서비스 계획, 커리큘럼, 강사진 등 주요 내용을 상세히 작성해 주세요.`}
            className="w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-base font-semibold text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-extrabold text-slate-700">제안서 파일 (PDF, PPT)</label>
          <div className="rounded-2xl border-2 border-dashed border-brand-200 bg-white px-4 py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <FileUp className="h-7 w-7" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-500">파일을 드래그하거나 클릭하여 업로드</p>
            <p className="text-xs font-semibold text-slate-400">최대 20MB 이하의 PDF, PPT 파일</p>
            <input id="proposal-file" type="file" accept=".pdf,.ppt,.pptx" className="hidden" onChange={handleFileChange} />
            <label
              htmlFor="proposal-file"
              className="mt-4 inline-flex cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
            >
              파일 선택하기
            </label>
            {fileName ? <p className="mt-2 text-xs font-semibold text-brand-600">{fileName}</p> : null}
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitDisabled}
          className="w-full rounded-2xl bg-brand-600 py-4 text-2xl font-black tracking-tight text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          제안서 제출하기
        </button>
      </section>
    </>
  )
}
