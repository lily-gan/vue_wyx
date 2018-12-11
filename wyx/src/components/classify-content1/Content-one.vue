<template>
  <div class="list">
    <ul v-if="listText[currentIndex]">
      <li v-for="(item,index) in listText[currentIndex].subCateList" :key="index">
        <img :src="item.bannerUrl"/>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
    export default {
      name: "classify1",
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
      font-size 0.2rem
      margin-right 0.3rem
      img
        width: 1.44rem
        height: 1.44rem






</style>
