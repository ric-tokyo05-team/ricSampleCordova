<template>
    <div id="appheader">
        <p>Header</p>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss">
#appheader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #40E0D0;
    z-index: 999;
}
</style>
