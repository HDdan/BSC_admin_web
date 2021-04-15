<template>
  <el-dialog
    title="导入原因"
    :visible.sync="visible"
    width="500px"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <div>
      <div class="mb-16">请输入导入原因,不多于20字</div>
      <el-input v-model="input" maxlength="20" style="width: 100%!important"></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-upload
        class="potential-distributor__upload mr-18"
        action="http://dealer.qtdatas.com/api/Boke/Upload"
        multiple
        :before-upload="beforeFileUpload"
        :http-request="handleFilePreview"
        :show-file-list="false"
      >
        <el-button type="primary">确定</el-button>
      </el-upload>
      <el-button @click="cancel()">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: false,
      input: '',
    };
  },
  watch: {
    dialogVisible: function (val) {
      this.visible = val;
      this.input = '';
    },
  },
  methods: {
    cancel() {
      this.visible = false;
      this.$emit("dialogImportVisible", false);
    },
    beforeFileUpload(file) {
      let type = file.name.toLowerCase()
      let isXLSX = /\.(xlsx)$/.test(type)
      if (!isXLSX) {
        this.$message.error('上传文件暂时只支持XLSX格式')
      }
      return isXLSX;
    },
    handleFilePreview(param) {
      let formData = new FormData();
      formData.append('file', param.file);
      formData.append('userid', getToken());
      formData.append('reason', this.input);
      formData.append('type', this.type);
      this.$api.upload(formData).then(() => {
        this.cancel();
      }).catch(() => {
        this.cancel();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: center;
}
</style>