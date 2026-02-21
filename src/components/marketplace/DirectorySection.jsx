import { useState } from 'react'
import { Phone, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const viewModes = [
  { key: 'recent', label: '최근 행사 진행' },
  { key: 'all', label: '전체' },
  { key: 'filtered', label: '필터' },
]

export function DirectorySection({ title, roleLabel, rowsByMode, selectedService }) {
  const navigate = useNavigate()
  const [mode, setMode] = useState('recent')

  const rows = (() => {
    if (mode !== 'recent') return rowsByMode[mode]

    const matched = rowsByMode.all
      .filter((row) => (row.focusServices || []).includes(selectedService))
      .sort((a, b) => String(b.lastEvent).localeCompare(String(a.lastEvent)))
      .slice(0, 4)

    return matched
  })()

  const onRequestDirectOffer = (row) => {
    navigate(`/profile/${row.id}`)
  }

  const onOpenRequestPage = (row) => {
    const params = new URLSearchParams({
      directTargetId: row.id,
      directTargetName: row.name,
      directTargetRole: row.type,
    })
    navigate(`/request?${params.toString()}`)
  }

  return (
    <Card className="mt-5 border-[#d7dfea]">
      <CardHeader>
        <CardTitle className="text-xl font-black">{title}</CardTitle>
        <p className="text-sm font-semibold text-slate-500">{roleLabel} 등록 소개글을 보고 대학이 직접 제안 요청할 수 있습니다.</p>
      </CardHeader>
      <CardContent>
        <div className="mb-3 flex gap-2">
          {viewModes.map((item) => (
            <Button
              key={item.key}
              type="button"
              variant={mode === item.key ? 'default' : 'secondary'}
              size="sm"
              onClick={() => setMode(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {rows.map((row) => (
            <article key={row.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className={`mt-1 h-14 w-14 rounded-full ring-4 ring-amber-100 ${row.profileColor || 'bg-slate-300'}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-2xl font-black tracking-tight text-slate-900">{row.name}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-500">
                    <Star className="h-4 w-4 fill-[#2f5bff] text-[#2f5bff]" />
                    {row.rating} · 후기 {row.reviewCount}개 · 경력 {row.careerYears}년
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {(row.badges || []).map((badge) => (
                  <span key={badge} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="mt-3 line-clamp-2 text-sm font-semibold text-slate-600">{row.intro}</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button
                  variant="secondary"
                  className="h-11 border border-[#336fea] bg-white text-[#2043e6] hover:bg-blue-50"
                  onClick={() => onOpenRequestPage(row)}
                >
                  <Phone className="mr-1 h-4 w-4" />
                  전화하기
                </Button>
                <Button className="h-11" onClick={() => onRequestDirectOffer(row)}>
                  자세히보기
                </Button>
              </div>
            </article>
          ))}
          {rows.length === 0 ? (
            <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm font-semibold text-slate-500 md:col-span-2">
              선택한 서비스 `{selectedService}`에 해당하는 최근 항목이 없습니다.
            </article>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
