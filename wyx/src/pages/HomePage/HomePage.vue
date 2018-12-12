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
        <div class="inner">
          <ul class="list" v-if="cateList.length>0">
            <li class="tab" v-for="(item,index) in cateList" :key="index"
                @click="getColor(index)" :class="{active:currentIndex===index}">
              {{item.name}}</li>
          </ul>
        </div>
        <div class="toggle-icon-wrap">
          <div class="toggle-icon iconfont icon-arrow_right "></div>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in focusList" :key="index">
        <img :src="item.picUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
    <ul class="ul-grow" v-if="policyDescList.length">
      <li class="grow " v-for="(item,index) in policyDescList" :key="index">
        <img :src="item.icon"/>{{item.desc}}
      </li>
    </ul>
    <div class="swiper-list">
      <div class="item" v-for="(item,index) in kingKongModule.kingKongList">
        <img :src="item.picUrl"/>
        <span>{{item.text}}</span>
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
          <div class="r-top" v-if="indexActivityModule.length">
            <img :src="indexActivityModule[0].picUrl" style="display: inline;">
            <div class="discount">
              <div class="discount-price1">{{indexActivityModule[0].activityPrice}}</div>
              <div class="riginal-price1">{{indexActivityModule[0].originPrice}}</div>
            </div>
            <div class="walfare">{{indexActivityModule[0].title}}</div>
            <div class="today-discount">{{indexActivityModule[0].subTitle}}</div>

          </div>
          <div class="r-button" v-if="indexActivityModule.length">
            <img :src="indexActivityModule[1].picUrl" style="display: inline;">
            <div class="discount2">
              <div class="discount-price2">{{indexActivityModule[1].activityPrice}}</div>
              <div class="riginal-price2">{{indexActivityModule[1].originPrice}}</div>
            </div>
            <div class="to-group">{{indexActivityModule[1].title}}</div>
            <div class="to-mail">{{indexActivityModule[1].tag}}</div>
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
      <ul class="content-list" v-if="tagList.length">
        <a class="item1">
          <img :src="tagList[0].picUrl"/>
          <div class="top-text">{{tagList[0].name}}</div>
          <div class="button-text-left">{{tagList[0].floorPrice}}元起</div>
          <div class="button-text-right">上新</div>
        </a>
        <a class="item2">
          <img :src="tagList[1].picUrl">
          <div class="top-text">{{tagList[1].name}}</div>
          <div class="top-text2">{{tagList[1].floorPrice}}元起</div>
        </a>
        <a class="item3">
          <img :src="tagList[2].picUrl">
          <div class="item3-top-text">{{tagList[2].name}}</div>
          <div class="item3-down-text">{{tagList[2].floorPrice}}元起</div>
        </a>
        <a class="item4">
          <img :src="tagList[3].picUrl"/>
          <div class="item4top-text">{{tagList[3].name}}</div>
          <div class="item4top-text2">{{tagList[3].floorPrice}}元起</div>
        </a>
      </ul>
    </div>
  <div class="dd">到底啦</div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from "vuex"
  export default {
    name: "HomePage",
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      swiper(){
        new Swiper('.swiper-container', {
          loop:true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
          }
        });
      },
      getColor(index){
        this.currentIndex=index;

      }
    },
    watch:{
      focusList:function(){
        this.$nextTick(()=>{
          this.swiper();
        })
      }
    },
    mounted(){
      this.$store.dispatch('getCateList',()=>{
        this.$nextTick(()=>{
          new BScroll('.inner',{
            scrollX: true,
            click: true
          })
        })
      });
      this.$store.dispatch('getFocusList');
      this.$store.dispatch('getKingKongModule');
      this.$store.dispatch('getIndexActivityModule');
      this.$store.dispatch('getPolicyDescLis');
      this.$store.dispatch('getTagList');
    },
    computed:{
      ...mapState(
        ['cateList','focusList','kingKongModule',
        'indexActivityModule','policyDescList','tagList']
      ),
    },
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
        line-height: .53333rem
        text-align: center
        color: #b4282d
        border: 1px solid #b4282d
        border-radius: .10667rem
        margin-left 0.1rem
        float right
    .listWrap
      width: 7.5rem
      .inner
        width: 6.5rem
        height: 0.6rem
        overflow hidden
        white-space nowrap
        display flex
        float left
        .list
          display: flex;
          flex-shrink 0
          padding: 0 0 0 0.4rem;
          background: #fff
          align-items space-around
          text-align center
          .tab
            width 1rem
            height 0.6rem
            flex-shrink 0
            line-height 0.6rem
            align-content center
            margin-right 0.25rem
            &.active
              color: #b4282d
      .toggle-icon-wrap
        width: 1rem
        height: 0.6rem
        float left
        .toggle-icon
          width: 0.6rem
          height: 0.6rem
          line-height 0.6rem
          text-align center
          background-size 100% 100%
          margin-left 0.2rem
  .swiper-container
    width: 7.5rem
    height: 3.69rem
    overflow hidden
    margin-top 1.8rem
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
    font-size 0.26rem
    line-height 0.0.26rem
    text-align center
    display flex
    justify-content space-around
    background-color #FFEDDB
    padding-top  0.2rem
    .grow
      color #B4282D
    img
      width: 0.3rem
      height: 0.3rem
      line-height 0.3rem
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
      span
        text-align center
        margin auto
        font-size 0.26rem

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
          content: '';
          background: #494949;
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
            margin-top 0.1rem
            box-sizing border-box
            position absolute
            left: 2rem
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
            margin-top 0.1rem
            box-sizing border-box
            position absolute
            left: 2rem
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
