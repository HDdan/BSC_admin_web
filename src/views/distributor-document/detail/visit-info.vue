<template>
  <div class="visit-info">
    <div class="visit-info__header">
      <div class="visit-info__header__title">
        <span>共{{ totalCount }}条</span>
        <span>最近更新时间：{{ updateTime }}</span>
      </div>
      <div class="visit-info__header__query">
        <el-select v-model="searchInput" >
          <el-option
            v-for="item in timeList"
            :key="item.id"
            :label="item.date"
            :value="item.id">
          </el-option>
        </el-select>
        <el-button slot="append" type="primary" @click="searchData">检索</el-button>
      </div>
    </div>
    <div class="visit-info__content" v-if="businessInfo">
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">拜访信息：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="拜访经理:">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.managername }} </div>
</div>
            </el-form-item>
            <el-form-item label="拜访日期：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.date }} </div>
</div>
            </el-form-item>
            <el-form-item label="SAPID:">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.sapid }} </div>
</div>
            </el-form-item>
            <el-form-item label="经销商名称:">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.dealername }} </div>
</div>
            </el-form-item>
            <el-form-item label="接访者:">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.interviewee }} </div>
</div>
            </el-form-item>
            <el-form-item label="接访者职位:">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.position }} </div>
</div>
            </el-form-item>
            <el-form-item label="接访者联系方式：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.phone }} </div>
</div>
            </el-form-item>
            <el-form-item label="拜访涉及BU：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.involvebu }} </div>
</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="visit-info__content__business">
        <div class="visit-info__content__business__title">业务分型：</div>
        <el-divider></el-divider>
        <div class="visit-info__content__business__form">
          <el-form class="visit-info__content__business__form__content" :model="businessInfo" >
            <el-form-item label="业务分型:">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.businesstype }} </div>
</div>
            </el-form-item>
            <el-form-item label="覆盖省份数量：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.coverprovincenum }} </div>
</div>
            </el-form-item>
            <el-form-item label="覆盖地市数量: ">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.covercitynum }} </div>
</div>
            </el-form-item>
            <el-form-item label="覆盖县市数量: ">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.covercountynum }} </div>
</div>
            </el-form-item>
            <el-form-item label="上一年度进货金额: ">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.lastyearamount }} </div>
</div>
            </el-form-item>
            <el-form-item label="带人销售经理数: ">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.smnum }} </div>
</div>
            </el-form-item>
            <el-form-item label="销售总人数：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.salesnum }} </div>
</div>
            </el-form-item>
            <el-form-item label="跟台人数：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.follownum }} </div>
</div>
            </el-form-item>
            <el-form-item label="优势区域：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.advantagedepbrand }} </div>
</div>
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
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.ps }} </div></div>
            </el-form-item>
            <el-form-item label="分销能力分型：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.fx }} </div></div>
            </el-form-item>
            <el-form-item label="直销能力分型：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.zx }} </div></div>
            </el-form-item>
            <el-form-item label="服务能力分型：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.fw }} </div></div>
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
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.advantagedepbrand }} </div>
</div>
            </el-form-item>
            <el-form-item label="优势品牌：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.advantagedepbrand}} </div>
</div>
            </el-form-item>
            <el-form-item label="扩张型-上游拓展：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.kz_sy}} </div>
</div>
            </el-form-item>
            <el-form-item label="扩张型-终端覆盖：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.kz_zd}} </div>
</div>
            </el-form-item>
            <el-form-item label="过去一年经销商自身新开医院数：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.newhospitalnum  }} </div>
</div>
            </el-form-item>
            <el-form-item label="维持型：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.wc  }} </div>
</div>
            </el-form-item>
            <el-form-item label="退岸型：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.tan }} </div>
</div>
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
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.loan }} </div>
</div>
            </el-form-item>
            <el-form-item label="贷款融资金额：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.loanamount }} </div>
</div>
            </el-form-item>
            <el-form-item label="是否有设备业务：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.equipmentbusiness }} </div>
</div>
            </el-form-item>
            <el-form-item label="设备业务在自身业务占比：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.equipmentrate }} </div>
</div>
            </el-form-item>
            <el-form-item label="是否有医保物价协商能力：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.ybnegotiate }} </div>
</div>
            </el-form-item>
            <el-form-item label="是否有非临客户关系维护能力：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.clientmaintain }} </div>
</div>
            </el-form-item>
            <el-form-item label="是否具备省级以上代理的潜力：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.provinceproxy }} </div>
</div>
            </el-form-item>
            <el-form-item label="提供维保服务的工程师人数：">
              <div class="mr-16 mb-16 input">
          <div class="input__inner">{{  businessInfo.engineernum }} </div>
</div>
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
                v-model="businessInfo.others"
              ></el-input>
            </el-form-item>
            <el-form-item label="区域市场竞品及医院准入情况：">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.question1"
              ></el-input>
            </el-form-item>
            <el-form-item label="医院覆盖率未达标医院情况了解：">
              <el-input
                class="mr-16 mb-16"
                type="textarea"
                v-model="businessInfo.question2"
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
      totalCount: 0,
      updateTime: null,
      timeList: [],
      searchInput: '',
      businessInfo: null
    }
  },
  mounted() {
    this.fetchDealersVisitRecode();
    this.fetchDealersVisitRecodeDetail();
  },
  methods: {
    searchData() {
      this.fetchDealersVisitRecodeDetail();
    },
    fetchDealersVisitRecode() {
      this.$api({
        action: 'DealersVisitRecode',
        dealerscode: this.$route.query.dealerscode
      }).then(res => {
        this.updateTime = res.data.lastupdatetime;
        
        this.timeList = res.data.list;
      });
    },
    fetchDealersVisitRecodeDetail() {
      this.$api({
        action: 'DealersVisitRecodeDetail',
        dealerscode: this.$route.query.dealerscode,
        id: this.searchInput
      }).then(res => {
        this.totalCount = res.count;
        this.businessInfo = lowerJSONKey(res.data);
      });
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