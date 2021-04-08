<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="序号" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerCode" label="经销商编码" width="100" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Date" label="提交时间" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="AddFields" label="希望增加的合作领域" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MedicalEquipment" label="经营品种是否包含了医疗设备类产品" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CooperateType" label="合作原因" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="BossAge" label="公司老板年龄" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.id)" type="text" size="medium">删除</el-button>
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
        type: 'questionnaireRecord',
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
