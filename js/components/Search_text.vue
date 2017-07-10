//検索機能
<template>
<div id="content">
    <input v-model="command" placeholder="select command"　@keyup.enter="select_command">
    <i class="fa fa-search" aria-hidden="true"></i>
</template>

<script>
export default {
    name: 'First',
    data: function() {
        return {
            command: "",
        }
    },

    methods: {
        select_command(event) {
            this.$store.commit("select_command", this.command);
        }
    }
}
</script>

<style lang="scss">
#content {
    width: 100%;
    height: 2000px;
    margin-top: 60px;
}

</style>
