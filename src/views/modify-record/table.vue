<template>
<div class="mr-20 ml-20">
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="date" label="序号" width="60"> </el-table-column>
    <el-table-column prop="address" label="时间" width="100"> </el-table-column>
    <el-table-column prop="address" label="操作人"> </el-table-column>
    <el-table-column prop="address" label="经销商名称"> </el-table-column>
    <el-table-column prop="address" label="具体操作"> </el-table-column>

  </el-table>
  <pagination
      :total="page.totalNum"
      :page.sync="page.currPage"
      :limit.sync="page.pageSize"
      @pagination="handlePagination"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index'

export default {
  components: { Pagination },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex%2) {
        return "warning-row";
      } else{
        return "";
      }
     
    },
  },
  data() {
    return {
      page: {
        currPage: 1,
        pageSize: 12,
        totalNum: 0,
      },
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "重庆医药和平医疗器械有限公司",
        },
        {
          date: "2",
          name: "王小虎",
          address: "重庆医药和平医疗器械有限公司",
        },
        {
          date: "31",
          name: "王小虎",
          address: "重庆医药和平医疗器械有限公司",
        },
        {
          date: "4",
          name: "王小虎",
          address: "重庆医药和平医疗器械有限公司",
        },
      ],
    };
  },
};
</script>
