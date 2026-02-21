import { ArrowLeft, Star } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MarketplaceTabs } from '../components/marketplace/MarketplaceTabs'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { getRecentProfilesByService, getUniversityNoticesByService, platformTabs } from '../data/marketplaceData'

function RecentCard({ row, onDetail, onRequest }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className={`mt-1 h-12 w-12 rounded-full ${row.profileColor || 'bg-slate-300'}`} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold text-slate-900">{row.name}</p>
          <p className="mt-0.5 text-xs font-medium text-slate-500">{row.type}</p>
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-600">
            <Star className="h-3.5 w-3.5 fill-[#2f5bff] text-[#2f5bff]" />
            {row.rating} · 후기 {row.reviewCount}개 · 최근 {row.lastEvent}
          </p>
        </div>
      </div>

      <p className="mt-3 line-clamp-2 text-sm text-slate-600">{row.intro}</p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="secondary" className="h-10 border border-slate-300 bg-white" onClick={() => onRequest(row)}>
          제안 요청
        </Button>
        <Button className="h-10" onClick={() => onDetail(row)}>
          자세히보기
        </Button>
      </div>
    </article>
  )
}

export function OfferServiceRecentPage() {
  const navigate = useNavigate()
  const { serviceName } = useParams()

  const decodedServiceName = decodeURIComponent(serviceName || '')

  const { vendorRecent, freelancerRecent } = useMemo(() => getRecentProfilesByService(decodedServiceName), [decodedServiceName])
  const matchedNotices = useMemo(() => getUniversityNoticesByService(decodedServiceName), [decodedServiceName])

  const onOpenDetail = (row) => navigate(`/profile/${row.id}`)
  const onBidNotice = () => {
    const params = new URLSearchParams({ tab: 'offer', service: decodedServiceName })
    navigate(`/bid-notices?${params.toString()}`)
  }

  const onRequest = (row) => {
    const params = new URLSearchParams({
      directTargetId: row.id,
      directTargetName: row.name,
      directTargetRole: row.type,
    })
    navigate(`/request?${params.toString()}`)
  }

  return (
    <section className="px-6 py-6">
      <MarketplaceTabs tabs={platformTabs} activeKey="offer" />

      <button type="button" onClick={() => navigate('/offer')} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 전체 서비스
      </button>

      <Card className="mt-3 border-slate-200 bg-white shadow-none">
        <CardContent className="p-4">
          <p className="text-xs font-semibold text-slate-500">선택 서비스</p>
          <h1 className="text-2xl font-bold text-slate-900">{decodedServiceName}</h1>
          <p className="mt-1 text-sm text-slate-500">해당 서비스의 최근 행사 참여 이력이 있는 제안자 리스트입니다.</p>
        </CardContent>
      </Card>

      <Card className="mt-4 border-slate-200 shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold">대학 공고 입찰</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-600">해당 서비스로 등록된 대학 공고 {matchedNotices.length}건</p>
          <Button size="sm" className="mt-3" onClick={onBidNotice}>
            공고 확인하고 입찰하기
          </Button>
        </CardContent>
      </Card>

      <Card className="mt-4 border-slate-200 shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold">최근 업체 리스트</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {vendorRecent.length > 0 ? vendorRecent.map((row) => <RecentCard key={row.id} row={row} onDetail={onOpenDetail} onRequest={onRequest} />) : (
            <p className="rounded-xl bg-slate-50 p-3 text-sm text-slate-500">해당 서비스의 최근 업체 항목이 없습니다.</p>
          )}
        </CardContent>
      </Card>

      <Card className="mt-4 border-slate-200 shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold">최근 강사(프리랜서) 리스트</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {freelancerRecent.length > 0 ? freelancerRecent.map((row) => <RecentCard key={row.id} row={row} onDetail={onOpenDetail} onRequest={onRequest} />) : (
            <p className="rounded-xl bg-slate-50 p-3 text-sm text-slate-500">해당 서비스의 최근 강사 항목이 없습니다.</p>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
