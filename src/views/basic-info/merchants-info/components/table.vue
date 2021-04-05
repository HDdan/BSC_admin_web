<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="180"> </el-table-column>
      <el-table-column v-if="apiType == 'source'" prop="Name" label="数据来源">
      </el-table-column>
      <el-table-column
        v-if="apiType == 'hospital'"
        prop="HospitalName"
        label="医院名称"
        width="180"
      >
      </el-table-column>
      <el-table-column
        v-if="apiType == 'hospital'"
        prop="HospitalCode"
        label="医院编号"
      >
      </el-table-column>
      <el-table-column
        v-if="apiType == 'product'"
        prop="Name"
        label="主营产品类型"
        width="180"
      >
      </el-table-column>
      <el-table-column
        v-if="apiType == 'product'"
        prop="Detail"
        label="主营产品明细"
      >
      </el-table-column>
      <el-table-column
        v-if="apiType == 'department'"
        prop="Name"
        label="医院科室"
      >
      </el-table-column>
      <el-table-column v-if="apiType == 'brand'" prop="Name" label="主营品牌">
      </el-table-column>
      <el-table-column v-if="action == 'userlist'" prop="Name" label="姓名">
      </el-table-column>
      <el-table-column v-if="action == 'userlist'" prop="RoleId" label="员工号">
      </el-table-column>
      <el-table-column v-if="action == 'userlist'" prop="Phone" label="电话">
      </el-table-column>
      <el-table-column v-if="action == 'userlist'" prop="Code" label="权限角色">
      </el-table-column>
      <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.Id)" type="text" size="medium">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: [],
    },
    apiType: {
      type: String,
      default: "",
    },
    action: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick(val){
      this.$api.execobj({
        action: 'BaseDelete',
        type: this.apiType,
        id:val
      }).then((res) => {
        this.$emit('del')
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2) {
        return "warning-row";
      } else {
        return "";
      }
    },
  },
};
</script>
