<template>
  <el-menu
    :collapse="isCollapse"
    style="padding-left:15px"
    background-color="#FFFFFF"
    text-color="#B4B4B4"
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
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
      <left v-if="item.child" :key="item.id" :munuList="item.child"></left>
      
      </el-submenu>
      <el-menu-item
        :class="{ 'is-active': route.indexOf(item.url) > -1 }"
        v-else
        :index="item.url"
        :key="item.id"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
     
  </el-menu>
</template>v-else

<script>
import "../index.scss";
export default {
  name: "Left",
  props: {munuList: Array},
  watch: {
    // 监听 this.$route.path     watch监听非DOM元素的改变
    "$route.path": function (newVal, oldVal) {
      this.route = this.$route.path;
      console.log("1111", this.$route.path.indexOf('/baseInfo/merchantsInfo/dataSource'));
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
 
};
</script>