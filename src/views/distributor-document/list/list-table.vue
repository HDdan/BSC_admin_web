<template>
<div v-if="tableData">
  <el-table
    border
    :data="tableData.list"
    style="width: 100%"
    @row-click="gotoDetail"
  >
    <el-table-column prop="id" label="序号" width="50"> </el-table-column>
    <el-table-column prop="dealername" label="经销商名称" width="180"> </el-table-column>
    <el-table-column prop="sapid" label="SAPID" width="80"> </el-table-column>
    <el-table-column prop="dealertype" label="经销商类型" width="80"> </el-table-column>
    <el-table-column prop="involvebu" label="涉及BU" width="80"> </el-table-column>
    <el-table-column prop="businesstype" label="业务分型" width="80"> </el-table-column>
    <el-table-column prop="province" label="业务区域" width="80"></el-table-column>
    <el-table-column prop="ps" label="能力分型配送" width="110">
      <template slot-scope="scope">
        <span>{{ formate(scope.row.ps) }}</span> 
      </template>
    </el-table-column>
    <el-table-column prop="fx" label="分销分型配送" width="110">
      <template slot-scope="scope">
        <span>{{ formate(scope.row.fx) }}</span> 
      </template>
    </el-table-column>
    <el-table-column prop="zx" label="直销分型配送" width="110">
      <template slot-scope="scope">
        <span>{{ formate(scope.row.zx) }}</span> 
      </template>
    </el-table-column>
    <el-table-column prop="fw" label="服务分型配送" width="110">
      <template slot-scope="scope">
        <span>{{ formate(scope.row.fw) }}</span> 
      </template>
    </el-table-column>
    <el-table-column prop="developmentinterests" label="发展意愿" width="110"></el-table-column>
    <el-table-column prop="equipmentrate" label="设备业务占比" width="100">
      <template slot-scope="scope">
        <span>{{ formate(scope.row.equipmentrate) }}</span> 
      </template>
    </el-table-column>
    <el-table-column prop="clientmaintain" label='非临客户维护能力'> </el-table-column>
  </el-table>
  <pagination v-if="tableData.count > 0" :total="tableData.count" :page.sync="meta.currPage" :limit.sync="meta.pageSize" @pagination="handlePagination" />
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
  data() {
    return {
      meta: {
        currPage: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    handlePagination() {
      this.$emit("handlePagination", this.meta);
    },
    gotoDetail(row, column, event) {
      this.$router.push({ path: '/distributorDocument/detail', query: {
        id: row.id,
        potentialdealersid: row.PotentialDealersId
      } });
    },
    formate(number) {
      return number * 100 + '%'
    }
  },
  components: { Pagination }
}
</script>