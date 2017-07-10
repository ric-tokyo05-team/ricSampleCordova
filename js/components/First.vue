<template>
<div id="content">
    <input v-model="command" placeholder="新宿 ディナー"　@keyup.enter="select_command">
    <input type="button" class="fontawesome_submit" value="&#xf002;">
    <input type="button" value=<i class="fa fa-search" aria-hidden="true"></i>>

    <div id="attack_list" v-if="command_state === ''">
        <ul>
            <li v-for="c in command_list">
                {{ c }}
            </li>
        </ul>
    </div>

    <div id="attack_list" v-if="command_state === 'たたかう'">
        <ul>
            <li v-for="a in attack_list">
                {{ a }}
            </li>
        </ul>
    </div>

    <div id="item_list" v-if="command_state === 'どうぐ'">
        <ul>
            <li v-for="i in item_list">
                {{ i }}
            </li>
        </ul>
    </div>

    <div id="magic_list" v-if="command_state === 'まほう'">
        <ul>
            <li v-for="m in magic_list">
                {{ m }}
            </li>
        </ul>
    </div>

    <div id="nigeru" v-if="command_state === 'にげる'">
        <p>にげられない</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'First',
    data: function() {
        return {
            command: "",
        }
    },

    computed: {
        command_state: function() {
            return this.$store.state.command;
        },
        command_list: function() {
            return this.$store.state.command_list;
        },
        attack_list: function() {
            return this.$store.state.attack_list;
        },
        item_list: function() {
            return this.$store.state.item_list;
        },
        magic_list: function() {
            return this.$store.state.magic_list;
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
.fontawesome_submit{
    font-family: FontAwesome;
}

#content {
    width: 100%;
    height: 2000px;
    margin-top: 60px;
}

</style>
