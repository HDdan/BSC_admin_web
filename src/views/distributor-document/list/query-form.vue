<template>
  <div class="distributor-document-query">
    <el-date-picker
      class="mr-16 mb-16"
      v-model="queryInfo.time"
      type="month"
      value-format="yyyy-MM"
      format="yyyy 年 MM 月"
      placeholder="选择年月">
    </el-date-picker>
    <el-select class="mr-16 mb-16" v-model="queryInfo.businessType" placeholder="业务分型">
      <el-option
        v-for="item in businessTypeList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select class="mr-16 mb-16" v-model="queryInfo.businessRegion" placeholder="业务区域">
      <el-option
        v-for="item in businessRegionList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select class="mr-16 mb-16" v-model="queryInfo.nonTemporary" placeholder="是否有非临能力">
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" @click="handleQuery">检索</el-button>
    <div @click="importDistributorFile">导入</div>
    <div @click="exportDistributorFile">导出</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      queryInfo: {
        time: '',
        businessType: '',
        businessRegion: '',
        nonTemporary: 1
      },
      businessTypeList: [{
        lable: '',
        value: 1,
      }],
      businessRegionList: [{
        lable: '',
        value: 1,
      }],
      selectNonTemporary: [{
        lable: '是',
        value: 1
      },{
        lable: '否',
        value: 0
      }]
    }
  },
  methods: {
    handleQuery() {
      this.$emit("handleQuery", this.queryInfo);
    },
    importDistributorFile() {
      this.$emit("importDistributorFile");
    },
    exportDistributorFile() {
      this.$emit("exportDistributorFile");
    }
  }
}
</script>