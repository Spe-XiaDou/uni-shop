
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

Vue.config.productionTip = false

App.mpType = 'app'
console.log(store)
const app = new Vue({
    ...App,
    store,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import storeV3 from '@/store/storeV3.js'

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
export function createApp() {
  const app = createSSRApp(App)
  app.use(storeV3)
  return {
    app,
  }
}

// #endif