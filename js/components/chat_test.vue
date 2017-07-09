<template>  
    <div id="content">
        <p>チャットぺージ</p>
        <p>チャット画面を表示するテストページ</p>
        <input v-model="command" placeholder="select command"　@keyup.enter="select_command">

    <div id="attack_list" v-if="command_state === 'コメント'">
        <ul>
            <li v-for="a in attack_list">
                {{ a }}
            </li>
        </ul>
    </div>

    <div id="item_list" v-if="command_state === 'エリア情報'">
        <ul>
            <li v-for="i in item_list">
                {{ i }}
            </li>
        </ul>
    </div>

    <div id="magic_list" v-if="command_state === 'いいね数'">
        <ul>
            <li v-for="m in magic_list">
                {{ m }}
            </li>
        </ul>
    </div>

    <div id="nigeru" v-if="command_state === 'お気に入り数'">
        <p></p>
    </div>
</div>
</template>
<script>
export default {
    name: 'third'
}
</script>

<style lang="scss">
</style>