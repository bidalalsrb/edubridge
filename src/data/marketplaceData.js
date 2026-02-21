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
  { id: 2, title: '저학년', icon: BriefcaseBusiness, color: 'bg-brand-50 text-blue-600' },
  { id: 3, title: '고학년', icon: GraduationCap, color: 'bg-emerald-100 text-emerald-600' },
  { id: 4, title: '졸업생', icon: MapPinHouse, color: 'bg-cyan-100 text-cyan-600' },
  { id: 5, title: '캠프', icon: Bus, color: 'bg-amber-100 text-amber-600' },
  { id: 6, title: '창업', icon: HandPlatter, color: 'bg-rose-100 text-rose-600' },
  { id: 7, title: '쉼청년', icon: Pen, color: 'bg-indigo-100 text-indigo-600' },
  { id: 8, title: '특강', icon: Sparkles, color: 'bg-sky-100 text-sky-600' },
  { id: 9, title: '준비중', icon: Plus, color: 'bg-slate-200 text-slate-600' },
]

const POOL_SIZE = 34

function cycle(list, index) {
  return list[index % list.length]
}

function makeDateFromOffset(baseDay) {
  const day = String(Math.max(1, baseDay)).padStart(2, '0')
  return `2026-02-${day}`
}

const vendorPoolSeed = [
  {
    id: 'V-101',
    name: '캠퍼스링크',
    intro: '대학 비교과 행사 120건 운영 경험이 있는 행사 전문 업체',
    type: '업체',
    lastEvent: '2026-02-18',
    region: '서울',
    tags: ['캠프', '진로'],
    rating: 4.8,
    reviewCount: 74,
    careerYears: 8,
    badges: ['깔끔한 운영', '빠른 대응'],
    profileColor: 'bg-amber-300',
    phone: '010-2287-1010',
    specialties: ['캠프 운영', '현장 인력관리', '안전 동선 설계'],
    portfolio: ['신입생 적응캠프 (서울 A대)', '진로체험 페스티벌 (경기 B대)'],
    focusServices: ['고등학교', '캠프', '고학년'],
  },
  {
    id: 'V-102',
    name: '유스커리어랩',
    intro: '진로탐색/포트폴리오 부트캠프를 기획하는 교육 운영사',
    type: '업체',
    lastEvent: '2026-02-15',
    region: '경기',
    tags: ['저학년', '고학년'],
    rating: 4.6,
    reviewCount: 58,
    careerYears: 6,
    badges: ['커리큘럼 강점', '만족도 높음'],
    profileColor: 'bg-sky-300',
    phone: '010-4421-1020',
    specialties: ['진로 부트캠프', '포트폴리오 워크숍', '성과 리포트'],
    portfolio: ['커리어 부트캠프 (인천 C대)', '전공탐색 프로그램 (경기 D대)'],
    focusServices: ['저학년', '고학년', '창업'],
  },
  {
    id: 'V-103',
    name: '에듀행사파트너스',
    intro: '대형 행사 운영과 안전관리까지 포함한 원스톱 서비스 제공',
    type: '업체',
    lastEvent: '2026-02-11',
    region: '부산',
    tags: ['캠프', '졸업생'],
    rating: 4.7,
    reviewCount: 67,
    careerYears: 7,
    badges: ['팀 분위기 좋음', '현장 안정적'],
    profileColor: 'bg-emerald-300',
    phone: '010-5552-1030',
    specialties: ['대형 행사 운영', '행사 안전관리', '체험형 부스'],
    portfolio: ['지역연계 취업박람회 (부산 E대)', '졸업생 멘토링데이 (울산 F대)'],
    focusServices: ['졸업생', '캠프', '고등학교'],
  },
  {
    id: 'V-104',
    name: '스쿨이벤트팩토리',
    intro: '신입생 적응 및 학과 홍보행사 운영에 특화',
    type: '업체',
    lastEvent: '2026-01-28',
    region: '서울',
    tags: ['행사', '신입생'],
    rating: 4.5,
    reviewCount: 49,
    careerYears: 5,
    badges: ['친절한 소통', '디테일 강점'],
    profileColor: 'bg-violet-300',
    phone: '010-8890-1040',
    specialties: ['신입생 행사', '학과 홍보', '온보딩 프로그램'],
    portfolio: ['새내기 페스티벌 (서울 G대)', '학과 오픈위크 (서울 H대)'],
    focusServices: ['고등학교', '저학년', '졸업생'],
  },
]

