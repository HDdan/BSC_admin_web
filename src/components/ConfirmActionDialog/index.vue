<template>
  <el-dialog
    title="提示"
    :visible.sync="visible"
    width="500px"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <div style="text-align: center;font-size: 21px;color: #333333">{{ tips }}</div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="confirm">确 定</el-button>
      <el-button @click="$emit('update:dialogVisible', false)">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    tips: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    dialogVisible: function (val) {
      this.visible = val;
    },
  },
  methods: {
    confirm() {
        this.visible = false;
        this.$emit("update:dialogVisible", false);
        this.$emit("confirm");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>