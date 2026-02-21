import { MarketplaceTabs } from '../components/marketplace/MarketplaceTabs'
import { ServiceGridPanel } from '../components/marketplace/ServiceGridPanel'
import { Card, CardContent } from '../components/ui/card'
import { platformTabs, serviceCards } from '../data/marketplaceData'

export function OfferDashboardPage() {
  return (
    <section className="px-4 py-4">
      <MarketplaceTabs tabs={platformTabs} activeKey="offer" />

      <Card className="mt-4 border-slate-200 bg-white shadow-none">
        <CardContent className="p-4">
          <p className="text-xs font-semibold text-slate-500">공고</p>
          <h1 className="text-lg font-black text-slate-900">대학이 찾는 업체/강사</h1>
          <p className="mt-1 text-xs font-semibold text-slate-500">카테고리를 선택해 최근 활동 이력을 확인하세요.</p>
        </CardContent>
      </Card>

      <ServiceGridPanel services={serviceCards} />
    </section>
  )
}
