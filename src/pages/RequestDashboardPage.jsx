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
    <section className="px-6 py-6">
      <MarketplaceTabs tabs={platformTabs} activeKey="request" />

      <Card className="mt-5 border-[#d7dfea] ">
        <CardContent className="p-4">
          <p className="text-xs font-bold text-[#336fea]">제안해주세요</p>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">전체 대학 공고</h1>
          {/*<p className="mt-1 text-sm font-semibold text-slate-600">전체 대학이 등록한 공고를 확인하고, 내 공고는 우측 하단 배지로 구분됩니다.</p>*/}
        </CardContent>
      </Card>

      {directTarget ? (
        <Card className="mt-5 border-[#336fea] bg-[#eef4ff]">
          <CardContent className="p-4">
            <p className="text-xs font-bold text-[#336fea]">직접 제안 요청 대상</p>
            <p className="text-lg font-black text-slate-900">{directTarget.name}</p>
            <p className="text-sm font-semibold text-slate-600">{directTarget.role}에게 공고 참여를 요청할 수 있습니다.</p>
            <Button size="sm" className="mt-3" onClick={() => navigate('/notice-create')}>
              공고 등록하러 가기
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <UniversityNoticeSummary notices={universityBidNotices} />
    </section>
  )
}
