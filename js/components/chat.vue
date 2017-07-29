<template>
  <div class="chat-box">
  <div class="chat-face">
    <img src="./icon_man.jpeg" alt="自分のチャット画像です。" width="90" height="90">
  </div>
  <div class="chat-area">
    <div class="chat-hukidashi">
      ふきだしなのですーふきだしですーふきだー
    </div>
  </div>
</div>

<div class="chat-box">
  <div class="chat-face">
    <img src="./icon_man.jpeg" alt="誰かのチャット画像です。" width="90" height="90">
  </div>
  <div class="chat-area">
    <div class="chat-hukidashi someone">
      ふきだしだよ<br>
      へへへ
    </div>
  </div>
</div>
</template>

<script>

</script>

<style lang="scss">

#content {
    width: 100%;
    height: 2000px;
    margin-top: 60px;
}

.chat-box {
    width: 100%;
    height: auto;
    overflow: hidden; /*floatの解除*/
    margin-bottom: 20px;
}
.chat-face {
    float: left;
    margin-right: -120px;
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
    margin-left: 120px;
    margin-top: 10px;
    border: 1px solid gray;
    border-radius: 10px;
}

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
.someone {
    background-color: #BCF5A9;
}
.someone:after {
    border-color: transparent #BCF5A9 transparent transparent;
}
</style>
