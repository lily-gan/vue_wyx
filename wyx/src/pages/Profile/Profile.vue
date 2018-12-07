<template>
  <div class="bigwrap">
    <div class="wrap">
      <div class="head">
        <div class="homeWrap iconfont icon-shouye1"></div>
        <div class="mid">
          <a class="discover">网易严选</a>
        </div>
        <div class="search-shop">
          <div class="search-icon iconfont icon-sousuo"></div>
          <div class="shop iconfont icon-gouwuche1"></div>
        </div>
      </div>
    </div>
    <div class="contentwrap">
      <div class="logo"><img src="./images/a1.png"></div>
    </div>
    <div class="login">
      <div class="icon iconfont icon-shouji"></div><span>手机号码登录</span>
    </div>
    <div class="login2">
      <div class="iconpost iconfont icon-youxiang"></div><span>邮箱账号登录</span>
    </div>
    <div class="login3">
      手机号快速登录<span class="iconfont icon-iconfontjiantou2"></span>
    </div>
    <div class="loginWay">
      <div class="way1"><i class="iconfont icon-weixin"></i>微信</div>
      <div class="way2"><i class="iconfont icon-QQ-copy"></i>qq</div>
      <div class="way3"><i class="iconfont icon-weibo"></i>微博</div>
    </div>
  </div>

</template>
<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.bigwrap
  background-color rgb(248,248,248)
  padding-bottom 5.3rem
  position fixed
  overflow hidden
  .wrap
    width: 7.1rem
    height: 0.88rem
    padding-left 0.24rem
    padding-right 0.26rem
    background-color rgb(248,248,248)
    border-bottom solid 0.01rem darkgray
    .head
      width: 100%
      height: 0.88rem
      z-index 99
      font-size 0.14rem
      line-height 0.88rem
      .homeWrap
        width 1.9rem
        height:0.88rem
        font-size 0.46rem
        line-height 0.88rem
        text-align left
        display inline-block
        float left
      .mid
        width: 3.2rem
        height:0.88rem
        text-align center
        float left
        .discover
          line-height 0.5rem
          font-size 0.4rem
          color black
          font-weight blold
        .zhenxuan
          width 0.5rem
          height 0.3rem
          font-size 0.25rem
          padding-left 0.1rem
      .search-shop
        width: 1.41rem
        height 1rem
        float right
        .search-icon
          width 0.62rem
          height: 0.88rem
          font-size 0.46rem
          padding-right 0.2rem
          display inline-block
          float left
        .shop
          width 0.49rem
          height: 0.88rem
          font-size 0.46rem
          display inline-block
          float right
          text-align right
  .contentwrap
    width 7.5rem
    background: #F2F5F4;
    position: relative;
    height: 100%;
    .logo
      width: 7.5rem
      height: 0.9rem
      padding 1.6rem 0
      display flex
      justify-content center
    img
      width: 2.68rem
      height: 0.9rem


  .login
    width: 6.66rem
    height: 0.9rem
    color: #fff
    border: 1px solid #b4282d
    background-color: #b4282d
    margin-bottom 0.32rem
    margin-left auto
    margin-right auto
    vertical-align: middle
    text-align: center
    font-size: .37333rem
    position relative
    .icon
      width 0.4rem
      height: 0.4rem
      line-height 0.9rem
      margin-right 0.2rem
      font-size 0.4rem
      position absolute
      left 2rem
      top 0
      display inline-block
    span
      font-size 0.3rem
      text-align center
      vertical-align middle
      line-height 0.9rem
      display inline-block
  .login2
    width: 6.66rem
    height: 0.9rem
    position relative
    margin-left auto
    margin-right auto
    display flex
    justify-content center
    flex-wrap nowrap
    text-align: center
    border: 1px solid #b4282d
    .iconpost
      width 0.4rem
      height: 0.4rem
      line-height 0.9rem
      margin-right 0.2rem
      font-size 0.4rem
      position absolute
      left 1.9rem
      /*top 0*/
      display inline-block
    span
      font-size 0.3rem
      text-align center
      vertical-align middle
      line-height 0.9rem
      display inline-block
      position absolute
      color #b4282d


  .login3
    width: 6.66rem
    height: 0.3rem
    margin-left auto
    margin-right auto
    display flex
    justify-content center
    margin-top 0.5rem
    color black
    span
      width 0.0.28rem
      height: 0.28rem
      text-align center

  .loginWay
    width: 7.5rem
    height: 0.4rem
    display flex
    justify-content center
    position absolute
    text-align center
    bottom 2rem
    .way1
      width 1.8rem
      height: 0.4rem
      line-height 0.4rem
      text-align center
      color #7e8c8d
      border-right 1px solid #7e8c8d
      i
        display inline-block
        width 1rem
        line-height 0.4rem
        height: 0.4rem

    .way2
      width 1.8rem
      height 0.4rem
      line-height 0.4rem
      text-align center
      color #7e8c8d
      border-right 1px solid #7e8c8d
      i
        display inline-block
        width 1rem
        height 0.4rem
        line-height 0.4rem
    .way3
       width 2rem
       height 0.4rem
       text-align center
       line-height 0.4rem
       color #7e8c8d
      i
        display inline-block
        width 1rem
        height: 0.4rem
        line-height 0.4rem



</style>
