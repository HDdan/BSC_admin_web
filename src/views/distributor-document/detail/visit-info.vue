<template>
  <div class="visit-info">
    <div class="visit-info__header">
      <div class="visit-info__header__title">
        <span>共6条</span>
        <span>最近更新时间：2021-01-07 17:24:11</span>
      </div>
      <div class="visit-info__header__query">
        <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
          <el-button slot="append" type="primary">检索</el-button>
        </el-input>
      </div>
    </div>
    <div class="visit-info__content">
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">业务分型：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="业务分型:">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.activityName">
              </el-input>
            </el-form-item>
            <el-form-item label="覆盖省份数量：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.id">
              </el-input>
            </el-form-item>
            <el-form-item label="覆盖地市数量: ">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.code">
              </el-input>
            </el-form-item>
            <el-form-item label="覆盖县市数量: ">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.status">
              </el-input>
            </el-form-item>
            <el-form-item label="上一年度进货金额: ">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.potentialName">
              </el-input>
            </el-form-item>
            <el-form-item label="带人销售经理数: ">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.businessRangleFlg">
              </el-input>
            </el-form-item>
            <el-form-item label="销售总人数：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.sss">
              </el-input>
            </el-form-item>
            <el-form-item label="跟台人数：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.businessProvince">
              </el-input>
            </el-form-item>
            <el-form-item label="优势区域：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.businessCity">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">能力分型：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="配送能力分型：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.activityName">
              </el-input>
            </el-form-item>
            <el-form-item label="分销能力分型：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.id">
              </el-input>
            </el-form-item>
            <el-form-item label="直销能力分型：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.code">
              </el-input>
            </el-form-item>
            <el-form-item label="服务能力分型：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.status">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">发展意愿：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="优势科室：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.activityName">
              </el-input>
            </el-form-item>
            <el-form-item label="优势品牌：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.id">
              </el-input>
            </el-form-item>
            <el-form-item label="扩张型-上游拓展：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.code">
              </el-input>
            </el-form-item>
            <el-form-item label="扩张型-终端覆盖：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.status">
              </el-input>
            </el-form-item>
            <el-form-item label="过去一年经销商自身新开医院数：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.potentialName">
              </el-input>
            </el-form-item>
            <el-form-item label="维持型：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.businessRangleFlg">
              </el-input>
            </el-form-item>
            <el-form-item label="退岸型：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.sss">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">Other Tags：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="有无贷款、融资：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.activityName">
              </el-input>
            </el-form-item>
            <el-form-item label="贷款融资金额：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.id">
              </el-input>
            </el-form-item>
            <el-form-item label="是否有设备业务：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.code">
              </el-input>
            </el-form-item>
            <el-form-item label="设备业务在自身业务占比：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.status">
              </el-input>
            </el-form-item>
            <el-form-item label="是否有医保物价协商能力：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.potentialName">
              </el-input>
            </el-form-item>
            <el-form-item label="是否有非临客户关系维护能力：">
              <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="businessInfo.businessRangleFlg">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">其他：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content textarea" :model="businessInfo" >
            <el-form-item label="其他信息记录:">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.activityNam"
              ></el-input>
            </el-form-item>
            <el-form-item label="区域市场竞品及医院准入情况：">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.activityNam"
              ></el-input>
            </el-form-item>
            <el-form-item label="医院覆盖率未达标医院情况了解：">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.activityNam"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInput: '',
      businessInfo: {
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
.visit-info {
  padding-left: 16px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 38px;
    padding-right: 16px;
    &__title {
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
  }
  &__content {
    &__business {
      &__title {
        margin-top: 30px;
        font-size: 16px;
      }
      &__form {
        &__content {
          display: flex;
          flex-wrap: wrap;
          &.textarea {
            padding-right: 16px;
            .el-form-item {
              width: 100%;
              min-width: 220px;
              margin-bottom: 0;
            }
          }
        }
      }
    }
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