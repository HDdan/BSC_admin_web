import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function api(data) {
  data.userid=getToken();
  return request({
    method: 'post',
    data,
  })
}
