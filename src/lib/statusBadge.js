export function getStatusBadgeClass(status) {
  switch (status) {
    case '모집중':
    case '접수중':
      return 'bg-sky-100 text-sky-700'
    case '심사중':
      return 'bg-violet-100 text-violet-700'
    case '검토중':
      return 'bg-amber-100 text-amber-700'
    case '제출완료':
    case '접수완료':
      return 'bg-blue-100 text-blue-700'
    case '승인완료':
      return 'bg-emerald-100 text-emerald-700'
    case '반려':
    case '거절':
      return 'bg-rose-100 text-rose-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}
