import { cn } from '../../lib/utils'

export function ServiceGrid({ services, onClickService }) {
  return (
    <section className="mt-8">
      <h3 className="mb-4 text-3xl font-black tracking-tight text-slate-900">전체 서비스</h3>
      <div className="grid grid-cols-3 gap-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onClickService(service)}
              className={cn('rounded-3xl bg-[#edf1f6] p-3 text-center')}
            >
              <span className={cn('mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl', service.color)}>
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-base font-extrabold tracking-tight text-slate-700">{service.title}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
