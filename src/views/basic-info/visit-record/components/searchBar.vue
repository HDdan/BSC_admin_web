<template>
  <div class="potential-distributor__search">
    <el-input
      class="mr-16 mb-16"
      placeholder="请输入经销商名称"
      v-model="search.dealersname"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.managername"
      placeholder="拜访经理"
    >
      <el-option
        v-for="item in option.visitRecord"
        :key="item"
        :label="item"
        :value="item"
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
      v-model="search.date"
      type="date"
      placeholder="拜访日期"
    >
    </el-date-picker>
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
      v-model="search.businesstype"
      placeholder="业务分型"
    >
      <el-option
        v-for="item in option.businesstype"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
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
      v-model="search.clientmaintain"
      placeholder="非临能力"
    >
      <el-option
        v-for="item in option.clientmaintain"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name"
      >
      </el-option>
    </el-select>
    <el-select
      clearable
      class="mr-15 mb-16"
      v-model="search.coverprovince"
      placeholder="覆盖省份"
      @change="changeProvince"
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
      v-model="search.covercity"
      placeholder="覆盖地市"
    >
      <el-option
        v-for="item in option.city"
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
    <div
        class="potential-distributor__upload ml-20 mb-11"
        @click="downTemplate"
      >
        <i class="iconfont iconxiazaimoban"></i>
        <span>下载模版</span>
      </div>
    <div
        class="potential-distributor__upload ml-20 mb-11"
        @click="dialogFileVisible = !dialogFileVisible"
      >
        <i class="iconfont icondaoru"></i>
        <span>导入</span>
      </div>
      <div
        class="potential-distributor__upload ml-20 mr-20 mb-11"
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
      >拜访数据</el-button
    >
    <import-file-dialog :dialogVisible="dialogFileVisible" :type="'visitRecord'" @dialogImportVisible="onSearch"></import-file-dialog>
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
        businesstype: [
          {
            Id: "地市经销商",
            Name: "地市经销商",
          },
          {
            Id: "区域集团型经销商",
            Name: "区域集团型经销商",
          },
          {
            Id: "省级经销商",
            Name: "省级经销商",
          },
        ],
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
                clientmaintain: [
          {
            Id: "有",
            Name: "有",
          },
          {
            Id: "无",
            Name: "无",
          },
        ],
        visitRecord: [],
        province: [],
      },
    };
  },
  created() {
    this.baseList("BaseList", "department");
    this.baseList("BaseList", "brand");
    this.baseList("DownList", "Bu");
    this.baseList("DownList", "province");
    this.baseList("ManagerNameList", "visitRecord");
  },
  methods: {
    downTemplate(){
      window.open('http://dealer.qtdatas.com/file/template/经销商档案-渠道经理拜访信息.xlsx')
    },
     fileDownLoad() {
      let list={
        filter:this.search,
        action:'FileDownLoad',
        type:'visitRecord'
      }
      this.$api.execobj(list)
    },
        add(){
      this.$router.push({ path: '/baseInfo/visitRecord/add' });
    },
    changeProvince(val) {
        this.$set(this.search,'covercity','')

      let province = this.option.province.filter((v) => v.Name == val);
      if (province.length>0) this.baseList("DownList", "city", province[0].Id);
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
        this.$set(this.option,type,res.data.list || res.data)
        // this.option[type] = res.data.list || res.data;
      });
    },
    onSearch() {
      this.$emit("onSearch", this.search);
    },
  },
};
</script>