const freelancerPoolSeed = [
  {
    id: 'F-201',
    name: '김도연 강사',
    intro: 'AI·데이터 리터러시 특강 90회 진행, 실습 중심 강의',
    type: '프리랜서(강사)',
    lastEvent: '2026-02-19',
    region: '서울',
    tags: ['특강', 'AI'],
    rating: 4.9,
    reviewCount: 91,
    careerYears: 9,
    badges: ['실습 중심', '전달력 우수'],
    profileColor: 'bg-amber-300',
    phone: '010-9342-2010',
    specialties: ['AI 특강', '데이터 리터러시', '팀 프로젝트 코칭'],
    portfolio: ['AI 리터러시 특강 (서울 I대)', '데이터 실습캠프 (세종 J대)'],
    focusServices: ['특강', '고학년', '창업'],
  },
  {
    id: 'F-202',
    name: '정민우 강사',
    intro: '창업캠프 멘토링과 팀빌딩 워크숍 전문 강사',
    type: '프리랜서(강사)',
    lastEvent: '2026-02-13',
    region: '대전',
    tags: ['창업', '멘토링'],
    rating: 4.7,
    reviewCount: 64,
    careerYears: 7,
    badges: ['멘토링 강점', '참여도 높음'],
    profileColor: 'bg-lime-300',
    phone: '010-7033-2020',
    specialties: ['창업 멘토링', '비즈니스 모델', '팀빌딩'],
    portfolio: ['창업동아리 부트캠프 (대전 K대)', '아이디어톤 멘토링 (충남 L대)'],
    focusServices: ['창업', '고학년', '졸업생'],
  },
  {
    id: 'F-203',
    name: '박시은 강사',
    intro: '대학생 커리어 설계와 취업 포트폴리오 실습 강의',
    type: '프리랜서(강사)',
    lastEvent: '2026-02-09',
    region: '부산',
    tags: ['진로', '포트폴리오'],
    rating: 4.6,
    reviewCount: 53,
    careerYears: 6,
    badges: ['현업 사례 풍부', '구성 탄탄'],
    profileColor: 'bg-rose-300',
    phone: '010-3489-2030',
    specialties: ['커리어 설계', '취업 포트폴리오', '면접 클리닉'],
    portfolio: ['취업집중 특강 (부산 M대)', '직무포트폴리오 워크숍 (경남 N대)'],
    focusServices: ['졸업생', '특강', '고학년'],
  },
  {
    id: 'F-204',
    name: '이현준 강사',
    intro: '프로젝트 기반 코딩캠프와 해커톤 운영 경험 다수',
    type: '프리랜서(강사)',
    lastEvent: '2026-01-30',
    region: '경기',
    tags: ['캠프', '코딩'],
    rating: 4.8,
    reviewCount: 70,
    careerYears: 8,
    badges: ['프로젝트 기반', '실무 중심'],
    profileColor: 'bg-cyan-300',
    phone: '010-6671-2040',
    specialties: ['코딩 캠프', '해커톤 운영', '프로젝트 리뷰'],
    portfolio: ['코딩 챌린지 캠프 (경기 O대)', '산학 프로젝트 특강 (서울 P대)'],
    focusServices: ['캠프', '저학년', '고학년'],
  },
]

const vendorPool = Array.from({ length: POOL_SIZE }, (_, idx) => {
  const seed = cycle(vendorPoolSeed, idx)
  return {
    ...seed,
    id: `V-${String(101 + idx).padStart(3, '0')}`,
    name: `${seed.name} ${idx + 1}`,
    lastEvent: makeDateFromOffset(28 - (idx % 20)),
    reviewCount: seed.reviewCount + idx,
  }
})

const freelancerPool = Array.from({ length: POOL_SIZE }, (_, idx) => {
  const seed = cycle(freelancerPoolSeed, idx)
  return {
    ...seed,
    id: `F-${String(201 + idx).padStart(3, '0')}`,
    name: `${seed.name} ${idx + 1}`,
    lastEvent: makeDateFromOffset(28 - (idx % 20)),
    reviewCount: seed.reviewCount + idx,
  }
})

export const vendorDirectory = {
  recent: vendorPool.slice(0, 5),
  all: vendorPool,
  filtered: vendorPool.filter((item) => item.region === '서울' || item.tags.includes('캠프')),
}

