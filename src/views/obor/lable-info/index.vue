<template>
  <div class="main">
    <div class="main-header">优势标签主数据</div>
    <SearchBar/>
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
        pageSize: 12,
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
      this.$api({
        action: "oborlist",
        type:"lable",
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
  },
};
</script>
