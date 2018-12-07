<template>
  <div class="bigWrap">
    <div class="wrap">
      <div class="top">
        <div class="logo"></div>
        <div class="search">
          <i class="icon"></i><span class="placeholder">搜索商品,共19934款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="listWrap">
        <div class="list-swrap">
          <div class="list">
            <div class="tab">推荐</div>
            <div class="tab">家居</div>
            <div class="tab">鞋包配饰</div>
            <div class="tab">服饰</div>
            <div class="tab">电器</div>
            <div class="tab">洗护</div>
            <div class="tab">饮食</div>
            <div class="tab">餐厨</div>
            <div class="tab">婴童</div>
            <div class="tab">文体</div>
            <div class="tab">特色区</div>
          </div>
        </div>
        <div class="toggle-icon-wrap">
          <div class="toggle-icon"></div>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/swiper1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="./images/swiper2.jpg">
        </div>
        <div class="swiper-slide"><img src="./images/swiper3.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper5.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper6.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper7.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper8.jpg"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
    <ul class="ul-grow">
      <li class="grow "><i class="iconfont icon-gouhao "></i>网易自营品牌</li>
      <li class="grow "><i class="iconfont icon-gouhao "></i>30天无忧退货</li>
      <li class="grow "><i class="iconfont icon-gouhao "></i>48小时快速退款</li>
    </ul>
    <div class="swiper-list">
      <div class="item">
        <img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png"/>
        <span>居家</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/46d33b9a9fbb659fcbac37ec58d51e62.png">
        <span>鞋包</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/31831ada59dc10319cba195620ed9ed0.png">
        <span>服饰</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/45833c71d4b0d0de0755a20f893fa25f.png">
        <span>电器</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/2fde77529e90a26427d1c02faa3bfbf6.png">
        <span>婴童</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/15e364ca93313bbd6e87dfcba7ae7b74.png">
        <span>电器</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/793bca13bb931475ea7f0c00299362bb.png">
        <span>电器</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/fc3e359da08577228354da61ea912c99.png">
        <span>电器</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/97eb6fd2c7ea76a3a42b9dafa3bd6543.png">
        <span>电器</span>
      </div>
      <div class="item">
        <img class="img" src="http://yanxuan.nosdn.127.net/db5e2ce8c66f7db3f4282ecb24a64236.png">
        <span>电器</span>
      </div>
    </div>
    <!--第一个模块-->
    <div class="module-first">
      <div class="text-wrap">
        <div class="title-text"><span></span>新人专享礼<span></span></div>
      </div>
      <div class="content">
        <div class="left">
          <div class="left-text">新人专享礼包</div>
          <div class="left-img">
            <img data-original="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png"
                 data-src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png"
                 data-reactid=".0.4.2.1.0.1.0.0"
                 src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" style="display: inline;"></div>
        </div>
        <div class="right">
          <div class="r-top">
            <img data-original="http://yanxuan.nosdn.127.net/217edbe618d60ab813c0c4e2a8864199.png"
                 data-src="http://yanxuan.nosdn.127.net/217edbe618d60ab813c0c4e2a8864199.png"
                 src="http://yanxuan.nosdn.127.net/217edbe618d60ab813c0c4e2a8864199.png" style="display: inline;">
            <div class="discount">
              <div class="discount-price1">￥99</div>
              <div class="riginal-price1">￥69</div>
            </div>
            <div class="walfare">福利社</div>
            <div class="today-discount">今日特价</div>

          </div>
          <div class="r-button">
            <img data-original="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png"
                 data-src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png"
                 src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png" style="display: inline;">
            <div class="discount2">
              <div class="discount-price2">￥49</div>
              <div class="riginal-price2">￥29</div>
            </div>
            <div class="to-group">新人拼团</div>
            <div class="to-mail">一元起包邮</div>
          </div>
        </div>
      </div>
    </div>
    <div class="module-second">
      <div class="line"></div>
      <div class="module-title">
        <div class="left-title">品牌制造商直供</div>
        <div class="right-more ">更多<span class="iconfont icon-iconfontjiantou2"></span></div>
      </div>
      <ul class="content-list">
        <a class="item1">
          <img src="http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1"/>
          <div class="top-text">海外制造商</div>
          <div class="button-text-left">9.9元起</div>
          <div class="button-text-right">上新</div>
        </a>
        <a class="item2">
          <img src="http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1">
          <div class="top-text">CK制造商</div>
          <div class="top-text2">25元起</div>
        </a>
        <a class="item3">
          <img src="http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1">
          <div class="item3-top-text">新秀丽制造商</div>
          <div class="item3-down-text">34.9元起</div>
        </a>
        <a class="item4">
          <img src="http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1"/>
          <div class="item4top-text">MIJI制造商</div>
          <div class="item4top-text2">35元起</div>
        </a>
      </ul>

    </div>
  <div class="dd">到底啦</div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "HomePage",
    mounted(){
      this.swiper()
    },
    methods:{
      swiper(){
        new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
        });
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.bigWrap
  overflow hidden
  padding-bottom 1.5rem
  .wrap
    width: 100%
    position fixed
    top 0
    left 0
    z-index:100
    background-color white
    .top
      width: 6.9rem
      height: 0.56rem
      padding 0.3rem
      .logo
        width: 1.38rem
        height: 0.4rem
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        background-size 100% 100%
        display inline-block
        float left
        margin-right 0.2rem
      .search
        width: 4.42rem
        height: 0.56rem
        display flex
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

      .loginBtn
        width: 0.72rem
        height: 0.53333rem
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left 0.1rem
        float right

    .listWrap
      width: 7.5rem
      height: 0.6rem
      .list-swrap
        width: 6.5rem
        height: 0.6rem
        overflow hidden
        white-space nowrap
        float left
        .list
          display: flex;
          flex-flow: row nowrap
          flex-shrink: 0
          padding: 0 .4rem;
          background: #fff;
          overflow hidden
          white-space nowrap
          .tab
            width 0.879rem
            height 0.6rem
            float left
            margin 0.2rem

      .toggle-icon-wrap
        width: 1rem
        height: 0.6rem
        float left
        padding-top 0.25rem
        padding-bottom 0.15rem
        .toggle-icon
          width: 0.3rem
          height: 0.3rem
          text-align center
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
          background-size 100% 100%
          margin-left 0.2rem

  .swiper-container
    width: 7.5rem
    height: 3.69rem
    overflow hidden
    margin-top 2.2rem
    .swiper-slide
      text-align center
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img
        width: 100%
        height: 100%
  .ul-grow
    width: 100%
    height: 0.72rem
    text-align center
    display flex
    justify-content space-around
    background-color #FFEDDB
    padding-top  0.2rem
    .grow
      color #B4282D
  .swiper-list
    width: 7.5rem
    height: 3.41rem
    display flex
    justify-content center
    flex-wrap wrap
    background-color #FFEDDB
    padding-bottom 0.4rem
    .item
      width: 1.1rem
      height 1.56rem
      margin 0.1rem 0.2rem 0.09rem  0.2rem
      text-align: center
      img
        width: 1.1rem
        height 1.1rem

        /*模块一*/
  .module-first
    width: 100%
    margin-bottom 0.3rem
    background-color white
    overflow hidden
    .text-wrap
      text-align center
      width 100%
      padding-top 0.2rem
      padding-bottom 0.2rem
      position relative
      .title-text
        font-size 0.32rem
        line-height 0.5rem
        margin-left 0.2rem
      span:before
          content: '';                 /*CSS伪类用法*/
          background: #494949;       /*宽和高做出来的背景横线*/
          width: 6%;
          height:0.03rem
          position absolute
          left 2.5rem
          top 0.5rem
      span:after
        content: '';                 /*CSS伪类用法*/
        background: #494949;       /*宽和高做出来的背景横线*/
        width: 6%;
        height:0.03rem
        position absolute
        left 4.8rem
        top 0.5rem

      .text-content
        box-sizing border-box
        width: 1.6rem
        height: 0.9rem
    .content
      width: 7.2rem
      height: 4.37rem
      box-sizing border-box
      padding-left  0.3rem
      position relative
      .left
        box-sizing border-box
        display: block
        width: 3.43rem
        height: 4.34rem
        background: #F9E9CF
        border-radius: .05333rem
        margin-right: .05333rem
        float: left;
        color: #333
        .left-text
          box-sizing border-box
          width: 3.13rem
          height 0.48rem
          font-size 0.3rem
          padding 0.3rem
        .left-img
          box-sizing border-box
          width 2.28rem
          height 2.29rem
          text-align center
          float right
          margin 0.5rem 0.57rem
        img
          width:100%
          height: 100%

      .right
        box-sizing border-box
        width: 3.42rem
        height 4.34rem
        float right
        position absolute
        top 0
        right 0
        .r-top
          box-sizing border-box
          width: 3.42rem
          height: 1.95rem
          background: #FBE2D3
          position absolute
          top 0
          img
            margin-top 0.2rem
            width: 1.5rem
            height: 1.5rem
            position: absolute
            left 1.5rem
            padding-top 0.5rem
          .walfare
            width: 3.13rem
            height: 0.48rem
            padding-left 0.2rem
            padding-top 0.2rem
          .today-discount
            width: 3.13rem
            height: 0.48rem
            font-size 0.1rem
            padding-left 0.2rem
            color #7e8c8d
          .discount
            margin-top 0.2rem
            box-sizing border-box
            position absolute
            left: 1.8rem
            text-align center
            width 1rem
            height: 1rem
            background: #F59524
            border-radius 50%
            opacity 0.8
            color white
            padding-top .13333rem;
            .discount-price1
              padding 0.05rem;
              line-height 0.3rem
              font-size: 0.09rem
            .riginal-price1
              text-decoration line-through
              line-height 0.3rem
              font-size 0.05rem
        .r-button
          width: 3.43rem
          height: 2.35rem
          box-sizing border-box
          position absolute
          top 1.97rem
          background: #FFECC2;
          border-radius: 0.04rem
          img
            width: 2rem
            height 2rem
            position: absolute
            left 1.5rem
            padding-top 0.5rem
          .discount2
            margin-top 0.2rem
            box-sizing border-box
            position absolute
            left: 1.8rem
            text-align center
            width 1rem
            height: 1rem
            background: #F59524
            border-radius 50%
            opacity 0.8
            color white
            .discount-price2
              padding 0.05rem;
              line-height 0.3rem
              font-size: 0.09rem
            .riginal-price2
              text-decoration line-through
              line-height 0.3rem
              font-size 0.05rem
          .to-group
            width: 3.13rem
            height: 0.48rem
            padding-left 0.2rem
            padding-top 0.2rem
          .to-mail
            margin-left 0.1rem
            width: 1.3rem
            height: 0.48rem
            font-size 0.1rem
            line-height 0.48rem
            color white
            font-weight 500
            background-color #7e8c8d
            opacity 0.7
            border-radius 5%
            text-align center




          /*模块二*/
  .module-second
    width: 100%
    .line
      background-color gainsboro
      height: 0.2rem
      width: 100%
    .module-title
      margin-left 0.3rem
      margin-right 0.3rem
      width: 6.9rem
      height: 1rem
      position relative
      .left-title
        width: 2.5rem
        height: 1rem
        font-size 0.35rem
        white-space nowrap
        line-height 1rem
        font-family: PingFangSC-Regular;
      .right-more
        font-size 0.2rem
        text-align right
        position absolute
        top 0.4rem
        right 0.2rem

    .content-list
      width: 6.94rem
      height: 5.28rem
      padding-left 0.3rem
      padding-right 0.26rem
      padding-top 0.26rem
      padding-bottom 0.26rem
      position relative
      .item1
        width: 3.43rem
        height: 2.6rem
        display:inline-block
        margin: 0 .05333rem .05333rem 0;
        float left
        position relative
        img
          width: 100%
          height: 100%
        .top-text
          position absolute
          width: 3.43em
          height: 0.33rem
          line-height .33rem
          white-space nowrap
          cursor:pointer
          margin-top 0.3rem
          font-size 0.28rem
          left 1rem
          top 0
          color black
        .button-text-left
          width: 3.43rem
          height: 0.36rem
          position absolute
          left 1rem
          top 0.7rem
          font-size 0.2rem
        .button-text-right
          width: 0.7rem
          height: 0.32rem
          background-color rgb(203, 182, 147)
          position absolute
          right 0.8rem
          top 0.7rem
          font-size 0.2rem
          color white
          text-align center

      .item2
        width: 3.43rem
        height: 2.6rem
        display:inline-block
        position absolute
        margin-top 0.3rem
        top 0
        right 0.3rem
        .top-text
          width: 3.43rem
          height: .33rem
          position absolute
          text-align center
          left 0.2rem
          top 0.5rem
          color black
        .top-text2
          width 3.43rem
          height 0.36rem
          position absolute
          left 1.5rem
          top 0.9rem
          font-size 0.2rem
          color #7e8c8d

        img
          width: 100%
          height: 100%
      .item3
        width: 3.43rem
        height: 2.6rem
        display:inline-block
        margin: 0 .05333rem .05333rem 0;
        position absolute
        left 0.3rem
        top 3rem
        .item3-top-text
          width: 3.43rem
          height: .33rem
          position absolute
          text-align center
          left 0
          top 0.3rem
          color black
        .item3-down-text
          width 3.43rem
          height 0.33rem
          position absolute
          text-align center
          left 0
          top 0.7rem
          font-size 0.2rem
          color #7e8c8d






        img
          width: 100%
          height: 100%



      .item4
        width: 3.43rem
        height: 2.6rem
        display:inline-block
        margin: 0 .05333rem .05333rem 0;
        position absolute
        right  0.2rem
        top 3rem
        .item4top-text
          width: 3.43rem
          height: .33rem
          position absolute
          text-align center
          left 0.2rem
          top 0.3rem
          color black
        .item4top-text2
          width 3.43rem
          height 0.36rem
          position absolute
          left 1.5rem
          top 0.6rem
          font-size 0.2rem
          color #7e8c8d
        img
          width: 100%
          height: 100%

  .dd
    text-align center
    color #7e8c8d
</style>
