<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./style/common/basic.scss"
export default {
  name: "App",
};
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  display: flex;
}
a {
  text-decoration: none;
}
</style>
