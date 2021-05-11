<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16 mb-16"
      placeholder="请输入经销商名称"
      v-model="search.dealersname"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-select clearable class="mr-15 mb-16" v-model="search.bu" placeholder="BU">
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
      v-model="search.studentname"
      placeholder="学员姓名"
      filterable
    >
      <el-option
        v-for="item in option.sfe"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-button class="margin-bottom-16" type="primary" @click="onSearch">检索</el-button>
    <div
        class="potential-distributor__upload ml-20 mb-11"
        @click="downTemplate"
      >
        <i class="iconfont iconxiazaimoban"></i>
        <span>下载模版</span>
      </div>
    <div
        class="potential-distributor__upload ml-20 mb-11" v-if="showImport"
        @click="dialogFileVisible = !dialogFileVisible"
      >
        <i class="iconfont icondaoru"></i>
        <span>导入</span>
      </div>
      <div
        class="potential-distributor__upload ml-20 mr-20 mb-11" v-if="showImport"
        @click="fileDownLoad"
      >
        <i class="iconfont icondaochu"></i>
        <span>导出</span>
      </div>
    <el-button
      class="margin-bottom-16"
      icon="fz-14 mr-8 iconfont iconxinzeng"
      type="primary"
      @click="add"
      style="padding: 0 6px; box-sizing: content-box;height: 34px;"
      >SFE数据</el-button
    >
    <import-file-dialog :dialogVisible="dialogFileVisible" :type="'sfe'" @dialogImportVisible="onSearch"></import-file-dialog>
  </div>
</template>

<script>
import ImportFileDialog from "@/components/ImportFileDialog";
import userRoleServices from '../../../../services/user-role';
import actionRoleServices from '../../../../services/actionRole/obor';
export default {
  components: {
    ImportFileDialog,
  },
  props: {},
  data() {
    return {
      dialogFileVisible: false,
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
        sfe:[]
      },
    };
  },
  created() {
    // this.baseList("BaseList", "department");
    // this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("OborStudentNameList", "sfe");

    // this.baseList("DownList", "province");
  },
  methods: {
    downTemplate(){
      window.open('http://dealer.qtdatas.com/file/template/OBOR-SFE主数据.xlsx')
    },
    fileDownLoad() {
      let list={
        filter:this.search,
        action:'FileDownLoad',
        type:'sfe'
      }
      this.$api.execobj(list)
    },
    add(){
      this.$router.push({ path: '/oborData/sfeInfo/add' });
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
      return actionRoleServices.checkSfeInfo(this.userType);
    },
  }
};
</script>
