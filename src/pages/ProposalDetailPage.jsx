import { ArrowLeft, CalendarDays, Clock3, FileText, Paperclip, Wallet } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const proposalDetails = {
  'P-301': {
    title: '행사 기획 제안서',
    detail:
      '신입생 대상 AI 체험형 워크숍을 중심으로, 사전 설문 기반 난이도 그룹을 편성하여 운영합니다. 오프라인 실습과 멘토링 세션을 결합해 참여도를 높이고, 종료 후 결과 리포트를 제출합니다.',
    deliverables: ['프로그램 운영안', '강사/멘토 배치표', '참가자 만족도 리포트'],
    files: ['proposal_p301.pdf', 'schedule_p301.pptx'],
  },
  'P-300': {
    title: '캠프 운영 제안서',
    detail:
      '3주 과정 코딩 캠프 운영을 위해 주차별 커리큘럼과 평가 체계를 설계했습니다. 주간 회고와 중간 점검을 포함해 학습 이탈을 줄이고 완주율을 높이는 것을 목표로 합니다.',
    deliverables: ['주차별 커리큘럼', '운영 인력 계획서', '중간/최종 평가표'],
    files: ['proposal_p300.pdf'],
  },
  'P-299': {
    title: '특강 강사 제안서',
    detail:
      '산학 연계 주제로 2주 특강을 구성했습니다. 실제 프로젝트 사례를 중심으로 강의를 진행하고, 질의응답과 과제 피드백 세션을 통해 실무 이해도를 높입니다.',
    deliverables: ['강의안', '실습 과제지', '강의 결과 보고서'],
    files: ['proposal_p299.pdf', 'lecture_materials_p299.zip'],
  },
}

export function ProposalDetailPage() {
  const navigate = useNavigate()
  const { proposalId } = useParams()
  const [searchParams] = useSearchParams()

  const service = searchParams.get('service') || '행사 기획'
  const status = searchParams.get('status') || '검토중'
  const price = searchParams.get('price') || '미입력'
  const duration = searchParams.get('duration') || '미입력'
  const date = searchParams.get('date') || '미입력'

  const detail = useMemo(() => {
    return (
      proposalDetails[proposalId] || {
        title: `${service} 제안서`,
        detail: '등록된 상세 제안 내용이 없습니다.',
        deliverables: ['세부 항목 없음'],
        files: ['첨부 파일 없음'],
      }
    )
  }, [proposalId, service])

  const onClickProcess = () => {
    const params = new URLSearchParams({ service, status, price, duration })
    navigate(`/process/${proposalId}?${params.toString()}`)
  }

  return (
    <>
      <header className="flex items-center gap-4 border-b border-slate-100 bg-white px-6 py-5">
        <button type="button" onClick={() => navigate(-1)} className="text-slate-700">
          <ArrowLeft className="h-7 w-7" />
        </button>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">제안서 상세</h1>
          <p className="mt-1 text-sm font-semibold text-[#336fea]">제안번호 {proposalId}</p>
        </div>
      </header>

      <section className="space-y-3 px-6 py-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#336fea]">{proposalId}</p>
              <h2 className="text-xl font-black tracking-tight text-slate-900">{detail.title}</h2>
            </div>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">{status}</span>
          </div>

          <div className="space-y-1 text-sm font-semibold text-slate-600">
            <p className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> 서비스: {service}
            </p>
            <p className="flex items-center gap-2">
              <Wallet className="h-4 w-4" /> 제안 금액: {price}
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> 소요 기간: {duration}
            </p>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> 제출일: {date}
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <h2 className="text-xl font-black tracking-tight text-slate-900">상세 제안 내용</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{detail.detail}</p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <h2 className="text-xl font-black tracking-tight text-slate-900">산출물</h2>
          <div className="mt-2 space-y-1 text-sm font-semibold text-slate-600">
            {detail.deliverables.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <h2 className="text-xl font-black tracking-tight text-slate-900">첨부 파일</h2>
          <div className="mt-2 space-y-1 text-sm font-semibold text-slate-600">
            {detail.files.map((file) => (
              <p key={file} className="flex items-center gap-2">
                <Paperclip className="h-4 w-4" /> {file}
              </p>
            ))}
          </div>
        </article>

        <button
          type="button"
          onClick={onClickProcess}
          className="w-full rounded-2xl bg-[#336fea] py-4 text-base font-black tracking-tight text-white"
        >
          프로세스 보기
        </button>
      </section>
    </>
  )
}
