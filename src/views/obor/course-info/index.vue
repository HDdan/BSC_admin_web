<template>
  <div class="main">
    <div class="main-header">线上线下赋能主数据</div>
    <SearchBar class="margin-bottom-20" @onSearch="onSearch" />
     <!-- <el-radio-group v-model="tabType" class="mt-20 mb-25 ml-20" size="small" @change="baselist">
    <el-radio-button label="count">参加次数</el-radio-button>
    <el-radio-button label="score">培训成绩</el-radio-button>
  </el-radio-group> -->
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
      tabType: 'count',
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
      list.type = "course";
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
