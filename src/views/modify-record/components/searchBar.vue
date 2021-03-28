<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16"
      placeholder="请输入经销商名称"
      v-model="search.name"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-date-picker
      class="mr-16"
      value-format="yyyy-MM-dd"
      v-model="dateRange"
      type="daterange"
      range-separator="-"
      start-placeholder="修改开始时间"
      end-placeholder="修改结束时间"
    >
    </el-date-picker>
    <el-select clearable class="mr-15" v-model="operatId" placeholder="操作者">
      <el-option
        v-for="item in userlistOption"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-button type="primary" @click="onSearch">检索</el-button>
  </div>
</template>

<script>
import { api } from "@/api";

export default {
  props: {},
  data() {
    return {
      search: {
        operationuserid: "",
        type: "",
        detail: "",
        name: "",
        starttime: "",
        endtime: "",
      },
      dateRange: "",
      userlistOption: [],
      operatId: "",
    };
  },
  created() {
    this.$api({
      action: "userlist",
      parentid: 0,
      pageindex: 1,
      pagesize: 100000,
    }).then((res) => {
      this.userlistOption = res.data.list;
    });
  },
  methods: {
    onSearch() {
      this.search.starttime = this.dateRange && this.dateRange[0];
      this.search.endtime = this.dateRange && this.dateRange[1];
      this.search.operationuserid =
        this.operatId &&
        this.userlistOption.filter((val) => val.Name == this.operatId)[0].Id;
      this.$emit("onSearch", this.search);
    },
  },
};
</script>
