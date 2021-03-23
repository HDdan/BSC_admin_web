<template>
<div class="mr-20 ml-20">
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-click="gotoDetail"
  >
    <el-table-column prop="Id" label="序号" width="60"> </el-table-column>
    <el-table-column prop="DealerName" label="经销商名称" width="100"> </el-table-column>
    <el-table-column prop="Sources" label="数据来源"> </el-table-column>
    <el-table-column prop="Province" label="业务区域"> </el-table-column>
    <el-table-column prop="Department" label="合作科室"> </el-table-column>
    <el-table-column prop="MainProductTypes" label="主营产品类型"> </el-table-column>
    <el-table-column prop="CallTime" label="沟通时间"> </el-table-column>
    <el-table-column prop="CallUserName" label="沟通专员"> </el-table-column>
    <el-table-column prop="PushTime" label="推送时间"> </el-table-column>
    <el-table-column prop="PushUserName" label="推送专员"> </el-table-column>
  </el-table>
  </div>
</template>

<script>
import "./index.scss";

export default {
  props:{
     tableData: {
      type: Array,
      default: [],
    },
  },
  
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex%2) {
        return "warning-row";
      } else{
        return "";
      }
    },
    gotoDetail() {
      this.$router.push({ path: '/potentialDistributor/edit' });
      console.log("detail");
    }
  },
  data() {
    return {
    };
  },
};
</script>
