// const login   = () => import(/* webpackChunkName: "login" */ '@/views/login/index');
import login from '@/views/login/index'
import Home from '@/components/Home'
export default [
  {
    path: '/login/index', 
    name: 'login',
    component: login, 
    meta: { title: '登陆' } 
  },
  {
    path: '/home', 
    name: 'Home',
    component: Home, 
  },
];