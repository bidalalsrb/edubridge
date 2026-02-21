import { cn } from '../../lib/utils'

export function ServiceGrid({ services, onClickService, sectionClassName, gridClassName, tileClassName }) {
  return (
    <section className={cn('mt-6 rounded-2xl border border-slate-200 bg-white p-5', sectionClassName)}>
      <h3 className="mb-4 text-base font-black text-slate-900">빠른 서비스 선택</h3>
      <div className={cn('grid grid-cols-3 gap-3', gridClassName)}>
        {services.map((service) => {
          const Icon = service.icon
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onClickService(service)}
              className={cn('min-h-[92px] rounded-xl border border-slate-200 p-2 text-center transition hover:bg-slate-50', tileClassName)}
            >
              <span className={cn('mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl', service.color)}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-slate-700">{service.title}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
