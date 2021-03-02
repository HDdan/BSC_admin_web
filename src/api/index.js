import user                 from './user';

import axios from 'axios';

import envService from '@/services/env';
import store from '@/store'
import { MessageBox, Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: "http://card.kurite.com/admin/v1/", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 50000 // request timeout
})

service.interceptors.request.use(config => {
  const token = envService.getToken();
  config.headers['Api-Access-Token'] = token ? token : '';
  return config;
});

service.interceptors.response.use(res => {
  const token = envService.getToken();
  const isAuthedUser = token !== '' ? true : false;
  const isTokenExpired = res.data.code === 302 || res.data.code === 402;

  if (isAuthedUser && isTokenExpired) {
    // to re-login
    MessageBox.confirm('你已经登出了，你可以取消退出该页面或再次登录', '确认登出', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      store.dispatch('user/resetToken').then(() => {
        location.reload()
      })
    });
  }

  return res;
});

export default {
  user,
  service
};

