<template>
  <el-dialog
    title="提示"
    :visible.sync="visible"
    width="500px"
    :show-close="false"
  >
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <el-checkbox-group
      class="dialog-group mt-24"
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <div style="display:flex"> 
        <el-checkbox
          class="dialog margin-right-16"
          key="基本信息"
          label="基本信息"
          >基本信息</el-checkbox
        >
        <el-checkbox
          class="dialog"
          key="覆盖医院"
          label="覆盖医院"
          >覆盖医院</el-checkbox
        >
      </div>
      <div style="display:flex" class="mt-14">
        <el-checkbox
          class="dialog margin-right-16"
          key="招商沟通记录"
          label="招商沟通记录"
          >招商沟通记录</el-checkbox
        >
        <el-checkbox
          class="dialog"
          key="推送记录"
          label="推送记录"
          >推送记录</el-checkbox
        >
      </div>
    </el-checkbox-group>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="confirm">确 定</el-button>
      <el-button @click="visible = false">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
const cityOptions = ["基本信息", "覆盖医院", "招商沟通记录", "推送记录"];
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false,
    };
  },
  watch: {
    dialogVisible: function (newVal, oldVal) {
      this.visible = true;
      this.checkAll=false
      this.checkedCities=[]

    },
  },
  methods: {
    confirm() {
      setTimeout(() => {
        this.visible = false;
      }, 200);

      this.$emit("confirm");
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>