export const freelancerDirectory = {
  recent: freelancerPool.slice(0, 5),
  all: freelancerPool,
  filtered: freelancerPool.filter((item) => item.tags.includes('특강') || item.region === '서울'),
}

const profilePool = [...vendorPool, ...freelancerPool]

export function getProfileById(profileId) {
  return profilePool.find((item) => item.id === profileId) || null
}

export function getRecentProfilesByService(serviceName) {
  const byRecentDate = (a, b) => String(b.lastEvent).localeCompare(String(a.lastEvent))
  const withService = (item) => (item.focusServices || []).includes(serviceName)

  const vendorRecent = vendorPool.filter(withService).sort(byRecentDate)
  const freelancerRecent = freelancerPool.filter(withService).sort(byRecentDate)

  return { vendorRecent, freelancerRecent }
}

const universityBidNoticesSeed = [
  {
    id: 'U-501',
    title: '2026 1학기 신입생 AI 적응캠프',
    school: '한국공학대학교',
    service: '고등학교',
    isMine: true,
    status: '모집중',
    dueDate: '2026-03-10',
    budget: '5,000,000원',
    progress: ['공고 등록 완료', '지원 접수중', '서류 검토중'],
    applicants: [
      { id: 'A-01', name: '캠퍼스링크', type: '업체', proposal: '4,600,000원', status: '접수완료' },
      { id: 'A-02', name: '김도연 강사', type: '강사', proposal: '2,200,000원', status: '검토중' },
    ],
  },
  {
    id: 'U-502',
    title: '창업 동아리 집중 멘토링 프로그램',
    school: '한빛대학교',
    service: '창업',
    isMine: false,
    status: '심사중',
    dueDate: '2026-03-04',
    budget: '3,500,000원',
    progress: ['공고 등록 완료', '지원 마감', '심사중'],
    applicants: [
      { id: 'A-03', name: '유스커리어랩', type: '업체', proposal: '3,200,000원', status: '심사중' },
      { id: 'A-04', name: '정민우 강사', type: '강사', proposal: '1,900,000원', status: '심사중' },
    ],
  },
  {
    id: 'U-503',
    title: '2026 하계 코딩 캠프 운영 파트너 모집',
    school: '경인대학교',
    service: '캠프',
    isMine: false,
    status: '모집중',
    dueDate: '2026-03-18',
    budget: '4,200,000원',
    progress: ['공고 등록 완료', '지원 접수중'],
    applicants: [
      { id: 'A-05', name: '에듀행사파트너스', type: '업체', proposal: '4,000,000원', status: '접수완료' },
    ],
  },
  {
    id: 'U-504',
    title: '졸업예정자 취업 포트폴리오 특강',
    school: '한국공학대학교',
    service: '졸업생',
    isMine: true,
    status: '검토중',
    dueDate: '2026-03-08',
    budget: '2,700,000원',
    progress: ['공고 등록 완료', '지원 접수중', '1차 검토중'],
    applicants: [
      { id: 'A-06', name: '박시은 강사', type: '강사', proposal: '2,500,000원', status: '검토중' },
      { id: 'A-07', name: '유스커리어랩', type: '업체', proposal: '2,600,000원', status: '검토중' },
    ],
  },
]

export const universityBidNotices = Array.from({ length: POOL_SIZE }, (_, idx) => {
  const seed = cycle(universityBidNoticesSeed, idx)
  const statusCycle = ['모집중', '심사중', '검토중']
  return {
    ...seed,
    id: `U-${String(501 + idx).padStart(3, '0')}`,
    title: `${seed.title} ${idx + 1}`,
    dueDate: `2026-03-${String(1 + (idx % 28)).padStart(2, '0')}`,
    status: statusCycle[idx % statusCycle.length],
    isMine: idx % 3 === 0,
    applicants: seed.applicants.map((applicant, applicantIdx) => ({
      ...applicant,
      id: `${applicant.id}-${idx + 1}-${applicantIdx + 1}`,
    })),
  }
})

export function getMyUniversityNotices() {
  return universityBidNotices.filter((notice) => notice.isMine)
}

export function getUniversityNoticeById(noticeId) {
  return universityBidNotices.find((notice) => notice.id === noticeId) || null
}

export function getUniversityNoticesByService(serviceName) {
  return universityBidNotices.filter((notice) => notice.service === serviceName)
}
