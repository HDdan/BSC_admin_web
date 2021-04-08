<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ManagerName" label="拜访经理" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Date" label="提交答卷时间" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Purpose" label="本次新经销商面谈主要目的" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Interviewee" label="经销商被访谈者" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Position" label="职位" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="手机" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Controller" label="被访谈者是否为公司实际控制人" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="InvolveBu" label="本次洽谈合作涉及的BU" show-overflow-tooltip> </el-table-column>
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
  },
  methods: {
    handleClick(val){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'interviewRecord',
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
