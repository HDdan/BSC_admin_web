<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16"
      placeholder="请输入经销商名称"
      v-model="search.dealersname"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>

    <el-select
      clearable
      class="mr-15"
      v-model="search.bu"
      placeholder="BU"
    >
      <el-option
        v-for="item in option.Bu"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15"
      v-model="search.channelpersontype"
      placeholder="渠道人类型"
    >
      <el-option
        v-for="item in option.ChannelPersonType"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15"
      v-model="search.studenttype"
      placeholder="学员类型"
    >
      <el-option
        v-for="item in option.studentType"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15 mt-16"
      v-model="search.studentname"
      placeholder="学员姓名"
    >
      <el-option
        v-for="item in option.base"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-button class="margin-top-16" type="primary" @click="onSearch"
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
        ChannelPersonType:[],
        studentType:[],
        base:[]
      },
    };
  },
  created() {
    // this.baseList("BaseList", "department");
    // this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("DownList", "ChannelPersonType");
    this.baseList("DownList", "studentType");
    this.baseList("OborStudentNameList", "base");

    // this.baseList("DownList", "province");
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
