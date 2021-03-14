import request from '@/utils/request'

export function api(data) {
  return request({
    method: 'post',
    data,
  })
}
