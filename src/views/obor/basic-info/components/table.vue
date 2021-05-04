<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip > </el-table-column>
      <el-table-column prop="Bu" label="BU" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerType" label="经销商类型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DLScore" label="迪乐评分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerCooOBORYears" :label="'BSC\n合作年限'" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentName" label="DealerSales" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="cursor: pointer;" @click="gotoStudentDetail(scope.row)">{{ scope.row.StudentName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="StudentCooOBORYears" :label="'OBOR\n合作年限'" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentPhone" label="学员电话" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ChannelPersonType" label="渠道人类型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentType" label="学员类型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="AbilityType" label="能力认证" show-overflow-tooltip> </el-table-column>
    </el-table>
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
