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
        v-for="item in option.course"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-button type="primary" @click="onSearch">检索</el-button>
    <div class="split-line mr-20 ml-20 mt-8"></div>
    <div
        class="potential-distributor__upload mr-18"
        @click="dialogFileVisible = !dialogFileVisible"
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>导入</span>
      </div>
      <div
        class="potential-distributor__upload mr-24"
        @click="fileDownLoad"
      >
        <i class="mr-10 iconfont icondaochujilu-hui"></i>
        <span>导出</span>
      </div>
    <el-button
      icon="fz-14 mr-8 iconfont iconxinzeng"
      type="primary"
      @click="add"
      style="padding: 0 6px; box-sizing: content-box;height: 34px;"
    >赋能数据</el-button
    >
    <import-file-dialog :dialogVisible="dialogFileVisible" :type="'course'" @dialogImportVisible="onSearch"></import-file-dialog>
  </div>
</template>

<script>
import ImportFileDialog from "@/components/ImportFileDialog";
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
        course:[]
      },
    };
  },
  created() {
    // this.baseList("BaseList", "department");
    // this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("OborStudentNameList", "course");

    // this.baseList("DownList", "province");
  },
  methods: {
    fileDownLoad() {
      let list={
        filter:this.search,
        action:'FileDownLoad',
        type:'course'
      }
      this.$api.execobj(list)
    },
     add(){
      this.$router.push({ path: '/oborData/courseInfo/add' });
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
};
</script>
