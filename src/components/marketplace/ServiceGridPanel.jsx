import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function ServiceGridPanel({ services }) {
  const navigate = useNavigate()

  const onClickService = (service) => {
    const params = new URLSearchParams({ tab: 'offer', service: service.title })
    navigate(`/bid-notices?${params.toString()}`)
  }

  return (
    <Card className="mt-5 border-[#d7dfea]">
      <CardHeader>
        <CardTitle className="text-xl font-black">서비스 선택 (3x3)</CardTitle>
        <p className="text-sm font-semibold text-slate-500">서비스를 클릭하면 대학 입찰 공고 확인 → 입찰 → 진행 현황으로 이어집니다.</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onClickService(service)}
                className="rounded-2xl border border-slate-200 bg-white p-3 text-left transition hover:border-[#336fea]"
              >
                <span className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl ${service.color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-extrabold text-slate-800">{service.title}</p>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
