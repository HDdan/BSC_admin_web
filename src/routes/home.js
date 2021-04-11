import Home from '@/views/home'
// import potentialDistributor from '../views/potential-distributor'
// import distributorDocumentList from '@/views/distributor-document/list'
// import distributorDocumentDetail from '@/views/distributor-document/detail'
// import distributorDocumentStudentDetail from '@/views/distributor-document/studentDetail'
// import editPotentialDistributor from '@/views/potential-distributor/edit-potential-distributor'
// import createPotentialDistributor from '@/views/potential-distributor/create-potential-distributor'
// import source from '@/views/basic-info/merchants-info/source'
// import basicInfo from '@/views/obor/basic-info'
// import salesInfo from '@/views/obor/sales-info'
// import sfeInfo from '@/views/obor/sfe-info'
// import lableInfo from '@/views/obor/lable-info'
// import courseInfo from '@/views/obor/course-info'
// import department from '@/views/basic-info/merchants-info/department'
// import brand from '@/views/basic-info/merchants-info/brand'
import hospital from '@/views/basic-info/merchants-info/hospital'
import product from '@/views/basic-info/merchants-info/product'
import interviewRecord from '@/views/basic-info/interview-record/'
import visitRecord from '@/views/basic-info/visit-record/'
import questionnaireRecord from '@/views/basic-info/questionnaire-record/'
import oborInfo from '@/views/basic-info/obor-info/'
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
        component: resolve => require(['../views/potential-distributor'], resolve),
      },
      {
        path: '/distributorDocument',
        name: 'distributorDocumentList',
        component: resolve => require(['../views/distributor-document/list'], resolve),
      },
      {
          path: '/distributorDocument/detail',
          name: 'distributorDocumentDetail',
          component: resolve => require(['../views/distributor-document/detail'], resolve),
      },
      {
        path: '/distributorDocument/studentDetail',
        name: 'distributorDocumentStudentDetail',
        component: resolve => require(['../views/distributor-document/studentDetail'], resolve),
      },
      {
        path: '/potentialDistributor/edit',
        name: 'editPotentialDistributor',
        component: resolve => require(['../views/potential-distributor/edit-potential-distributor'], resolve),
      },
      {
        path: '/potentialDistributor/create',
        name: 'createPotentialDistributor',
        component: resolve => require(['../views/potential-distributor/create-potential-distributor'], resolve),
      },
      {
        path: '/oborData/basicInfo',
        name: 'basicInfo',
        component: resolve => require(['../views/obor/basic-info'], resolve),
      },
      {
        path: '/oborData/salesInfo',
        name: 'salesInfo',
        component: resolve => require(['../views/obor/sales-info'], resolve),
      },
      {
        path: '/oborData/sfeInfo',
        name: 'sfeInfo',
        component: resolve => require(['../views/obor/sfe-info'], resolve),
      },
      {
        path: '/oborData/sfeInfo/add',
        name: 'sfeInfoAdd',
        component: resolve => require(['../views/obor/sfe-info/add'], resolve),
      },
      {
        path: '/oborData/lableInfo',
        name: 'lableInfo',
        component: resolve => require(['../views/obor/lable-info'], resolve),
      },
      {
        path: '/oborData/lableInfo/add',
        name: 'lableInfoAdd',
        component: resolve => require(['../views/obor/lable-info/add'], resolve),
      },
      {
        path: '/oborData/courseInfo',
        name: 'courseInfo',
        component: resolve => require(['../views/obor/course-info'], resolve),
      },
      {
        path: '/oborData/courseInfo/add',
        name: 'courseInfoAdd',
        component: resolve => require(['../views/obor/course-info/add'], resolve),
      },
      {
        path: '/baseInfo/merchantsInfo/source',
        name: 'source',
        component: resolve => require(['../views/basic-info/merchants-info/source'], resolve),
      },
      {
        path: '/baseInfo/merchantsInfo/department',
        name: 'department',
        component: resolve => require(['../views/basic-info/merchants-info/department'], resolve),
      },
      {
        path: '/baseInfo/merchantsInfo/brand',
        name: 'brand',
        component: resolve => require(['../views/basic-info/merchants-info/brand'], resolve),
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
        path: '/baseInfo/interviewRecord',
        name: 'interviewRecord',
        component: resolve => require(['../views/basic-info/interview-record'], resolve),
      },
      {
        path: '/baseInfo/interviewRecord/add',
        name: 'interviewRecordAdd',
        component: resolve => require(['../views/basic-info/interview-record/add.vue'], resolve),
      },
      {
        path: '/baseInfo/visitRecord',
        name: 'visitRecord',
        component: resolve => require(['../views/basic-info/visit-record/'], resolve),
      }, 
      {
        path: '/baseInfo/visitRecord/add',
        name: 'visitRecordAdd',
        component: resolve => require(['../views/basic-info/visit-record/add.vue'], resolve),
      },
      {
        path: '/baseInfo/questionnaireRecord',
        name: 'questionnaireRecord',
        component: resolve => require(['../views/basic-info/questionnaire-record'], resolve),
      },
      {
        path: '/baseInfo/questionnaireRecord/add',
        name: 'questionnaireRecordAdd',
        component: resolve => require(['../views/basic-info/questionnaire-record/add.vue'], resolve),
      },
      {
        path: '/baseInfo/oborInfo',
        name: 'oborInfo',
        component: resolve => require(['../views/basic-info/obor-info'], resolve),
      },
      {
        path: '/baseInfo/oborInfo/add',
        name: 'oborInfoAdd',
        component: resolve => require(['../views/basic-info/obor-info/add.vue'], resolve),
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