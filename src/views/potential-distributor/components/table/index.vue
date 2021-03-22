<template>
<div class="mr-20 ml-20">
  <el-table
    border
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @row-click="gotoDetail"
  >
    <el-table-column prop="date" label="序号" width="60"> </el-table-column>
    <el-table-column prop="address" label="经销商名称" width="100"> </el-table-column>
    <el-table-column prop="address" label="数据来源"> </el-table-column>
    <el-table-column prop="address" label="业务区域"> </el-table-column>
    <el-table-column prop="address" label="合作科室"> </el-table-column>
    <el-table-column prop="address" label="主营产品类型"> </el-table-column>
    <el-table-column prop="address" label="沟通时间"> </el-table-column>
    <el-table-column prop="address" label="沟通专员"> </el-table-column>
    <el-table-column prop="address" label="推送时间"> </el-table-column>
    <el-table-column prop="address" label="推送专员"> </el-table-column>



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
import "./index.scss";
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
    gotoDetail() {
      this.$router.push({ path: '/potentialDistributor/edit' });
      console.log("detail");
    }
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
