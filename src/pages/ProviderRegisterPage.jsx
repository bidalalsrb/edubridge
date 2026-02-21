import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function ProviderRegisterPage() {
  const navigate = useNavigate()

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate('/my')} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 마이페이지
      </button>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-black">업체/프리랜서 등록</CardTitle>
          <p className="text-sm font-semibold text-slate-500">등록 후 대학이 프로필에서 직접 제안 요청할 수 있습니다.</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-500">업체/강사명, 소개글, 전문분야, 포트폴리오, 연락처 입력</div>
          <Button className="h-11 w-full">프로필 등록</Button>
        </CardContent>
      </Card>
    </section>
  )
}
