const ROLE_KEY = 'mp_user_role'

export const USER_ROLE = {
  university: 'university',
  vendor: 'vendor',
}

export function getStoredUserRole() {
  if (typeof window === 'undefined') return USER_ROLE.university
  const saved = window.localStorage.getItem(ROLE_KEY)
  return saved === USER_ROLE.vendor ? USER_ROLE.vendor : USER_ROLE.university
}

export function setStoredUserRole(role) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ROLE_KEY, role)
}

export function inferUserRoleFromPath(pathname) {
  if (pathname.startsWith('/vendor') || pathname.startsWith('/provider-register')) {
    return USER_ROLE.vendor
  }

  if (pathname === '/my' || pathname.startsWith('/my/') || pathname.startsWith('/notice-create')) {
    return USER_ROLE.university
  }

  return null
}
