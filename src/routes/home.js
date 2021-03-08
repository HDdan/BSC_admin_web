import Home from '@/views/home'
import PotentialDistributor from '@/views/potentialDistributor'
import distributorDocumentList from '@/views/distributor-document/list'
import distributorDocumentDetail from '@/views/distributor-document/detail'

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
      {
        path: '/distributorDocument/list',
        name: 'distributorDocumentList',
        component: distributorDocumentList,
      },
      {
        path: '/distributorDocument/detail',
        name: 'distributorDocumentDetail',
        component: distributorDocumentDetail,
      },
      // {
      //   path: '/componyinfomanage1',
      //   name: 'login',
      //   component: login,
      // },
    ]
  }
];