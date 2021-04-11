<template>
  <div class="push-info">
    <div class="push-info__header ml-16 mt-38 mb-27">
      <span>共{{ tableData.count }}条</span>
      <span>最近更新时间：{{ updateTime }}</span>
    </div>
    <div class="push-info__main">
      <el-table
      border
      :data="tableData.list"
      style="width: 100%">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="accomplishdate" label="推送时间"></el-table-column>
        <el-table-column prop="businessType" label="专员名称">{{ getUserName }}</el-table-column>
        <el-table-column prop="intentsource" label="意向来源"></el-table-column>
        <el-table-column prop="intentbu" label="意向BU"></el-table-column>
        <el-table-column prop="intentsubbu" label="意向subbu"></el-table-column>
        <el-table-column prop="clinical" label="沟通临床"></el-table-column>
        <el-table-column prop="bargain" label="进院议价"></el-table-column>
        <el-table-column prop="accomplish" label="落地达成"></el-table-column>
        <el-table-column prop="date" label="落地时间"></el-table-column>
      </el-table>
      <pagniation v-if="tableData.count>0" :total="tableData.count" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagniation from '@/components/pagination';

import { getUserName } from "@/utils/auth";
import { lowerJSONKey } from "../../../../utils/index"


export default {
  props: {
    baseInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      updateTime: null,
      getUserName: getUserName(),
      tableData: {
        count: 0,
        list: null,
        meta: {
          currPage: 1,
          pageSize: 10
        }
      }
    }
  },
  created() {
    this.potentialDealersPushLogsList();
  },
  methods: {
    handlePagination() {
      this.potentialDealersPushLogsList();
    },
    potentialDealersPushLogsList() {
      this.$api.execobj({
        action: "PotentialDealersPushLogsList",
        potentialdealersid: this.baseInfo.potentialdealersid,
        pageindex: this.tableData.meta.currPage,
        pagesize: this.tableData.meta.pageSize,
      }).then((res) => {
        this.updateTime = res.data.lastupdatetime;
        res.data.list.forEach(i => {
         i = lowerJSONKey(i);
        });
        this.tableData.list = res.data.list;
        this.tableData.count = res.count;
      });
    },
  },
  watch: {
    baseInfo: {
      deep: true,
      handler: function(newV,oldV) {
        this.potentialDealersPushLogsList();
      }
    }
  },
  components: { Pagniation }
}
</script>
<style scoped lang="scss">
.push-info {
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