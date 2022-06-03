<template>

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

      };
    },
    onLoad() {
      // 2. 在 onLoad 中调用获取数据的方法

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped="true">

</style>
