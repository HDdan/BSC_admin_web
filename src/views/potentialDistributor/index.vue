<template>
  <div class="potential-distributor">
      <div class="potential-distributor-header">潜在经销商</div>
      <div class="potential-distributor-search">
           <el-input
    placeholder="请输入内容"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
  <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="-"
      start-placeholder="沟通开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
      <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="-"
      start-placeholder="沟通开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </div>
      <Table></Table>
      </div>
</template>

<script>
import Table from './components/table'
import "./index.scss";
export default {
    components: {
    Table
  },
data(){
    return{value1:''}}
}
</script>