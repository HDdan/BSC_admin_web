import Home from '@/views/home'
import potentialDistributor from '@/views/potential-distributor'
import distributorDocumentList from '@/views/distributor-document/list'
import distributorDocumentDetail from '@/views/distributor-document/detail'
import distributorDocumentStudentDetail from '@/views/distributor-document/studentDetail'
import editPotentialDistributor from '@/views/potential-distributor/edit-potential-distributor'
import createPotentialDistributor from '@/views/potential-distributor/create-potential-distributor'
import source from '@/views/basic-info/merchants-info/source'
import basicInfo from '@/views/obor/basic-info'
import salesInfo from '@/views/obor/sales-info'
import sfeInfo from '@/views/obor/sfe-info'
import lableInfo from '@/views/obor/lable-info'
import courseInfo from '@/views/obor/course-info'
import department from '@/views/basic-info/merchants-info/department'
import brand from '@/views/basic-info/merchants-info/brand'
import hospital from '@/views/basic-info/merchants-info/hospital'
import product from '@/views/basic-info/merchants-info/product'
import modifyRecord from '@/views/modify-record'
import importRecord from '@/views/import-record'
import exportRecord from '@/views/export-record'
import roleSetting from '@/views/role-setting'

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
        path: '/potentialDistributor/create',
        name: 'createPotentialDistributor',
        component: createPotentialDistributor,
      },
      {
        path: '/obor/basicInfo',
        name: 'basicInfo',
        component: basicInfo,
      },
      {
        path: '/obor/salesInfo',
        name: 'salesInfo',
        component: salesInfo,
      },
      {
        path: '/obor/sfeInfo',
        name: 'sfeInfo',
        component: sfeInfo,
      },
      {
        path: '/obor/lableInfo',
        name: 'lableInfo',
        component: lableInfo,
      },
      {
        path: '/obor/courseInfo',
        name: 'courseInfo',
        component: courseInfo,
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
      },
      {
        path: '/modifyRecord',
        name: 'modifyRecord',
        component: modifyRecord,
      },
      {
        path: '/importRecord',
        name: 'importRecord',
        component: importRecord,
      },
      {
        path: '/exportRecord',
        name: 'exportRecord',
        component: exportRecord,
      },
      {
        path: '/roleSetting',
        name: 'roleSetting',
        component: roleSetting,
      }
    ]
  }
];