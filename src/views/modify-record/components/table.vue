<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100"> </el-table-column>
      <el-table-column prop="Date" label="时间"> </el-table-column>
      <el-table-column prop="UserId" label="操作者"> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称"> </el-table-column>
      <el-table-column label="具体操作"> 
        <template slot-scope="scope">{{ scope.row.Field }}</template>
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
      window.open(url);
    },
  },
};
</script>
