<template>
  <div class="merchants-info">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本信息" name="1">
        <base-info></base-info>
      </el-collapse-item>
      <el-collapse-item title="OBOR信息" name="2">
        <obor-info></obor-info>
      </el-collapse-item>
      <el-collapse-item title="渠道经理拜访信息" name="3">
        <visit-info></visit-info>
      </el-collapse-item>
      <el-collapse-item title="调研问卷" name="4">
        <survey-info></survey-info>
      </el-collapse-item>
      <el-collapse-item title="招商信息" name="5">
        <merchants-info></merchants-info>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ['1','2','3','4'],
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
}
</script>