<template>
  <view>
    <view class="goods-list">
      <view v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)">
        <my-goods :goods="goods"></my-goods>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    $http
  } from '@escook/request-miniprogram'
  // 请求拦截器
  $http.beforeRequest = function(options) {
    uni.showLoading({
      title: '数据加载中...'
    })
  }
  
  // 响应拦截器
  $http.afterRequest = function() {
    uni.hideLoading()
  }
  export default {
    data() {
      return {
        // 请求参数对象
        queryObj: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        goodsList: [],
        total: 0,
        // 节流阀
        isloading: false
      };
    },
    methods: {
      // 获取商品列表数据的方法
      async getGoodsList(cb) {
        // 打开节流阀
        this.isloading = true
        const { data: res } = await $http.get('https://api-ugo-web.itheima.net/api/public/v1/goods/search', this.queryObj)
        // 关闭节流阀
        this.isloading = false
        cb && cb()
        if (res.meta.status !== 200) return uni.$showMsg()

        this.goodsList = [...this.goodsList, ...res.message.goods]
        this.total = res.message.total
      },
    }
  }
</script>

<style lang="scss">

</style>
