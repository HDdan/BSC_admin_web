import Cookies from 'js-cookie'

const USER_ROLES_TYPE = [
  {
    userType: 'admin',
    userRole: 'admin'
  },
  {
    userType: 'BI-commissioner',
    userRole: 'BI专员'
  },
  {
    userType: 'M-admin',
    userRole: '招商管理员'
  },
  {
    userType: 'M-commissioner',
    userRole: '招商专员'
  },
  {
    userType: 'OBOR-admin',
    userRole: 'OBOR管理员'
  },
  {
    userType: 'OBOR-commissioner',
    userRole: 'OBOR专员'
  },
  {
    userType: 'C-Manager',
    userRole: '渠道经理'
  },
];

export default {
  setUserType(userRole) {
    const userType = USER_ROLES_TYPE.find(r => r.userRole === userRole)['userType'];
    Cookies.set('admin-userType', userType);
  },
  getUserType() {
    return Cookies.get('admin-userType');
  }
};
