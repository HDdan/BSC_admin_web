<template>
  <el-dialog
    title="导出"
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
      <el-checkbox
        v-for="item in filterList"
        class="dialog margin-right-16 margin-bottom-16"
        :key="item.id"
        :label="item.id"
        >{{ item.label }}</el-checkbox>
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
    filterList: {
      type: Array,
      default: []
    }
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
      if (this.checkedCities.length > 0) {
        this.$emit("confirm", this.checkedCities);
        setTimeout(() => {
          this.visible = false;
        }, 200);
      } else {
        this.$message.error('请选择导出条件');
      }
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