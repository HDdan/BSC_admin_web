<template>
  <div class="main">
    <div class="main-header">{{ title }}</div>
    <div class="info-search mt-30 mb-20 ml-20 mr-20">
      <div>
        <span class="fz-16 mr-20" style="color: #333333"
          >共{{ this.baseData.count || 0 }}条</span
        >
        <span class="fz-14" style="color: #666666"
          >最近更新时间：{{ this.baseData.data.lastupdatetime }}</span
        >
      </div>

      <div class="info-search__right" v-if="showSearch">
        <el-select
          v-if="apiType == 'hospital'"
          class="mr-20"
          v-model="name"
          placeholder="请选择"
        >
          <el-option
            v-for="item in option"
            :key="item.Id"
            :label="item.HospitalName"
            :value="item.HospitalName"
          >
          </el-option>
        </el-select>
          <el-select
          v-if="apiType != 'hospital'"
          class="mr-20"
          v-model="name"
          placeholder="请选择"
        >
          <el-option
            v-for="item in option"
            :key="item.Id"
            :label="item.Name"
            :value="item.Name"
          >
          </el-option>
        </el-select>
        <el-button v-if="action == 'baselist'" type="primary" @click="baselist">检索</el-button>
        <el-upload
          v-if="action == 'baselist'"
          class="potential-distributor__upload mr-18 ml-4"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <i class="mr-3 iconfont icondaorujilu-hui"></i>
          <span>导入</span>
        </el-upload>
        <div
          v-if="action == 'baselist'"
          class="potential-distributor__upload mr-24"
        >
          <i class="mr-10 iconfont icondaorujilu-hui"></i>
          <span>导出</span>
        </div>
        <el-button
          icon="fz-14 mr-8 iconfont iconxinzeng"
          type="primary"
          @click="addSource"
          >{{ btnType }}</el-button
        >
      </div>
    </div>
    <Table
      :tableData="tableData.list || tableData"
      :apiType="apiType"
      :action="action"
    ></Table>
    <add-source
      :action="action"
      :apiType="apiType"
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
import Table from "./table.vue";
import { api } from "@/api";
import "../index.scss";
import AddSource from "./addSource.vue";
import Pagination from "@/components/Pagination";

export default {
  components: { Table, AddSource, Pagination },
  props: {
    title: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: "",
    },
    apiType: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "baselist",
    },
    showSearch: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      name:'',
      showAddSource: false,
      baseData: {},
      page: {
        currPage: 1,
        pageSize: 12,
        totalNum: 0,
      },
      tableData: [],
      option:[]
    };
  },
  methods: {
    handlePagination(val) {
      console.log("oodooso", val);
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
      api({
        action: this.action,
        type: this.apiType,
        pageindex: this.page.currPage,
        pagesize: this.page.pageSize,
      }).then((res) => {
        this.baseData = res;
        this.tableData = res.data;
        this.option= this.tableData.list||this.tableData
        this.page.totalNum = res.count;
      });
    },
  },
  created() {
    this.baselist();
  },
};
</script>
