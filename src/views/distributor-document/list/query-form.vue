<template>
  <div class="distributor-document-query mb-16">
    <el-input class="mr-16 mb-16" v-model="queryInfo.name" placeholder="请输入经销商名称">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-date-picker
      class="mr-16"
      v-model="queryInfo.time"
      type="month"
      value-format="yyyy-MM"
      format="yyyy 年 MM 月"
      placeholder="选择年月">
    </el-date-picker>
    <el-select class="mr-16" v-model="queryInfo.businessType" placeholder="业务分型">
      <el-option
        v-for="item in businessTypeList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-cascader
      clearable
      class="mr-16"
      style="width: 200px; line-height: inherit"
      ref="cascaderRegion"
      placeholder="业务区域"
      :props="regionProps"
      @change="selectRegion"
    ></el-cascader>
    <el-select class="mr-16" v-model="queryInfo.nonTemporary" placeholder="是否有非临能力">
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-select class="mr-16" v-model="queryInfo.nonTemporary" placeholder="SPAID">
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-select class="mr-16" v-model="queryInfo.nonTemporary" placeholder="经销商类型">
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-select class="mr-16" v-model="queryInfo.nonTemporary" placeholder="涉及BU">
      <el-option
        v-for="item in selectNonTemporary"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-button type="primary" @click="handleQuery">检索</el-button>
    <div class="distributor-document-query__divider ml-16"></div>
    <!-- <el-upload
      class="distributor-document-query__upload mr-10 ml-10"
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
    </el-upload> -->
    <div
      class="distributor-document-query__upload mr-10 ml-10"
      @click="dialogFileVisible = !dialogFileVisible"
      @dialogImportVisible="dialogImportVisible"
    >
      <i class="mr-10 iconfont icondaorujilu-hui"></i>
      <span>导入</span>
    </div>
    <div class="distributor-document-query__upload" @click="exportDistributorFile">
      <i class="mr-10 iconfont icondaorujilu-hui"></i>
      <span>导出</span>
    </div>
    <import-file-dialog :dialogVisible="dialogFileVisible" :type='"dealers"'></import-file-dialog>
  </div>
</template>
<script>
import ImportFileDialog from "@/components/ImportFileDialog";

export default {
  data() {
    return {
      queryInfo: {
        name: '',
        time: '',
        businessType: '',
        businessRegion: '',
        nonTemporary: ''
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
        name: '是',
        id: 1
      },{
        name: '否',
        id: 0
      }],
      fileList: [],
      dialogFileVisible: false
    }
  },
  methods: {
    dialogImportVisible(value) {
      this.dialogFileVisible = value;
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
        this.queryInfo.businessRegion =
          this.$refs.cascaderRegion.getCheckedNodes()[0].pathLabels[0] +
          "/" +
          this.$refs.cascaderRegion.getCheckedNodes()[0].pathLabels[1];
      } else {
        this.queryInfo.businessRegion = "";
      }
    },
    handlePreview() {

    },
    handleRemove() {

    },
    beforeRemove() {

    },
    handleExceed() {

    },
    handleQuery() {
      this.$emit("handleQuery", this.queryInfo);
    },
    importDistributorFile() {
      this.$emit("importDistributorFile");
    },
    exportDistributorFile() {
      this.$emit("exportDistributorFile");
    }
  },
  components: { ImportFileDialog }
}
</script>
<style lang="scss">
.distributor-document-query {
  // display: flex;
  align-items: center;
  // height: 36px;
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