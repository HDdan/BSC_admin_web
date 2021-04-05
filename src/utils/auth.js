import Cookies from 'js-cookie'

const TokenKey = 'AdminLoginToken'
const NameKey = 'AdminLoginName'
const IsAdmin = 'isAdmin'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserName() {
  return Cookies.get(NameKey)
}

export function setUserName(name) {
  return Cookies.set(NameKey, name)
}

export function removeUserName() {
  return Cookies.remove(NameKey)
}

export function getIsAdmin() {
  return Cookies.get(IsAdmin)
}

export function setIsAdmin(name) {
  return Cookies.set(IsAdmin, name)
}

export function removeIsAdmin() {
  return Cookies.remove(IsAdmin)
}