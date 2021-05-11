<template>
  <el-menu
    :collapse="isCollapse"
   
    :default-active="this.$route.path"
    router
  >
    <template v-for="item in munuList">
      <el-submenu
        :class="{ 'is-active': route.indexOf(item.url) > -1 }"
        v-if="item.child"
        :index="item.url"
        :key="item.id"
      >
        <template slot="title" class="munu-list">
          <i :class="item.icon" :style="{paddingLeft:item.left}"></i>
          <span>{{ item.name }}</span>
        </template>
      <left v-if="item.child" :key="item.id" :munuList="item.child"></left>
      
      </el-submenu>
      <el-menu-item
        :class="{ 'is-active': route.indexOf(item.url) > -1 }"
        v-else-if="item.name != 'OBOR主数据' || (item.name == 'OBOR主数据' && showMenu)"
        :index="item.url"
        :key="item.id"
      >
        <i :class="item.icon" :style="{paddingLeft:item.left}"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
     
  </el-menu>
</template>

<script>
import userRoleServices from '../../../services/user-role'
import actionRoleServices from '../../../services/actionRole/basic-info';

import "../index.scss";
export default {
  name: "Left",
  props: {munuList: Array},
  watch: {
    // 监听 this.$route.path     watch监听非DOM元素的改变
    "$route.path": function (newVal, oldVal) {
      this.route = this.$route.path;
    },
  },
  created() {
    this.route = this.$route.path;
  },
  data() {
    return {
      route: "",
      isCollapse: false,
    };
  },
  computed: {
    userType() {
      return userRoleServices.getUserType();
    },
    showMenu() {
      return actionRoleServices.checkOborMenu(this.userType);
    }
  },
 
};
</script>