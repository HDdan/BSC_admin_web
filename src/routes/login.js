const login   = () => import(/* webpackChunkName: "login" */ '@/views/login/index');

export default [
  {
    path: '/login/index', 
    name: 'login',
    component: login, 
    meta: { title: '登陆' } 
  },
];