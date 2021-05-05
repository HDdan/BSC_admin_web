<template>
  <div class="distributor-document-query mb-16">
    <el-input class="mr-16 mb-16" v-model="queryInfo.dealername" placeholder="请输入经销商名称" clearable>
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-select class="mr-16 mb-16" v-model="queryInfo.businesstype" placeholder="业务分型" clearable>
      <el-option
        v-for="item in businessTypeList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-cascader
      clearable
      class="mr-16 mb-16"
      style="width: 200px; line-height: inherit"
      ref="cascaderRegion"
      placeholder="业务区域"
      :props="regionProps"
      @change="selectRegion"
    ></el-cascader>
    <el-select class="mr-16 mb-16" v-model="queryInfo.clientmaintain" placeholder="是否有非临能力" clearable>
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.id"
        :label="item.name"
        :value="item.name">
      </el-option>
    </el-select>
    <el-select class="mr-16 mb-16" v-model="queryInfo.sapid" placeholder="SPAID" clearable>
      <el-option
        v-for="item in option.spaid"
        :key="item.value"
        :label="item.spaid"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select class="mr-16 mb-16" v-model="queryInfo.type" placeholder="经销商类型" clearable>
      <el-option
        v-for="item in option.DealersType"
        :key="item.Id"
        :label="item.Name"
        :value="item.Id">
      </el-option>
    </el-select>
    <el-select class="mr-16 mb-16" v-model="queryInfo.bu" placeholder="涉及BU" clearable>
      <el-option
        v-for="item in option.Bu"
        :key="item.Id"
        :label="item.Name"
        :value="item.Name">
      </el-option>
    </el-select>
    <div class="mb-16" style="display: flex;align-items: center;">
      <el-button type="primary" @click="handleQuery">检索</el-button>
      <div class="distributor-document-query__divider ml-10"></div>
      <div
        class="distributor-document-query__upload mr-10 ml-10"
        @click="downTemplate"
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>下载模版</span>
      </div>
      <div
        class="distributor-document-query__upload mr-10 ml-10"
        @click="dialogFileVisible = !dialogFileVisible"
      >
        <i class="mr-10 iconfont icondaorujilu-hui"></i>
        <span>导入</span>
      </div>
      <div class="distributor-document-query__upload" @click="exportDistributorFile">
        <i class="mr-10 iconfont icondaochujilu-hui"></i>
        <span>导出</span>
      </div>
    </div>
    
    <import-file-dialog :dialogVisible="dialogFileVisible" @dialogImportVisible="dialogImportVisible" :type='"dealers"'></import-file-dialog>
  </div>
</template>
<script>
import ImportFileDialog from "@/components/ImportFileDialog";

export default {
  data() {
    return {
      queryInfo: {
        dealername: '',
        businesstype: '',
        province: '',
        clientmaintain: '',
        sapid: '',
        type: '',
        bu: ''
      },
      businessTypeList: [
        {
          id: "地市经销商",
          name: "地市经销商",
        },
        {
          id: "区域集团型经销商",
          name: "区域集团型经销商",
        },
        {
          id: "省级经销商",
          name: "省级经销商",
        },
      ],
      regionProps: {
        lazy: true,
        lazyLoad: this.fetchRegion,
      },
      selectNonTemporary: [{
        name: '有',
        id: 1
      },{
        name: '无',
        id: 0
      }],
      option: {
        DealersType: null,
        Bu: null,
        spaid: null
      },
      fileList: [],
      dialogFileVisible: false
    }
  },
  created() {
    this.DownList('DealersType');
    this.DownList('Bu');
    this.fetchDealersSAPID();
  },
  methods: {
    downTemplate(){
      window.open('http://dealer.qtdatas.com/file/template/经销商档案主数据.xlsx')
    },
    DownList(type) {
      this.$api.execobj({
        action: "DownList",
        type: type,
        parentid: 0
      }).then(res => {
        this.option[type] = res.data;
      });
    },
    fetchDealersSAPID() {
      this.$api.execobj({
        action: "DealersSAPIDDownList"
      }).then(res => {
        this.option['spaid'] = res.data;
      });
    },
    dialogImportVisible(value) {
      this.dialogFileVisible = value;
      if (!value) {
        this.$emit("importDistributorFile");
      }
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
                leaf: true,
              };
            })
          );
        });
      }
    },
    selectRegion() {
      if (this.$refs.cascaderRegion.getCheckedNodes().length > 0) {
        this.queryInfo.province =
          this.$refs.cascaderRegion.getCheckedNodes()[0].pathLabels[0]
      } else {
        this.queryInfo.province = "";
      }
    },
    handleQuery() {
      this.$emit("handleQuery", this.queryInfo);
    },
    exportDistributorFile() {
      this.$emit("exportDistributorFile", this.queryInfo);
    }
  },
  components: { ImportFileDialog }
}
</script>
<style lang="scss">
.distributor-document-query {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  // height: 36px;
  .el-input {
    width: 200px!important;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 200px;
    height: 36px;
  }
  .el-input--suffix .el-input__inner {
    width: 200px;
    height: 36px;
  }
  .el-select>.el-input {
    width: 200px;
    height: 36px;
  }
  &__divider {
    display: inline-block;
    width: 1px;
    height: 20px;
    border-left: 1px solid #DADADA;
  }
  &__upload{
    display: inline-block;
    align-items: center;
    color: #9B9B9B;
    cursor: pointer;
  }
}

</style>