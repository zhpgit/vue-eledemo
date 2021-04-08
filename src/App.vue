<template>
  <div>
   <v-header  :seller='seller'></v-header>
   <div class="tab">
     <div class="tab-item border-1px">
       <router-link to="/goods">商品</router-link>
     </div>
     <div class="tab-item">
       <router-link to="/ratings">评论</router-link>
       </div>
     <div class="tab-item">
       <router-link to="/seller">商家</router-link>
       </div>
   </div>
   <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header/header.vue';
  // const ERR_OK = 0;
  export default {
    data () {
      return {
        seller: {}
      };
    },
    created () {
      this.axios.get('/api/seller').then(response => {
        this.seller = response.data.data;
      });
    },
    components: {
      vHeader
    }
  };
</script>

<style lang="stylus">
  @import "./common/stylus/mixin.styl";
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align :center
      & > a
         display block
         font-size :14px
         color: rgb(77,85,93)
        .router-link-active
             color :rgb(240,20,20)
</style>
