import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import router from '../router'
import { getToken,removeToken } from '@/utils/auth'

// create an axios instance
const self=this
const service = axios.create({
  // baseURL: "http://dealer.qtdatas.com/api/Boke", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log("sss1122222",error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code!=1) {
      if (!getToken() ) {
        Message({
          type: "error",
          message: res.msg|| 'Error',
          duration: 1000
        })
        .then(() => {
          store.dispatch('user/resetToken').then(() => {
            router.push({name:'login'})
          })
        })
      }
      Message({
        type: "error",
        message: res.msg|| 'Error',
        duration: 1000
      });
      return Promise.reject(res.msg)
    } else {
      if(res.msg){
        Message({
          type: "success",
          message: res.msg,
          duration: 1000
        });
      }

      return res
    }
  },
  error => {
    console.log('errsssss3' ,error.response.status) // for debug
    if(error.response.status==401){
      store.dispatch('user/resetToken').then(() => {
        router.push({name:'login'})
      })
    }
    // Message({
    //   message: error.message,
    //   type: 'error',   
    //   duration: 5 * 1000
    // })
    Message({
      type: "error",
      message: error.msg|| '连接超时',
      duration: 1000
    });
    return Promise.reject('连接超时')
  }
)

export default service
