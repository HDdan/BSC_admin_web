import Home from '@/views/home'
import potentialDistributor from '@/views/potential-distributor'
import distributorDocumentList from '@/views/distributor-document/list'
import distributorDocumentDetail from '@/views/distributor-document/detail'
import distributorDocumentStudentDetail from '@/views/distributor-document/studentDetail'
import editPotentialDistributor from '@/views/potential-distributor/edit-potential-distributor'
import source from '@/views/basic-info/merchants-info/source'
import department from '@/views/basic-info/merchants-info/department'
import brand from '@/views/basic-info/merchants-info/brand'
import hospital from '@/views/basic-info/merchants-info/hospital'
import product from '@/views/basic-info/merchants-info/product'
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
        path: '/distributorDocument/studentDetail',
        name: 'distributorDocumentStudentDetail',
        component: distributorDocumentStudentDetail,
      },
      {
        path: '/potentialDistributor/edit',
        name: 'editPotentialDistributor',
        component: editPotentialDistributor,
      },
      {
        path: '/baseInfo/merchantsInfo/source',
        name: 'source',
        component: source,
      },
      {
        path: '/baseInfo/merchantsInfo/department',
        name: 'department',
        component: department,
      },
      {
        path: '/baseInfo/merchantsInfo/brand',
        name: 'brand',
        component: brand,
      },
      {
        path: '/baseInfo/merchantsInfo/hospital',
        name: 'hospital',
        component: hospital,
      },
      {
        path: '/baseInfo/merchantsInfo/product',
        name: 'product',
        component: product,
      }
    ]
  }
];