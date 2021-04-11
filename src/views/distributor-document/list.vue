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
    const params = {
      pageindex: 1,
      pagesize: 10
    }
    this.fetchDealersList(params);
  },
  methods: {
    handleQuery(queryInfo) {
      const params = queryInfo;
      params.pagesize = 10;
      params.pageindex = 1;
      this.fetchDealersList(params);
    },
    importDistributorFile() {
      const params = {
        pageindex: 1,
        pagesize: 10
      }
      this.fetchDealersList(params);
    },
    openExportDistributorDialog() {
      this.dialogVisible = true;
    },
    handleExportDistributorFile() {
      this.$api.execobj({
        action: "FileUploadList",
        pageindex: 1,
        pagesize: 10,
      }).then((res) => {
        console.log("res", res);
      });
    },
    handlePagination(meta) {
      const params = {
        pageindex: meta.currPage,
        pagesize: meta.pageSize
      }
      this.fetchDealersList(params);
    },
    fetchDealersList(params) {
      this.$api.execobj({
        action: "DealersList",
        dealername: params.dealername,
        time: params.starttime,
        businesstype: params.businesstype,
        province: params.province,
        clientmaintain: params.clientmaintain,
        sapid: params.sapid,
        type: params.type,
        bu: params.bu,
        pageindex: params.pageindex,
        pagesize: params.pagesize,
      }).then((res) => {
        res.data.map(i => {
          i = lowerJSONKey(i);
        });
        this.tableData = {
          list: res.data,
          count: res.count
        }
      });
    }
  },
  components: { QueryForm, ListTable, Dialog }
}
</script>
<style lang="scss" scoped>
.distributor-document {
  // height: 100%;
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