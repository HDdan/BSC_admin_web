<template>
  <div class="distributor-document-detail">
    <div class="distributor-document-detail__header mb-20">
      <div class="distributor-document-detail__header__title fz-18">重庆医药和平医疗器械有限公司</div>
      <div class="distributor-document-detail__header__query">
        <el-input prefix-icon="el-icon-search" placeholder="请输入内容" v-model="searchInput" class="input-with-select">
          <el-button slot="append" type="primary">检索</el-button>
        </el-input>
      </div>
    </div>

    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本信息" name="1">
        <base-info></base-info>
      </el-collapse-item>
      <el-collapse-item title="OBOR信息" name="2">
        <obor-info></obor-info>
      </el-collapse-item>
      <el-collapse-item title="渠道经理拜访信息" name="3">
        <visit-info></visit-info>
      </el-collapse-item>
      <el-collapse-item title="调研问卷" name="4">
        <survey-info></survey-info>
      </el-collapse-item>
      <el-collapse-item title="招商信息" name="5">
        <merchants-info></merchants-info>
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

export default {
  data() {
    return {
      activeNames: ['1','2','3','4'],
      searchInput: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: { BaseInfo, OborInfo, MerchantsInfo, SurveyInfo, VisitInfo }
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
  margin: 0 0 0 10px;
}
.el-collapse-item {
  margin-bottom: 20px;
}
</style>