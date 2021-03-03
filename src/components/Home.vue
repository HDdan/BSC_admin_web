<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
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
      <el-aside
        width="200px"
        v-if="isCollapse"
      >
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="this.$route.path"
          router
          unique-opened
        >
          <!-- 一级菜单 -->
          <!-- // :index="item.id +''"(由固定转活动的值，每个el-submenu等级的菜单有一个独有index值，作为使用菜单方法的一个必要搭配，这里绑定当前索引) -->
          <el-submenu :index="item.url" v-for="item in munuList" :key="item.id">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <!-- 图标 -->
              <!-- <i :class="iconsObj[item.id]"></i> -->
              <!-- 文本 -->
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级子菜单 -->
            <el-menu-item
              :index="subItem.url"
              v-for="subItem in item.child"
              :key="subItem.id"
            >
              <!-- 二级菜单模板 -->
              <template slot="title">
                <!-- 文本 -->
                <span>{{ subItem.name }}</span>
              </template>
              <!-- 三级子菜单 -->
              <el-menu-item
                :index="thirdItem.url"
                v-for="thirdItem in subItem.child"
                :key="thirdItem.id"
              >
                <!-- 三级菜单文字 -->
                <template>
                  <!-- 文字 -->
                  <span>{{ thirdItem.name }}</span>
                </template>
              </el-menu-item>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <i class="iconfont icondanxuan-hui"></i>
        <router-view></router-view>
        <!-- <router-view key="/login/index">jhjjjjjkhjhjjjb</router-view> -->
        
        <!-- <router-link to="login" component={Detail}>Home</router-link> -->
        <!-- <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
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
          name: '我是一级菜单',
          url: '/userData',
          child: [
            {
              id: 10,
              name: '我是二级菜单',
              url: '/home'
            }
          ]
        },
        {
          id: 2,
          name: '我是一级菜单',
          url: '/manage',
          child: [
            {
              id: 20,
              name: '我是二级菜单',
              url: '/componyinfomanage',
              child: [
                {
                  id: 201,
                  name: '我是三级菜单',
                  url: '/componyinfomanage'
                }
              ]
            },
            {
              id: 21,
              name: '我是二级菜单',
              url: '/componyinfomanage',
              child: [
                {
                  id: 211,
                  name: '我是三级菜单',
                  url: '/componyinfomanage'
                }
              ]
            },
            {
              id: 22,
              name: '我是二级菜单',
              url: '/manage/setting'
            }
          ]
        },
        {
          id: 3,
          name: '我是一级菜单小三',
          url: '/rule',
          child: [
            {
              id: 30,
              name: '我是二级菜单小五',
              url: '/rule/reception'
            }
          ]}],
      isCollapse: true,
      tableData: Array(20).fill(item),
    };
  },
    computed: {
    key() {
      return this.$route.path
    }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
