<template>
  <el-container style="background: #F3F5FA">
    <el-header style="text-align: right; font-size: 12px">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="true">展开</el-radio-button>
        <el-radio-button :label="false">收起</el-radio-button>
      </el-radio-group>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-container>
      <el-aside width="200px" :class="{'show': isCollapse ,'unShow': !isCollapse}" >
        <el-menu
          class="home-menu"
          background-color="#FFFFFF"
          text-color="#B4B4B4"
          :default-active="this.$route.path"
          router
        >
          <template v-for="item in munuList">
            <el-submenu v-if="item.child" :index="item.url" :key="item.id">
              <template slot="title" class="munu-list">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subItem in item.child">
                <el-submenu
                  class="menu__level2"
                   v-if="subItem.child"
                  :index="subItem.url"
                  :key="subItem.id"
                >
                  <template slot="title">
                    <span>{{ subItem.name }}</span>
                  </template>
                  <el-menu-item
                    class="menu__level3"
                    :index="thirdItem.url"
                    v-for="thirdItem in subItem.child"
                    :key="thirdItem.id"
                  >
                    <template>
                      <span>{{ thirdItem.name }}</span>
                    </template>
                  </el-menu-item>
                </el-submenu>
                <el-menu-item class="menu__level2"  v-else :index="subItem.url" :key="subItem.id">
                  <span slot="title">{{ subItem.name }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
            <el-menu-item v-else :index="item.url" :key="item.id">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <el-button type="primary">主要按钮</el-button>
        <!-- <i class="iconfont icondanxuan-hui"></i> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import './index.scss';
export default {
  name: "Left",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      munuList: [
        {
          id: 1,
          name: "潜在经销商",
          url: "/login",
          icon:"iconfont iconqianzaijingxiaoshang-hui"
        },
        {
          id: 2,
          name: "经销商档案",
          url: "/componyinfomanage1",
          icon:"iconfont iconjingxiaoshangdangan-hui"
        },
        {
          id: 3,
          name: "基础主数据",
          url: "/userData3",
          icon:"iconfont iconjichuzhushuju-hui",
          child: [
            {
              id: 30,
              name: "招商主数据",
              url: "/userData30",
              icon:"iconfont iconjichuzhushuju-hui",
              child: [
                {
                  id: 301,
                  name: "数据来源",
                  url: "/componyinfomanage",
                },{
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
                }
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
          icon:"iconfont iconxiugaijilu-hui"
          
        },
        {
          id: 5,
          name: "导入记录",
          url: "/userData5",
          icon:"iconfont icondaorujilu-hui"

        },
        {
          id: 6,
          name: "导出记录",
          url: "/userData6",
          icon:"iconfont icondaochujilu-hui"

        },
        {
          id: 7,
          name: "权限设置",
          url: "/userData7",
          icon:"iconfont iconquanxianshezhi-hui"

        },
      ],
      isCollapse: true,
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>