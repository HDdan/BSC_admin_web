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
          <!-- <el-form-item label="SFE指标:" prop="sfetarget">
          <el-input v-model="form.sfetarget"></el-input>
        </el-form-item>
          <el-form-item label="SFE达成：" prop="sfeaccomplish">
          <el-input v-model="form.sfeaccomplish"></el-input>
        </el-form-item>
          <el-form-item label="SFE达成率：" prop="sfeaccomplishrate">
          <el-input v-model="form.sfeaccomplishrate"></el-input>
        </el-form-item>
          <el-form-item label="带教员认可SFE次数：" prop="approbatenum">
          <el-input v-model="form.approbatenum"></el-input>
        </el-form-item>
          <el-form-item label="带教员认可率：" prop="approbaterate">
          <el-input v-model="form.approbaterate"></el-input>
        </el-form-item> -->
          <el-form-item label="经典项目SFE总指标:" prop="classicsfetarget">
          <el-input v-model="form.classicsfetarget"></el-input>
        </el-form-item>
          <el-form-item label="经典项目SFE总达成：" prop="classicsfeaccomplish">
          <el-input v-model="form.classicsfeaccomplish"></el-input>
        </el-form-item>
          <el-form-item label="经典项目SFE达成率：" prop="classicsfeaccomplishrate">
          <el-input v-model="form.classicsfeaccomplishrate"></el-input>
        </el-form-item>
          <el-form-item label="经典项目带教员认可SFE次数：" prop="classicapprobatenum">
          <el-input v-model="form.classicapprobatenum"></el-input>
        </el-form-item>
          <el-form-item label="经典项目带教员认可率：" prop="classicapprobaterate">
          <el-input v-model="form.classicapprobaterate"></el-input>
        </el-form-item>
          <el-form-item label="地推项目SFE总指标:" prop="groundsfetarget">
          <el-input v-model="form.groundsfetarget"></el-input>
        </el-form-item>
          <el-form-item label="地推项目SFE总达成：" prop="groundsfeaccomplish">
          <el-input v-model="form.groundsfeaccomplish"></el-input>
        </el-form-item>
          <el-form-item label="地推项目SFE达成率：" prop="groundsfeaccomplishrate">
          <el-input v-model="form.groundsfeaccomplishrate"></el-input>
        </el-form-item>
          <el-form-item label="地推项目带教员认可SFE次数：" prop="groundapprobatenum">
          <el-input v-model="form.groundapprobatenum"></el-input>
        </el-form-item>
          <el-form-item label="地推项目带教员认可率：" prop="groundapprobaterate">
          <el-input v-model="form.groundapprobaterate"></el-input>
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
          params.action = "SfeEdit";
          this.$api.execobj(params).then((res) => {
            this.$router.push({ path: "/oborData/sfeInfo" });
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