<template>
<div>
  <el-table
    border
    :data="tableData.list"
    style="width: 100%"
    @row-click="gotoDetail"
  >
    <el-table-column prop="id" label="序号" width="50"> </el-table-column>
    <el-table-column prop="name" label="经销商名称" width="180"> </el-table-column>
    <el-table-column prop="businessType" label="业务分型" width="80"> </el-table-column>
    <el-table-column prop="businessRegion" label="业务区域" width="80"></el-table-column>
    <el-table-column prop="address" label="配送能力分型" width="110"> </el-table-column>
    <el-table-column prop="address" label="分销能力分型" width="110"> </el-table-column>
    <el-table-column prop="address" label="直销能力分型" width="110"> </el-table-column>
    <el-table-column prop="address" label="服务能力分型" width="110"> </el-table-column>
    <el-table-column prop="address" label="设备业务占比" width="100"> </el-table-column>
    <el-table-column prop="address" label='是否有非临客户 关系维护能力'> </el-table-column>
  </el-table>
  <pagination v-if="tableData.meta && tableData.meta.totalNum>0" :total="tableData.meta.totalNum" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" />
</div>

</template>
<script>
import Pagination from '@/components/Pagination/index'

export default {
  props: {
    tableData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handlePagination() {
      this.$emit("handlePagination");
    },
    gotoDetail(row, column, event) {
      this.$router.push({ path: '/distributorDocument/detail' });
      // console.log("row, column, event", row, column, event);
    }
  },
  components: { Pagination }
}
</script>