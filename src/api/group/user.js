import request from '@/utils/request'
const BASE_URL = 'http://dealer.qtdatas.com/api/Boke';

export default {
  execobj(data) {
    data.userid = getToken();
    return request({
      url: `${BASE_URL}/Execobj`,
      method: 'post',
      data,
    })
  },
  upload(data) {
    data.userid = getToken();
    return request({
      url: `${BASE_URL}/Upload`,
      method: 'post',
      data,
    })
  }
}

