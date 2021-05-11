const IMPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : true,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
const EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : true,
}
const ADD_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
export default {
  checkImport: userType => IMPORT_RULE_FLG[userType],
  checkExport: userType => EXPORT_RULE_FLG[userType],
  checkAdd: userType => ADD_RULE_FLG[userType],
}