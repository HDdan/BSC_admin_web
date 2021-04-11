<template>
  <div class="distributor-document-detail" v-loading="loading">
    <div class="distributor-document-detail__header mb-20" v-if="baseInfo">
      <div class="distributor-document-detail__header__title fz-18">{{ baseInfo.dealername }}</div>
      <div class="distributor-document-detail__header__query">
        <el-select
          clearable
          v-model="searchInput"
          placeholder="请输入经销商名称"
          @change="selectDealersName"
          filterable>
          <el-option
            v-for="item in dealersNameList"
            :key="item.Id"
            :label="item.Name"
            :value="item.Id"
          >
          </el-option>
        </el-select>
        <el-button type="primary" @click="searchDealersNameList">搜索</el-button>
      </div>
    </div>

    <el-collapse v-if="baseInfo" v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本信息" name="1">
        <base-info :baseInfo="baseInfo"></base-info>
      </el-collapse-item>
      <el-collapse-item title="渠道经理拜访信息" name="2">
        <visit-info :baseInfo="baseInfo"></visit-info>
      </el-collapse-item>
      <el-collapse-item title="渠道经理面谈信息" name="3">
        <interview-info :baseInfo="baseInfo"></interview-info>
      </el-collapse-item>
      <el-collapse-item title="调研问卷" name="4">
        <survey-info :baseInfo="baseInfo"></survey-info>
      </el-collapse-item>
      <el-collapse-item title="OBOR信息" name="5">
        <obor-info :baseInfo="baseInfo"></obor-info>
      </el-collapse-item>
      <el-collapse-item title="招商信息" name="6">
        <merchants-info :baseInfo="baseInfo"></merchants-info>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import BaseInfo from './detail/base-info';
import OborInfo from './detail/obor-info';
import MerchantsInfo from './detail/merchants-info';
import SurveyInfo from './detail/survey-info';
import VisitInfo from './detail/visit-info';
import InterviewInfo from './detail/interview-info';

import { lowerJSONKey } from '../../utils/index';
export default {
  data() {
    return {
      activeNames: ['1','2','3','4','5','6'],
      searchInput: '',
      baseInfo: null,
      loading: true,
      dealersNameList: null,
      currSelectDealersId: ''
    }
  },
  mounted() {
    const id = this.$route.query.id;
    this.fetchDealersDetail(id);
    this.fetchDealersNameDownlist();
  },
  methods: {
    selectDealersName(value) {
      this.currSelectDealersId = value;
    },
    searchDealersNameList() {
      this.fetchDealersDetail(this.currSelectDealersId);
    },
    fetchDealersDetail(id) {
      this.$api.execobj({
        action: 'DealersDetail',
        id: id
      }).then(res => {
        this.baseInfo = lowerJSONKey(res.data);
        this.loading = false;
      });
    },
    fetchDealersNameDownlist() {
      this.$api.execobj({
        action: 'dealersnamedownlist'
      }).then(res => {
        this.dealersNameList = res.data;
      });
    },
    handleChange(val) {
      console.log(val);
    }
  },
  components: { BaseInfo, OborInfo, MerchantsInfo, SurveyInfo, VisitInfo, InterviewInfo }
}
</script>
<style lang="scss">
.distributor-document-detail {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
    padding: 0 20px;
    background: #FFFFFF;
    &__title {
      color: #333333;
    }
    &__query {

    }
  }
}
.el-collapse-item__header {
  background: #E6E6E6;
  padding-left: 20px;
  font-size: 14px;
  color: #333333;
}
.el-collapse-item__arrow {
  margin: 0 0 0 10px!important;
}
.el-collapse-item {
  margin-bottom: 20px;
}
</style>