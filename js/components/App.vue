<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
import AppHeader from "./Header.vue"
import Appchat from "./chat.vue"
import AppFooter from "./Footer.vue"

export default {
  name: "app",
  components: {
    "appheader": AppHeader,
    "appchat" :Appchat,
    "appfooter": AppFooter,
  }
}
</script>

<style lang="scss">
</style>
