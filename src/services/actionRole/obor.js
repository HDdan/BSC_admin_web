const BASE_INFO_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
};
const SALES_INFO_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
};
const SFE_INFO_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
};
const LABLE_INFO_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
};
const CURSE_INFO_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
};
export default {
  checkBaseInfo: userType => BASE_INFO_IMPORT_EXPORT_RULE_FLG[userType],
  checkSalesInfo: userType => SALES_INFO_IMPORT_EXPORT_RULE_FLG[userType],
  checkSfeInfo: userType => SFE_INFO_IMPORT_EXPORT_RULE_FLG[userType],
  checkLableInfo: userType => LABLE_INFO_IMPORT_EXPORT_RULE_FLG[userType],
  checkCourseInfo: userType => CURSE_INFO_IMPORT_EXPORT_RULE_FLG[userType],
}