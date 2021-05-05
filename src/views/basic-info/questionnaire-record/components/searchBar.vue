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
        v-for="item in option.brand"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-button class="margin-bottom-16" type="primary" @click="onSearch"
      >检索</el-button
    >
     <div class="split-line mr-20 ml-20 mt-8"></div>
     <div
        class="potential-distributor__upload mr-18"
         @click="downTemplate"
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>下载模版</span>
      </div>
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
      >调研数据</el-button
    >
    <import-file-dialog :dialogVisible="dialogFileVisible" :type="'questionnaireRecord'" @dialogImportVisible="onSearch"></import-file-dialog>

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
    downTemplate(){
      window.open('http://dealer.qtdatas.com/file/template/经销商档案-调研问卷.xlsx')
    },
     fileDownLoad() {
      let list={
        filter:this.search,
        action:'FileDownLoad',
        type:'questionnaireRecord'
      }
      this.$api.execobj(list)
    },
    add(){
      this.$router.push({ path: '/baseInfo/questionnaireRecord/add' });
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
