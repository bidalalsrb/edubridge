import { cn } from '../../lib/utils'

export function ServiceGrid({ services, onClickService, sectionClassName, gridClassName, tileClassName }) {
  return (
    <section className={cn('mt-8', sectionClassName)}>
      <h3 className="mb-4 text-3xl font-black tracking-tight text-slate-900">전체 서비스</h3>
      <div className={cn('grid grid-cols-3 gap-5', gridClassName)}>
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              className={cn(' rounded-3xl  p-1 text-center', tileClassName)}
            >

              <div className="flex h-full flex-col items-center justify-center "
                   >
                  <span className="cursor-pointer" onClick={() => onClickService(service)}>
                <span className={cn('mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-2xl', service.color)}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base font-extrabold tracking-tight text-slate-700">{service.title}</span>
                      </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
