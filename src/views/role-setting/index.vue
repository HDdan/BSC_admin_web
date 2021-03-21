<template>
    <base-main
    :title="'权限设置'"
    :btnType="'权限角色'"
  ></base-main>

</template>

<script>
import baseMain from './components/baseMain'
export default {
  components: { baseMain },
  created(){
    this.$store.dispatch("user/roleOptions");
  }
}
</script>

<style>

</style>