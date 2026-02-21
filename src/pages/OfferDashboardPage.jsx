import { DirectorySection } from '../components/marketplace/DirectorySection'
import { MarketplaceTabs } from '../components/marketplace/MarketplaceTabs'
import { ServiceGridPanel } from '../components/marketplace/ServiceGridPanel'
import { Card, CardContent } from '../components/ui/card'
import {
  freelancerDirectory,
  platformTabs,
  serviceCards,
  vendorDirectory,
} from '../data/marketplaceData'

export function OfferDashboardPage() {
  return (
    <section className="px-6 py-6">
      <MarketplaceTabs tabs={platformTabs} activeKey="offer" />

      <Card className="mt-5 border-[#d7dfea] bg-[#edf4ff]">
        <CardContent className="p-4">
          <p className="text-xs font-bold text-[#336fea]">제안합니다</p>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">업체/프리랜서가 대학 공고를 확인하고 입찰하는 공간</h1>
          <p className="mt-1 text-sm font-semibold text-slate-600">서비스 선택 → 대학 공고 확인 → 제안서 제출 → 진행 현황 확인</p>
        </CardContent>
      </Card>

      <ServiceGridPanel services={serviceCards} />

      <DirectorySection title="최근 행사 진행 업체 / 전체 업체 / 필터" roleLabel="업체" rowsByMode={vendorDirectory} />

      <DirectorySection
        title="최근 행사 진행 강사(프리랜서) / 전체 강사 / 필터"
        roleLabel="프리랜서(강사)"
        rowsByMode={freelancerDirectory}
      />
    </section>
  )
}
