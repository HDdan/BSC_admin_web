const QUERY_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const IMPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : false,
  'M-commissioner'   : false,
  'OBOR-admin'       : false,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
};
const EXPORT_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_BASE_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_INTERVIEW_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_MERCHANTS_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_OBOR_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_OBOR_STUDENT_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_SURVEY_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};
const GET_VISIT_INFO_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : true,
  'M-admin'          : true,
  'M-commissioner'   : true,
  'OBOR-admin'       : true,
  'OBOR-commissioner': true,
  'C-Manager'        : true,
};

export default {
  checkQuery: userType => QUERY_RULE_FLG[userType],
  checkImport: userType => IMPORT_RULE_FLG[userType],
  checkExport: userType => EXPORT_RULE_FLG[userType],
  checkBaseInfo: userType => GET_BASE_INFO_RULE_FLG[userType],
  checkInterviewInfo: userType => GET_INTERVIEW_INFO_RULE_FLG[userType],
  checkMerchantsInfo: userType => GET_MERCHANTS_INFO_RULE_FLG[userType],
  checkOborInfo: userType => GET_OBOR_INFO_RULE_FLG[userType],
  checkOborStudentInfo: userType => GET_OBOR_STUDENT_INFO_RULE_FLG[userType],
  checkSurveyInfo: userType => GET_SURVEY_INFO_RULE_FLG[userType],
  checkVisitInfo: userType => GET_VISIT_INFO_RULE_FLG[userType],
}