<template>
  <div class="mr-20 ml-20">
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="Id" label="序号" width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="Date"
        label="时间"
        width="200"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column  
        prop="UserName"
        label="操作者"
        width="150"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="DealerName"
        label="经销商名称"
        show-overflow-tooltip
        width="200"
      >
      </el-table-column>
      <el-table-column label="具体操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <span>把</span>
          <span style="color: #242424; font-weight: bold">{{
            scope.row.Field
          }}</span>
          <span>中的</span>
          <span
            style="color: #4196ff; font-weight: bold"
            v-html="scope.row.OldContent"
          ></span>
          <span>修改为</span>

          <span
            style="color: #4196ff; font-weight: bold"
            v-html="scope.row.NewContent"
          ></span>
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
  data(){
    return{
      userlistOption:[]
    }
  },
  created(){
  this.$api.execobj({
      action: "userlist",
      parentid: 0,
      pageindex: 1,
      pagesize: 100000,
    }).then((res) => {
      this.userlistOption = res.data.list;
    });
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
      window.open(url);
    },
  },
};
</script>
