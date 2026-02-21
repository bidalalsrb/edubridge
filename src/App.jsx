import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { AlertsPage } from './pages/AlertsPage'
import { BidNoticeListPage } from './pages/BidNoticeListPage'
import { MyPage } from './pages/MyPage'
import { OfferDashboardPage } from './pages/OfferDashboardPage'
import { ProcessPage } from './pages/ProcessPage'
import { ProfileDetailPage } from './pages/ProfileDetailPage'
import { ProposalDetailPage } from './pages/ProposalDetailPage'
import { ProposalPage } from './pages/ProposalPage'
import { RequestDashboardPage } from './pages/RequestDashboardPage'
import { SubmissionHistoryPage } from './pages/SubmissionHistoryPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/offer" replace />} />
        <Route path="offer" element={<OfferDashboardPage />} />
        <Route path="request" element={<RequestDashboardPage />} />
        <Route path="profile/:profileId" element={<ProfileDetailPage />} />
        <Route path="bid-notices" element={<BidNoticeListPage />} />
        <Route path="proposal" element={<ProposalPage />} />
        <Route path="proposal-detail/:proposalId" element={<ProposalDetailPage />} />
        <Route path="submissions" element={<SubmissionHistoryPage />} />
        <Route path="process/:proposalId" element={<ProcessPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="my" element={<MyPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/offer" replace />} />
    </Routes>
  )
}

export default App
