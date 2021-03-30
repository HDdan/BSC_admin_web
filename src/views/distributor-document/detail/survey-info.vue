<template>
  <div class="survey-info">
    <div class="survey-info__header">
      <div class="survey-info__header__title">
        <span>共6条</span>
        <span>最近更新时间：{{ updateTime }}</span>
      </div>
      <div class="survey-info__header__query">
        <el-select v-model="searchInput" >
          <el-option
            v-for="item in timeList"
            :key="item.id"
            :label="item.date"
            :value="item.id">
          </el-option>
        </el-select>
        <el-button type="primary" @click="searchData">检索</el-button>
      </div>
    </div>
    <div class="survey-info__content" v-if="businessInfo">
      <div class="survey-info__content__business">
        <div class="survey-info__content__business__title">基本信息：</div>
        <el-divider></el-divider>
        <div class="survey-info__content__business__form">
          <el-form class="survey-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="经销商名称:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.dealerName">
              </el-input>
            </el-form-item>
            <el-form-item label="经销商编码/ID：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.dealerCode">
              </el-input>
            </el-form-item>
            <el-form-item label="提交时间:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.date">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="survey-info__content__business">
        <div class="survey-info__content__business__title">发展信息：</div>
        <el-divider></el-divider>
        <div class="survey-info__content__business__form">
          <el-form class="survey-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="希望增加的合作领域:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.addFields">
              </el-input>
            </el-form-item>
            <el-form-item label="经营品种是否包含了医疗设备类产品:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.medicalEquipment">
              </el-input>
            </el-form-item>
            <el-form-item label="合作原因:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.cooperateType">
              </el-input>
            </el-form-item>
            <el-form-item label="公司老板年龄：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.bossAge">
              </el-input>
            </el-form-item>
            <el-form-item class="textarea" label="目前公司发展最大的瓶颈:">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.question1"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="survey-info__content__business">
        <div class="survey-info__content__business__title">业务规模：</div>
        <el-divider></el-divider>
        <div class="survey-info__content__business__form">
          <el-form class="survey-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="销售团队人总数：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.teamNum">
              </el-input>
            </el-form-item>
            <el-form-item label="带人销售经理总人数：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.teamSmNum">
              </el-input>
            </el-form-item>
            <el-form-item label="上年度公司进货金额（含税）万元：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.purchaseAmount">
              </el-input>
            </el-form-item>
            <el-form-item label="是否作为托管方有托管医院：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.TGHospital">
              </el-input>
            </el-form-item>
            <el-form-item label="业务覆盖城市：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.coverCity">
              </el-input>
            </el-form-item>
            <el-form-item label="城市是否有业务员：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.isSales">
              </el-input>
            </el-form-item>
            <el-form-item label="稳定业务的三甲医院数量：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.hospitalNumber">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="survey-info__content__business">
        <div class="survey-info__content__business__title">医院信息：</div>
        <el-divider></el-divider>
        <div class="survey-info__content__business__form">
          <el-form class="survey-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="重点合作医院1：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital1">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院2：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital2">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院3：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital3">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院4：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital4">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院5：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital5">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院6：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital6">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院7：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital7">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作医院8：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focushospital8">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作科室1:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focusdepartment1">
              </el-input>
            </el-form-item>
            <el-form-item label="业务占比1：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.rate1">
              </el-input>
            </el-form-item>
            <el-form-item label="主要品牌1-1：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.mainBrand11">
              </el-input>
            </el-form-item>
            <el-form-item label="主要品牌1-2：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.mainBrand12">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作科室2:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focusdepartment2">
              </el-input>
            </el-form-item>
            <el-form-item label="业务占比2：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.rate2">
              </el-input>
            </el-form-item>
            <el-form-item label="主要品牌2-1：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.mainBrand21">
              </el-input>
            </el-form-item>
            <el-form-item label="主要品牌2-2：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.mainBrand22">
              </el-input>
            </el-form-item>
            <el-form-item label="重点合作科室3:">
              <el-input class="mr-16 mb-16" v-model="businessInfo.focusdepartment3">
              </el-input>
            </el-form-item>
            <el-form-item label="业务占比3：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.rate3">
              </el-input>
            </el-form-item>
            <el-form-item label="主要品牌3-1：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.mainBrand31">
              </el-input>
            </el-form-item>
            <el-form-item label="主要品牌3-2：">
              <el-input class="mr-16 mb-16" v-model="businessInfo.mainBrand32">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="survey-info__content__business">
        <div class="survey-info__content__business__title">资讯来源：</div>
        <el-divider></el-divider>
        <div class="survey-info__content__business__form">
          <el-form class="survey-info__content__business__form__content textarea" :model="businessInfo" >
            <el-form-item class="textarea" label="您平时关注的医疗行业相关的微信公众号是哪些：">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.question2"
              ></el-input>
            </el-form-item>
            <el-form-item class="textarea" label="您会参加哪些医疗器械展会：">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.question3"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { lowerJSONKey } from "@/utils/index";

export default {
  data() {
    return {
      updateTime: null,
      searchInput: '',
      businessInfo: null
    }
  },
  created() {
    this.fetchDealersQuestionnaireRecode();
    // this.fetchDealersQuestionnaireRecodeDetail();
  },
  methods: {
    searchData() {
      this.fetchDealersQuestionnaireRecodeDetail();
    },
    fetchDealersQuestionnaireRecode() {
      this.$api.execobj({
        action: 'DealersQuestionnaireRecorde',
        dealerscode: this.$route.query.dealerscode
      }).then(res => {
        this.updateTime = res.data.lastupdatetime;
        this.timeList = res.data.list;
      });
    },
    fetchDealersQuestionnaireRecodeDetail() {
      this.$api.execobj({
        action: 'DealersQuestionnaireRecordeDetail',
        dealerscode: this.$route.query.dealerscode,
        id: this.searchInput
      }).then(res => {
        this.totalCount = res.count;
        this.businessInfo = lowerJSONKey(res.data);
        console.log("rs", res);
      });
    }
  }
}
</script>
<style lang="scss">
.survey-info {
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
    &__query {
      display: flex;
      width: 300px;
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
        //   &.textarea {
        //     padding-right: 16px;
            .el-form-item.textarea {
              width: calc(100% - 16px);
              min-width: 220px;
              margin-bottom: 0;
            }
        //   }
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