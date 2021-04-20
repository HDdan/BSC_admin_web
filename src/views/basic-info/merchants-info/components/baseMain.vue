<template>
  <div class="main">
    <div class="main-header">{{ title }}</div>
    <div class="info-search mt-30 mb-20 ml-20 mr-20">
      <div>
        <span class="fz-16 mr-20" style="color: #333333"
          >共{{ baseData.count || 0 }}条</span
        >
        <span class="fz-14" style="color: #666666"
         v-if="baseData.data"
          >最近更新时间：{{ baseData.data.lastupdatetime }}</span
        >
      </div>

      <div class="info-search__right" v-if="showSearch">
        <el-select
          v-if="apiType == 'hospital'"
          class="mr-20"
          v-model="name"
          placeholder="请选择"
          clearable
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
          clearable
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
        <div class="split-line mr-20 ml-20"></div>
    <div
        class="potential-distributor__upload mr-18"
        @click="dialogFileVisible = !dialogFileVisible"
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>导入</span>
      </div>
      <div
        class="potential-distributor__upload mr-24"
        @click="fileDownLoad"
      >
        <i class="mr-10 iconfont icondaochujilu-hui"></i>
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
      @del="baselist"
    ></Table>
    <add-source
      :apiType="apiType"
      @add="addSuccess"
      v-if="showAddSource"
      @cancel="showAddSource = !showAddSource"
      :placeholder="placeholder"
    ></add-source>
    <pagination
      :total="page.totalNum"
      :page.sync="page.currPage"
      :limit.sync="page.pageSize"
      @pagination="handlePagination"
    />
    <import-file-dialog :dialogVisible="dialogFileVisible" :type="apiType" @dialogImportVisible="baselist"></import-file-dialog>
  </div>
</template>

<script>
import Table from "./table.vue";
import "../index.scss";
import AddSource from "./addSource.vue";
import Pagination from "@/components/Pagination";
import ImportFileDialog from "@/components/ImportFileDialog";

export default {
  components: { Table, AddSource, Pagination, ImportFileDialog },
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
    placeholder:{
      type:String,
      default: "",
    },
  },
  data() {
    return {
      dialogFileVisible: false,
      name:'',
      showAddSource: false,
      baseData: {},
      filterData:{},
      page: {
        currPage: 1,
        pageSize: 10,
        totalNum: 0,
      },
      tableData: [],
      option:[]
    };
  },
  methods: {
    fileDownLoad() {
      let list={
        filter:{name: this.name},
        action:'FileDownLoad',
        type:this.apiType
      }
      this.$api.execobj(list)
    },
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
    filterList(){
      this.$api.execobj({
        name:this.name,
        action: this.action,
        type: this.apiType,
        pageindex: 1,
        pagesize: 10000,
      }).then((res) => {
        this.tableData = res.data;
        this.option= this.tableData.list||this.tableData
      });
    },
    baselist() {
      this.$api.execobj({
        name:this.name,
        action: this.action,
        type: this.apiType,
        pageindex: this.page.currPage,
        pagesize: this.page.pageSize,
      }).then((res) => {
        this.baseData = res;
        this.tableData = res.data;
        this.page.totalNum = res.count;
      });
    },
  },
  created() {
    this.baselist();
    this.filterList();
  },
};
</script>
