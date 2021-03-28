<template>
  <div class="main">
    <div class="main-header">导出记录</div>
    <SearchBar @onSearch="onSearch"/>
    <Table
      :tableData="tableData.list || tableData"
      @alter="alterInfo"
      @del="baselist"
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
      search:{},
    };
  },
  methods: {
    onSearch(val){
      this.search=val;
      this.baselist();
    },
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
      let list=this.search
      list.action="filedownloadlist",
      list.pageindex=this.page.currPage,
        list.pagesize=this.page.pageSize,
      this.$api(list).then((res) => {
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
