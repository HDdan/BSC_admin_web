<template>
<div class="mr-20 ml-20">
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
    props: {
    tableData: {
      type: Array,
      default: []
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex%2) {
        return "warning-row";
      } else{
        return "";
      }
     
    },
  },
 
};
</script>
