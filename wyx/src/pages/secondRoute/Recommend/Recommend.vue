<template>
 <div>
   <Banner v-for="(item,index) in indentify"   v-if="item.ad!==null" :item="item"/>
   <Card1  v-for="(obj,index) in list" :obj="obj" v-if="obj.type===1"/>
   <Card2  v-for="(obj2,index) in list" :obj2="obj2" :key="index" v-if="obj2.type===0"/>
</div>
</template>
<script>
  import Banner from '../../../components/banner/banner.vue'
  import Card1 from '../../../components/card1/card1.vue'
  import Card2 from '../../../components/card2/card2.vue'
  import {mapState} from "vuex"
  export default {
    components:{
      Banner,
      Card1,
      Card2
    },
    data(){
      return{
        list:[]
      }
    },
    props:{
      id:String
    },
    computed:{
      ...mapState(['headList','indentify']),
    },
    watch:{
      indentify(){
        const list=this.list;
        this.indentify.forEach((item,index)=>{
          list.push(...item.topics);
        });
        return list;
      }
    },
    mounted(){
      this.$store.dispatch('getHeadList');
      this.$store.dispatch('getIndentify');
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
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
