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
            <div
        class="potential-distributor__upload ml-20"
        @click="downTemplate"
      >
        <i class="iconfont iconxiazaimoban"></i>
        <span>下载模版</span>
      </div>
    <div
        class="potential-distributor__upload ml-20"
        @click="dialogFileVisible = !dialogFileVisible"
        v-if="showMerchantsPort"
      >
        <i class="iconfont icondaoru"></i>
        <span>导入</span>
      </div>
      <div
        class="potential-distributor__upload ml-20 mr-20" v-if="showMerchantsPort"
        @click="fileDownLoad"
      >
        <i class="iconfont icondaochu"></i>
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
import userRoleServices from '../../../../services/user-role'
import actionRoleServices from '../../../../services/actionRole/basic-info';

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
    downTemplate(){
        let name
        switch(this.apiType){
          case 'source':name='数据来源';break;
          case 'hospital':name='医院';break;
          case 'product':name='产品';break;
          case 'department':name='科室';break;
          case 'brand': name='品牌';break;
        }
        console.log("---088",this.apiType,name)
    window.open(`http://dealer.qtdatas.com/file/template/招商主数据-${name}.xlsx`)
    },
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
  computed: {
    userType() {
      return userRoleServices.getUserType();
    },
    showMerchantsPort() {
      return actionRoleServices.checkMerchantsPort(this.userType);
    }
  },
  created() {
    this.baselist();
    this.filterList();
  },
};
</script>
