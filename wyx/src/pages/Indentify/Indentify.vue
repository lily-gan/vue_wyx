<template>
<div>
  <div class="wrap">
    <div class="head">
        <div class="homeWrap iconfont icon-shouye1"></div>
        <div class="mid">
          <a class="discover">发现</a>
          <a class="zhenxuan">甄选家</a>
      </div>
        <div class="search-shop">
          <div class="search-icon iconfont icon-sousuo"></div>
          <div class="shop iconfont icon-gouwuche1"></div>
        </div>
    </div>
  </div>
  <div class="content">
    <ul class="list">
      <li class="item">推荐</li>
      <li class="item">达人</li>
      <li class="item">上新</li>
      <li class="item">晒单</li>
      <li class="item">HOME</li>
    </ul>
    <div class="banner">
      <img src="./images/s7.jpg"/>
    </div>
    <div class="data-1">
      <div class="left-info">
        <img src="./images/data1.png"/><span class="title">服装组:小服</span>
        <p class="con-text">双十一忘记买羽绒服?没关系,还有双12!</p>
        <div class="con-smalltext">双12时髦保暖羽绒服低至6折</div>
        <div class="count iconfont icon-faxian-yanjing">24.5k人看过</div>
      </div>
      <div class="pic"><img src="./images/s3.jpg"></div>
    </div>
    <div class="data-2">
      <div class="user-name">
        <div class="user">
          <img src="./images/data2.png"/>
        </div>
        <span class="xuanmei">选妹</span>
      </div>
      <div class="title">冬季要如何穿出惊艳感,来看看这些搭配和单品,获得更多传达灵感</div>
      <div class="pic"><img src="./images/s5.jpg"/></div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "Indentify"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    width: 7rem
    height: 1rem
    padding-left 0.24rem
    padding-right 0.26rem
    background-color rgb(248,248,248)
    border-bottom solid 0.01rem darkgray
    .head
      width: 100%
      height: 1rem
      z-index 99
      font-size 14px
      line-height 1rem
      .homeWrap
        width 1.9rem
        height:1rem
        font-size 0.46rem
        line-height 1rem
        text-align left
        display inline-block
        float left
      .mid
        width: 3.2rem
        height: 1rem
        text-align center
        float left
        .discover
          line-height 0.5rem
          font-size 0.4rem
          color #b4282d;
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
          height: 1rem
          font-size 0.46rem
          padding-right 0.2rem
          display inline-block
          float left
        .shop
          width 0.49rem
          height: 1rem
          font-size 0.46rem
          display inline-block
          float right
          text-align right
  .content
    background-color gainsboro
    .list
      width: 7.5rem
      height: 0.72rem
      background-color rgb(248,248,248)
      margin-bottom 0.2rem
      display flex
      justify-content space-around
      border-bottom solid 0.01rem darkgray
      .item
        height: 0.72rem
        line-height 0.72rem
        margin 0 0.2rem
        padding 0 0.08rem
        font-size 0.28rem
        text-align center
        color gray
    .banner
      width: 6.9rem
      height: 3.76rem
      background-color white
      padding 0.36rem 0.3rem
      margin 0 auto
      img
        width: 100%
        height: 100%
        margin 0 auto


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
