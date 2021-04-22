<template>
  <div class="main">
    <div class="main-header">线上线下赋能数据-新建</div>
    <div class="mt-30">
      <el-form :model="form" ref="forms" label-width="200px" class="add-form">
        <el-form-item label="BU：" prop="bu">
          <el-input v-model="form.bu"></el-input>
        </el-form-item>
         <el-form-item label="学员姓名：" prop="studentname">
          <el-input v-model="form.studentname"></el-input>
        </el-form-item>
         <el-form-item label="经销商名称:" prop="dealername">
          <el-input v-model="form.dealername"></el-input>
        </el-form-item>
         <el-form-item label="线上赋能精品课:" prop="excellent">
          <el-input v-model="form.excellent"></el-input>
        </el-form-item>
        <el-form-item label="线上赋能Bu定制课：" prop="customize">
          <el-input v-model="form.customize"></el-input>
        </el-form-item>
         <el-form-item label="线上培训总次数：" prop="onlinetrainnum">
          <el-input v-model="form.onlinetrainnum"></el-input>
        </el-form-item>
         <el-form-item label="线下赋能区域沙龙：" prop="regionsalon">
          <el-input v-model="form.regionsalon"></el-input>
        </el-form-item>
         <el-form-item label="线下赋能高效训练营：" prop="efficienttrainingcamp">
          <el-input v-model="form.efficienttrainingcamp"></el-input>
        </el-form-item>
        <el-form-item label="线下赋能精英训练营：" prop="boutiquetrainingcamp">
          <el-input v-model="form.boutiquetrainingcamp"></el-input>
        </el-form-item>
         <el-form-item label="线下培训总次数：" prop="offlinetrainnum">
          <el-input v-model="form.offlinetrainnum"></el-input>
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
          params.action = "CourseEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/oborData/courseInfo" });
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