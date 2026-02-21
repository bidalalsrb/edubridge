import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function ServiceGridPanel({ services }) {
  const navigate = useNavigate()

  return (
    <Card className="mt-4 border-slate-200 shadow-none">
      <CardHeader className="pb-1">
        <CardTitle className="text-base font-black text-slate-900">업체/강사 카테고리</CardTitle>
        <p className="text-xs text-slate-500">서비스를 선택하면 최근 활동 리스트를 확인할 수 있습니다.</p>
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
                className="flex min-h-[96px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-center transition hover:bg-slate-50"
              >
                <span className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg ${service.color}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold text-slate-800">{service.title}</span>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
