import { CheckCircle2, Circle, Clock3 } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export function ProcessPage() {
  const navigate = useNavigate()
  const { proposalId } = useParams()
  const [searchParams] = useSearchParams()

  const service = searchParams.get('service') || '행사 기획'
  const status = searchParams.get('status') || '검토중'
  const price = searchParams.get('price') || '미입력'
  const duration = searchParams.get('duration') || '미입력'

  const currentStep = useMemo(() => {
    if (status === '제출완료') return 1
    if (status === '승인완료') return 2
    if (status === '검토중') return 3
    return 4
  }, [status])

  const steps = [
    { step: 1, title: '제안서 제출 완료', desc: '제안서가 정상 접수되었습니다.' },
    { step: 2, title: '제출 승인', desc: '담당자가 제안서 제출을 승인했습니다.' },
    { step: 3, title: '매칭 검토', desc: '상대 기관과 조건 검토가 진행 중입니다.' },
    { step: 4, title: '최종 확정', desc: '입찰 매칭 및 계약 단계입니다.' },
  ]

  return (
    <>
      <header className="border-b border-slate-100 bg-white px-6 py-5">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">프로세스 현황</h1>
        <p className="mt-1 text-sm font-semibold text-brand-600">제안번호 {proposalId} · {service}</p>
      </header>

      <section className="space-y-5 px-6 py-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-4">
          <h2 className="text-lg font-black text-slate-900">제안 요약</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">제안 금액: {price}</p>
          <p className="text-sm font-semibold text-slate-600">예상 기간: {duration}</p>
          <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">
            <Clock3 className="h-3.5 w-3.5" /> 현재 상태: {status}
          </p>
        </article>

        <div className="space-y-3">
          {steps.map((item) => {
            const done = item.step <= currentStep
            const active = item.step === currentStep
            return (
              <div
                key={item.step}
                className={`rounded-2xl border p-4 ${done ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white'}`}
              >
                <div className="flex items-center gap-2">
                  {done ? <CheckCircle2 className="h-5 w-5 text-brand-600" /> : <Circle className="h-5 w-5 text-slate-300" />}
                  <p className={`font-black ${active ? 'text-brand-600' : 'text-slate-700'}`}>{item.title}</p>
                </div>
                <p className="mt-1 text-sm font-semibold text-slate-500">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => navigate('/submissions')}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
          >
            제출 내역으로
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-bold text-white"
          >
            홈으로
          </button>
        </div>
      </section>
    </>
  )
}
