import Home from '@/views/home'
import PotentialDistributor from '@/views/potentialDistributor'

export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/home',
        name: 'PotentialDistributor',
        component: PotentialDistributor,
      },
      // {
      //   path: '/componyinfomanage1',
      //   name: 'login',
      //   component: login,
      // },
    ]
  }
];