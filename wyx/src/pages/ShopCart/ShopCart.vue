<template>
<div class="head">
  <div class="top">
    <div class="logo">购物车</div>
    <div class="getcard">领券</div>
  </div>
  <div class="content">
    <div class="react">
      <div class="item">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png"/>
        30天无忧退货</div>
      <div class="item">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png">
        48小时快速退款</div>
      <div class="item">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png">
        满88元免邮
      </div>
    </div>
    <div class="shopcart-icon">
      <img src="./images/noCart-a8fe3f12e5.png">
      <div class="cartTitle">去添加点什么吧</div>
    </div>
    <div class="loginbtn" :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">登录</div>
  </div>
</div>
</template>

<script>
    export default {
      name: "ShopCart",
      methods:{
        goTo(path) {
          /*编程式路由导航*/
          this.$router.replace(path)
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.head
  width 7.5rem
  height 3.56rem
  .top
    width: 6.9rem
    height: 0.88rem
    margin 0 0.3rem
    position relative
    .logo
      width: 1.08rem
      height 0.87rem
      position absolute
      left 2.9rem
      display inline-block
      font-size 0.36rem
      line-height 0.87rem
      text-align center
    .getcard
      width: 0.9rem
      height: 0.87rem
      line-height 0.87rem
      text-align center
      position absolute
      right  0.1rem
      color #B4282D;

  .content
    background-color #f4f4f4
    overflow hidden
    position fixed
    padding-bottom 3rem
    .react
      width: 7.5rem
      height:0.7rem
      line-height .7rem
      display flex
      justify-content space-around
      flex-wrap nowrap
      padding-bottom 4rem
      .item
        width: 1.9rem
        height: 0.7rem
        text-align center
        font-size 0.2rem
        line-height 0.7rem
        display inline-block
        img
          width 0.1rem
          height  0.1rem
    .shopcart-icon
      width: 7.5rem
      height: 3rem
      position relative
      img
        width: 2.48rem
        height: 2.48rem
        position absolute
        left 2.6rem
        top 0
      .cartTitle
        width 7.5rem
        height: 0.27rem
        text-align center
        font-size .27rem
        color: #999
        position absolute
        bottom 0
        margin-bottom 0.5rem


    .loginbtn
      width: 4.8rem
      height: 0.92rem
      color: #fff;
      background-color: #b4282d
      border-radius 3%
      margin auto
      text-align center
      font-size 0.3rem
      line-height 0.92rem





</style>
