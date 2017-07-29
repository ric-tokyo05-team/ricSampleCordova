<template>
  <div id="content">
    <div class="search">
    <input v-model="command" placeholder="新宿 ディナー"　@keyup.enter="select_command">
      <a class="search_bottun" href="https://google.com/">
        <span class="fa fa-search"></span>
      </a>
    </div>

      <div class="chat-box">
      <div class="chat-face">
        <i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
      </div>
      <div class="chat-area">
        <div class="chat-hukidashi">
          新宿でおすすめのディナーを教えて！
        </div>
      </div>
    </div>

    <div class="chat-box">
      <div class="chat-area">
        <div class="chat-face-friend">
          <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
        </div>
        <div class="chat-hukidashi-friend someone">
          レストラン〇〇なんていかがでしょうか。
        </div>

        <div class="chat-box">
        <div class="chat-face">
          <i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
        </div>
        <div class="chat-area">
          <div class="chat-hukidashi">
            <p style="white-space: pre-line">{{ message }}</p>
          </div>
        </div>
      </div>

        <div class="send">
        <input v-model="message" placeholder="投稿する！">
          <a class="send_bottun" href="https://google.com/">
            <span class="fa fa-send"></span>
          </a>
        </div>

      </div>
    </div>

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

#content {
    width: 100%;
    height: 2000px;
    margin-top: 60px;
}

#test {
  width: 50px;
  height: 50px;
  color: navy;
}

/* 検索ボタン */
.search{
  text-align: center;
  margin-bottom: 10px;
}

.search_bottun {
  background-color : #FFFFFF;
  color: #4682B4;
  width: 60px;
  height: 60px;
}

/* 投稿ボタン */
.send{
  text-align: center;
  float: top;
  margin-bottom: 10px;
}

.send_bottun {
  background-color : #FFFFFF;
  color: #4682B4;
  width: 60px;
  height: 60px;
}

/* チャットレイアウト */
.chat-box {
    width: 100%;
    height: auto;
    overflow: hidden; /*floatの解除*/
    margin-bottom: 20px;
}

.chat-face {
    float: left;
    margin-right: -120px;
    color: #4682B4;
}

.chat-face-friend {
    float: right;
    margin-left: auto;
    margin-bottom: 10px;
    color: #4682B4;
}

.chat-face img{
    border-radius: 30px;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ddd;
}
.chat-area {
    width: 100%;
    float: right;
}
.chat-hukidashi {
    display: inline-block; /*コメントの文字数に合わせて可変*/
    padding: 15px 20px;
    margin-left: 70px;
    /* border: 1px solid gray; ←削除 */
    border-radius: 10px;
    position: relative; /*追記*/
    background-color: #D9F0FF; /*追記*/
}

.chat-hukidashi-friend {
    display: inline-block; /*コメントの文字数に合わせて可変*/
    padding: 15px 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    /* border: 1px solid gray; ←削除 */
    border-radius: 10px;
    position: relative; /*追記*/
    background-color: #D9F0FF; /*追記*/
}

/* ↓追記↓ */
.chat-hukidashi:after {
    content: "";
    position: absolute;
    top: 50%; left: -10px;
    margin-top: -10px;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #D9F0FF transparent transparent;
}

.chat-hukidashi-friend:after {
    content: "";
    position: absolute;
    top: 50%; right: -20px;
    margin-top: -10px;
    display: block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-color: transparent transparent transparent #BCF5A9;
}

.someone {
    background-color: #BCF5A9;
    position: relative;
    float: right;
}

</style>
