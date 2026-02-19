import {
  BriefcaseBusiness,
  Bus,
  CalendarCheck2,
  ClipboardCheck,
  GraduationCap,
  HandPlatter,
  MapPinHouse,
  Pen,
  Plus,
} from 'lucide-react'

export const tabs = [
  { key: 'vendor', label: '업체' },
  { key: 'university', label: '대학' },
]

export const services = [
  { id: 1, title: '행사 기획', icon: CalendarCheck2, color: 'bg-orange-100 text-orange-600' },
  { id: 2, title: '캠프 운영', icon: BriefcaseBusiness, color: 'bg-blue-100 text-blue-600' },
  { id: 3, title: '특강 강사', icon: GraduationCap, color: 'bg-purple-100 text-purple-600' },
  { id: 4, title: '장소 대관', icon: MapPinHouse, color: 'bg-emerald-100 text-emerald-600' },
  { id: 5, title: '셔틀 버스', icon: Bus, color: 'bg-cyan-100 text-cyan-600' },
  { id: 6, title: '케이터링', icon: HandPlatter, color: 'bg-pink-100 text-pink-600' },
  { id: 7, title: '홍보 디자인', icon: Pen, color: 'bg-amber-100 text-amber-600' },
  { id: 8, title: '만족도 조사', icon: ClipboardCheck, color: 'bg-indigo-100 text-indigo-600' },
  { id: 9, title: '기타 지원', icon: Plus, color: 'bg-slate-200 text-slate-600' },
]
