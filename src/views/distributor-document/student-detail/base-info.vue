<template>
<div class="student-base-info">
  <el-table
  border
  :data="tableData"
  style="width: 100%"
  >
    <el-table-column prop="id" label="学员姓名"> </el-table-column>
    <el-table-column prop="name" label="经销商名称" > </el-table-column>
    <el-table-column prop="businessType" label="学员appcode"></el-table-column>
    <el-table-column prop="businessRegion" label="渠道人类别"></el-table-column>
    <el-table-column prop="address" label="学员类型"></el-table-column>
    <el-table-column prop="address" label="BU"></el-table-column>
    <el-table-column prop="address" label="优势医院家数"></el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    }
  }
}
</script>
<style lang="scss">
.student-base-info {
  margin: 40px 20px 30px;
}
</style>