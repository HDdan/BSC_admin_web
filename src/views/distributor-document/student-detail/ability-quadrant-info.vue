<template>
<div class="student-ability-info">
  <el-table
  border
  :data="tableData"
  style="width: 100%"
  >
    <el-table-column prop="id" label="医院维护能力"> </el-table-column>
    <el-table-column prop="name" label="医院覆盖能力" > </el-table-column>
    <el-table-column prop="businessType" label="开院能力"></el-table-column>
    <el-table-column prop="businessRegion" label="专业能力"></el-table-column>
    <el-table-column prop="address" label="合作度"></el-table-column>
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
.student-ability-info {
  margin: 40px 20px 30px;
}
</style>