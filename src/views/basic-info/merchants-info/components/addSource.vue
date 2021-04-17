<template>
  <div class="add-source ml-20 mr-20 mt-24">
    <el-input
      class="mt-34 ml-24 mb-30"
      :placeholder="placeholder"
      v-model="input"
    >
    </el-input>
     <el-input
     v-if="apiType=='hospital'"
      class="mt-34 ml-24 mb-30"
      placeholder="医院编号"
      v-model="code"
    >
    </el-input>
     <el-input
     v-if="apiType=='product'"
      class="mt-34 ml-24 mb-30"
      placeholder="主营产品明细"
      v-model="detail"
    >
    </el-input>
    <div class="add-source__btn ml-24">
      <el-button type="primary" @click="add">添加</el-button>

      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>

export default {
    props:{
    apiType:{
      type:String,
      default: "",
    },
    placeholder:{
      type:String,
      default: "",
    },
    },
  data() {
    return {
      input: "",
      detail:"",
      code:""
    };
  },
  methods: {
    add() {
      if (!this.input) {
        this.$message.error('请输入' + this.placeholder);
        return;
      }
      let params={
        action: 'basemain',
        name: this.input,
        type: this.apiType,
      }
      if(this.detail)params.detail=this.detail
      if(this.code)params.code=this.code
      this.$api.execobj(params).then((res) => {
        this.$emit("add");
      });
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>
