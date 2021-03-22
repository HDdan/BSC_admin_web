<template>
  <div class="connect-info">
    <div class="connect-info__header ml-16 mt-38 mb-27">
      <span>共6条</span>
      <span>最近更新时间：2021-01-07 17:24:11</span>
    </div>
    <div class="connect-info__main">
      <el-table
      border
      :data="tableData"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="沟通时间"></el-table-column>
        <el-table-column prop="businessType" label="专员名称"></el-table-column>
        <el-table-column prop="businessRegion" label="沟通类型"></el-table-column>
        <el-table-column prop="businessRegion" label="沟通内容"></el-table-column>
      </el-table>
      <!-- <pagination v-if="tableData.meta && tableData.meta.totalNum>0" :total="tableData.meta.totalNum" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" /> -->
    </div>
  </div>
</template>
<script>
import Pagniation from '@/components/pagination';

export default {
  data() {
    return {
      tableData: {
        list: [],
        meta: {}
      }
    }
  },
  components: { Pagniation }
}
</script>
<style scoped lang="scss">
.connect-info {
  &__header {
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
  &__main {
    margin: 0 20px; 
  }
}
</style>