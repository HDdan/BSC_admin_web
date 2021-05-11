const EDIT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
export default {
  checkEdit: userType => EDIT_RULE_FLG[userType],
}