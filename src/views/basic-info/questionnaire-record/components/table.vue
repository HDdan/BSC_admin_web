<template>
  <div class="mr-20 ml-20 mt-4">
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
      <el-table-column prop="MedicalEquipment" label="经营品种是否包含了医疗设备类产品" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CooperateType" label="合作原因" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="TeamNum" label="销售团队人总数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="TeamSmNum" label="带人销售经理总人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SalesGtNum" label="销售跟台人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="PurchaseAmount" label="上年度公司进货金额（含税）万元->上年度公司进货金额（含税）元" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="TGHospital" label="是否作为托管方有托管医院" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverCity" label="业务覆盖城市" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="IsSales" label="城市是否有业务员" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalNumber" label="稳定业务的三甲医院数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital1" label="重点合作医院1" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital2" label="重点合作医院2" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital3" label="重点合作医院3" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital4" label="重点合作医院4" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital5" label="重点合作医院5" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital6" label="重点合作医院6" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital7" label="重点合作医院7" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusHospital8" label="重点合作医院8" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusDepartment1" label="重点合作科室1" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Rate1" label="业务占比1" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MainBrand11" label="主要品牌1-1" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MainBrand12" label="主要品牌1-2" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusDepartment2" label="重点合作科室2" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Rate2" label="业务占比2" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MainBrand21" label="主要品牌2-1" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MainBrand22" label="主要品牌2-2" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FocusDepartment3" label="重点合作科室3" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Rate3" label="业务占比3" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MainBrand31" label="主要品牌3-1" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MainBrand32" label="主要品牌3-2" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Question1" label="目前公司发展最大的瓶颈" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Question2" label="您平时关注的医疗行业相关的微信公众号是哪些" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Question3" label="您会参加哪些医疗器械展会" show-overflow-tooltip> </el-table-column>
      
      <el-table-column label="操作" width="60" fixed="right">
      <template slot-scope="scope">
        <el-button @click="()=>{id=scope.row.id;dialogVisible=true}" type="text" size="medium">删除</el-button>
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
  },
  methods: {
    handleClick(){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'questionnaireRecord',
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
