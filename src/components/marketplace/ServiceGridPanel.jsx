import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function ServiceGridPanel({ services }) {
  const navigate = useNavigate()

  return (
    <Card className="mt-5 border-slate-200 shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-slate-900">전체 서비스</CardTitle>
        <p className="text-sm text-slate-500">서비스를 선택하면 해당 서비스의 최근 제안 리스트 페이지로 이동합니다.</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => navigate(`/offer/service/${encodeURIComponent(service.title)}`)}
                className="rounded-2xl border border-slate-200 bg-white p-3 text-left transition hover:border-slate-400"
              >
                <span className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl ${service.color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold text-slate-800">{service.title}</p>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
