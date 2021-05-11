<template>
  <div class="main">
    <div class="main-header">{{ title }}</div>
    <div class="info-search mt-30 mb-20 ml-20 mr-20">
      <TotalAndTime :total="baseData.total" :time="baseData.data&&baseData.data.lastupdatetime"/>
      <div class="info-search__right">
        <el-button
          v-if="checkEdit"
          icon="fz-14 mr-8 iconfont iconxinzeng"
          type="primary"
          @click="addSource"
          >{{ btnType }}</el-button
        >
      </div>
    </div>
    <Table
      :tableData="tableData.list || tableData"
      @alter="alterInfo"
      @del="baselist"
    ></Table>
    <add-source
      ref="roleData"
      @add="addSuccess"
      v-if="showAddSource"
      @cancel="showAddSource = !showAddSource"
    ></add-source>
    <pagination
      :total="page.totalNum"
      :page.sync="page.currPage"
      :limit.sync="page.pageSize"
      @pagination="handlePagination"
    />
  </div>
</template>

<script>
import userRoleServices from '../../../services/user-role'
import actionRoleServices from '../../../services/actionRole/role-setting';

import Table from "./table.vue";
// import "../index.scss";
import AddSource from "./addSource.vue";
import TotalAndTime from "@/components/TotalAndTime";
import Pagination from "@/components/Pagination";

export default {
  components: { Table, AddSource, Pagination, TotalAndTime },
  props: {
    title: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: "",
    },
    showSearch: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showAddSource: false,
      baseData: {},
      page: {
        currPage: 1,
        pageSize: 10,
        totalNum: 0,
      },
      tableData: [],
    };
  },
  methods: {
    alterInfo(val) {
      this.showAddSource = true;
      this.$nextTick(() => {
        let roleData = this.$refs.roleData;
        roleData.id = val.Id;
        roleData.code = val.Code;
        roleData.name = val.Name;
        roleData.phone = val.Phone;
        roleData.roleid = this.$store.getters.roleOptions.filter(
          (v) => v.Id == val.RoleId
        )[0].Name;
      });
    },
    handlePagination(val) {
      this.page.currPage = val.page;
      this.baselist();
      // this.$emit("handlePagination");
    },
    addSource() {
      this.showAddSource = true;
    },
    addSuccess() {
      this.showAddSource = false;
      this.baselist();
    },
    baselist() {
      this.$api.execobj({
        action: "userlist",
        pageindex: this.page.currPage,
        pagesize: this.page.pageSize,
      }).then((res) => {
        this.baseData = res;
        this.tableData = res.data.list;
        this.page.totalNum = res.count;
      });
    },
  },
  computed: {
    userType() {
      return userRoleServices.getUserType();
    },
    checkEdit() {
      return actionRoleServices.checkEdit(this.userType);
    }
  },
  created() {
    this.baselist();
  },
};
</script>
