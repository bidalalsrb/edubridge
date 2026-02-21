import { useNavigate } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

export function MarketplaceTabs({ tabs, activeKey }) {
  const navigate = useNavigate()

  return (
    <Tabs className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 rounded-2xl bg-brand-200 p-1.5">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.key}
            active={tab.key === activeKey}
            onClick={() => navigate(tab.path)}
            className="rounded-xl py-2 text-base font-extrabold tracking-tight data-[active=true]:bg-white"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
