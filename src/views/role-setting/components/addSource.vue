<template>
  <div class="add-source ml-20 mr-20 mt-24">
    <el-input
      class="mt-34 ml-24"
      placeholder="姓名"
      v-model="name"
      style="width: 30%"
    >
    </el-input>
    <el-input
      class="mt-34 ml-16"
      placeholder="员工号"
      v-model="code"
      style="width: 30%"
    >
    </el-input>
    <el-input
      class="mt-34 ml-16"
      placeholder="电话"
      v-model="phone"
      style="width: 30%"
    >
    </el-input>
    <el-select class="mt-10 ml-24" v-model="roleid" placeholder="权限角色">
      <el-option v-for="item in roleOptions" :key="item.Id" :value="item.Name">
      </el-option>
    </el-select>
    <div class="add-source__btn ml-24 mt-30">
      <el-button type="primary" @click="add">添加</el-button>

      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";

export default {
  props: {},
  data() {
    return {
      name: "",
      roleid: "",
      code: "",
      phone: "",
      roleOptions: this.$store.getters.roleOptions,
      id:0,
    };
  },
  methods: {
    add() {
      api({
        action: "useredit",
        name: this.name,
        id: this.id,
        code: this.code,
        phone: this.phone,
        roleid: this.roleOptions.filter((v) => v.Name == this.roleid)[0].Id,
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
