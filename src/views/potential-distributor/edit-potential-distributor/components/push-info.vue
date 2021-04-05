<template>
  <div class="business-info">
    <div class="business-info__header">
      <div class="business-info__header__title" v-if="$route.query.Id">
        <span>共{{page.totalNum}}条</span>
        <span v-if="lastupdatetime">最近更新时间：{{ lastupdatetime }}</span>
      </div>
      <div class="business-info__header__query" :class="{'create': !$route.query.Id}">
        <el-button
          icon="fz-14 mr-8 iconfont iconxinzeng"
          type="primary"
          @click="onPush"
          >推送记录</el-button
        >
      </div>
    </div>
    <div class="business-info__main">
      <el-table :empty-text="emptyText" :data="tableData" style="width: 100%">
        <el-table-column prop="Id" label="序号"></el-table-column>
        <el-table-column
          prop="Date"
          label="推送时间"
        ></el-table-column>
        <el-table-column prop="UserName" label="专员名称">
        </el-table-column>
        <el-table-column prop="IntentSource" label="意向来源"></el-table-column>
        <el-table-column prop="IntentBu" label="意向BU"></el-table-column>
        <el-table-column prop="IntentSubbu" label="意向subbu"></el-table-column>
        <el-table-column prop="Clinical" label="沟通临床"></el-table-column>
        <el-table-column prop="Bargain" label="进院议价"></el-table-column>
        <el-table-column prop="Accomplish" label="落地达成"></el-table-column>
        <el-table-column prop="AccomplishDate" label="落地时间"></el-table-column>
      </el-table>
      <div class="add-source ml-20 mr-20 mt-24" v-if="show">
        <el-date-picker
          :picker-options="pickerOptions"
          class="mt-34 ml-24"
          v-model="date"
          value-format="yyyy-MM-dd"
          placeholder="推送时间"
          type="date"
        >
        </el-date-picker>
        <el-select
          clearable
          class="mt-34 ml-24"
          v-model="intentsource"
          placeholder="意向来源"
        >
          <el-option
            v-for="item in option.intentsource"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-select
          clearable
          class="mt-34 ml-24"
          v-model="intentbu"
          placeholder="意向BU"
        >
          <el-option
            v-for="item in option.Bu"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-select
          clearable
          class="mt-10 ml-24"
          v-model="intentsubbu"
          placeholder="意向subbu"
        >
          <el-option
            v-for="item in option.subBu"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-date-picker
          class="ml-24"
          v-model="clinical"
          value-format="yyyy-MM-d"
          placeholder="沟通临床"
          type="date"
        >
        </el-date-picker>
        <el-date-picker
          class="ml-24"
          v-model="bargain"
          value-format="yyyy-MM-d"
          placeholder="进院议价"
          type="date"
        >
        </el-date-picker>
        <el-select
          clearable
          class="ml-24"
          v-model="accomplish"
          placeholder="落地达成"
        >
          <el-option
            v-for="item in option.accomplish"
            :key="item.Id"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-date-picker
          class="mt-10 ml-24"
          v-model="accomplishDate"
          value-format="yyyy-MM-d"
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
    <confirm-action-dialog :dialogVisible.sync="dialogVisible" :tips="'请确认信息无误后添加！'" @confirm="addData"></confirm-action-dialog>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import ConfirmActionDialog from '../../../../components/ConfirmActionDialog';
import { getUserName } from "@/utils/auth";
export default {
  props: {
    potentialDealersId: {
      type: Number | String,
    },
  },
  data() {
    return {
      dialogVisible: false,
       pickerOptions: {
         disabledDate(time) {
            return time.getTime() > Date.now();
          },
        }, 
      emptyText:'',
      lastupdatetime:'',
      getUserName: getUserName(),
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
      date: "",
      show: false,
      option: {
        accomplish: [
          {
            Name: "临时授权",
            Id: "临时授权",
          },
          {
            Id: "第三方披露",
            Name: "第三方披露",
          },
          {
            Id: "正式授权",
            Name: "正式授权",
          },
          {
            Id: "未合作",
            Name: "未合作",
          },
        ],
        intentsource: [
          {
            Id: "空白招商",
            Name: "空白招商",
          },
          {
            Id: "主动来电",
            Name: "主动来电",
          },
          {
            Id: "线下招商会",
            Name: "线下招商会",
          },
          {
            Id: "云上招商会",
            Name: "云上招商会",
          },
          {
            Id: "渠道经理推荐",
            Name: "渠道经理推荐",
          },
          {
            Id: "经销商推荐",
            Name: "经销商推荐",
          },
          {
            Id: "广告宣传",
            Name: "广告宣传",
          },
        ],
      },
    };
  },
  methods: {
    onPush() {
      if (this.potentialDealersId){ this.show = true;this.emptyText=' '}
      else
        this.$message({
          message: "请先添加基本信息",
          type: "warning",
        });
    },
    handlePagination(val) {
      this.page.currPage = val.page;
      this.potentialDealersPushLogsList();
    },
    clear() {
      this.intentsource = "";
      this.intentbu = "";
      this.intentsubbu = "";
      this.clinical = "";
      this.bargain = "";
      this.accomplish = "";
      this.accomplishDate = "";
      this.date = "";
    },
    cancel() {
      if(!this.tableData||this.tableData.length==0)this.emptyText='暂无数据'
      this.show = false;
      this.clear();
    },
    add() {
      this.dialogVisible = true;
    },
    addData() {
      this.show = false;
      this.potentialDealersPushLogsEdit();
    },
    potentialDealersPushLogsList() {
      this.$api.execobj({
        action: "PotentialDealersPushLogsList",
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
        pageindex: this.page.currPage,
        pagesize: this.page.pageSize,
      }).then((res) => {
        this.page.totalNum = res.count;
        this.tableData = res.data.list;
        this.lastupdatetime = res.data.lastupdatetime;
      });
    },
    potentialDealersPushLogsEdit() {
      this.$api.execobj({
        action: "PotentialDealersPushLogsEdit",
        potentialdealersid: this.$route.query.Id || this.potentialDealersId,
        id: 0,
        intentsource: this.intentsource,
        intentbu: this.intentbu,
        intentsubbu: this.intentsubbu,
        clinical: this.clinical,
        bargain: this.bargain,
        accomplish: this.accomplish,
        accomplishdate: this.accomplishDate,
        date: this.date,
      }).then((res) => {
        this.id = res.data;
        this.potentialDealersPushLogsList();
        this.clear();
      });
    },
    baseList(action, type) {
      this.$api.execobj({
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
    this.baseList("DownList", "subBu");
    this.$route.query.Id && this.potentialDealersPushLogsList();
    // console.log("----d-dd",getIsAdmin())
  },
  components: { Pagination, ConfirmActionDialog },
};
</script>
<style lang="scss">
.business-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 16px 0;
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
    &__query.create {
      position: absolute;
      right: 16px;
      top: 18px;
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