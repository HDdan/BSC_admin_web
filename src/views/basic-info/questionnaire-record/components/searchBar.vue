<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16 mb-16"
      placeholder="请输入经销商名称"
      v-model="search.dealersname"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-date-picker
      value-format="yyyy-MM-dd"
      class="mr-16 mb-16"
      v-model="search.date"
      type="date"
      placeholder="提交时间"
    >
    </el-date-picker>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.equipmentbusiness"
      placeholder="设备业务"
    >
      <el-option
        v-for="item in option.equipmentbusiness"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.covercity"
      placeholder="覆盖城市"
    >
      <el-option
        v-for="item in option.province"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.deparment"
      placeholder="重点科室"
    >
      <el-option
        v-for="item in option.department"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.brand"
      placeholder="重点品牌"
    >
      <el-option
        v-for="item in option.Bu"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-button class="margin-bottom-16" type="primary" @click="onSearch"
      >检索</el-button
    >
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      search: {},
      option: {
        department: [],
        brand: [],
        Bu: [],
        equipmentbusiness: [
          {
            Id: "是",
            Name: "是",
          },
          {
            Id: "否",
            Name: "否",
          },
        ],
        province: [],
      },
    };
  },
  created() {
    this.baseList("BaseList", "department");
    this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("DownList", "province");
  },
  methods: {
    baseList(action, type, parentid) {
      let list = {
        action: action,
        type: type,
        pageindex: 1,
        pagesize: 10000,
      };
      if (parentid) list.parentid = parentid;
      this.$api.execobj(list).then((res) => {
        this.$set(this.option, type, res.data.list || res.data);
        // this.option[type] = res.data.list || res.data;
      });
    },
    onSearch() {
      this.$emit("onSearch", this.search);
    },
  },
};
</script>
