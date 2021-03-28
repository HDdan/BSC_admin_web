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
      <div v-if="type=='all'">
         <el-table-column prop="SFETarget" label="SFE指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SFEAccomplish" label="SFE达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SFEAccomplishRate" label="SFE达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ApprobateNum" label="带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ApprobateRate" label="带教员认可率" show-overflow-tooltip> </el-table-column>
      </div>
            <div v-if="type=='classic'">
         <el-table-column prop="ClassicSFETarget" label="经典项目SFE总指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicSFEAccomplish" label="经典项目SFE总达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicAccomplishRate" label="经典项目SFE达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicApprobateNum" label="经典项目带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicApprobateRate" label="经典项目带教员认可率" show-overflow-tooltip> </el-table-column>
      </div>
       <div v-if="type=='ground'">
         <el-table-column prop="GroundSFETarget" label="地推项目SFE总指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundSFEAccomplish" label="地推项目SFE总达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundAccomplishRate" label="地推项目SFE达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundApprobateNum" label="地推项目带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundApprobateRate" label="地推项目带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      </div>
     
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
  },
};
</script>
