const DOWNLOAD_RULE_FLG = {
  'admin'            : true,
  'BI-commissioner'  : false,
  'M-admin'          : true,
  'M-commissioner'   : false,
  'OBOR-admin'       : true,
  'OBOR-commissioner': false,
  'C-Manager'        : false,
}
export default {
  checkDownload: userType => DOWNLOAD_RULE_FLG[userType],
}