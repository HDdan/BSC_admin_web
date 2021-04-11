<template>
  <div class="mr-20 ml-20">
    
      <div v-if="type=='all'">
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
         <el-table-column prop="SFETarget" label="SFE指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SFEAccomplish" label="SFE达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SFEAccomplishRate" label="SFE达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ApprobateNum" label="带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ApprobateRate" label="带教员认可率" show-overflow-tooltip> </el-table-column>
         <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="()=>{id=scope.row.Id;dialogVisible=true}" type="text" size="medium">删除</el-button>
      </template>
      </el-table-column>
       </el-table>
      </div>
            <div v-if="type=='classic'">
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
         <el-table-column prop="ClassicSFETarget" label="经典项目SFE总指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicSFEAccomplish" label="经典项目SFE总达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicAccomplishRate" label="经典项目SFE达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicApprobateNum" label="经典项目带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClassicApprobateRate" label="经典项目带教员认可率" show-overflow-tooltip> </el-table-column>
         <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="()=>{id=scope.row.Id;dialogVisible=true}" type="text" size="medium">删除</el-button>
      </template>
      </el-table-column>
      </el-table>
      </div>
       <div v-if="type=='ground'">
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
         <el-table-column prop="GroundSFETarget" label="地推项目SFE总指标" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundSFEAccomplish" label="地推项目SFE总达成" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundAccomplishRate" label="地推项目SFE达成率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundApprobateNum" label="地推项目带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GroundApprobateRate" label="地推项目带教员认可SFE次数" show-overflow-tooltip> </el-table-column>
         <el-table-column label="操作" width="60">
      <template slot-scope="scope">
        <el-button @click="()=>{id=scope.row.Id;dialogVisible=true}" type="text" size="medium">删除</el-button>
      </template>
      </el-table-column>
       </el-table>

      </div>
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
    type:{
      type: String,
      default: 'all',
    }
  },
  methods: {
    handleClick(){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'sfe',
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
