<template>
  <div class="main">
      <div class="main-header">修改记录</div>
      <div class="mt-30 ml-20">
            <el-input class="mr-16 mb-16" placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-date-picker
        class="mr-16 mb-16"
        v-model="value1"
        type="daterange"
        range-separator="-"
        start-placeholder="沟通开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
       <el-select class="mr-15 mb-16" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary">检索</el-button>

      </div>
      <Table/>
  </div>
</template>

<script>
import Table from './table'
export default {
  components: { Table },

}
</script>

<style>

</style>