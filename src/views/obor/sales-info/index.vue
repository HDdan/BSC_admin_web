<template>
  <div class="main">
    <div class="main-header">销量主数据</div>
    <SearchBar @onSearch="onSearch" :tabType="tabType" />
     <el-radio-group v-model="tabType" class="mt-20 mb-25 ml-20" size="small" @change="baselist">
    <el-radio-button label="all">所有优势医院</el-radio-button>
    <el-radio-button label="in">项目内医院</el-radio-button>
    <el-radio-button label="no">非项目内医院</el-radio-button>
  </el-radio-group>
    <Table
      :type="tabType"
      :tableData="tableData.list || tableData"
    ></Table>
    <pagination
      :total="page.totalNum"
      :page.sync="page.currPage"
      :limit.sync="page.pageSize"
      @pagination="handlePagination"
    />
  </div>
</template>

<script>
import Table from "./components/table";
// import "../index.scss";
import SearchBar from "./components/searchBar";
import TotalAndTime from "@/components/TotalAndTime";
import Pagination from "@/components/Pagination";

export default {
  components: { Table, SearchBar, Pagination, TotalAndTime },
  data() {
    return {
      tabType: 'all',
      baseData: {},
      page: {
        currPage: 1,
        pageSize: 10,
        totalNum: 0,
      },
      tableData: [],
      search: {},
    };
  },
  methods: {
    onSearch(val) {
      this.search = val;
      this.baselist();
    },
    handlePagination(val) {
      this.page.currPage = val.page;
      this.baselist();
    },
    baselist() {
      let list={};
      list.action = "OborList";
      list.type = "sales";
      list.pageindex = this.page.currPage;
      list.pagesize = this.page.pageSize;
      list.filter=this.search
      list.filter.type=this.tabType
      
      this.$api.execobj(list).then((res) => {
        this.baseData = res;
        this.tableData = res.data;
        this.page.totalNum = res.count;
      });
    },
  },
  created() {
    this.baselist();
  },
};
</script>
