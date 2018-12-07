<template>
<div class="wrap">
  <div class="searchWrap">
    <div class="search">
      <i class="icon"></i><span class="placeholder">搜索商品,共19934款好物</span>
    </div>
  </div>
  <div class="cateNavWrap">
    <div class="nvaWrap">
      <ul>
        <li>12.12专区</li>
        <li>冬季专区</li>
        <li>爆品专区</li>
        <li>新品专区</li>
        <li>鞋包配饰</li>
        <li>居家</li>
        <li>服装</li>
        <li>电器</li>
        <li>洗护</li>
        <li>饮食</li>
        <li>厨具</li>
        <li>婴童</li>
        <li>文体</li>
        <li>特色区</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
  <div class="cateList">
    <div class="pic">
      <img src="./images/w9.jpg">
    </div>
    <div class="list">
      <ul>
        <li><img src="./images/w1.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w2.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w3.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w4.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w5.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w6.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w7.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w8.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w10.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w11.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w12.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w13.png"/>
          <span>严选明星价</span>
        </li>
        <li><img src="./images/w14.png"/>
          <span>严选明星价</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Classify"
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.wrap
  position relative
  .searchWrap
    width 100%
    z-index 100
    height 1rem
    background white
    position fixed !important
    bottom-border-1px(gainsboro)
    .search
      width: 6.9rem
      height: 0.56rem
      display flex
      margin 0.2rem 0.3rem
      flex-flow row nowrap
      -webkit-box-align: center
      align-items: center;
      justify-content: center;
      font-size: .37333rem;
      background-color: #ededed;
      border-radius: .10667rem;
      float: left
      .icon
        width: 0.28rem
        height: 0.28rem
        background-size 100% 100%
        margin-right 0.1rem
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
      .placeholder
        color: #666;
        font-size 0.28rem
  .cateNavWrap
    right-border-1px(gainsboro,1.6rem)
    background-color white
    color rgb(51,51,51)
    display block
    line-height 0.36rem
    font-size 0.24rem
    width 1.62rem
    top 0.88rem
    float left
    position fixed
    .nvaWrap
      width 100%
      ul
        overflow hidden
        margin-bottom 3rem
        padding-top 0.2rem
        li
          box-sizing border-box
          line-height 1rem
          font-size 0.28rem
          color rgb(51,51,51)
          display block
          cursor pointer
          overflow-x hidden
          overflow-y hidden
          text-decoration-style solid
          text-overflow ellipsis
          white-space nowrap
          text-align center
  .cateList
    width: 5.28rem
    height: 13.04rem
    position absolute
    left 1.62rem
    right 0
    top 0
    padding 1rem 0.3rem 0.21rem 0.3rem
    .pic
      padding-top 0.2rem
      width: 5.28rem
      height: 1.92rem
      img
        width: 100%
        height: 100%
    .list
      width: 5.28rem
      padding-bottom 2rem
      ul
        box-sizing border-box
        padding-top 0.2rem
        width: 100%
        height: 100%
        text-align center
        clearFix()
        li
          width: 1.44rem
          height: 2.16rem
          float left
          margin-right 0.3rem
          img
            width: 1.44rem
            height: 1.44rem






</style>
