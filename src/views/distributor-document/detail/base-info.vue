<template>
  <div class="base-info">
    <el-form class="base-info__el-form" :model="baseInfo" v-if="baseInfo">
      <el-form-item label="经销商名称:">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.dealername }}</div>
        </div>
      </el-form-item>
      <el-form-item label="经销商类型:">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.dealertype }}</div>
        </div>
      </el-form-item>
      <el-form-item label="SAPID:">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.sapid }}</div>
        </div>
      </el-form-item>
      <el-form-item label="涉及BU:">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.involvebu }}</div>
        </div>
      </el-form-item>
      <el-form-item label="业务分型:">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.businesstype }}</div>
        </div>
      </el-form-item>
      <el-form-item label="业务区域：">
         <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.advantageregion }}</div>
        </div>
      </el-form-item>
      <el-form-item label="配送能力：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ formate(baseInfo.ps) }}</div>
        </div>
      </el-form-item>
      <el-form-item label="分销能力：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ formate(baseInfo.fx) }}</div>
        </div>
      </el-form-item>
      <el-form-item label="直销能力：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ formate(baseInfo.zx) }}</div>
        </div>
      </el-form-item>
      <el-form-item label="服务能力：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ formate(baseInfo.fw) }}</div>
        </div>
      </el-form-item>
      <el-form-item label="发展意愿：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.developmentinterests }}</div>
        </div>
      </el-form-item>
      <el-form-item label="设备业务占比：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ formate(baseInfo.equipmentrate) }}</div>
        </div>
      </el-form-item>
      <el-form-item label="非临客户维护能力：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.clientmaintain }}</div>
        </div>
      </el-form-item>
      <el-form-item label="老板年龄：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.bossage }}</div>
        </div>
      </el-form-item>
      <el-form-item label="销售人数：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.salesnum }}</div>
        </div>
      </el-form-item>
      <el-form-item label="销售经理人数：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.smnum }}</div>
        </div>
      </el-form-item>
      <el-form-item label="稳定业务三甲医院数量：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.hospitalnumber }}</div>
        </div>
      </el-form-item>
      <!-- <el-form-item label="招商团队最近接触时间：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.contactdate ? baseInfo.contactdate : '无接触' }}</div>
        </div>
      </el-form-item> -->
      <el-form-item label="重点科室及品牌：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.advantagedepbrand }}</div>
        </div>
      </el-form-item>
      <el-form-item label="自身进货金额（含税）：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.lastyearamount }}</div>
        </div>
      </el-form-item>
      <el-form-item label="自身销货金额（含税）：">
        <div class="mr-16 mb-16 input">
          <div class="input__inner">{{ baseInfo.lastyearsalesamount }}</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formate(number) {
      return number * 100 + '%'
    }
  }
}
</script>
<style lang="scss">
.base-info {
  padding-left: 16px;
  &__el-form {
    display: flex;
    flex-wrap: wrap;
  }
  .el-form-item {
    width: 25%;
    min-width: 220px;
    margin-bottom: 0;
  }
}
</style>