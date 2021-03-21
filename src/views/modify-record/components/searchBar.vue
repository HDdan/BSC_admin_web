<template>
  <div class="potential-distributor__search">
    <el-input class="mr-16" placeholder="请输入经销商名称" v-model="input4">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-date-picker
        class="mr-16"
        v-model="value1"
        type="daterange"
        range-separator="-"
        start-placeholder="修改开始时间"
        end-placeholder="修改结束时间"
      >
      </el-date-picker>
    <!-- <el-select class="mr-15" v-model="value" placeholder="板块">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select> -->
    <!-- <el-time-select
      class="mr-16"
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </el-time-select> -->
    <el-select class="mr-15" v-model="value" placeholder="操作者">
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
</template>

<script>
import { api } from "@/api";

export default {
  props: {},
  data() {
    return {
      name: "",
      roleid: "",
      code: "",
      phone: "",
      roleOptions: this.$store.getters.roleOptions,
      id: 0,
    };
  },
  methods: {
    add() {
      api({
        action: "useredit",
        name: this.name,
        id: this.id,
        code: this.code,
        phone: this.phone,
        roleid: this.roleOptions.filter((v) => v.Name == this.roleid)[0].Id,
      }).then((res) => {
        this.$emit("add");
      });
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>
