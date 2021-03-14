<template>
  <div class="add-source ml-20 mr-20 mt-24">
    <el-input
      class="mt-34 ml-24 mb-30"
      placeholder="请输入内容"
      v-model="input"
    >
    </el-input>
    <div class="add-source__btn ml-24">
      <el-button type="primary" @click="add">添加</el-button>

      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";

export default {
    props:{
         apiType:{
      type:String,
      default: "",
    },
             action:{
      type:String,
      default: "basemain",
    }
    },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    add() {
      api({
        action: this.action,
        name: this.input,
        type: this.apiType,
      }).then((res) => {
        this.$emit("add");
      });
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>
