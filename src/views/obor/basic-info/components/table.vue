<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100"> </el-table-column>
      <el-table-column prop="Module" label="BU"> </el-table-column>
      <el-table-column prop="Filename" label="经销商名称"> </el-table-column>
      <el-table-column prop="Remark" label="经销商类型"> </el-table-column>
      <el-table-column prop="Date" label="BSC合作年限"> </el-table-column>
      <el-table-column prop="Status" label="Dealer Sales"> </el-table-column>
      <el-table-column prop="UserName" label="学员电话"> </el-table-column>
      <el-table-column prop="UserName" label="学员省份"> </el-table-column>
      <el-table-column prop="UserName" label="学员城市"> </el-table-column>
      <el-table-column prop="UserName" label="渠道人类型"> </el-table-column>
      <el-table-column prop="UserName" label="学员类型"> </el-table-column>
      <el-table-column prop="UserName" label="能力认证"> </el-table-column>
      <el-table-column prop="UserName" label="OBOR合作年限"> </el-table-column>
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
      window.open(url);
    },
  },
};
</script>
