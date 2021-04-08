<template>
  <div class="main">
    <div class="main-header">调研主数据-新建</div>
    <div class="mt-30">
      <el-form :model="form" ref="forms" label-width="200px" class="add-form">
        <el-form-item label="SAPID：" prop="sapid">
          <el-input v-model="form.sapid"></el-input>
        </el-form-item>
         <el-form-item label="经销商名称:" prop="dealername">
          <el-input v-model="form.dealername"></el-input>
        </el-form-item>
         <el-form-item label="提交时间:" prop="submitdate">
          <el-input v-model="form.submitdate"></el-input>
        </el-form-item>
         <el-form-item label="希望增加的合作领域:" prop="addfields">
          <el-input v-model="form.addfields"></el-input>
        </el-form-item>
         <el-form-item label="经营品种是否包含了医疗设备类产品：" prop="medicalequipment">
          <el-input v-model="form.medicalequipment"></el-input>
        </el-form-item>
         <el-form-item label="合作原因：" prop="cooperatetype">
          <el-input v-model="form.cooperatetype"></el-input>
        </el-form-item>
         <el-form-item label="公司老板年龄：" prop="bossage">
          <el-input v-model="form.bossage"></el-input>
        </el-form-item>
         <el-form-item label="销售团队人总数：" prop="teamnum">
          <el-input v-model="form.teamnum"></el-input>
        </el-form-item>
         <el-form-item label="销售跟台人数：" prop="salesgtnum">
          <el-input v-model="form.salesgtnum"></el-input>
        </el-form-item>
         <el-form-item label="带人销售经理总人数：" prop="teamsmnum">
          <el-input v-model="form.teamsmnum"></el-input>
        </el-form-item>
         <el-form-item label="上年度公司进货金额（含税）元：" prop="purchaseamount">
          <el-input v-model="form.purchaseamount"></el-input>
        </el-form-item>
         <el-form-item label="是否作为托管方有托管医院：" prop="tghospital">
          <el-input v-model="form.tghospital"></el-input>
        </el-form-item>
         <el-form-item label="业务覆盖城市：" prop="covercity">
          <el-input v-model="form.covercity"></el-input>
        </el-form-item>
         <el-form-item label="城市是否有业务员：" prop="issales">
          <el-input v-model="form.issales"></el-input>
        </el-form-item>
         <el-form-item label="稳定业务的三甲医院数量：" prop="hospitalnumber">
          <el-input v-model="form.hospitalnumber"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院1：" prop="focushospital1">
          <el-input v-model="form.focushospital1"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院2：" prop="focushospital2">
          <el-input v-model="form.focushospital2"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院3：" prop="focushospital3">
          <el-input v-model="form.focushospital3"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院4：" prop="focushospital4">
          <el-input v-model="form.focushospital4"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院5：" prop="focushospital5">
          <el-input v-model="form.focushospital5"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院6：" prop="focushospital6">
          <el-input v-model="form.focushospital6"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院7：" prop="focushospital7">
          <el-input v-model="form.focushospital7"></el-input>
        </el-form-item>
         <el-form-item label="重点合作医院8：" prop="focushospital8">
          <el-input v-model="form.focushospital8"></el-input>
        </el-form-item>
         <el-form-item label="重点合作科室1：" prop="focusdepartment1">
          <el-input v-model="form.focusdepartment1"></el-input>
        </el-form-item>
         <el-form-item label="业务占比1：" prop="rate1">
          <el-input v-model="form.rate1"></el-input>
        </el-form-item>
         <el-form-item label="主要品牌1-1：" prop="mainbrand11">
          <el-input v-model="form.mainbrand11"></el-input>
        </el-form-item>
         <el-form-item label="主要品牌1-2：" prop="mainbrand12">
          <el-input v-model="form.mainbrand12"></el-input>
        </el-form-item>
         <el-form-item label="重点合作科室2：" prop="focusdepartment2">
          <el-input v-model="form.focusdepartment2"></el-input>
        </el-form-item>
         <el-form-item label="业务占比2：" prop="rate2">
          <el-input v-model="form.rate2"></el-input>
        </el-form-item>
         <el-form-item label="主要品牌2-1：" prop="mainbrand21">
          <el-input v-model="form.mainbrand21"></el-input>
        </el-form-item>
         <el-form-item label="主要品牌2-2：" prop="mainbrand22">
          <el-input v-model="form.mainbrand22"></el-input>
        </el-form-item>
         <el-form-item label="重点合作科室3：" prop="focusdepartment3">
          <el-input v-model="form.focusdepartment3"></el-input>
        </el-form-item>
         <el-form-item label="业务占比3：" prop="rate3">
          <el-input v-model="form.rate3"></el-input>
        </el-form-item>
         <el-form-item label="主要品牌3-1：" prop="mainbrand31">
          <el-input v-model="form.mainbrand31"></el-input>
        </el-form-item>
         <el-form-item label="主要品牌3-2：" prop="mainbrand32">
          <el-input v-model="form.mainbrand32"></el-input>
        </el-form-item>
         <el-form-item label="目前公司发展最大的瓶颈：" prop="question1">
          <el-input v-model="form.question1"></el-input>
        </el-form-item>
         <el-form-item label="您平时关注的医疗行业相关的微信公众号是哪些：" prop="question2">
          <el-input v-model="form.question2"></el-input>
        </el-form-item>
         <el-form-item label="您会参加哪些医疗器械展会：" prop="question3">
          <el-input v-model="form.question3"></el-input>
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
          params.action = "QuestionnaireRecordEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/baseInfo/questionnaireRecord" });
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