<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100"> </el-table-column>
      <el-table-column prop="Module" label="板块" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Filename" label="文件名" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Remark" label="导入目的" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Date" label="时间" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Status" label="状态" show-overflow-tooltip> </el-table-column>
      <el-table-column
        prop="UserName"
        label="操作者"
      >
      </el-table-column>
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
