<template>
  <div class="Swrap">
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
      <!--头部list-->
      <ul class="list">
        <router-link class="item" v-for="(item,index) in headList"  :to="`/indentify/tab/${index}`"
            :key="index" @click="getColor(index)"> {{item.tabName}}
        </router-link>
      </ul>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default {
    name:"Indentify",
    data(){
      return{
        currentIndex:0,
      }
    },
    mounted(){
      this.$store.dispatch('getHeadList');
    },
    computed:{
      ...mapState(['headList']),
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
.Swrap
  padding-bottom 0.5rem
  background-color gainsboro
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
        &.active
          color #b4282d

</style>
