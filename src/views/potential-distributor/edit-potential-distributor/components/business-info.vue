<template>
  <div class="business-info">
    <div class="business-info__header">
      <div class="business-info__header__title">
        <span>共6条</span>
        <span>最近更新时间：2021-01-07 17:24:11</span>
      </div>
      <div class="business-info__header__query">
        <el-button type="primary" @click="addBusinessType">+业务区域</el-button>
      </div>
    </div>
    <div class="business-info__main">
      <el-table
      :data="tableData"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="业务省份"></el-table-column>
        <el-table-column prop="businessType" label="是/否县级区域"></el-table-column>
        <el-table-column prop="businessRegion" label="可以用作波科销售的业务人数"></el-table-column>
        <el-table-column prop="businessRegion" label="操作"></el-table-column>
      </el-table>
      <pagination v-if="tableData.meta && tableData.meta.totalNum>0" :total="tableData.meta.totalNum" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagination from '../../../../components/Pagination'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    addBusinessType() {

    },
    handlePagination() {
      
    }
  },
  components: { Pagination }
}
</script>
<style lang="scss">
.business-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 38px 16px 0;
    &__title {
      >span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        padding-right: 26px;
      }
      >span:nth-child(2) {
        font-size: 14px;
        color: #666666;
      }
    }
  }
  &__main {
    padding:16px;
  }
}
</style>