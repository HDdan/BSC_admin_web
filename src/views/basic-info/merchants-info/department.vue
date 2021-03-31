<template>
  <base-main
    :title="'科室主数据'"
    :btnType="'科室数据'"
    :apiType="'department'"
    :placeholder="'医院科室'"
  ></base-main>
</template>

<script>
import BaseMain from "./components/baseMain";
export default {
  components: { BaseMain },
};
</script>

<style></style>
