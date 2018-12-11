<template>
  <div class="data-1">
    <div class="left-info">
      <img :src="obj.avatar"/><span class="title">{{obj.nickname}}</span>
      <p class="con-text">{{obj.title}}</p>
      <div class="con-smalltext">{{obj.subTitle}}</div>
      <div class="count iconfont icon-faxian-yanjing">{{obj.readCount}}人看过</div>
    </div>
    <div class="pic"><img :src="obj.picUrl"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        name: "card1",
      props:{
        obj:Object
      },
       computed:{
         ...mapState(['indentify'])
       },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.data-1
  background-color white
  width: 6.9rem
  height: 2.72rem
  padding 0.32rem 0.3rem
  margin 0.2rem auto
  display flex
  justify-content space-between
  .left-info
    width: 4rem
    height: 2.72rem
    display inline-block
    position relative
    overflow hidden
    img
      width 0.54rem
      height: 0.54rem
      position absolute
      border-radius 50%
    .title
      position absolute
      left 0.6rem
      top 0.2rem
    .con-text
      width: 100%;
      font-size: .36rem;
      position absolute
      color: #333;
      line-height: .44rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding-top: 0.8rem;
      font-family: PingFangSC-Regular
    .con-smalltext
      width: 4rem
      height: 0.4rem
      padding-top 0.08rem
      color #7f7f7f
      font-size 0.28rem
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis
      top 1.8rem
      position absolute
    .count
      width 1.3rem
      height 0.32rem
      padding-top 0.08rem
      left 0.2rem
      color #7f7f7f
      font-size 0.2rem
      white-space: nowrap;
      position: absolute
      top: 2.2rem
  .pic
    width: 2.72rem
    height: 2.72rem
    img
      top 0.32rem
      width: 2.72rem
      right 0.3rem

</style>
