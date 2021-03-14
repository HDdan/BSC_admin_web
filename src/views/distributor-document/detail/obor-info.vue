<template>
<div class="obor-info">
  <div class="obor-info__top-info">
    <el-table
    border
    :data="tableData"
    style="width: 100%"
    >
      <el-table-column prop="id" label="经销商名称" width="50"> </el-table-column>
      <el-table-column prop="name" label="BSC合作年限" width="180"> </el-table-column>
      <el-table-column prop="businessType" label="迪乐评分" width="80"> </el-table-column>
      <el-table-column prop="businessRegion" label="OBOR合作年限" width="80"></el-table-column>
      <el-table-column prop="address" label="OBOR学员人数" width="110"> </el-table-column>
      <el-table-column prop="address" label="考核学员人数" width="110"> </el-table-column>
      <el-table-column prop="address" label="赋能学员人数" width="110"> </el-table-column>
      <el-table-column prop="address" label="专业渠道人人数" width="110"> </el-table-column>
      <el-table-column prop="address" label="高效渠道人人数" width="100"> </el-table-column>
      <el-table-column prop="address" label='精英渠道人人数'> </el-table-column>
      <el-table-column prop="address" label='开拓型人数'> </el-table-column>
      <el-table-column prop="address" label='专业服务 型人数'> </el-table-column>
      <el-table-column prop="address" label='客勤关系型人数'> </el-table-column>
      <el-table-column prop="address" label='经销商类型'> </el-table-column>
    </el-table>
  </div>
  <div class="obor-info__content-info">
    <el-table
    border
    :data="contentData.list"
    style="width: 100%"
    @row-click="gotoStudentDetail"
    >
      <el-table-column prop="id" label="序号" width="50"> </el-table-column>
      <el-table-column prop="id" label="经销商名称" width="50"> </el-table-column>
      <el-table-column prop="name" label="DealerSales" width="180"> </el-table-column>
      <el-table-column prop="businessType" label="学员appcode" width="80"> </el-table-column>
      <el-table-column prop="businessRegion" label="学员类型" width="80"></el-table-column>
      <el-table-column prop="address" label="渠道人类型" width="110"> </el-table-column>
      <el-table-column prop="address" label="BU" width="110"> </el-table-column>
      <el-table-column prop="address" label="学员填写的优 势医院家数" width="110"> </el-table-column>
      <el-table-column prop="address" label="学员分型" width="110"> </el-table-column>
      <el-table-column prop="address" label="基础训练营" width="100"> </el-table-column>
      <el-table-column prop="address" label='高等训练营'> </el-table-column>
      <el-table-column prop="address" label='精英训练营'> </el-table-column>
      <el-table-column prop="address" label='参加沙龙次数'> </el-table-column>
      <el-table-column prop="address" label='学员加入OBOR年限'> </el-table-column>
    </el-table>
    <pagination v-if="contentData.meta && contentData.meta.totalNum>0" :total="contentData.meta.totalNum" :page.sync="contentData.meta.currPage" :limit.sync="contentData.meta.pageSize" @pagination="handlePagination" />
  </div>
</div>

</template>
<script>
import Pagination from '@/components/pagination'
export default {
  data() {
    return {
      tableData: [],
      contentData: {
        list: [{id: 1,name: 'huhu',businessType: '333',businessRegion: 'eee',address: 'fsdfsdaf' }],
        meta: {
          totalNum: 0,
          currPage: 1,
          pageSize: 10
        }
      }
    }
  },
  methods: {
    gotoStudentDetail() {
      this.$router.push({ path: '/distributorDocument/studentDetail' });
      console.log("huahuhuuuu");
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