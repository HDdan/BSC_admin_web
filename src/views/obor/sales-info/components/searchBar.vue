<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16"
      placeholder="请输入经销商名称"
      v-model="search.dealersname"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-select clearable class="mr-15" v-model="search.bu" placeholder="BU">
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
      v-model="search.studentname"
      placeholder="学员姓名"
      filterable
    >
      <el-option
      class="mr-15"
        v-for="item in option.sales"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <!-- <el-date-picker
      v-model="value3"
      type="year"
      placeholder="选择年">
    </el-date-picker>
     <el-date-picker
      class="mr-16"
      v-model="dateRange"
      type="monthrange"
      range-separator="-"
      start-placeholder="导出开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker> -->
    <el-button type="primary" @click="onSearch">检索</el-button>
    <span style="display:flex" v-if="tabType!=='all'">
    <div class="potential-distributor__upload ml-20" @click="fileDownLoad" v-if="showImport">
      <i class="iconfont icondaochu"></i>
      <span> 导出 </span>
    </div>
    </span>
  </div>
</template>

<script>
import userRoleServices from '../../../../services/user-role';
import actionRoleServices from '../../../../services/actionRole/obor';
export default {
  props: {
    tabType:{
      type:String,
      default:'all'
    }
  },
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
        sales:[]
      },
    };
  },
  created() {
    // this.baseList("BaseList", "department");
    // this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("OborStudentNameList", "sales");
    // this.baseList("DownList", "province");
  },
  methods: {
    fileDownLoad() {
      let list={
        filter:this.search,
        action:'FileDownLoad',
        type:'sales'
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
      return actionRoleServices.checkSalesInfo(this.userType);
    },
  }
};
</script>
