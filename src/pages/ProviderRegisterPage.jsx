import { ArrowLeft } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { serviceCards } from '../data/marketplaceData'
import { USER_ROLE, setStoredUserRole } from '../lib/userRole'

export function ProviderRegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    type: '업체',
    name: '',
    region: '',
    phone: '',
    intro: '',
    specialties: '',
    portfolio: '',
    focusServices: [],
  })
  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setStoredUserRole(USER_ROLE.vendor)
  }, [])

  const selectableServices = useMemo(() => serviceCards.filter((item) => item.title !== '준비중'), [])

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const toggleService = (serviceTitle) => {
    setForm((prev) => ({
      ...prev,
      focusServices: prev.focusServices.includes(serviceTitle)
        ? prev.focusServices.filter((item) => item !== serviceTitle)
        : [...prev.focusServices, serviceTitle],
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.phone.trim() || !form.intro.trim()) {
      setError('이름, 연락처, 소개글은 필수 입력입니다.')
      return
    }

    if (form.focusServices.length === 0) {
      setError('최소 1개의 전문 서비스를 선택해 주세요.')
      return
    }

    setError('')
    setIsSubmitted(true)
  }

  return (
    <section className="px-6 py-6">
      <button type="button" onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-1 text-sm font-bold text-slate-600">
        <ArrowLeft className="h-4 w-4" /> 마이페이지
      </button>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl font-black">업체/프리랜서 프로필 등록</CardTitle>
          <p className="text-sm font-semibold text-slate-500">프로필 등록 후 대학이 직접 제안 요청할 수 있습니다.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-3" onSubmit={onSubmit}>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-bold text-brand-600">구분</p>
                <select
                  value={form.type}
                  onChange={(event) => updateField('type', event.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  <option value="업체">업체</option>
                  <option value="프리랜서(강사)">프리랜서(강사)</option>
                </select>
              </label>

              <label className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-bold text-brand-600">이름</p>
                <input
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="업체명 또는 강사명"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                />
              </label>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-bold text-brand-600">활동 지역</p>
                <input
                  value={form.region}
                  onChange={(event) => updateField('region', event.target.value)}
                  placeholder="예: 서울"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                />
              </label>

              <label className="rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-bold text-brand-600">연락처</p>
                <input
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder="예: 010-1234-5678"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                />
              </label>
            </div>

            <label className="block rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-brand-600">소개글</p>
              <textarea
                rows={4}
                value={form.intro}
                onChange={(event) => updateField('intro', event.target.value)}
                placeholder="주요 운영 경험, 강점, 진행 방식 등을 작성해 주세요."
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
              />
            </label>

            <label className="block rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-brand-600">전문 분야</p>
              <input
                value={form.specialties}
                onChange={(event) => updateField('specialties', event.target.value)}
                placeholder="예: 캠프 운영, 진로 특강, 창업 멘토링"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
              />
            </label>

            <label className="block rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-brand-600">주요 포트폴리오</p>
              <textarea
                rows={3}
                value={form.portfolio}
                onChange={(event) => updateField('portfolio', event.target.value)}
                placeholder="예: 2025 AI 캠프 운영 / 2026 진로탐색 특강"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
              />
            </label>

            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-xs font-bold text-brand-600">전문 서비스 선택</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectableServices.map((service) => {
                  const active = form.focusServices.includes(service.title)
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.title)}
                      className={`rounded-full px-3 py-1 text-xs font-bold ${active ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                    >
                      {service.title}
                    </button>
                  )
                })}
              </div>
            </div>

            {error ? <p className="text-sm font-bold text-red-500">{error}</p> : null}
            {isSubmitted ? <p className="text-sm font-bold text-emerald-600">프로필이 등록되었습니다. 대학이 프로필을 확인할 수 있습니다.</p> : null}

            <Button className="h-11 w-full" type="submit">
              프로필 등록
            </Button>

            {isSubmitted ? (
              <Button className="h-11 w-full" type="button" variant="secondary" onClick={() => navigate('/vendor/my')}>
                업체 마이페이지로 이동
              </Button>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
