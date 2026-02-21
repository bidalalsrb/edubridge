import { ArrowLeft, Clock3, MapPin, Phone, Star } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { getProfileById } from '../data/marketplaceData'

export function ProfileDetailPage() {
  const navigate = useNavigate()
  const { profileId } = useParams()

  const profile = useMemo(() => getProfileById(profileId), [profileId])

  if (!profile) {
    return (
      <section className="px-6 py-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-semibold text-slate-500">프로필을 찾을 수 없습니다.</p>
            <Button className="mt-4" onClick={() => navigate('/offer')}>
              제안합니다로 이동
            </Button>
          </CardContent>
        </Card>
      </section>
    )
  }

  const onRequestFromUniversity = () => {
    const params = new URLSearchParams({
      directTargetId: profile.id,
      directTargetName: profile.name,
      directTargetRole: profile.type,
    })
    navigate(`/request?${params.toString()}`)
  }

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 이전
      </button>

      <Card className="border-[#d7dfea]">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className={`mt-1 h-16 w-16 rounded-full ring-4 ring-amber-100 ${profile.profileColor || 'bg-slate-300'}`} />
            <div className="min-w-0 flex-1">
              <p className="text-2xl font-black text-slate-900">{profile.name}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{profile.type}</p>
              <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-600">
                <Star className="h-4 w-4 fill-[#2f5bff] text-[#2f5bff]" />
                {profile.rating} · 후기 {profile.reviewCount}개 · 경력 {profile.careerYears}년
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">{profile.intro}</p>

          <div className="mt-4 grid gap-2 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-600">
              <p className="mb-1 text-xs font-bold text-[#336fea]">연락처</p>
              <p className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {profile.phone}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-600">
              <p className="mb-1 text-xs font-bold text-[#336fea]">활동 정보</p>
              <p className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {profile.region}</p>
              <p className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" /> 최근 행사 {profile.lastEvent}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm font-bold text-[#336fea]">전문 분야</p>
            <div className="flex flex-wrap gap-2">
              {(profile.specialties || []).map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm font-bold text-[#336fea]">최근 포트폴리오</p>
            <ul className="space-y-1 text-sm font-semibold text-slate-600">
              {(profile.portfolio || []).map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <Button className="mt-5 h-11 w-full" onClick={onRequestFromUniversity}>
            대학이 제안 요청하기
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
