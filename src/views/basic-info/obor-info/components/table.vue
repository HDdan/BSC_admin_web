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
      <el-table-column prop="DealerName" label="经销商名称" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DLScore" label="迪乐评分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSales" label="DealerSales" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentPhone" label="学员电话" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentAppcode" label="学员appcode" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentType" label="学员类型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ChannelPersonType" label="渠道人类型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="StudentCity" label="学员城市" show-overflow-tooltip> </el-table-column>
      <!-- <el-table-column prop="InvolveBu" label="学员类型" show-overflow-tooltip> </el-table-column> -->
      <el-table-column prop="AbilityType" label="能力认证" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="OBORYears" label="OBOR合作年限" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="()=>{id=scope.row.Id;dialogVisible=true}" type="text" size="medium">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <confirm-action-dialog :dialogVisible.sync="dialogVisible" :tips="'请确认信息无误后删除！'" @confirm="handleClick"></confirm-action-dialog>

  </div>
</template>

<script>
import ConfirmActionDialog from '@/components/ConfirmActionDialog';
export default {
  components: {ConfirmActionDialog },
  data(){
    return{
      dialogVisible: false,
      id:''
    }
  },
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },
  methods: {
    handleClick(){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'obordata',
        id:this.id
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
