<template>
  <div class="obor-cooperation">
    <el-table
    border
    :data="tableData"
    style="width: 100%"
    >
      <el-table-column prop="id" label="基础训练营参与次数"> </el-table-column>
      <el-table-column prop="name" label="高等训练营参与次数" > </el-table-column>
      <el-table-column prop="businessType" label="精英训练营参与次数"></el-table-column>
      <el-table-column prop="businessRegion" label="沙龙参与次数"></el-table-column>
      <el-table-column prop="address" label="精英训练营参与情况"></el-table-column>
    </el-table>
    <div class="obor-cooperation__echart">
      <div class="obor-cooperation__echart__radar">
        <div class="obor-cooperation__echart__radar__title">学员 刘岳 四大能力象限得分</div>
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
// import echart from 'echarts'
export default {
  data() {
    return {
      tableData: [{}]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initRadar();
      this.initPie();
    })
  },
  methods: {
    initRadar() {
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
            value: [40, 30, 25, 20, 0],
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
    initPie() {
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
              {value: 1048, name: '历届基础训练营参加次数'},
              {value: 735, name: '历届高等训练营参加次数'},
              {value: 580, name: '历届精英训练营参加次数'},
              {value: 484, name: '历届区域沙龙参加次数（2017至今）'}
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