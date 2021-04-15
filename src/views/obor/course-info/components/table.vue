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
         <el-table-column prop="Excellent" label="线上赋能精品课" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Customize" label="线上赋能Bu定制课" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="OnlineTrainNum" label="线上培训总次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="RegionSalon" label="线下赋能区域沙龙" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EfficientTrainingCamp" label="线下赋能高效训练营" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="BoutiqueTrainingCamp" label="线下赋能精英训练营" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="OfflineTrainNum" label="线下培训总次数" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="()=>{id=scope.row.Id;dialogVisible=true}" type="text" size="medium">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <confirm-action-dialog :dialogVisible.sync="dialogVisible" :tips="'删除后将不可恢复，是否确定删除？'" @confirm="handleClick"></confirm-action-dialog>

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
    type:{
      type: String,
      default: 'all',
    }
  },
  methods: {
     handleClick(){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'course',
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
