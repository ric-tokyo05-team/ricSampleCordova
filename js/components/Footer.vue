<template>
    <div id="appfooter">
        <router-link to="/">first page</router-link>
        <router-link to="/second">second page</router-link>
        <router-link to="/third">third page</router-link>
    </div>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss">
#appfooter {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #0000ff;
    z-index: 999;
}
</style>
