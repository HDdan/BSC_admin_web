import request from '@/utils/request'
import { getToken } from '@/utils/auth'
const BASE_URL = 'http://dealer.qtdatas.com/api/Boke';

// export function api(data) {
//   data.userid = getToken();
//   return request({
//     method: 'post',
//     data,
//   })
// }


export default {
  install (Vue) {
    Vue.prototype.$api = this
  },
  execobj(data) {
    if(getToken())data.userid = getToken();
    return request({
      url: `${BASE_URL}/Execobj`,
      method: 'post',
      data,
    })
  },
  upload(data) {
    
    return request({
      url: `${BASE_URL}/Upload`,
      method: 'post',
      data,
    })
  }
}