<template>
  <div class="main">
    <div class="main-header">医院主数据</div>
    <div class="info-search mt-30 mb-20 ml-20 mr-20">
      <div>
        <span class="fz-16 mr-20" style="color:#333333">共430条</span>
        <span class="fz-14" style="color:#666666">最近更新时间：2021-01-07 17</span>
      </div>

      <div class="info-search__right">
        <el-select class="mr-20" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button type="primary">检索</el-button>
        <el-upload
          class="potential-distributor__upload mr-18 ml-4"
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
        <div class="potential-distributor__upload mr-24">
          <i class="mr-10 iconfont icondaorujilu-hui"></i>
          <span>导出</span>
        </div>
        <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary"
          >经销商</el-button
        >
      </div>
    </div>
    <Table></Table>
  </div>
</template>

<script>
import Table from "./table.vue";
export default {
  components: { Table },
};
</script>

<style lang="scss" scoped>

.info-search{
      display: flex;
    justify-content: space-between;
    align-items: center;
    &__right{
display: flex;
 align-items: center;
    }
}
</style>
