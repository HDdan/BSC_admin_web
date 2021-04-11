<template>
  <div class="main">
    <div class="main-header">调研主数据</div>
    <SearchBar @onSearch="onSearch" />
    <Table
      @del="baselist"
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
      showAddSource: false,
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
      let list = Object.assign({}, this.search);
      list.action = "QuestionnaireRecordlist";
      list.pageindex = this.page.currPage;
      list.pagesize = this.page.pageSize;
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
