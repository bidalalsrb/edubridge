import { cn } from '../../lib/utils'

export function ServiceGrid({ services, onClickService }) {
  return (
    <section className="mt-8">
      <h3 className="mb-4 text-[44px] font-black tracking-[-0.06em] text-slate-900">전체 서비스</h3>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onClickService(service)}
              className={cn('rounded-3xl bg-[#edf1f6] p-4 text-center')}
            >
              <span className={cn('mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl', service.color)}>
                <Icon className="h-7 w-7" />
              </span>
              <span className="text-[30px] font-extrabold tracking-[-0.04em] text-slate-700">{service.title}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
