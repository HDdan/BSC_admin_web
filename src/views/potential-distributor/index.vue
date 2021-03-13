<template>
  <div class="potential-distributor">
    <div class="potential-distributor__header">潜在经销商</div>
    <div class="potential-distributor__search">
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
      <el-select class="mr-15 mb-16" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select class="mr-15 mb-16" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select class="mr-15 mb-16" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select class="mb-16" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select class="mr-16" v-model="value" placeholder="请选择">
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
        class="potential-distributor__upload mr-18 ml-40"
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
      <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary">经销商</el-button>
    </div>
    <Table></Table>
  </div>
</template>

<script>
import Table from "./components/table";
import "./index.scss";
export default {
  components: {
    Table,
  },
  data() {
    return { value1: "" };
  },
};
</script>
