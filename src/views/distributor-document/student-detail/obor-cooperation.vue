<template>
  <div class="obor-cooperation">
    <el-table
    border
    :data="studentInfo"
    style="width: 100%"
    >
      <el-table-column prop="BaseCampNum" label="基础训练营参与次数"> </el-table-column>
      <el-table-column prop="HighCampNum" label="高等训练营参与次数" > </el-table-column>
      <el-table-column prop="EliteCampNum" label="精英训练营参与次数"></el-table-column>
      <el-table-column prop="SalonNum" label="沙龙参与次数"></el-table-column>
      <el-table-column prop="EliteCampDetail" label="精英训练营参与情况"></el-table-column>
    </el-table>
    <div class="obor-cooperation__echart">
      <div class="obor-cooperation__echart__radar">
        <div class="obor-cooperation__echart__radar__title">学员 {{ studentInfo[0].DealerName }} 四大能力象限得分</div>
        <div id="radar_canvas" class="echart" style="width: 400px;height: 400px;"></div>
      </div>
      <div class="obor-cooperation__echart__pie">
        <div class="obor-cooperation__echart__pie__title">OBOR合作度（线下训练营及区域沙龙参加次数）</div>
        <div id="pie_canvas" class="echart" style="width: 500px;height: 400px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    studentInfo: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      const studentInfo = this.studentInfo[0];
      const radarValue = [
      studentInfo.HospitalMaintainScore,
      studentInfo.CooScore,
      studentInfo.SpecialtyScore,
      studentInfo.NewHospitalScore,
      studentInfo.HospitalCoverScore]
      this.initRadar(radarValue);
      const pieVale = {
        BaseCampNum :studentInfo.BaseCampNum,
        HighCampNum: studentInfo.HighCampNum,
        EliteCampNum: studentInfo.EliteCampNum,
        SalonNum: studentInfo.SalonNum
      }
      this.initPie(pieVale);
    })
  },
  methods: {
    initRadar(radarValue) {
      let charts = this.$echarts.init(document.getElementById('radar_canvas'));
      let option = {
      tooltip: {},
      radar: {
        name: {
            textStyle: {
                color: '#333333',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '医院维护能力', max: 50},
            { name: '合作度', max: 50},
            { name: '专业能力', max: 50},
            { name: '开院能力', max: 50},
            { name: '医院覆盖能力', max: 50}
        ],
        center: ['45%', '50%'],
        radius: '60%'
      },
      series: [{
        type: 'radar',
        data: [
          {
            value: radarValue,
            areaStyle: {
              opacity: 0.7,
              color:  '#4196FF'
            },
            lineStyle: {
              width: 2,
              color: '#29B8FF'
            },
            axisLine: {
              lineStyle: {
                color: '#4196FF',
              },
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                color: '#4196FF'
              }
            }
          },
        ]
      }]
    };
      charts.setOption(option);
    },
    initPie(pieVale) {
      let charts = this.$echarts.init(document.getElementById('pie_canvas'));
      let option = {
        color: ["#4196FF","#117CFF","#3ED6FF","#BED8FF"],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right:'0%',
          top: '35%',
          textStyle: {
            fontSize: 12,
            color : "#333333"
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            center: ['30%', '50%'],
            radius: [0, '50%'],
            data: [
              {value: pieVale.BaseCampNum, name: '历届基础训练营参加次数'},
              {value: pieVale.HighCampNum, name: '历届高等训练营参加次数'},
              {value: pieVale.EliteCampNum, name: '历届精英训练营参加次数'},
              {value: pieVale.SalonNum, name: '历届区域沙龙参加次数（2017至今）'}
            ],
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      charts.setOption(option);
    }
  }
}
</script>
<style lang="scss">
.obor-cooperation {
  margin: 40px 20px 30px;
  &__echart {
    display: flex;
    align-items: center;
    &__radar {
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &__title {
        margin: 42px 0 30px 0;
        color: #333333;
        font-size: 16px;
      }
    }
    &__pie {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 50%;
      &__title {
        margin: 42px 0 30px 0;
        text-align: center;
        color: #333333;
        font-size: 16px;
      }
    }
  }
}
</style>