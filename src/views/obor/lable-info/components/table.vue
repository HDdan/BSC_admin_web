<template>
  <div class="mr-20 ml-20">
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
      <el-table-column prop="SupHospitalNum" label="优势医院家数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ProjectHospitalNum" label="项目医院数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NoProjectHospitalNum" label="非项目医院数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SupDepartmentNum" label="优势科室数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="WorkYears" label="从业年限" show-overflow-tooltip> </el-table-column>
      <!-- <el-table-column prop="TeamLeader" label="是否带团队" show-overflow-tooltip> </el-table-column> -->
      <el-table-column prop="TeamSize" label="团队规模" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.Id)" type="text" size="medium">删除</el-button>
      </template>
      </el-table-column>
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
    handleClick(val){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'lable',
        id:val
      }).then((res) => {
        this.$emit('del')
      });
    },
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
  },
};
</script>
