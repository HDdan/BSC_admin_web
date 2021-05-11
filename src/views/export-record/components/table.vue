<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100"> </el-table-column>
      <el-table-column prop="Module" label="板块" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Filename" label="文件名" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Date" label="时间" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="Status" label="状态" show-overflow-tooltip> </el-table-column>
      <el-table-column
        prop="UserName"
        label="操作者"
      show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" v-if="checkDownload">
        <template slot-scope="scope">
            <a class="mr-15" style="color: #4196ff; cursor: pointer" :href="'http://'+scope.row.Url">
                下载
            </a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import userRoleServices from '../../../services/user-role'
import actionRoleServices from '../../../services/actionRole/export-record';
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
    download(url) {
      window.open(url)
    },
  },
  computed: {
    userType() {
      return userRoleServices.getUserType();
    },
    checkDownload() {
      return actionRoleServices.checkDownload(this.userType);
    }
  },
};
</script>
