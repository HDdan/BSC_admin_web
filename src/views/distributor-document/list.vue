<template>
  <div class="distributor-document">
    <div class="distributor-document__header">潜在经销商</div>
    <div class="distributor-document__content">
      <query-form
       @handleQuery="handleQuery"
       @importDistributorFile="importDistributorFile"
       @exportDistributorFile="exportDistributorFile"></query-form>
      <list-table :tableData="tableData" @handlePagination="handlePagination"></list-table>
    </div>
  </div>
</template>
<script>
import QueryForm from './list/query-form';
import ListTable from './list/list-table';
export default {
  data() {
    return {
      tableData: {
        list: [{
          id: 1,
          name: "hah",
          businessType: '1',
        },{
          id: 1,
          name: "hah",
          businessType: '1',
        },{
          id: 1,
          name: "hah",
          businessType: '1',
        },{
          id: 1,
          name: "hah",
          businessType: '1',
        },{
          id: 1,
          name: "hah",
          businessType: '1',
        },{
          id: 1,
          name: "hah",
          businessType: '1',
        }],
        meta: {
          currPage: 1,
          pageSize: 5,
          totalNum: 6
        }
      }
    }
  },
  methods: {
    handleQuery(queryInfo) {
      console.log("queryInfo", queryInfo);
    },
    importDistributorFile() {

    },
    exportDistributorFile() {

    },
    handlePagination() {
      console.log("pagination");
    }
  },
  components: { QueryForm, ListTable }
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