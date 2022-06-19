import { $http } from '@escook/request-miniprogram'
import storeV3 from '@/store/storeV3.js'

const myHttp = $http
// 请求拦截器
myHttp.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...'
  })
  
  // 原因说明：只有在登录之后才允许调用支付相关的接口，所以必须为有权限的接口添加身份认证的请求头字段
  // 判断请求的是否为有权限的 API 接口
  if (options.url.indexOf('/my/') !== -1) {
    // 为请求头添加身份认证字段
    options.header = {
      // 字段的值可以直接从 vuex 中进行获取
      Authorization: storeV3.state.m_user.token,
    }
  }
}


// 响应拦截器
myHttp.afterRequest = function() {
  uni.hideLoading()
}

export default myHttp