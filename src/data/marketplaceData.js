import {
  BriefcaseBusiness,
  Bus,
  CalendarCheck2,
  GraduationCap,
  HandPlatter,
  MapPinHouse,
  Pen,
  Plus,
  Sparkles,
} from 'lucide-react'

export const platformTabs = [
  { key: 'offer', label: '제안합니다', path: '/offer' },
  { key: 'request', label: '제안해주세요', path: '/request' },
]

export const serviceCards = [
  { id: 1, title: '고등학교', icon: CalendarCheck2, color: 'bg-orange-100 text-orange-600' },
  { id: 2, title: '저학년', icon: BriefcaseBusiness, color: 'bg-blue-100 text-blue-600' },
  { id: 3, title: '고학년', icon: GraduationCap, color: 'bg-emerald-100 text-emerald-600' },
  { id: 4, title: '졸업생', icon: MapPinHouse, color: 'bg-cyan-100 text-cyan-600' },
  { id: 5, title: '캠프', icon: Bus, color: 'bg-amber-100 text-amber-600' },
  { id: 6, title: '창업', icon: HandPlatter, color: 'bg-rose-100 text-rose-600' },
  { id: 7, title: '쉼청년', icon: Pen, color: 'bg-indigo-100 text-indigo-600' },
  { id: 8, title: '특강', icon: Sparkles, color: 'bg-sky-100 text-sky-600' },
  { id: 9, title: '준비중', icon: Plus, color: 'bg-slate-200 text-slate-600' },
]

const vendorPool = [
  {
    id: 'V-101',
    name: '캠퍼스링크',
    intro: '대학 비교과 행사 120건 운영 경험이 있는 행사 전문 업체',
    type: '업체',
    lastEvent: '2026-02-18',
    region: '서울',
    tags: ['캠프', '진로'],
  },
  {
    id: 'V-102',
    name: '유스커리어랩',
    intro: '진로탐색/포트폴리오 부트캠프를 기획하는 교육 운영사',
    type: '업체',
    lastEvent: '2026-02-15',
    region: '경기',
    tags: ['저학년', '고학년'],
  },
  {
    id: 'V-103',
    name: '에듀행사파트너스',
    intro: '대형 행사 운영과 안전관리까지 포함한 원스톱 서비스 제공',
    type: '업체',
    lastEvent: '2026-02-11',
    region: '부산',
    tags: ['캠프', '졸업생'],
  },
  {
    id: 'V-104',
    name: '스쿨이벤트팩토리',
    intro: '신입생 적응 및 학과 홍보행사 운영에 특화',
    type: '업체',
    lastEvent: '2026-01-28',
    region: '서울',
    tags: ['행사', '신입생'],
  },
]

const freelancerPool = [
  {
    id: 'F-201',
    name: '김도연 강사',
    intro: 'AI·데이터 리터러시 특강 90회 진행, 실습 중심 강의',
    type: '프리랜서(강사)',
    lastEvent: '2026-02-19',
    region: '서울',
    tags: ['특강', 'AI'],
  },
  {
    id: 'F-202',
    name: '정민우 강사',
    intro: '창업캠프 멘토링과 팀빌딩 워크숍 전문 강사',
    type: '프리랜서(강사)',
    lastEvent: '2026-02-13',
    region: '대전',
    tags: ['창업', '멘토링'],
  },
  {
    id: 'F-203',
    name: '박시은 강사',
    intro: '대학생 커리어 설계와 취업 포트폴리오 실습 강의',
    type: '프리랜서(강사)',
    lastEvent: '2026-02-09',
    region: '부산',
    tags: ['진로', '포트폴리오'],
  },
  {
    id: 'F-204',
    name: '이현준 강사',
    intro: '프로젝트 기반 코딩캠프와 해커톤 운영 경험 다수',
    type: '프리랜서(강사)',
    lastEvent: '2026-01-30',
    region: '경기',
    tags: ['캠프', '코딩'],
  },
]

export const vendorDirectory = {
  recent: vendorPool.slice(0, 3),
  all: vendorPool,
  filtered: vendorPool.filter((item) => item.region === '서울' || item.tags.includes('캠프')),
}

export const freelancerDirectory = {
  recent: freelancerPool.slice(0, 3),
  all: freelancerPool,
  filtered: freelancerPool.filter((item) => item.tags.includes('특강') || item.region === '서울'),
}

export const universityBidNotices = [
  {
    id: 'U-501',
    title: '2026 1학기 신입생 AI 적응캠프',
    school: '서울미래대학교',
    status: '모집중',
    dueDate: '2026-03-10',
    budget: '5,000,000원',
    applicants: [
      { id: 'A-01', name: '캠퍼스링크', type: '업체', proposal: '4,600,000원', status: '접수완료' },
      { id: 'A-02', name: '김도연 강사', type: '강사', proposal: '2,200,000원', status: '검토중' },
    ],
  },
  {
    id: 'U-502',
    title: '창업 동아리 집중 멘토링 프로그램',
    school: '한빛대학교',
    status: '심사중',
    dueDate: '2026-03-04',
    budget: '3,500,000원',
    applicants: [
      { id: 'A-03', name: '유스커리어랩', type: '업체', proposal: '3,200,000원', status: '심사중' },
      { id: 'A-04', name: '정민우 강사', type: '강사', proposal: '1,900,000원', status: '심사중' },
    ],
  },
]
