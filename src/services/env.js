import qs from 'qs';
import api from '@/api';

const TokenKey = 'Admin-Token'

export default {
  getToken() {
    return Cookies.get(TokenKey)
  },
  setToken(token) {
    return Cookies.set(TokenKey, token)
  },
  removeToken() {
    return Cookies.remove(TokenKey)
  }
};

