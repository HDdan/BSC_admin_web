<template>
  <div class="distributor-document">
    <div class="distributor-document__header">经销商档案</div>
    <div class="distributor-document__content">
      <query-form
       @handleQuery="handleQuery"
       @importDistributorFile="importDistributorFile"
       @exportDistributorFile="openExportDistributorDialog"></query-form>
      <list-table :tableData="tableData" @handlePagination="handlePagination"></list-table>
    </div>
    <Dialog :dialogVisible="dialogVisible" @confirm="handleExportDistributorFile" />
  </div>
</template>
<script>
import QueryForm from './list/query-form';
import ListTable from './list/list-table';
import Dialog from "@/components/Dialog";

import { lowerJSONKey } from '../../utils/index';

export default {
  data() {
    return {
      dialogVisible: false,
      tableData: null
    }
  },
  created() {
    this.fetchDealersList();
  },
  methods: {
    handleQuery(queryInfo) {
      console.log("queryInfo", queryInfo);
    },
    importDistributorFile() {

    },
    openExportDistributorDialog() {
      this.dialogVisible = true;
    },
    handleExportDistributorFile() {
      console.log("fsfs");
      this.$api.execobj({
        action: "FileUploadList",
        pageindex: 1,
        pagesize: 10,
      }).then((res) => {
        console.log("res", res);
      });
    },
    handlePagination() {
      console.log("pagination");
    },
    fetchDealersList() {
      this.$api.execobj({
        action: "DealersList",
        pageindex: 1,
        pagesize: 10,
      }).then((res) => {
        res.data.map(i => {
          i = lowerJSONKey(i);
        });
        this.tableData = {
          list: res.data,
          count: res.count
        }
        console.log('res', res);
      });
    }
  },
  components: { QueryForm, ListTable, Dialog }
}
</script>
<style lang="scss" scoped>
.distributor-document {
  height: 100%;
  background: #fff;
  &__header{
    height: 63px;
    line-height: 63px;
    padding-left: 20px;
    font-weight: 500;
    color: #333333;
    border-bottom: 1px solid #E9E9E9;
  }
  &__content {
    margin: 20px;
  }
}
</style>