<template>
  <div class="base-info">
    <el-form class="base-info__el-form" :model="baseInfo" >
      <el-form-item label="活动名称：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.activityName">
        </el-input>
      </el-form-item>
      <el-form-item label="经销商编码/ID：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.id">
        </el-input>
      </el-form-item>
      <el-form-item label="经销商代码：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.code">
        </el-input>
      </el-form-item>
      <el-form-item label="经销商状态：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.status">
        </el-input>
      </el-form-item>
      <el-form-item label="潜在经销商名称：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.potentialName">
        </el-input>
      </el-form-item>
      <el-form-item label="营业范围是否医疗器械: ">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.businessRangleFlg">
        </el-input>
      </el-form-item>
      <el-form-item label="是否从事高值介入产品：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.sss">
        </el-input>
      </el-form-item>
      <el-form-item label="业务省份：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.businessProvince">
        </el-input>
      </el-form-item>
      <el-form-item label="业务城市：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.businessCity">
        </el-input>
      </el-form-item>

      <el-form-item label="合作科室：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>

      <el-form-item label="主营产品类型：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="主营产品明细：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="主营品牌：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="联系人：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="联系人职位：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="联系人电话：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="注册资金：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="经营状态：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="公司在医疗行业时间（年）:">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="有稳定业务的三甲医院数量:">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
      <el-form-item label="公司开票年份：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item
      ><el-form-item label="公司开票金额：">
        <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="baseInfo.input4">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseInfo: {
        activityName: '',
        id: '',
        code: '',
        status: '',
        businessCity: '',
        input4: ''
      }
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
  .el-input {
    width: 94%;
    height: 36px;
  }
}
</style>