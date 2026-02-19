import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { AlertsPage } from './pages/AlertsPage'
import { BidNoticeListPage } from './pages/BidNoticeListPage'
import { HomePage } from './pages/HomePage'
import { MyPage } from './pages/MyPage'
import { ProcessPage } from './pages/ProcessPage'
import { ProposalDetailPage } from './pages/ProposalDetailPage'
import { ProposalPage } from './pages/ProposalPage'
import { SubmissionHistoryPage } from './pages/SubmissionHistoryPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="bid-notices" element={<BidNoticeListPage />} />
        <Route path="proposal" element={<ProposalPage />} />
        <Route path="proposal-detail/:proposalId" element={<ProposalDetailPage />} />
        <Route path="submissions" element={<SubmissionHistoryPage />} />
        <Route path="process/:proposalId" element={<ProcessPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="my" element={<MyPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
