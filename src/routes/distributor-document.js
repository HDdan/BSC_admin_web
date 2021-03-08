import distributorDocumentList from '@/views/distributor-document/list'
export default [
  {
    path: '/distributorDocument/list',
    name: 'distributorDocumentList',
    component: distributorDocumentList,
    children:[
      // {
      //   path: '/componyinfomanage',
      //   name: 'login',
      //   component: login,
      // },
      // {
      //   path: '/componyinfomanage1',
      //   name: 'login',
      //   component: login,
      // },
    ]
  }
];