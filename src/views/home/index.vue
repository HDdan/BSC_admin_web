<template>
  <el-container style="background: #f3f5fa">
    <el-header class="home-header">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <div></div>
      <el-dropdown @command="resetToken">
        <div class="header-admin">
          <div>
            <i class="iconfont iconyonghuming-2"></i>
          </div>

          <span>admin</span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Left :munuList="munuList" class="home-menu" />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Left from "./components/left.vue";
import "./index.scss";
import { login } from "@/api/user";
import Watermark from "@/utils/watermark"; //路径不要写错
export default {
  components: {
    Left,
  },
  mounted: function() {
    Watermark.set("2020年01月12日  20时", "admin  U87653421");
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
          url: "/baseInfo",
          icon: "iconfont iconjichuzhushuju-hui",
          child: [
            {
              id: 30,
              name: "招商主数据",
              url: "/merchantsInfo",
              icon: "",
              left: "15px",
              child: [
                {
                  id: 301,
                  name: "数据来源",
                  url: "/baseInfo/merchantsInfo/source",
                  left: "30px",
                },
                {
                  id: 302,
                  name: "医院主数据",
                  url: "/baseInfo/merchantsInfo/hospital",
                  left: "30px",
                },
                {
                  id: 303,
                  name: "产品主数据",
                  url: "/baseInfo/merchantsInfo/product",
                  left: "30px",
                },
                {
                  id: 304,
                  name: "科室主数据",
                  url: "/baseInfo/merchantsInfo/department",
                  left: "30px",
                },
                {
                  id: 305,
                  name: "品牌主数据",
                  url: "/baseInfo/merchantsInfo/brand",
                  left: "30px",
                },
              ],
            },
            {
              id: 31,
              name: "OBOR主数据",
              url: "/userData31",
              left: "15px",
              child: [
                {
                  id: 311,
                  name: "基础主数据",
                  url: "/userData312",
                  left: "30px",
                },
                {
                  id: 312,
                  name: "销量主数据",
                  url: "/userData312",
                  left: "30px",
                },
                {
                  id: 313,
                  name: "SFE主数据",
                  url: "/userData313",
                  left: "30px",
                },
                {
                  id: 314,
                  name: "优势标签主数据",
                  url: "/userData314",
                  left: "30px",
                },
                {
                  id: 315,
                  name: "线上线下赋能主数据",
                  url: "/userData315",
                  left: "30px",
                },
              ],
            },
            {
              id: 41,
              name: "拜访主数据",
              url: "/userData41",
              left: "15px",
            },
            {
              id: 42,
              name: "调研主数据",
              url: "/userData42",
              left: "15px",
            },
          ],
        },
        {
          id: 4,
          name: "修改记录",
          url: "/modifyRecord",
          icon: "iconfont iconxiugaijilu-hui",
        },
        {
          id: 5,
          name: "导入记录",
          url: "/importRecord",
          icon: "iconfont icondaorujilu-hui",
        },
        {
          id: 6,
          name: "导出记录",
          url: "/exportRecord",
          icon: "iconfont icondaochujilu-hui",
        },
        {
          id: 7,
          name: "权限设置",
          url: "/roleSetting",
          icon: "iconfont iconquanxianshezhi-hui",
        },
      ],
    };
  },
  computed: {},
  methods: {
    resetToken() {
      this.$store.dispatch("user/resetToken").then(() => {
        location.reload();
      });
    },
  },
  created() {},
};
</script>
