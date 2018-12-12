<template>
  <div>
    <div class="banner" v-if="item.ad">
      <img :src="item.ad.picUrl" />
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        name: "banner",
      props:{
          item:Object
      },
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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

</style>
