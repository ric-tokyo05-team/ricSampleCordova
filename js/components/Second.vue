<template>
    <div id="content">
        <p>２ページ目</p>
        <p>apiサーバからjsonをとってくるテスト</p>
        
        <div>
            <ul>
                <li v-for="i in list">
                    {{ i }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Second',
    mounted: function() {
        this.$store.dispatch('load_test_api');
    },
    computed: {
        list: function() {
            return this.$store.state.api_data;
        }
    }
}
</script>

<style lang="scss">
</style>