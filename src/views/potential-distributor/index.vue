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
        class="mr-16"
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
      <el-button type="primary" @click="potentialDealersList">检索</el-button>
      <el-upload
        class="potential-distributor__upload mr-18 ml-40"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :limit="3"
      >
        <i class="mr-3 iconfont icondaorujilu-hui"></i>
        <span>导入</span>
      </el-upload>
      <div
        class="potential-distributor__upload mr-24"
        @click="dialogVisible = !dialogVisible"
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>导出</span>
      </div>
      <el-button
        icon="fz-14 mr-8 iconfont iconxinzeng"
        type="primary"
        @click="createPotentialDistributor"
        >经销商</el-button
      >
    </div>
    <Table :tableData="tableData"></Table>
    <Pagination
      :total="page.totalNum"
      :page.sync="page.currPage"
      :limit.sync="page.pageSize"
      @pagination="handlePagination"
    />
    <Dialog :dialogVisible="dialogVisible" />
  </div>
</template>

<script>
import Table from "./components/table";
import Dialog from "@/components/Dialog";
import Pagination from "@/components/Pagination/index";

import "./index.scss";
export default {
  components: {
    Table,
    Dialog,
    Pagination,
  },
  data() {
    return {
      dialogVisible: false,
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
    fetchRegion(node, resolve) {
      if (!node) {
        return false;
      }

      if (node.level === 0) {
        this.$api({
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
        this.$api({
          action: "DownList",
          type: "city",
          parentid: node.data.value,
        }).then((res) => {
          resolve(
            res.data.map((val) => {
              return {
                value: val.Id,
                label: val.Name,
                leaf: true,
              };
            })
          );
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
      const params = this.params;
      params.action = "PotentialDealersList";
      params.callstarttime = this.callTime ? this.callTime[0] : "";
      params.callendtime = this.callTime ? this.callTime[1] : "";
      params.pushstarttime = this.pushTime ? this.pushTime[0] : "";
      params.pushendtime = this.pushTime ? this.pushTime[1] : "";
      params.pageindex = this.page.currPage;
      params.pagesize = this.page.pageSize;
      this.$api(params).then((res) => {
        this.tableData = res.data;
        this.page.totalNum = res.count;
      });
    },
    baseList(type) {
      this.$api({
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
      this.$api({
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
      this.$api({
        action: "userlist",
        pageindex: 1,
        pagesize: 100000,
      }).then((res) => {
        this.option["userlist"] = res.data;
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
