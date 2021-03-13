<template>
  <el-container style="background: #f3f5fa">
    <el-header class="home-header">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <div></div>
      <el-dropdown>
        <div class="header-admin">
          <div>
            <i class="iconfont iconyonghuming-2"></i>
            {{ this.$route.path }}
          </div>

          <span>admin</span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
      <Left :munuList="munuList" class="home-menu"/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Left from './components/left.vue';
import "./index.scss";
// import {
//     login
//   } from "@/api/user";
export default {
   components: {
    Left
  },
  data() {
    return {
      munuList: [
        {
          id: 1,
          name: "潜在经销商",
          url: "/potentialDistributor",
          icon: "iconfont iconqianzaijingxiaoshang-hui",
        },
        {
          id: 2,
          name: "经销商档案",
          url: "/distributorDocument",
          icon: "iconfont iconjingxiaoshangdangan-hui",
        },
        {
          id: 3,
          name: "基础主数据",
          url: "/userData3",
          icon: "iconfont iconjichuzhushuju-hui",
          child: [
            {
              id: 30,
              name: "招商主数据",
              url: "/userData30",
              icon: "",
              child: [
                {
                  id: 301,
                  name: "数据来源",
                  url: "/componyinfomanage",
                },
                {
                  id: 302,
                  name: "医院主数据",
                  url: "/userData302",
                },
                {
                  id: 303,
                  name: "产品主数据",
                  url: "/userData303",
                },
                {
                  id: 304,
                  name: "科室主数据",
                  url: "/userData304",
                },
                {
                  id: 305,
                  name: "品牌主数据",
                  url: "/userData305",
                },
              ],
            },
            {
              id: 31,
              name: "OBOR主数据",
              url: "/userData31",
              child: [
                {
                  id: 311,
                  name: "拜访主数据",
                  url: "/userData312",
                },
                {
                  id: 312,
                  name: "调研主数据",
                  url: "/userData312",
                },
              ],
            },
            {
              id: 41,
              name: "拜访主数据",
              url: "/userData41",
            },
            {
              id: 42,
              name: "调研主数据",
              url: "/userData42",
            },
          ],
        },
        {
          id: 4,
          name: "修改记录",
          url: "/userData4",
          icon: "iconfont iconxiugaijilu-hui",
        },
        {
          id: 5,
          name: "导入记录",
          url: "/userData5",
          icon: "iconfont icondaorujilu-hui",
        },
        {
          id: 6,
          name: "导出记录",
          url: "/userData6",
          icon: "iconfont icondaochujilu-hui",
        },
        {
          id: 7,
          name: "权限设置",
          url: "/userData7",
          icon: "iconfont iconquanxianshezhi-hui",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  created() {
console.log("ppppdppdpdpd")
      // new Promise((resolve, reject) => {
        // login({
        //  action:"login",loginname:"admin",password:"13133332222"
        // })
        //   .then(response => {
        //     const { data } = response;
        //     console.log("ppppp",data)
        //     // commit("SET_TOKEN", data.token);
        //     // setToken(data.token);
        //     resolve();
        //   })
        //   .catch(error => {
        //     reject(error);
        //   });
      // });

    console.log("this.$router", this.$route);
  },
};
</script>
