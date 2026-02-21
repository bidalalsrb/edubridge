import { MarketplaceTabs } from '../components/marketplace/MarketplaceTabs'
import { ServiceGridPanel } from '../components/marketplace/ServiceGridPanel'
import { Card, CardContent } from '../components/ui/card'
import { platformTabs, serviceCards } from '../data/marketplaceData'

export function OfferDashboardPage() {
  return (
    <section className="px-6 py-6">
      <MarketplaceTabs tabs={platformTabs} activeKey="offer" />

      <Card className="mt-5 border-slate-200 bg-white shadow-none">
        <CardContent className="p-4">
          <p className="text-xs font-semibold text-slate-500">제안합니다</p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">서비스 선택</h1>
          <p className="mt-1 text-sm text-slate-500">원하는 서비스 항목을 선택해 최근 활동 리스트를 확인하세요.</p>
        </CardContent>
      </Card>

      <ServiceGridPanel services={serviceCards} />
    </section>
  )
}
