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
      <el-table-column prop="DealerType" label="经销商类型" width="120" show-overflow-tooltip> </el-table-column>  
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
      <el-table-column prop="HospitalGTNum1" label="2018年优势医院跟台数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalGTNum2" label="2019年优势医院跟台数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalGTNum3" label="2020年优势医院跟台数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalGTTotal" label="2018至2020年优势医院跟台总数" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GTHospitalNum" label="有跟台优势医院数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GTAvgNum" label="有行为年平均次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalAvgNum" label="每家医院年平均次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MaxTestScore" label="季度考试最高值" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="MaxTestScore" label="季度考试最高成绩积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="GTAvgScore" label="跟台年平均次数积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SpecialtyScore" label="专业能力积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LastYearYHospitalReach" label="2019年项目内优势医院达成" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearYHospitalTarget" label="2020年项目内优势医院指标" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearYHospitalReach" label="2020年项目内优势医院达成" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearYHospitalRate" label="2020年项目内优势医院达成率" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearYHospitalUpRate" label="2020年项目内优势医院增长率" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YReachScore" label="项目医院达成率积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YUpReachScore" label="项目医院增长率积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="LastYearNHospitalReach" label="2019年非项目优势医院达成" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearNHospitalTarget" label="2020年非项目内优势医院指标" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearNHospitalReach" label="2020年非项目内优势医院达成"  width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearNHospitalRate" label="2020年非项目优势医院达成率" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YearNHospitalUpRate" label="2020年非项目优势医院增长率" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NReachScore" label="非项目医院达成积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NUpReachScore" label="非项目医院增长积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalMaintainScore" label="医院维护能力积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YHospitalNum" label="优势医院数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YHospitalScore" label="优势医院数积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YImpHospitalNum" label="2020年有授权优势医院总植入"  width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YImpHospitalScore" label="2020年有授权优势医院总植入积分" width="150"  show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YImpHospitalMaxAmount" label="2020年优势医院植入最高金额" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="YImpHospitalMaxScore" label="2020年优势医院植入最高金额积分" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HospitalCoverScore" label="医院覆盖能力积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalAvgNum" label="2018年-2020年新开医院年平均家数（有植入达3月及以上）" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalAvgAmount" label="2018年-2020年新开医院平均植入金额" width="200" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="AuthHospitalNum" label="授权医院家数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalRate" label="医院开发率" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalNumScore" label="新开医院家数积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalAmountScore" label="新开医院销量积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalRateScore" label="医院开发率积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NewHospitalScore" label="新开医院能力积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerCooOBORYears" label="经销商与波科合作年限" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CooYearScore" label="合作年限积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSales1" label="18年经销商销量" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSalesRate1" label="18年经销商销量占比" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSales2" label="19年经销商销量" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSalesRate2" label="19年经销商销量占比" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSales3" label="20年经销商销量" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerSalesRate3" label="20年经销商销量占比" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerAvgSales" label="近三年经销商年平均销量" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="DealerAvgSalesRate" label="年销量占比积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SalonNum" label="参加沙龙次数（2017~2020）" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="SalonScore" label="沙龙积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="BaseCampNum" label="基础训练营参与次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="HighCampNum" label="高等训练营参与次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EliteCampNum" label="精英训练营参与次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="EliteCampDetail" label="2020年精英训练营参与情况" width="150" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="OffCourseScore" label="线下训练营积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="OnCourseNum" label="线上课程参与次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="OnCourseScore" label="线上课程积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="CooScore" label="合作度积分" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="KTStudent" label="是否开拓型学员" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="FWStudent" label="是否专业服务型学员" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="KQStudent" label="是否客勤关系型学员" show-overflow-tooltip> </el-table-column>
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
