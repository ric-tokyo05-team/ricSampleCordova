<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
import AppHeader from "./Header.vue"
import AppFooter from "./Footer.vue"

export default {
  name: "app",
  components: {
    "appheader": AppHeader,
    "appfooter": AppFooter
  }
}
</script>

<style lang="scss">
</style>