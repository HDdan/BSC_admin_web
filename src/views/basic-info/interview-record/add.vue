<template>
  <div class="main">
    <div class="main-header">面谈主数据-新建</div>
    <div class="mt-30">
      <el-form :model="form" ref="forms" label-width="200px" class="add-form">
        <el-form-item label="提交答卷时间：" prop="date">
          <el-input v-model="form.date"></el-input>
        </el-form-item>
         <el-form-item label="渠道经理姓名:" prop="managername">
          <el-input v-model="form.managername"></el-input>
        </el-form-item>
         <el-form-item label="本次新经销商面谈主要目的:" prop="purpose">
          <el-input v-model="form.purpose"></el-input>
        </el-form-item>
         <el-form-item label="经销商名称:" prop="dealername">
          <el-input v-model="form.dealername"></el-input>
        </el-form-item>
         <el-form-item label="经销商被访谈者：" prop="interviewee">
          <el-input v-model="form.interviewee"></el-input>
        </el-form-item>
        <el-form-item label="职位：" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
         <el-form-item label="手机：" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
         <el-form-item label="被访谈者是否为公司实际控制人：" prop="controller">
          <el-input v-model="form.controller"></el-input>
        </el-form-item>
         <el-form-item label="本次洽谈合作涉及的BU：" prop="involvebu">
          <el-input v-model="form.involvebu"></el-input>
        </el-form-item>
         <el-form-item label="业务覆盖分型：" prop="businesstype">
          <el-input v-model="form.businesstype"></el-input>
        </el-form-item>
        <el-form-item label="覆盖省份数量：" prop="coverprovincenum">
          <el-input v-model="form.coverprovincenum"></el-input>
        </el-form-item>
         <el-form-item label="覆盖地市数量：" prop="covercitynum">
          <el-input v-model="form.covercitynum"></el-input>
        </el-form-item>
         <el-form-item label="覆盖医院数量：" prop="coverhospitalnum">
          <el-input v-model="form.coverhospitalnum"></el-input>
        </el-form-item>
         <el-form-item label="覆盖省市：" prop="coverprovincecity">
          <el-input v-model="form.coverprovincecity"></el-input>
        </el-form-item>
         <el-form-item label="销售经理人数：" prop="smnum">
          <el-input v-model="form.smnum"></el-input>
        </el-form-item>
        <el-form-item label="销售人数：" prop="salesnum">
          <el-input v-model="form.salesnum"></el-input>
        </el-form-item>
         <el-form-item label="跟台人数：" prop="follownum">
          <el-input v-model="form.follownum"></el-input>
        </el-form-item>
         <el-form-item label="经销商上一年度进货金额（百万元人民币）：" prop="lastyearpurchaseamount">
          <el-input v-model="form.lastyearpurchaseamount"></el-input>
        </el-form-item>
         <el-form-item label="第一年预计进货金额：" prop="estimatepurchaseamount1">
          <el-input v-model="form.estimatepurchaseamount1"></el-input>
        </el-form-item>
         <el-form-item label="第一年预计覆盖医院家数：" prop="estimatecoverhospitalnum1">
          <el-input v-model="form.estimatecoverhospitalnum1"></el-input>
        </el-form-item>
        <el-form-item label="第二年预计进货金额：" prop="estimatepurchaseamount2">
          <el-input v-model="form.estimatepurchaseamount2"></el-input>
        </el-form-item>
         <el-form-item label="第二年预计覆盖医院家数：" prop="estimatecoverhospitalnum2">
          <el-input v-model="form.estimatecoverhospitalnum2"></el-input>
        </el-form-item>
         <el-form-item label="配送：" prop="ps">
          <el-input v-model="form.ps"></el-input>
        </el-form-item>
         <el-form-item label="分销：" prop="fx">
          <el-input v-model="form.fx"></el-input>
        </el-form-item>
         <el-form-item label="直销：" prop="zx">
          <el-input v-model="form.zx"></el-input>
        </el-form-item>
        <el-form-item label="服务：" prop="fw">
          <el-input v-model="form.fw"></el-input>
        </el-form-item>
         <el-form-item label="是否有省级以上代理/一级代理产品：" prop="provinceproxy">
          <el-input v-model="form.provinceproxy"></el-input>
        </el-form-item>
         <el-form-item label="代理品牌及产品：" prop="proxybrand">
          <el-input v-model="form.proxybrand"></el-input>
        </el-form-item>
         <el-form-item label="下级代理商/入院平台：" prop="platform">
          <el-input v-model="form.platform"></el-input>
        </el-form-item>
         <el-form-item label="发展分型：" prop="devtype">
          <el-input v-model="form.devtype"></el-input>
        </el-form-item>
        <el-form-item label="重点科室及品牌：" prop="advantagedepbrand">
          <el-input v-model="form.advantagedepbrand"></el-input>
        </el-form-item>
         <el-form-item label="过去一年经销商新开医院家数：" prop="newhospitalnum">
          <el-input v-model="form.newhospitalnum"></el-input>
        </el-form-item>
         <el-form-item label="有无融资贷款：" prop="loan">
          <el-input v-model="form.loan"></el-input>
        </el-form-item>
        <el-form-item label="融资贷款具体金额（百万元人民币）：" prop="loanamount">
          <el-input v-model="form.loanamount"></el-input>
        </el-form-item>
         <el-form-item label="是否有设备业务：" prop="equipmentbusiness">
          <el-input v-model="form.equipmentbusiness"></el-input>
        </el-form-item>
         <el-form-item label="设备业务占比：" prop="equipmentrate">
          <el-input v-model="form.equipmentrate"></el-input>
        </el-form-item>
         <el-form-item label="提供维保服务的工程师团队人数：" prop="engineernum">
          <el-input v-model="form.engineernum"></el-input>
        </el-form-item>
         <el-form-item label="是否有医保物价协商能力：" prop="ybnegotiate">
          <el-input v-model="form.ybnegotiate"></el-input>
        </el-form-item>
         <el-form-item label="是否有非临客户关系维护能力：" prop="clientmaintain">
          <el-input v-model="form.clientmaintain"></el-input>
        </el-form-item>
         <el-form-item label="其他信息记录：" prop="others">
          <el-input v-model="form.others"></el-input>
        </el-form-item>
         <el-form-item label="在资金、人员等投入上，对BSC产品和同类竞品预计如何分配：" prop="question1">
          <el-input v-model="form.question1"></el-input>
        </el-form-item>
         <el-form-item label="SAPID：" prop="sapid">
          <el-input v-model="form.sapid"></el-input>
        </el-form-item>
      </el-form>
      <div class="margin-top-20">
        <el-button
          class="margin-left-20 margin-bottom-24"
          type="primary"
          @click="add('forms')"
          >保存</el-button
        >
        <el-button
          class="margin-left-18 margin-bottom-24"
          @click="resetForm('forms')"
          >取消</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.form = {};
    },
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = this.form;
          params.action = "InterviewRecordEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/baseInfo/interviewRecord" });
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>