<template>
  <div>
    <span class="fz-16 mr-20" style="color: #333333">共{{ total }}条</span>
    <span class="fz-14" style="color: #666666" v-if="time">最近更新时间：{{ time }}</span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    time: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>