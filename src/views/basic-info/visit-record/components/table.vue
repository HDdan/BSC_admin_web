<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ManagerName" label="拜访经理" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Date" label="拜访日期" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Purpose" label="经销商名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="接访者" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Interviewee" label="接访者职位" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Position" label="接访者联系方式" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="拜访涉及BU" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Controller" label="区域市场竞品及医院准入情况" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="InvolveBu" label="医院覆盖率未达标医院情况了解" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="业务分型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="覆盖省份数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="覆盖地市数量" show-overflow-tooltip> </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2) {
        return "warning-row";
      } else {
        return "";
      }
    },
    download(url) {
      window.open(url)
    },
  },
};
</script>
