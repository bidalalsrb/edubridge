import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const viewModes = [
  { key: 'recent', label: '최근 행사 진행' },
  { key: 'all', label: '전체' },
  { key: 'filtered', label: '필터' },
]

export function DirectorySection({ title, roleLabel, rowsByMode }) {
  const navigate = useNavigate()
  const [mode, setMode] = useState('recent')

  const rows = rowsByMode[mode]

  const onRequestDirectOffer = (row) => {
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

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>소개글</TableHead>
              <TableHead>최근 행사일</TableHead>
              <TableHead className="text-right">액션</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <p className="font-extrabold text-slate-800">{row.name}</p>
                  <p className="text-xs font-semibold text-slate-500">{row.type}</p>
                </TableCell>
                <TableCell className="text-sm font-semibold text-slate-600">{row.intro}</TableCell>
                <TableCell className="text-sm font-semibold">{row.lastEvent}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" onClick={() => onRequestDirectOffer(row)}>
                    대학이 제안 요청
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
