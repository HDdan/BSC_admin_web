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
      <el-table-column prop="Date" label="拜访日期" width="120" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Interviewee" label="接访者" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Position" label="接访者职位" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="接访者联系方式" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="InvolveBu" label="拜访涉及BU" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Controller" label="区域市场竞品及医院准入情况" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="InvolveBu" label="医院覆盖率未达标医院情况了解" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="BusinessType" label="业务分型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverProvinceNum" label="覆盖省份数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverCityNum" label="覆盖地市数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverCountyNum" label="覆盖县市数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="AdvantageRegion" label="优势区域（多项）" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LastYearAmount" label="上一年度进货金额" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LastYearSalesAmount" label="上一年度销货金额" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SMNum" label="带人销售经理数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SalesNum" label="销售总人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FollowNum" label="跟台人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="PS" label="配送" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FX" label="分销" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ZX" label="直销" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FW" label="服务" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ProvinceProxy" label="是否具备省级以上代理的潜力" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="AdvantageDepBrand" label="优势科室及品牌" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="KZ_SY" label="扩张型-上游拓展" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="KZ_ZD" label="扩张型-终端覆盖" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalNum" label="过去一年经销商自身新开医院数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="WC" label="维持型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="TAN" label="退岸型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Loan" label="有无贷款、融资" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LoanAmount" label="贷款融资金额" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EquipmentBusiness" label="是否有设备业务" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EquipmentRate" label="设备业务在自身业务占比" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EngineerNum" label="提供维保服务的工程师人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YBNegotiate" label="是否有医保物价协商能力" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ClientMaintain" label="非临客户维护能力" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Others" label="其他信息记录" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" width="60" fixed="right">
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
  },
  methods: {
  handleClick(){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'visitRecord',
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
