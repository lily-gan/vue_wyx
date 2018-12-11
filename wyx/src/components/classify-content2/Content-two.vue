<template>
  <div v-if="listText[currentIndex]">
    <!--v-for="(item,index) in listText[currentIndex].subCateList"-->
    <div class="contentList" v-for="(item,index) in listText[currentIndex].subCateList">
      <div class="hd">{{item.name}}</div>
       <ul class="list">
         <li class="item" v-for="(c,index) in item.categoryList">
           <img :src="c.wapBannerUrl"/>
           <span>{{c.name}}</span>
         </li>
       </ul>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
    export default {
        name: "classify2",
      props:{
          currentIndex:Number
        },
      computed: {
        ...mapState(['listText']),
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.contentList
  width 5.28rem
  margin-bottom 0.12rem
  overflow hidden
  .hd
    bottom-border-1px(lightgray)
    width:5.28rem
    font-size 0.2rem
    padding-bottom 0.08rem
    margin-bottom 0.24rem
  .list
    width:5.28rem
    .item
      width: 1.44rem
      height:2.16rem
      margin-right 0.34rem
      font-size 0.2rem
      text-align center
      float: left
      &:nth-child(3n)
        margin-right 0
      img
        width: 1.44rem
        height:1.44rem
        float: left
        display inline-block
      span
        width: 1.44rem


</style>
