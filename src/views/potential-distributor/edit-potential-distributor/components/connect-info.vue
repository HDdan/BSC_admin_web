<template>
  <div class="business-info">
    <div class="business-info__header">
      <div class="business-info__header__title" v-if="$route.query.Id">
        <span>共{{callLogsList_total}}条</span>
        <span>最近更新时间：{{ lastupdatetime }}</span>
      </div>
      <div class="business-info__header__query" :class="{'create': !$route.query.Id}">
        <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary" @click="addCallLogs">沟通记录</el-button>
      </div>
    </div>
    <div class="business-info__main">
      <el-table
       :empty-text="emptyText"
      :data="callLogsList"
      style="width: 100%"
      >
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="date" label="沟通时间"></el-table-column>
        <el-table-column prop="username" label="专员名称"></el-table-column>
        <el-table-column prop="type" label="沟通类型"></el-table-column>
        <el-table-column prop="detail" label="沟通内容"></el-table-column>
        <el-table-column prop="businessRegion" label="操作">
          <template slot-scope="scope">
            <span style="display: flex">
              <div class="mr-15" style="color: #4196ff; cursor: pointer" @click="openEditCallLogs(scope.row)"
              >修改</div>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="addCallLogsVisible" class="add-source ml-20 mr-20 mt-24">
        <el-input readonly class="mt-34 ml-24"  v-model="form.username" placeholder="专员名称"></el-input>
        <el-select clearable class="mt-34 ml-24" v-model="form.type" placeholder="沟通类型">
          <el-option v-for="item in option.roleOptions" :key="item.Id" :value="item.Name">
          </el-option>
        </el-select>
        <el-input class="mt-10 ml-24" type="textarea" v-model="form.detail" placeholder="请简述沟通内容……"></el-input>
        <div class="add-source__btn ml-24 mt-30">
          <el-button type="primary" @click="editPotentialDealersCallLogs">添加</el-button>
          <el-button @click="cancelCallLogs">取消</el-button>
        </div>
      </div>
      <pagination v-if="callLogsList_total>0" :total="callLogsList_total" :page.sync="meta.currPage" :limit.sync="meta.pageSize" @pagination="handlePagination" />
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination';
import { lowerJSONKey } from '@/utils/index';
import { getUserName } from "@/utils/auth";
export default {
  props: {
    potentialDealersId: {
      type: Number|String,
    },
  },
  data() {
    return {
      emptyText:'',
      lastupdatetime:'',
      getUserName:getUserName(),
      addCallLogsVisible: false,
      currentEditcallLogsId: null,
      callLogsList: null,
      meta: {
        currPage: 1,
        pageSize: 2
      },
      callLogsList_total: 0,
      option: {
        departmentOption: null,
        hospitalOption: null,
        sexOptions: [{
          value: '男',
        },{
          value: '女',
        }],
        roleOptions: [{
          Name: '强',
        },{
          Name: '弱',
        }],
      },
      form: {
        username:getUserName()
      }
    }
  },
  created() {
   this.$route.query.Id&& this.fetchPotentialDealersCallLogsList();
  },
  methods: {
    addCallLogs() {
      if(!this.potentialDealersId){
        this.$message({
          message: "请先添加基本信息",
          type: "warning",
        });
        return
      }
      this.emptyText=' '
      this.addCallLogsVisible = true;
      this.form = {};
      this.form.username=getUserName()
    },
    cancelCallLogs() {
      if(!this.callLogsList||this.callLogsList.length==0)this.emptyText='暂无数据'
      this.addCallLogsVisible = false;
    },
    openEditCallLogs(row) {
      this.addCallLogsVisible = true;
      this.currentEditcallLogsId = row.id;
      this.fetchPotentialDealersCallLogsDetail(row.id);
    },
    handlePagination() {
      this.fetchPotentialDealersCallLogsList();
    },
    editPotentialDealersCallLogs() {
      this.$api({
        action: "PotentialDealersCallLogsEdit",
        id: this.currentEditcallLogsId ? this.currentEditcallLogsId : 0,
        potentialdealersid: this.$route.query.Id||this.potentialDealersId,
        userId: this.form.userid,
        type: this.form.type,
        detail: this.form.detail,
        username:this.form.username,
      }).then(() => {
        this.fetchPotentialDealersCallLogsList();
        this.addCallLogsVisible = false;
        this.currentEditcallLogsId = null;
      });
    },
    fetchPotentialDealersCallLogsDetail(id) {
      this.$api({
        action: "PotentialDealersCallLogsDetail",
        id: id,
        potentialdealersid: this.$route.query.Id||this.potentialDealersId,
      }).then(res => {
        res.data = lowerJSONKey(res.data);
        this.form = res.data;
      });
    },
    fetchPotentialDealersCallLogsList() {
      this.$api({
        action: "PotentialDealersCallLogsList",
        potentialdealersid: this.$route.query.Id||this.potentialDealersId,
        pageindex: this.meta.currPage,
        pagesize: this.meta.pageSize
      }).then(res => {
        res.data.list.forEach(item => {
          item = lowerJSONKey(item);
        });
        this.callLogsList = res.data.list;
        this.lastupdatetime = res.data.lastupdatetime;
        this.callLogsList_total = res.count;
      });
    },
  },
  components: { Pagination }
}
</script>
<style lang="scss">
.business-info {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 16px 0;
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
    &__query.create {
      position: absolute;
      right: 16px;
      top: 18px;
    }
  }
  &__main {
    padding:16px;
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
}
</style>