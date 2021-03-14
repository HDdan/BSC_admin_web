<template>
  <div class="distributor-document-detail">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="学员基础信息" name="1">
        <base-info></base-info>
      </el-collapse-item>
      <el-collapse-item title="四大能力象限(各象限最高50分）" name="2">
        <ability-quadrant-info></ability-quadrant-info>
      </el-collapse-item>
      <el-collapse-item title="OBOR合作度" name="3">
        <obor-cooperation></obor-cooperation>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import BaseInfo from './student-detail/base-info';
import OborCooperation from './student-detail/obor-cooperation';
import AbilityQuadrantInfo from './student-detail/ability-quadrant-info';

export default {
  data() {
    return {
      activeNames: ['1','2','3','4']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: { BaseInfo, OborCooperation, AbilityQuadrantInfo }
}
</script>
<style lang="scss">
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