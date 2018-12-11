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
        <li v-for="(item,index) in listText" :class="{active:currentIndex===index}" @click="getColor(index)">{{item.name}}</li>
      </ul>
    </div>
  </div>
  <div class="cateList">
    <div class="pic" v-if="listText[0]">
      <img :src="listText[currentIndex].wapBannerUrl">
    </div>
    <div v-if="listText[currentIndex]">
    <Content1 :currentIndex="currentIndex" v-if="listText[currentIndex].type===1"/>
    <Content2 :currentIndex="currentIndex" v-if="listText[currentIndex].type===0"/>
    </div>
  </div>
</div>
</template>
<script>
  import Content1 from '../../components/classify-content1/Content-one.vue'
  import Content2 from '../../components/classify-content2/Content-two.vue'
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
    export default {
        name: "Classify",
      data(){
        return {
          currentIndex:0,
          isRed:false
        }
      },
      components:{
        Content1,
        Content2
      },
      computed:{
        ...mapState(['listText']),

      },
      mounted(){
          this.$store.dispatch('getListText',
            new BScroll('.nvaWrap',{
            scrollY: true,
            click: true
          }));
      },
      methods:{
          getColor(index){
            this.currentIndex=index;
        }
      }
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
      height: 11.5rem
      overflow hidden
      ul
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
          &.active
            color: #b4282d
  .cateList
    width: 5.28rem
    height: 13.04rem
    position absolute
    left 1.62rem
    right 0
    top 0
    padding 1rem 0.3rem 0.21rem 0.3rem
    .pic
      padding-top 0.32rem
      padding-bottom 0.32rem
      width: 5.28rem
      height: 1.92rem
      img
        width: 100%
        height: 100%
</style>
