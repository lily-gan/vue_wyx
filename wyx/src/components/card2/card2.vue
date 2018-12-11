<template>
  <div class="data-2">
    <div class="user-name">
      <div class="user">
        <img :src="obj2.avatar"/>
      </div>
      <span class="xuanmei">{{obj2.nickname}}</span>
    </div>
    <div class="title">{{obj2.title}}</div>
    <div class="pic"><img :src="obj2.picUrl"/></div>
  </div>
</template>
<script>
    export default {
        name: "card2",
      props:{
          obj2:Object
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.data-2
  width 6.9rem
  height: 6.06rem
  padding 0.36rem 0.3rem
  margin 0.2rem 0
  background-color white
  .user-name
    width: 6.9rem
    height: 0.56rem
    .user
      width 0.54rem
      height: 0.54rem
      float left
      img
        top 0.4rem
        width: 0.54rem
        height: 0.54rem
        border-radius 50%
    .xuanmei
      width:0.7rem
      height: 0.54rem
      line-height 0.54rem
      font-size 0.28rem
      text-align center
      vertical-align: middle;
      float: left;
      margin-left 0.1rem


  .title
    width: 6.9rem
    height: 1.04rem
    font-size: .36rem;
    color: #333;
    line-height: .52rem;
    margin: -.08rem 0 .16rem 0;
    overflow: hidden;
    text-overflow: ellipsis;

  .pic
    width 6.9rem
    height: 3.76rem
    margin auto
    img
      widows 6.9rem
      height 3.76rem




</style>
