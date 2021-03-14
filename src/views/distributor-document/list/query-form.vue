<template>
  <div class="distributor-document-query mb-16">
    <el-date-picker
      class="mr-16"
      v-model="queryInfo.time"
      type="month"
      value-format="yyyy-MM"
      format="yyyy 年 MM 月"
      placeholder="选择年月">
    </el-date-picker>
    <el-select class="mr-16" v-model="queryInfo.businessType" placeholder="业务分型">
      <el-option
        v-for="item in businessTypeList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select class="mr-16" v-model="queryInfo.businessRegion" placeholder="业务区域">
      <el-option
        v-for="item in businessRegionList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select class="mr-16" v-model="queryInfo.nonTemporary" placeholder="是否有非临能力">
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" @click="handleQuery">检索</el-button>
    <div class="distributor-document-query__divider ml-20"></div>
    <el-upload
      class="distributor-document-query__upload mr-16 ml-16"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <i class="mr-3 iconfont icondaorujilu-hui"></i>
      <span>导入</span>
    </el-upload>
    <div class="distributor-document-query__upload">
          <i class="mr-10 iconfont icondaorujilu-hui"></i>
      <span>导出</span>
    </div>
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
      }],
      fileList: [],
    }
  },
  methods: {
    handlePreview() {

    },
    handleRemove() {

    },
    beforeRemove() {

    },
    handleExceed() {

    },
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
<style lang="scss">
.distributor-document-query {
  display: flex;
  align-items: center;
  height: 36px;
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 200px;
    height: 36px;
  }
  .el-input--suffix .el-input__inner {
    width: 200px;
    height: 36px;
  }
  .el-select>.el-input {
    width: 200px;
    height: 36px;
  }
  &__divider {
    display: inline-block;
    width: 1px;
    height: 20px;
    border-left: 1px solid #DADADA;
  }
  &__upload{
    display: inline-block;
    align-items: center;
    color: #9B9B9B;
  }
}

</style>