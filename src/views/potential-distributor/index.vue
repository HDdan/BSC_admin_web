<template>
  <div class="main">
    <div class="main-header">潜在经销商</div>
    <div class="potential-distributor__search">
      <el-input
        class="mr-16 mb-16"
        placeholder="请输入经销商名称"
        v-model="params.name"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-date-picker
        class="mr-16 mb-16"
        v-model="callTime"
        value-format="yyyy-MM-dd"
        type="daterange"
        range-separator="-"
        start-placeholder="沟通开始日期"
        end-placeholder="沟通结束日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr-16 mb-16"
        value-format="yyyy-MM-dd"
        v-model="pushTime"
        type="daterange"
        range-separator="-"
        start-placeholder="推送开始日期"
        end-placeholder="推送结束日期"
      >
      </el-date-picker>
      <el-select
        clearable
        class="mr-15 mb-16"
        v-model="params.mainproducts"
        placeholder="主营产品类型"
        multiple
      >
        <el-option
          v-for="item in option.product"
          :key="item.Id"
          :label="item.Name"
          :value="item.Name"
        >
        </el-option>
      </el-select>
      <el-select
        clearable
        class="mr-15 mb-16"
        v-model="params.department"
        placeholder="合作科室"
        multiple
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
        v-model="params.sources"
        placeholder="数据来源"
      >
        <el-option
          v-for="item in option.source"
          :key="item.Id"
          :label="item.Name"
          :value="item.Name"
        >
        </el-option>
      </el-select>
      <el-cascader
        clearable
        class="mr-15 mb-16"
        style="width: 220px; line-height: inherit"
        ref="cascaderRegion"
        placeholder="业务区域"
        :props="regionProps"
        @change="selectRegion"
      ></el-cascader>

      <el-select
        clearable
        class="mr-15 mb-16"
        v-model="params.callusername"
        placeholder="沟通专员"
      >
        <el-option
          v-for="item in option.userlist"
          :key="item.Id"
          :label="item.Name"
          :value="item.Name"
        >
        </el-option>
      </el-select>
      <el-select
        clearable
        class="mr-16 mb-16"
        v-model="params.pushusername"
        placeholder="推送专员"
      >
        <el-option
          v-for="item in option.userlist"
          :key="item.Id"
          :label="item.Name"
          :value="item.Name"
        >
        </el-option>
      </el-select>
      <el-button class="margin-bottom-16" type="primary" @click="potentialDealersList">检索</el-button>
      <div
        class="potential-distributor__upload mr-24 ml-24"
        @click="dialogFileVisible = !dialogFileVisible"
        
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>导入</span>
      </div>
      <div
        class="potential-distributor__upload mr-24"
        @click="dialogVisible = !dialogVisible"
      >
        <i class="mr-10 iconfont icondaochujilu-hui"></i>
        <span>导出</span>
      </div>
      <el-button
        class="margin-bottom-16"
        icon="fz-14 mr-8 iconfont iconxinzeng"
        type="primary"
        @click="createPotentialDistributor"
        >经销商</el-button
      >
    </div>
    <Table :tableData="tableData" @sortChange="sortChange"></Table>
    <pagination
      :total="page.totalNum"
      :page.sync="page.currPage"
      :limit.sync="page.pageSize"
      @pagination="handlePagination"
    />
    <Dialog :dialogVisible="dialogVisible" :filterList="exportFilterList" @confirm="handleExportFile"/>
    <import-file-dialog :dialogVisible="dialogFileVisible" @dialogImportVisible="dialogImportVisible" :type="'potentialDealers'"></import-file-dialog>
  </div>
</template>

<script>
import Table from "./components/table";
import Dialog from "@/components/Dialog";
import ImportFileDialog from "@/components/ImportFileDialog";

import Pagination from "@/components/Pagination/index";

