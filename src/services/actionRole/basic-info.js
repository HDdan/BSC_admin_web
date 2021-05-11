const MERCHANTS_DATA_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : true,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
const OBOR_DATA_MENU_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : true,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
const INTERVIEW_DATA_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
const QUESTIONNAIRE_DATA_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
const VISIT_DATA_IMPORT_EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
export default {
  checkMerchantsPort: userType => MERCHANTS_DATA_IMPORT_EXPORT_RULE_FLG[userType],
  checkOborMenu: userType => OBOR_DATA_MENU_RULE_FLG[userType],
  checkInterviewPort: userType => INTERVIEW_DATA_IMPORT_EXPORT_RULE_FLG[userType],
  checkQuestionnairePort: userType => QUESTIONNAIRE_DATA_IMPORT_EXPORT_RULE_FLG[userType],
  checkVisitPort: userType => VISIT_DATA_IMPORT_EXPORT_RULE_FLG[userType],
}