<template>
  <div class="connect-info">
    <div class="connect-info__header ml-16 mt-38 mb-27">
      <span>共{{ tableData.count }}条</span>
      <span>最近更新时间：{{ updateTime }}</span>
    </div>
    <div class="connect-info__main">
      <el-table
      border
      :data="tableData.list"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="date" label="沟通时间"></el-table-column>
        <el-table-column prop="getUserName" label="专员名称"></el-table-column>
        <el-table-column prop="type" label="沟通类型"></el-table-column>
        <el-table-column prop="detail" label="沟通内容"></el-table-column>
      </el-table>
      <pagination v-if="tableData.count>0" :total="tableData.count" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagniation from '@/components/pagination';

import { lowerJSONKey } from "../../../../utils/index"

export default {
  data() {
    return {
      updateTime: null,
      tableData: {
        list: null,
        count: 0,
        meta: {
          currPage: 1,
          pageSize: 10
        }
      }
    }
  },
  created() {
    this.fetchPotentialDealersCallLogsList();
  },
  methods: {
    handlePagination() {

    },
    fetchPotentialDealersCallLogsList() {
      this.$api({
        action: "PotentialDealersCallLogsList",
        potentialdealersid: this.$route.query.potentialdealersid,
        pageindex: this.tableData.meta.currPage,
        pagesize: this.tableData.meta.pageSize
      }).then(res => {
        res.data.forEach(item => {
          item = lowerJSONKey(item);
        });
        this.updateTime = res.data.lastupdatetime;
        this.tableData.list = res.data.list;
        this.tableData.count = res.count;
      });
    },
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