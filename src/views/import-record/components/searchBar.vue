<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16 mb-16"
      placeholder="请输入文件名"
      v-model="search.filename"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.module"
      placeholder="板块"
    >
      <el-option
        v-for="item in moduleOption"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <!-- <el-date-picker
      class="mr-16"
      v-model="dateRange"
      type="daterange"
      value-format="yyyy-MM-dd"
      range-separator="-"
      start-placeholder="导出开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker> -->
    <el-date-picker
      value-format="yyyy-MM-dd"
      class="mr-16 mb-16"
      v-model="search.starttime"
      type="date"
      placeholder="选择时间"
    >
    </el-date-picker>
    <el-select clearable class="mr-15 mb-16" v-model="operatId" placeholder="操作者">
      <el-option
        v-for="item in userlistOption"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-button class="margin-bottom-16" type="primary" @click="onSearch">检索</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      search: {
        filename: "",
        module: "",
        starttime: "",
        endtime: "",
        operationuserid: "",
      },
      moduleOption: [],
      userlistOption: [],
      operatId: "",
      dateRange: "",
    };
  },
  created() {
    this.$api.execobj({
      action: "DownList",
      type: "module",
      parentid: 0,
      pageindex: 1,
      pagesize: 100000,
    }).then((res) => {
      this.moduleOption = res.data;
    });
    this.$api.execobj({
      action: "userlist",
      parentid: 0,
      pageindex: 1,
      pagesize: 100000,
    }).then((res) => {
      this.userlistOption = res.data.list;
    });
  },
  computed: {},
  methods: {
    onSearch() {
      // this.search.starttime = this.dateRange && this.dateRange[0];
      this.search.endtime = this.search.starttime
      this.search.operationuserid =
        this.operatId &&
        this.userlistOption.filter((val) => val.Name == this.operatId)[0].Id;
      // this.search.operationuserid = this.operatId
      this.$emit("onSearch", this.search);
    },
  },
};
</script>
