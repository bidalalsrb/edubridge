import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MarketplaceTabs } from '../components/marketplace/MarketplaceTabs'
import { UniversityNoticeManager } from '../components/marketplace/UniversityNoticeManager'
import { Card, CardContent } from '../components/ui/card'
import { platformTabs, universityBidNotices } from '../data/marketplaceData'

export function RequestDashboardPage() {
  const [searchParams] = useSearchParams()

  const directTarget = useMemo(() => {
    const id = searchParams.get('directTargetId')
    const name = searchParams.get('directTargetName')
    const role = searchParams.get('directTargetRole')

    if (!id || !name || !role) return null
    return { id, name, role }
  }, [searchParams])

  return (
    <section className="px-6 py-6">
      <MarketplaceTabs tabs={platformTabs} activeKey="request" />

      <Card className="mt-5 border-[#d7dfea] bg-[#edf4ff]">
        <CardContent className="p-4">
          <p className="text-xs font-bold text-[#336fea]">제안해주세요</p>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">대학이 입찰 공고를 등록하고 지원자를 확인하는 공간</h1>
          <p className="mt-1 text-sm font-semibold text-slate-600">공고 등록 후 업체/강사 지원 현황(누가 지원했는지)을 바로 확인할 수 있습니다.</p>
        </CardContent>
      </Card>

      <UniversityNoticeManager notices={universityBidNotices} directTarget={directTarget} />
    </section>
  )
}
