<template>
  <div>
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
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/swiper1.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper2.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper3.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper5.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper6.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper7.jpg"></div>
        <div class="swiper-slide"><img src="./images/swiper8.jpg"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "HomePage",
    methods:{
      _initScroll(){
        new BScroll('.list',{
          click:true
        });
        //动态指定ul的样式宽度
        const ul=this.$refs.picsUl;
        const liWidth=120;
        const space=6;
        const count=this.info.pics.length;
        const width=(liWidth+space)*count-space;
        ul.style.width=width+"px";
        new BScroll('.list',{
          click:true,
          scrollX:true
        })
      },
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
  .swiper-slide
    width: 100%
    height: 100%
    img
      width: 100%
      height: 100%





</style>
