<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="180"> </el-table-column>
      <el-table-column prop="Name" label="姓名"> </el-table-column>
      <el-table-column prop="Code" label="员工号"> </el-table-column>
      <el-table-column prop="Phone" label="电话"> </el-table-column>
      <el-table-column
        prop="RoleId"
        label="权限角色"
        :formatter="formatterRoleId"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span style="display: flex">
            <div
              class="mr-15"
              style="color: #4196ff; cursor: pointer"
              @click="editInfo(scope.row)"
            >
              修改
            </div>
            <p>|</p>
            <div
              class="ml-15"
              style="color: #4196ff; cursor: pointer"
              @click="del(scope.row.Id)"
            >
              删除
            </div>
          </span>
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
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2) {
        return "warning-row";
      } else {
        return "";
      }
    },
    formatterRoleId(row, column) {
      return this.$store.getters.roleOptions.filter(
        (v) => v.Id == row.RoleId
      )[0].Name;
    },
    editInfo(data) {
      this.$emit("alter", data);
    },
    del(id) {
      this.$api.execobj({
        action: "userdelete",
        id: id,
      }).then((res) => {
        this.$emit("del");
      });
    },
  },
};
</script>
