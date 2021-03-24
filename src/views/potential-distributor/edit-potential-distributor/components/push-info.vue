<template>
  <div class="business-info">
    <div class="business-info__header">
      <div class="business-info__header__title">
        <span>共6条</span>
        <span>最近更新时间：2021-01-07 17:24:11</span>
      </div>
      <div class="business-info__header__query">
        <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary" @click="onPush">推送记录</el-button>
      </div>
    </div>
    <div class="business-info__main">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Id" label="序号"></el-table-column>
        <el-table-column
          prop="AccomplishDate"
          label="推送时间"
        ></el-table-column>
        <el-table-column prop="businessType" label="专员名称"></el-table-column>
        <el-table-column prop="IntentSource" label="意向来源"></el-table-column>
        <el-table-column prop="IntentBu" label="意向BU"></el-table-column>
        <el-table-column prop="IntentSubbu" label="意向subbu"></el-table-column>
        <el-table-column prop="Clinical" label="沟通临床"></el-table-column>
        <el-table-column prop="Bargain" label="进院议价"></el-table-column>
        <el-table-column prop="Accomplish" label="落地达成"></el-table-column>
        <el-table-column
          prop="AccomplishDate"
          label="落地时间"
        ></el-table-column>
      </el-table>
      <div class="add-source ml-20 mr-20 mt-24" v-if="show">
        <el-date-picker
          class="mt-34 ml-24"
          v-model="accomplishDate"
          value-format="yyyy-MM-dd"
          placeholder="推送时间"
          type="date"
        >
        </el-date-picker>
        <el-select
          class="mt-34 ml-24"
          v-model="intentsource"
          placeholder="意向来源"
        >
          <el-option
            v-for="item in option.source"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-select class="mt-34 ml-24" v-model="intentbu" placeholder="意向BU">
          <el-option
            v-for="item in option.Bu"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-select
          class="mt-10 ml-24"
          v-model="intentsubbu"
          placeholder="意向subbu"
        >
          <el-option
            v-for="item in option.Bu"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-date-picker
          class="ml-24"
          v-model="clinical"
          value-format="yyyy-MM-dd"
          placeholder="沟通临床"
          type="date"
        >
        </el-date-picker>
        <el-date-picker
          class="ml-24"
          v-model="bargain"
          value-format="yyyy-MM-dd"
          placeholder="进院议价"
          type="date"
        >
        </el-date-picker>
        <el-select class="ml-24" v-model="accomplish" placeholder="落地达成">
          <el-option
            v-for="item in option.Bu"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-date-picker
          class="mt-10 ml-24"
          v-model="accomplishDate"
          value-format="yyyy-MM-dd"
          placeholder="落地时间"
          type="date"
        >
        </el-date-picker>
        <div class="add-source__btn ml-24 mt-30">
          <el-button type="primary" @click="add">添加</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </div>
      <pagination
        v-else
        :total="page.totalNum"
        :page.sync="page.currPage"
        :limit.sync="page.pageSize"
        @pagination="handlePagination"
      />
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
export default {
  props: {
    potentialDealersId: {
      type: Number|String,
    },
  },
  data() {
    return {
      tableData: [],
      page: {
        currPage: 1,
        pageSize: 2,
        totalNum: 0,
      },
      intentsource: "",
      intentbu: "",
      intentsubbu: "",
      clinical: "",
      bargain: "",
      accomplish: "",
      accomplishDate: "",
      show: false,
      option: {},
    };
  },
  methods: {
    onPush() {
      if (this.potentialDealersId) this.show = true;
      else
        this.$message({
          message: "请先添加基本信息",
          type: "warning",
        });
    },
    handlePagination() {},
    clear() {
      this.intentsource = "";
      this.intentbu = "";
      this.intentsubbu = "";
      this.clinical = "";
      this.bargain = "";
      this.accomplish = "";
      this.accomplishDate = "";
    },
    cancel() {
      this.show = false;
      this.clear();
    },
    add() {
      this.show = false;
      this.potentialDealersPushLogsEdit();
    },
    potentialDealersPushLogsList() {
      this.$api({
        action: "PotentialDealersPushLogsList",
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
        pageindex: this.page.currPage,
        pagesize: this.page.pageSize,
      }).then((res) => {
        this.tableData = res.data;
      });
    },
    potentialDealersPushLogsEdit() {
      this.$api({
        action: "PotentialDealersPushLogsEdit",
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
        id: 0,
        intentsource: this.intentsource,
        intentbu: this.intentbu,
        intentsubbu: this.intentsubbu,
        clinical: this.clinical,
        bargain: this.bargain,
        accomplish: this.accomplish,
        accomplishDate: this.accomplishDate,
      }).then((res) => {
        console.log("9999990", res);
        this.id = res.data;
        this.potentialDealersPushLogsList();
        this.clear();
      });
    },
    baseList(action, type) {
      this.$api({
        action: action,
        type: type,
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        this.option[type] = res.data.list || res.data;
      });
    },
  },
  created() {
    this.baseList("BaseList", "source");
    this.baseList("DownList", "Bu");
    this.$route.query.Id&&this.potentialDealersPushLogsList();
    console.log("0999999", this.$route.query.Id);
  },
  components: { Pagination },
};
</script>
<style lang="scss">
.business-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 38px 16px 0;
    &__title {
      > span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        padding-right: 26px;
      }
      > span:nth-child(2) {
        font-size: 14px;
        color: #666666;
      }
    }
  }
  &__main {
    padding: 16px;
  }
}

.add-source {
  .el-select {
    width: 30%;
  }
  .el-select > .el-input {
    width: 100%;
  }
  .el-input--suffix .el-input__inner {
    width: 100%;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 30%;
  }
}
</style>