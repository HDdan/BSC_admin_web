<template>
  <div class="mr-20 ml-20">
    <!-- <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    > -->
      <!-- <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Bu" label="BU" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentName" label="学员姓名" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column> -->
      <div v-if="type=='all'">
      <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
     >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Bu" label="BU" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentName" label="学员姓名" width="120" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="cursor: pointer;" @click="gotoStudentDetail(scope.row)">{{ scope.row.StudentName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="去年达成" label="去年达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="今年指标" label="今年指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="今年达成" label="今年达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="今年达成率" label="今年达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="今年同比增长率" label="今年同比增长率" show-overflow-tooltip> </el-table-column>
      </el-table>
      </div>
      <div v-if="type=='in'">
      <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
     >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Bu" label="BU" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentName" label="学员姓名" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column>
         <el-table-column prop="项目内去年达成" label="项目内去年达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="项目内今年指标" label="项目内今年指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="项目内今年达成" label="项目内今年达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="项目内今达成率" label="项目内今达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="项目内今年同比增长率" label="项目内今年同比增长率" show-overflow-tooltip> </el-table-column>
      </el-table>
      </div>
      <div v-if="type=='no'">
      <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
     >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Bu" label="BU" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentName" label="学员姓名" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="非项目内去年达成" label="非项目内去年达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="非项目内今年指标" label="非项目内今年指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="非项目内今年达成" label="非项目内今年达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="非项目内今达成率" label="非项目内今达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="非项目内今年同比增长率" label="非项目内今年同比增长率" show-overflow-tooltip> </el-table-column>
      </el-table>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    type:{
      type: String,
      default: 'all',
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2) {
        return "warning-row";
      } else {
        return "";
      }
    },
    download(url) {
      window.open(url)
    },
    gotoStudentDetail(row) {
      this.$router.push({ path: '/distributorDocument/studentDetail',query: { studentappcode: row.StudentAppcode }});
    }
  },
};
</script>
