<template>
  <div class="main">
    <div class="main-header">OBOR主数据-新建</div>
    <div class="mt-30">
      <el-form :model="form" ref="forms" label-width="200px" class="add-form">
        <el-form-item label="BU：" prop="bu">
          <el-input v-model="form.bu"></el-input>
        </el-form-item>

        <el-form-item label="经销商名称:" prop="dealername">
          <el-input v-model="form.dealername"></el-input>
        </el-form-item>

        <el-form-item label="经销商类型:" prop="dealertype">
          <el-input v-model="form.dealertype"></el-input>
        </el-form-item>
        <el-form-item label="迪乐评分:" prop="dlscore">
          <el-input v-model="form.dlscore"></el-input>
        </el-form-item>
        <el-form-item label="DealerSales：" prop="studentname">
          <el-input v-model="form.studentname"></el-input>
        </el-form-item>
        <el-form-item label="学员电话：" prop="studentphone">
          <el-input v-model="form.studentphone"></el-input>
        </el-form-item>
        <el-form-item label="学员appcode：" prop="studentappcode">
          <el-input v-model="form.studentappcode"></el-input>
        </el-form-item>
        <el-form-item label="学员类型：" prop="studenttype">
          <el-input v-model="form.studenttype"></el-input>
        </el-form-item>
        <el-form-item label="渠道人类型：" prop="channelpersontype">
          <el-input v-model="form.channelpersontype"></el-input>
        </el-form-item>
        <el-form-item label="学员等级：" prop="studentlevel">
          <el-input v-model="form.studentlevel"></el-input>
        </el-form-item>
        <el-form-item label="能力认证：" prop="abilitytype">
          <el-input v-model="form.abilitytype"></el-input>
        </el-form-item>
        <el-form-item label="OBOR合作年限：" prop="studentcoooboryears">
          <el-input v-model="form.studentcoooboryears"></el-input>
        </el-form-item>
        <el-form-item label="前年优势医院跟台数：" prop="hospitalgtnum1">
          <el-input v-model="form.hospitalgtnum1"></el-input>
        </el-form-item>
        <el-form-item label="去年优势医院跟台数：" prop="hospitalgtnum2">
          <el-input v-model="form.hospitalgtnum2"></el-input>
        </el-form-item>
        <el-form-item label="今年优势医院跟台数：" prop="hospitalgtnum3">
          <el-input v-model="form.hospitalgtnum3"></el-input>
        </el-form-item>
        <el-form-item label="有跟台优势医院数：" prop="gthospitalnum">
          <el-input v-model="form.gthospitalnum"></el-input>
        </el-form-item>
        <el-form-item label="季度考试最高值：" prop="maxtestscore">
          <el-input v-model="form.maxtestscore"></el-input>
        </el-form-item>
        <el-form-item
          label="去年项目内优势医院达成："
          prop="lastyearyhospitalreach"
        >
          <el-input v-model="form.lastyearyhospitalreach"></el-input>
        </el-form-item>
        <el-form-item
          label="今年项目内优势医院指标："
          prop="yearyhospitaltarget"
        >
          <el-input v-model="form.yearyhospitaltarget"></el-input>
        </el-form-item>
        <el-form-item
          label="今年项目内优势医院达成："
          prop="lastyearnhospitalreach"
        >
          <el-input v-model="form.lastyearnhospitalreach"></el-input>
        </el-form-item>
        <el-form-item
          label="去年非项目优势医院达成："
          prop="lastyearnhospitalreach"
        >
          <el-input v-model="form.lastyearnhospitalreach"></el-input>
        </el-form-item>
        <el-form-item
          label="今年非项目内优势医院指标："
          prop="yearnhospitaltarget"
        >
          <el-input v-model="form.yearnhospitaltarget"></el-input>
        </el-form-item>
        <el-form-item
          label="今年非项目内优势医院达成："
          prop="yearnhospitalreach"
        >
          <el-input v-model="form.yearnhospitalreach"></el-input>
        </el-form-item>
        <el-form-item label="优势医院数：" prop="yhospitalnum">
          <el-input v-model="form.yhospitalnum"></el-input>
        </el-form-item>
        <el-form-item label="有授权优势医院总植入：" prop="yimphospitalnum">
          <el-input v-model="form.yimphospitalnum"></el-input>
        </el-form-item>
        <el-form-item label="优势医院植入最高金额：" prop="yimphospitalscore">
          <el-input v-model="form.yimphospitalscore"></el-input>
        </el-form-item>
        <el-form-item
          label="新开医院年平均家数（有植入达3月及以上）："
          prop="newhospitalavgnum"
        >
          <el-input v-model="form.newhospitalavgnum"></el-input>
        </el-form-item>
        <el-form-item
          label="前年-今年新开医院平均植入金额："
          prop="newhospitalavgamount"
        >
          <el-input v-model="form.newhospitalavgamount"></el-input>
        </el-form-item>
        <el-form-item label="授权医院家数：" prop="authhospitalnum">
          <el-input v-model="form.authhospitalnum"></el-input>
        </el-form-item>
        <el-form-item label="经销商与波科合作年限：" prop="dealercoooboryears">
          <el-input v-model="form.dealercoooboryears"></el-input>
        </el-form-item>
        <el-form-item label="前年经销商销量：" prop="dealersales1">
          <el-input v-model="form.dealersales1"></el-input>
        </el-form-item>
        <el-form-item label="前年经销商销量占比：" prop="dealersalesrate1">
          <el-input v-model="form.dealersalesrate1"></el-input>
        </el-form-item>
        <el-form-item label="去年经销商销量：" prop="dealersales2">
          <el-input v-model="form.dealersales2"></el-input>
        </el-form-item>
        <el-form-item label="去年经销商销量占比：" prop="dealersalesrate2">
          <el-input v-model="form.dealersalesrate2"></el-input>
        </el-form-item>
        <el-form-item label="今年经销商销量：" prop="dealersales3">
          <el-input v-model="form.dealersales3"></el-input>
        </el-form-item>
        <el-form-item label="今年经销商销量占比：" prop="dealersalesrate3">
          <el-input v-model="form.dealersalesrate3"></el-input>
        </el-form-item>
        <el-form-item label="参加沙龙次数：" prop="salonnum">
          <el-input v-model="form.salonnum"></el-input>
        </el-form-item>
        <el-form-item label="基础训练营参与次数：" prop="basecampnum">
          <el-input v-model="form.basecampnum"></el-input>
        </el-form-item>
        <el-form-item label="高等训练营参与次数：" prop="highcampnum">
          <el-input v-model="form.highcampnum"></el-input>
        </el-form-item>
        <el-form-item label="精英训练营参与次数：" prop="elitecampnum">
          <el-input v-model="form.elitecampnum"></el-input>
        </el-form-item>
        <el-form-item label="精英训练营参与情况：" prop="elitecampdetail">
          <el-input v-model="form.elitecampdetail"></el-input>
        </el-form-item>
        <el-form-item label="线上课程参与次数：" prop="oncoursenum">
          <el-input v-model="form.oncoursenum"></el-input>
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
          params.action = "OborDataEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/baseInfo/oborInfo" });
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