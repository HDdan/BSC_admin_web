<template>
  <div class="main">
    <div class="main-header">拜访主数据-新建</div>
    <div class="mt-30">
      <el-form :model="form" ref="forms" label-width="200px" class="add-form">
        <el-form-item label="拜访经理：" prop="managername">
          <el-input v-model="form.managername"></el-input>
        </el-form-item>
         <el-form-item label="拜访日期:" prop="date">
          <el-input v-model="form.date"></el-input>
        </el-form-item>
         <el-form-item label="SAPID:" prop="sapid">
          <el-input v-model="form.sapid"></el-input>
        </el-form-item>
         <el-form-item label="经销商名称:" prop="dealername">
          <el-input v-model="form.dealername"></el-input>
        </el-form-item>
         <el-form-item label="接访者：" prop="interviewee">
          <el-input v-model="form.interviewee"></el-input>
        </el-form-item>
         <el-form-item label="接访者职位：" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
         <el-form-item label="接访者联系方式：" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
         <el-form-item label="拜访涉及BU：" prop="InvolveBu">
          <el-input v-model="form.InvolveBu"></el-input>
        </el-form-item>
         <el-form-item label="区域市场竞品及医院准入情况：" prop="question1">
          <el-input v-model="form.question1"></el-input>
        </el-form-item>
         <el-form-item label="医院覆盖率未达标医院情况了解：" prop="question2">
          <el-input v-model="form.question2"></el-input>
        </el-form-item>
         <el-form-item label="业务分型：" prop="usinesstype">
          <el-input v-model="form.usinesstype"></el-input>
        </el-form-item>
         <el-form-item label="覆盖省份数量：" prop="coverprovincenum">
          <el-input v-model="form.coverprovincenum"></el-input>
        </el-form-item>
         <el-form-item label="覆盖地市数量：" prop="covercitynum">
          <el-input v-model="form.covercitynum"></el-input>
        </el-form-item>
         <el-form-item label="覆盖县市数量：" prop="covercountynum">
          <el-input v-model="form.covercountynum"></el-input>
        </el-form-item>
         <el-form-item label="覆盖省市：" prop="coverprovincecity">
          <el-input v-model="form.coverprovincecity"></el-input>
        </el-form-item>
         <el-form-item label="上一年度进货金额：" prop="lastyearamount">
          <el-input v-model="form.lastyearamount"></el-input>
        </el-form-item>
         <el-form-item label="带人销售经理数：" prop="smnum">
          <el-input v-model="form.smnum"></el-input>
        </el-form-item>
         <el-form-item label="销售总人数：" prop="salesnum">
          <el-input v-model="form.salesnum"></el-input>
        </el-form-item>
         <el-form-item label="跟台人数：" prop="follownum">
          <el-input v-model="form.follownum"></el-input>
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
         <el-form-item label="是否具备省级以上代理的潜力：" prop="provinceproxy">
          <el-input v-model="form.provinceproxy"></el-input>
        </el-form-item>
         <el-form-item label="重点科室及品牌：" prop="advantagedepbrand">
          <el-input v-model="form.advantagedepbrand"></el-input>
        </el-form-item>
         <el-form-item label="扩张型-上游拓展：" prop="kz_sy">
          <el-input v-model="form.kz_sy"></el-input>
        </el-form-item>
         <el-form-item label="维持型：" prop="wc">
          <el-input v-model="form.wc"></el-input>
        </el-form-item>
         <el-form-item label="退岸型：" prop="tan">
          <el-input v-model="form.tan"></el-input>
        </el-form-item>
         <el-form-item label="有无贷款、融资：" prop="loan">
          <el-input v-model="form.loan"></el-input>
        </el-form-item>
         <el-form-item label="贷款融资金额：" prop="loanamount">
          <el-input v-model="form.loanamount"></el-input>
        </el-form-item>
         <el-form-item label="是否有设备业务：" prop="equipmentbusiness">
          <el-input v-model="form.equipmentbusiness"></el-input>
        </el-form-item>
         <el-form-item label="设备业务在自身业务占比：" prop="equipmentrate">
          <el-input v-model="form.equipmentrate"></el-input>
        </el-form-item>
         <el-form-item label="提供维保服务的工程师人数：" prop="engineernum">
          <el-input v-model="form.engineernum"></el-input>
        </el-form-item>
         <el-form-item label="是否有医保物价协商能力：" prop="ybnegotiate">
          <el-input v-model="form.ybnegotiate"></el-input>
        </el-form-item>
         <el-form-item label="非临客户维护能力：" prop="clientmaintain">
          <el-input v-model="form.clientmaintain"></el-input>
        </el-form-item>
         <el-form-item label="其他信息记录：" prop="others">
          <el-input v-model="form.others"></el-input>
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
          params.action = "VisitRecordEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/baseInfo/visitRecord" });
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