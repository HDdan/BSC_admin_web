<template>
  <div class="main">
    <div class="main-header">SFE数据-新建</div>
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
         <el-form-item label="优势医院家数:" prop="suphospitalnum">
          <el-input v-model="form.suphospitalnum"></el-input>
        </el-form-item>
        <el-form-item label="项目医院数：" prop="projecthospitalnum">
          <el-input v-model="form.projecthospitalnum"></el-input>
        </el-form-item>
         <el-form-item label="非项目医院数：" prop="noprojecthospitalnum">
          <el-input v-model="form.noprojecthospitalnum"></el-input>
        </el-form-item>
         <el-form-item label="优势科室数：" prop="supdepartmentnum">
          <el-input v-model="form.supdepartmentnum"></el-input>
        </el-form-item>
         <el-form-item label="从业年限：" prop="workyears">
          <el-input v-model="form.workyears"></el-input>
        </el-form-item>
        <el-form-item label="是否带团队：" prop="teamleader">
          <el-input v-model="form.teamleader"></el-input>
        </el-form-item>
         <el-form-item label="团队规模：" prop="teamsize">
          <el-input v-model="form.teamsize"></el-input>
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
          params.action = "LabelEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/oborData/lableInfo" });
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