import "./index.scss";
export default {
  components: {
    Table,
    Dialog,
    ImportFileDialog,
    Pagination,
  },
  data() {
    return {
      dialogVisible: false,
      dialogFileVisible: false,
      tableData: [],
      departmentOptions: [],
      callTime: [],
      pushTime: [],
      option: {
        product: [],
        departmentOptions: [],
        source: [],
        userlist: [],
      },
      params: {
        name: "",
        callstarttime: "",
        callendtime: "",
        pushstarttime: "",
        pushendtime: "",
        mainproducts: "",
        department: "",
        sources: "",
        province: "",
        callusername: "",
        pushusername: "",
        sorttype: "",
      },

      page: {
        currPage: 1,
        pageSize: 10,
        totalNum: 0,
      },

      regionProps: {
        lazy: true,
        lazyLoad: this.fetchRegion,
      },
      exportFilterList: [{ label: '基本信息', id: 'base' },
      { label: '覆盖医院', id: 'hospital' },
      { label: '招商沟通记录', id: 'call' },
      { label: '推送记录', id: 'push' }]
    };
  },
  created() {
    this.potentialDealersList();
    this.baseList("product");
    this.baseList("department");
    this.baseList("source");
    this.userlist();
  },
  methods: {
    sortChange(column) {
      if (column.order == "descending") {
        this.$set(this.params, "sorttype", "desc");
      } else {
        this.$set(this.params, "sorttype", "asc");
      }
      this.potentialDealersList();
    },
    dialogImportVisible(value) {
      this.dialogFileVisible = value;
    },
    beforeFileUpload(file) {
      let type = file.name.toLowerCase()
      let isXLSX = /\.(xlsx)$/.test(type)
      if (!isXLSX) {
        this.$message.error('上传文件暂时只支持XLSX格式')
      }
      return isXLSX;
    },
    handleFilePreview(param) {
      let formData = new FormData();
      formData.append('file', param.file);
      formData.append('userid', getToken());
      formData.append('type', 'potentialDealers');
      this.$api.upload(formData).then(() => {
        // this.$message.success('导入成功');
      }).catch(() => {
        // this.$message.error('导入失败');
      });
    },
    handleExportFile(checkedFilterCondition) {
      const param = {
        action: "FileDownLoad",
        type: 'potentialDealers',
        filter: {
          name: this.params.name,
          callstarttime: this.params.callstarttime,
          callendtime: this.params.callendtime,
          pushstarttime: this.params.pushstarttime,
          pushendtime: this.params.pushendtime,
          mainproducts: this.params.mainproducts,
          department: this.params.department,
          sources: this.params.sources,
          province: this.params.province,
          module: checkedFilterCondition.toString()
        }
      }
      this.$api.execobj(param).then(() => {
        // this.$message.success('导出成功');
      }).catch(() => {
        // this.$message.error('导出失败');
      });
    },
    fetchRegion(node, resolve) {
      if (!node) {
        return false;
      }

      if (node.level === 0) {
        this.$api.execobj({
          action: "DownList",
          type: "province",
          parentid: 0,
          pageindex: 1,
          pagesize: 100000,
        }).then((res) => {
          resolve(
            res.data.map((val) => {
              return {
                value: val.Id,
                label: val.Name,
                leaf: false,
              };
            })
          );
        });
      } else if (node.level === 1) {
        this.$api.execobj({
          action: "DownList",
          type: "city",
          parentid: node.data.value,
        }).then((res) => {
          let city = res.data.map((val) => {
            return {
              value: val.Id,
              label: val.Name,
              leaf: true,
            };
          });
          city.unshift({
            value: 0,
            label: '全省',
            leaf: true,
          });
          resolve(city);
        });
      }
    },
    selectRegion() {
      if (this.$refs.cascaderRegion.getCheckedNodes().length > 0) {
        this.params.province =
          this.$refs.cascaderRegion.getCheckedNodes()[0].pathLabels[0] +
          "/" +
          this.$refs.cascaderRegion.getCheckedNodes()[0].pathLabels[1];
      } else this.params.province = "";
    },
    potentialDealersList() {
      const params = JSON.parse(JSON.stringify(this.params));
      
      let mainproducts = '';
      this.params.mainproducts && this.params.mainproducts.forEach((item, index) => {
        mainproducts = index === 0 ? item : mainproducts + "/" + item;
      });
      let department = '';
      this.params.department && this.params.department.forEach((item, index) => {
        department = index === 0 ? item : department + "/" + item;
      });
      params.action = "PotentialDealersList";
      params.callstarttime = this.callTime ? this.callTime[0] : "";
      params.callendtime = this.callTime ? this.callTime[1] : "";
      params.pushstarttime = this.pushTime ? this.pushTime[0] : "";
      params.pushendtime = this.pushTime ? this.pushTime[1] : "";
      params.mainproducts = mainproducts;
      params.department = department;
      params.sorttype = this.params.sorttype;
      params.pageindex = this.page.currPage;
      params.pagesize = this.page.pageSize;
      this.$api.execobj(params).then((res) => {
        this.tableData = res.data;
        this.page.totalNum = res.count;
      });
    },
    baseList(type) {
      this.$api.execobj({
        action: "BaseList",
        type: type,
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        // return res.data.list
        this.option[type] = res.data.list;
        // this.page.totalNum = res.count;
      });
    },
    downList(type) {
      this.$api.execobj({
        action: "DownList",
        type: type,
        parentid: 0,
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        this.option[type] = res.data;
      });
    },
    userlist() {
      this.$api.execobj({
        action: "userlist",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        this.option["userlist"] = res.data.list;
      });
    },
    handleChange(val) {
      console.log("8888", val);
    },
    handlePagination(val) {
      this.page.currPage = val.page;
      this.potentialDealersList();
    },
    createPotentialDistributor() {
      this.$router.push({ path: "/potentialDistributor/create" });
    },
  },
};
</script>
<style scoped>
.potential-distributor__search {
  display: block!important;
}
.potential-distributor__upload {
  display: inline-block!important;
}
</style>
