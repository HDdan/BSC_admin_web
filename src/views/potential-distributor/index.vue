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
        v-model="params.callstarttime"
        type="daterange"
        range-separator="-"
        start-placeholder="沟通开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr-16 mb-16"
        v-model="params.callendtime"
        type="daterange"
        range-separator="-"
        start-placeholder="沟通开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-select
        class="mr-15 mb-16"
        v-model="params.mainproducts"
        placeholder="主营产品类型"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        class="mr-15 mb-16"
        v-model="params.department"
        placeholder="合作科室"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        class="mr-15 mb-16"
        v-model="params.sources"
        placeholder="数据来源"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        class="mr-15 mb-16"
        v-model="params.province"
        placeholder="业务区域"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        class="mb-16"
        v-model="params.callusername"
        placeholder="沟通专员"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        class="mr-16"
        v-model="params.pushusername"
        placeholder="推送专员"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" @click="potentialDealersList">检索</el-button>
      <el-upload
        class="potential-distributor__upload mr-18 ml-40"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
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
      <el-button icon="fz-14 mr-8 iconfont iconxinzeng" type="primary"
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
        pageSize: 12,
        totalNum: 0,
      },
    };
  },
  created() {
    this.potentialDealersList();
  },
  methods: {
    potentialDealersList() {
      const params = this.params;
      params.action = "PotentialDealersList";
      params.pageindex = this.page.currPage;
      params.pagesize = this.page.pageSize;
      this.$api(params).then((res) => {
        this.tableData = res.data;
        this.page.totalNum = res.count;
      });
    },
  },
};
</script>
