<template>
<div class="mr-20 ml-20">
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-click="gotoDetail"
    @sort-change="sortChange"
  >
    <el-table-column prop="Id" label="序号" width="60"> </el-table-column>
    <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> 
       <template slot-scope="scope">
         <span class="table-hover">{{scope.row.DealerName}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="CreateTime" label="创建时间" show-overflow-tooltip sortable></el-table-column>
    <el-table-column prop="Sources" label="数据来源" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="Province" label="业务区域" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="Department" label="合作科室" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="MainProductTypes" label="主营产品类型" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="CallTime" label="沟通时间" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="CallUserName" label="沟通专员" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="PushTime" label="推送时间" show-overflow-tooltip> </el-table-column>
    <el-table-column prop="PushUserName" label="推送专员" show-overflow-tooltip> </el-table-column>
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
    sortChange(column, key, order) {
      this.$emit("sortChange", column);
    },
    gotoDetail(row) {
      this.$router.push({
        name: "editPotentialDistributor",
        path: "/potentialDistributor/edit'",
        query: { Id: row.Id }
      });
    }
  },
  data() {
    return {
    };
  },
};
</script>
