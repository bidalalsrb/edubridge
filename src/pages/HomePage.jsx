import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OngoingQuoteCard } from '../components/home/OngoingQuoteCard'
import { PremiumBanner } from '../components/home/PremiumBanner'
import { ServiceGrid } from '../components/home/ServiceGrid'
import { TabSwitch } from '../components/home/TabSwitch'
import { services, tabs } from '../components/home/data'

export function HomePage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('vendor')

  const onClickService = (service) => {
    const params = new URLSearchParams({ tab: activeTab, service: service.title })
    navigate(`/bid-notices?${params.toString()}`)
  }

  const onClickOngoingHistory = () => {
    const params = new URLSearchParams({
      tab: activeTab,
      service: '캠프 운영',
      status: '검토중',
      price: '4,500,000원',
      duration: '3주',
      date: '2026-02-19',
    })
    navigate(`/proposal-detail/P-301?${params.toString()}`)
  }

  return (
    <section className="px-6 py-6">
      <TabSwitch tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <OngoingQuoteCard onClickHistory={onClickOngoingHistory} />
      <ServiceGrid services={services} onClickService={onClickService} />
      <PremiumBanner />
    </section>
  )
}
