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
              @click="()=>{id=scope.row.Id;dialogVisible=true}"
            >
              删除
            </div>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <confirm-action-dialog :dialogVisible.sync="dialogVisible" :tips="'请确认信息无误后删除！'" @confirm="del"></confirm-action-dialog>

  </div>
</template>

<script>
import ConfirmActionDialog from '@/components/ConfirmActionDialog';
export default {
  components: {ConfirmActionDialog },
  data(){
    return{
      dialogVisible: false,
      id:''
    }
  },
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
    del() {
      this.$api.execobj({
        action: "userdelete",
        id: this.id,
      }).then((res) => {
        this.$emit("del");
      });
    },
  },
};
</script>
