// const login   = () => import(/* webpackChunkName: "login" */ '@/views/login/index');
import login from '@/views/login/index'
import Home from '@/components/Home'
export default [
  {
    path: '/login/index', 
    name: 'login',
    component: login, 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/componyinfomanage',
        name: 'login',
        component: login,
      },]
    }
];