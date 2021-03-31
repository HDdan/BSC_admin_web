<template>
  <base-main
    :title="'医院主数据'"
    :btnType="'医院数据'"
    :apiType="'hospital'"
    :placeholder="'医院名称'"
  ></base-main>
</template>

<script>
import BaseMain from "./components/baseMain";
export default {
  components: { BaseMain },
};
</script>

<style>
</style>