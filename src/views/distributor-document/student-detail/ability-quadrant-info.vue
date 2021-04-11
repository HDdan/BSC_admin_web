<template>
<div class="student-ability-info">
  <el-table
  border
  :data="studentInfo"
  style="width: 100%"
  >
    <el-table-column prop="HospitalMaintainScore" label="医院维护能力"> </el-table-column>
    <el-table-column prop="HospitalCoverScore" label="医院覆盖能力" > </el-table-column>
    <el-table-column prop="NewHospitalScore" label="开院能力"></el-table-column>
    <el-table-column prop="SpecialtyScore" label="专业能力"></el-table-column>
    <el-table-column prop="CooScore" label="合作度"></el-table-column>
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
.student-ability-info {
  margin: 40px 20px 30px;
}
</style>