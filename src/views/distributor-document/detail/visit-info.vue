<template>
  <div class="visit-info">
    <div>
      <div class="">
        <span>共6条</span>
        <span>最近更新时间：2021-01-07 17:24:11</span>
      </div>
      <div class="visit-info__header__query">
        <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
          <el-button slot="append" type="primary">检索</el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>