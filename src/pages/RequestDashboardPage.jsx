import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MarketplaceTabs } from '../components/marketplace/MarketplaceTabs'
import { UniversityNoticeSummary } from '../components/marketplace/UniversityNoticeSummary'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { platformTabs, universityBidNotices } from '../data/marketplaceData'

export function RequestDashboardPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const directTarget = useMemo(() => {
    const id = searchParams.get('directTargetId')
    const name = searchParams.get('directTargetName')
    const role = searchParams.get('directTargetRole')

    if (!id || !name || !role) return null
    return { id, name, role }
  }, [searchParams])

  return (
    <section className="px-4 py-4">
      <MarketplaceTabs tabs={platformTabs} activeKey="request" />

      <Card className="mt-4 border-slate-200">
        <CardContent className="p-4">
          <p className="text-xs font-bold text-slate-500">공고</p>
          <h1 className="text-lg font-black text-slate-900">대학 입찰 공고</h1>
          <p className="mt-1 text-xs font-semibold text-slate-500">공고를 선택해 상세를 확인하고 바로 지원할 수 있습니다.</p>
        </CardContent>
      </Card>

      {directTarget ? (
        <Card className="mt-4 border-brand-200 bg-brand-50">
          <CardContent className="p-4">
            <p className="text-xs font-bold text-brand-700">직접 제안 요청 대상</p>
            <p className="text-base font-black text-slate-900">{directTarget.name}</p>
            <p className="text-xs font-semibold text-slate-600">{directTarget.role}에게 공고 참여를 요청할 수 있습니다.</p>
            <Button size="sm" className="mt-3" onClick={() => navigate('/notice-create')}>
              공고 등록
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <UniversityNoticeSummary notices={universityBidNotices} onOpenNotice={(notice) => navigate(`/request/notices/${notice.id}`)} />
    </section>
  )
}
