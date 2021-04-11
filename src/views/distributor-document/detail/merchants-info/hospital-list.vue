<template>
  <div class="hospital-info">
    <div class="hospital-info__header ml-16 mt-38 mb-27">
      <span>共{{ tableData.count }}条</span>
      <span>最近更新时间：{{ updateTime }}</span>
    </div>
    <div class="hospital-info__main">
      <el-table
      border
      :data="tableData.list"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="hospitalname" label="医院名称"></el-table-column>
        <el-table-column prop="hospitalcode" label="医院编号"></el-table-column>
        <el-table-column prop="department" label="医院科室"></el-table-column>
      </el-table>
      <pagination v-if="tableData.count >0" :total="tableData.meta.count" :page.sync="tableData.meta.currPage" :limit.sync="tableData.meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagniation from '@/components/pagination';
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
    this.fetchPotentialDealersUpdataLogList();
  },
  methods: {
    handlePagination() {
      this.fetchPotentialDealersUpdataLogList();
    },
    fetchPotentialDealersUpdataLogList() {
      this.$api.execobj({
        action: 'PotentialDealersCoverHospitalsList',
        potentialdealersid: this.baseInfo.potentialdealersid,
        pageindex: this.tableData.meta.currPage,
        pagesize: this.tableData.meta.pageSize
      }).then(res => {
        this.updateTime = res.data.lastupdatetime;
        res.data.list.forEach(i => {
          i = lowerJSONKey(i);
        });
        this.tableData.list = res.data.list;
        this.tableData.count = res.count;
      });
    }
  },
  watch: {
    baseInfo: {
      deep: true,
      handler: function(newV,oldV) {
        this.fetchPotentialDealersUpdataLogList();
      }
    }
  },
  components: { Pagniation }
}
</script>
<style scoped lang="scss">
.hospital-info {
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