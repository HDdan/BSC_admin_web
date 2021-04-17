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
      <el-table-column prop="Purpose" label="本次新经销商面谈主要目的" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerName" label="经销商名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Interviewee" label="经销商被访谈者" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Position" label="职位" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Phone" label="手机" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Controller" label="被访谈者是否为公司实际控制人" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="InvolveBu" label="本次洽谈合作涉及的BU" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="BusinessType" label="业务覆盖分型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverProvinceNum" label="覆盖省份数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverCityNum" label="覆盖地市数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverHospitalNum" label="覆盖医院数量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CoverProvinceCity" label="覆盖省市" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SMNum" label="销售经理人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SalesNum" label="销售人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FollowNum" label="跟台人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LastYearPurchaseAmount" label="经销商上一年度进货金额（百万元人民币）" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EstimatePurchaseAmount1" label="第一年预计进货金额" width="200"  show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EstimateCoverHospitalNum1" label="第一年预计覆盖医院家数" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EstimatePurchaseAmount2" label="第二年预计进货金额" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EstimateCoverHospitalNum2" label="第二年预计覆盖医院家数" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="PS" label="配送" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FX" label="分销" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ZX" label="直销" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FW" label="服务" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ProvinceProxy" label="是否有省级以上代理/一级代理产品" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="ProxyBrand" label="代理品牌及产品" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Platform" label="下级代理商/入院平台" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="devType" label="发展分型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="AdvantageDepBrand" label="重点科室及品牌" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalNum" label="过去一年经销商新开医院家数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Question1" label="在资金、人员等投入上，对BSC产品和同类竞品预计如何分配" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Loan" label="有无融资贷款" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LoanAmount" label="融资贷款具体金额（百万元人民币）" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EquipmentBusiness" label="是否有设备业务" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EquipmentRate" label="设备业务占比" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EngineerNum" label="提供维保服务的工程师团队人数" width="200" show-overflow-tooltip> </el-table-column>
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
  props: {
    tableData: {
      type: Array,
      default: [],
    },
  },
  data(){
    return{
      dialogVisible: false,
      id:''
    }
  },
  methods: {
    handleClick(){
      this.$api.execobj({
        action: 'BaseDelete',
        type: 'interviewRecord',
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
