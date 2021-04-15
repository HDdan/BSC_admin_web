<template>
<div class="obor-info">
  <div class="obor-info__top-info">
    <el-table
    border
    :data="tableData"
    style="width: 100%"
    >
      <el-table-column prop="DealerName" label="经销商名称" width="100"></el-table-column>
      <el-table-column prop="DealerCooOBORYears" label="BSC合作年限" width="100"> </el-table-column>
      <el-table-column prop="DLScore" label="迪乐评分" width="80"> </el-table-column>
      <el-table-column prop="StudentCooOBORYears" label="OBOR合作年限" width="80"></el-table-column>
      <el-table-column prop="StudentNumber" label="OBOR学员人数" width="110"> </el-table-column>
      <el-table-column prop="StudentKaoHeNumber" label="考核学员人数" width="110"> </el-table-column>
      <el-table-column prop="StudentFuNengNumber" label="赋能学员人数" width="110"> </el-table-column>
      <el-table-column prop="ZhuanYeFWCount" label="专业渠道人人数" width="110"> </el-table-column>
      <el-table-column prop="ChannelPersonGaoXiaoNumber" label="高效渠道人人数" width="100"> </el-table-column>
      <el-table-column prop="ChannelPersonJingYingNumber" label='精英渠道人人数'> </el-table-column>
      <el-table-column prop="KaiTuoCount" label='开拓型人数'> </el-table-column>
      <el-table-column prop="ChannelPersonZhuanYeNumber" label='专业服务 型人数'> </el-table-column>
      <el-table-column prop="KeQinGXCount" label='客勤关系型人数'> </el-table-column>
      <el-table-column prop="DealerType" label='经销商类型'> </el-table-column>
    </el-table>
  </div>
  <div class="obor-info__content-info">
    <el-table
    border
    :data="contentData"
    style="width: 100%"
    @row-click="gotoStudentDetail"
    >
      <el-table-column prop="Id" label="序号" width="50"> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称"></el-table-column>
      <el-table-column prop="StudentName" width="180" label="学员名称">
         <template slot-scope="scope">
           <span style="color:#4196ff;font-weight: bold;">{{scope.row.StudentName}}</span>
      </template>
      </el-table-column>
      <el-table-column prop="StudentAppcode" label="学员appcode" width="80"> </el-table-column>
      <el-table-column prop="StudentType" label="学员类型" width="80"></el-table-column>
      <el-table-column prop="ChannelPersonType" label="渠道人类型" width="110"> </el-table-column>
      <el-table-column prop="Bu" label="BU" width="110"> </el-table-column>
      <el-table-column prop="YHospitalNum" label="学员填写的优 势医院家数" width="110"> </el-table-column>
      <el-table-column prop="address" label="学员分型" width="110"> </el-table-column>
      <el-table-column prop="BaseCampNum" label="基础训练营" width="100"> </el-table-column>
      <el-table-column prop="HighCampNum" label='高等训练营'> </el-table-column>
      <el-table-column prop="EliteCampNum" label='精英训练营'> </el-table-column>
      <el-table-column prop="SalonNum" label='参加沙龙次数'> </el-table-column>
      <el-table-column prop="StudentCooOBORYears" label='学员加入OBOR年限'> </el-table-column>
    </el-table>
    <pagination v-if="count>0" :total="count" :page.sync="meta.currPage" :limit.sync="meta.pageSize" @pagination="handlePagination" />
  </div>
</div>

</template>
<script>
import Pagination from '@/components/pagination'
export default {
  props: {
    baseInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tableData: [],
      contentData: null,
      count: 0,
      meta: {
        currPage: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.fetchDealersOborSum();
    const params = {
      pageindex: 1,
      pagesize: 10
    }
    this.fetchDealersOborList(params);
  },
  watch: {
    baseInfo: {
      deep: true,
      handler: function(newV,oldV) {
        this.fetchDealersOborSum();
        this.fetchDealersOborList();
      }
    }
  },
  methods: {
    fetchDealersOborSum() {
      this.$api.execobj({
        action: 'DealersOborSum',
        dealerscode: this.baseInfo.sapid,
        id: this.baseInfo.id,
      }).then(res => {
        this.tableData = [res.data];
      });
    },
    fetchDealersOborList(params) {
      this.$api.execobj({
        action: 'DealersOborList',
        dealerscode: this.baseInfo.sapid,
        pageindex: params.pageindex,
        pagesize: params.pagesize
      }).then(res => {
        this.contentData = res.data;
        this.count = res.count;
      });
    },
    handlePagination() {
      const params = {
        pageindex: this.meta.currPage,
        pagesize: this.meta.pageSize
      }
      this.fetchDealersOborList(params);
    },
    gotoStudentDetail(row) {
      this.$router.push({ path: '/distributorDocument/studentDetail',query: { row: JSON.stringify(row) } });
    }
  },
  components: { Pagination }
}
</script>
<style lang="scss">
.obor-info {
  &__top-info {
    margin: 40px 20px 30px;
  }
  &__content-info {
    margin: 0 20px;
  }
}

</style>