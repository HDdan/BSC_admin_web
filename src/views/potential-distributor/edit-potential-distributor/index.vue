<template>
  <div class="potential-distributor-edit">
    <!-- <div class="potential-distributor-edit__header mb-20">
      <div class="potential-distributor-edit__header__title fz-18">重庆医药和平医疗器械有限公司</div>
    </div> -->

    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本信息" name="1">
        <base-info :potentialDealersId="$route.query.Id"></base-info>
      </el-collapse-item>
      <el-collapse-item title="业务区域" name="2">
        <business-info :potentialDealersId="$route.query.Id"></business-info>
      </el-collapse-item>
      <el-collapse-item title="联系人信息" name="3">
        <contact-info :potentialDealersId="$route.query.Id"></contact-info>
      </el-collapse-item>
      <el-collapse-item title="资质信息" name="4">
        <qualification-info :potentialDealersId="$route.query.Id"></qualification-info>
      </el-collapse-item>
      <el-collapse-item title="覆盖医院" name="5">
        <hospital-info :potentialDealersId="$route.query.Id"></hospital-info>
      </el-collapse-item>
      <el-collapse-item title="招商沟通记录" name="6">
        <connect-info :potentialDealersId="$route.query.Id"></connect-info>
      </el-collapse-item>
      <el-collapse-item title="推送记录" name="7">
        <push-info :potentialDealersId="$route.query.Id"></push-info>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import BaseInfo from './components/base-info';
import BusinessInfo from './components/business-info';
import ContactInfo from './components/contact-info';
import QualificationInfo from './components/qualification-info';
import HospitalInfo from './components/hospital-info';
import ConnectInfo from './components/connect-info';
import PushInfo from './components/push-info';

export default {
  data() {
    return {
      activeNames: ['1','2','3','4','5','6','7'],
      searchInput: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: { BaseInfo, BusinessInfo, ContactInfo, QualificationInfo, HospitalInfo, ConnectInfo, PushInfo }
}
</script>
<style lang="scss">
.potential-distributor-edit {
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