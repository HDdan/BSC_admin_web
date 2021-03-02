import { request } from '@/api'

export function login(data) {
  return request({
    url: '/adminLogin',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}


