import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BidHistoryPanel } from '../components/home/BidHistoryPanel'
import { OngoingQuoteCard } from '../components/home/OngoingQuoteCard'
import { PremiumBanner } from '../components/home/PremiumBanner'
import { ServiceGrid } from '../components/home/ServiceGrid'
import { TabSwitch } from '../components/home/TabSwitch'
import { services, tabs } from '../components/home/data'

export function HomePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('vendor')
  const [activeServiceId, setActiveServiceId] = useState(null)
  const [history] = useState([
    { id: 'Q-101', service: '행사 기획', status: '실시간 입찰 중' },
    { id: 'Q-102', service: '행사 기획', status: '업체 매칭 중' },
  ])

  const activeService = useMemo(() => {
    return services.find((service) => service.id === activeServiceId) || services[0]
  }, [activeServiceId])

  const onClickService = (service) => {
    setActiveServiceId(service.id)
    const params = new URLSearchParams({ tab: activeTab, service: service.title })
    navigate(`/proposal?${params.toString()}`)
  }

  return (
    <section className="px-6 py-6">
      <TabSwitch tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <OngoingQuoteCard />
      <ServiceGrid services={services} onClickService={onClickService} />
      <PremiumBanner />
      {/*<BidHistoryPanel*/}
      {/*  activeServiceTitle={activeService.title}*/}
      {/*  history={history}*/}
      {/*  onOpenMyPage={() => navigate('/my')}*/}
      {/*/>*/}
    </section>
  )
}
