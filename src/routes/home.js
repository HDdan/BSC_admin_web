import Home from '@/views/home'
import potentialDistributor from '@/views/potential-distributor'
import distributorDocumentList from '@/views/distributor-document/list'
import distributorDocumentDetail from '@/views/distributor-document/detail'
import editPotentialDistributor from '@/views/potential-distributor/edit-potential-distributor'
import dataSource from '@/views/basic-info/merchants-info/data-source'
export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/potentialDistributor',
        name: 'potentialDistributor',
        component: potentialDistributor,
      },
      {
        path: '/distributorDocument',
        name: 'distributorDocumentList',
        component: distributorDocumentList,
       
      },
      {
          path: '/distributorDocument/detail',
          name: 'distributorDocumentDetail',
          component: distributorDocumentDetail,
      },
      {
        path: '/potentialDistributor/edit',
        name: 'editPotentialDistributor',
        component: editPotentialDistributor,
      },
      {
        path: '/baseInfo/merchantsInfo/dataSource',
        name: 'dataSource',
        component: dataSource,
      }
    ]
  }
];