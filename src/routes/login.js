// const login   = () => import(/* webpackChunkName: "login" */ '@/views/login/index');
import login from '@/views/login/index'
export default [
  {
    path: '/login', 
    name: 'login',
    component: login, 
  },
];