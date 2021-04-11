<template>
<div class="student-base-info">
  <el-table
  border
  :data="studentInfo"
  style="width: 100%">
    <el-table-column prop="DealerName" label="学员姓名"> </el-table-column>
    <el-table-column prop="DealerType" label="经销商名称" > </el-table-column>
    <el-table-column prop="StudentAppcode" label="学员appcode"></el-table-column>
    <el-table-column prop="ChannelPersonType" label="渠道人类别"></el-table-column>
    <el-table-column prop="StudentType" label="学员类型"></el-table-column>
    <el-table-column prop="Bu" label="BU"></el-table-column>
    <el-table-column prop="YHospitalNum" label="优势医院家数"></el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  props: {
    studentInfo: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss">
.student-base-info {
  margin: 40px 20px 30px;
}
</style>