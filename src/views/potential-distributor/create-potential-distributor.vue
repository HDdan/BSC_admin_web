<template>
  <div class="potential-distributor-create">
    <!-- <div class="potential-distributor-edit__header mb-20">
      <div class="potential-distributor-edit__header__title fz-18">重庆医药和平医疗器械有限公司</div>
    </div> -->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本信息" name="1">
        <base-info @onBase="onBase"></base-info>
      </el-collapse-item>
      <el-collapse-item title="业务区域" name="2">
        <business-info :potentialDealersId="potentialDealersId"></business-info>
      </el-collapse-item>
      <el-collapse-item title="联系人信息" name="3">
        <contact-info :potentialDealersId="potentialDealersId"></contact-info>
      </el-collapse-item>
      <el-collapse-item title="资质信息" name="4">
        <qualification-info
          :potentialDealersId="potentialDealersId"
        ></qualification-info>
      </el-collapse-item>
      <el-collapse-item title="覆盖医院" name="5">
        <hospital-info :potentialDealersId="potentialDealersId"></hospital-info>
      </el-collapse-item>
      <el-collapse-item title="招商沟通记录" name="6">
        <connect-info :potentialDealersId="potentialDealersId"></connect-info>
      </el-collapse-item>
      <el-collapse-item title="推送记录" name="7">
        <push-info :potentialDealersId="potentialDealersId"></push-info>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import BaseInfo from "./edit-potential-distributor/components/base-info";
import BusinessInfo from "./edit-potential-distributor/components/business-info";
import ContactInfo from "./edit-potential-distributor/components/contact-info";
import QualificationInfo from "./edit-potential-distributor/components/qualification-info";
import HospitalInfo from "./edit-potential-distributor/components/hospital-info";
import ConnectInfo from "./edit-potential-distributor/components/connect-info";
import PushInfo from "./edit-potential-distributor/components/push-info";

export default {
  data() {
    return {
      activeNames: ["1", "2", "3", "4", "5", "6", "7"],
      searchInput: "",
      potentialDealersId: "",
    };
  },
  methods: {
    onBase(id) {
      this.potentialDealersId = id;
    },
    handleChange(val) {
      console.log(val);
    },
  },
  components: {
    BaseInfo,
    BusinessInfo,
    ContactInfo,
    QualificationInfo,
    HospitalInfo,
    ConnectInfo,
    PushInfo,
  },
};
</script>
<style lang="scss">
.potential-distributor-create {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
    padding: 0 20px;
    background: #ffffff;
    &__title {
      color: #333333;
    }
  }
  .el-collapse-item__header {
    background: #fff;
    padding-left: 20px;
    font-size: 16px;
    color: #333333;
  }
}

.el-collapse-item__arrow {
  margin: 0 0 0 10px;
}
.el-collapse-item {
  margin-bottom: 20px;
}
</style>