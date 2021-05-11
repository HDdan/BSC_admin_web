<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-15 mb-16"
      placeholder="请输入经销商名称"
      v-model="search.dealersname"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>

    <el-select
      clearable
      class="mr-15 mb-16"
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
      class="mr-15 mb-16"
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
      class="mr-15 mb-16"
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
      class="mr-15 mb-16"
      v-model="search.studentname"
      placeholder="学员姓名"
      filterable
    >
      <el-option
        v-for="item in option.base"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-button class="margin-bottom-16" type="primary" @click="onSearch"
      >检索</el-button
    >
    <div class="potential-distributor__upload ml-20 mb-11" @click="fileDownLoad" v-if="showImport">
      <i class="iconfont icondaochu"></i>
      <span> 导出 </span>
    </div>
  </div>
</template>

<script>
import userRoleServices from '../../../../services/user-role';
import actionRoleServices from '../../../../services/actionRole/obor';
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
        ChannelPersonType: [],
        studentType: [],
        base: [],
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
    fileDownLoad() {
      let list={
        filter:this.search,
        action:'FileDownLoad',
        type:'obordata'
      }
      this.$api.execobj(list)
    },
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
  computed: {
    userType() {
      return userRoleServices.getUserType();
    },
    showImport() {
      return actionRoleServices.checkBaseInfo(this.userType);
    },
  }
};
</script>
