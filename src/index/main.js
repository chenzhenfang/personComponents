import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import ElementUI from 'element-ui'
import Lodash from 'lodash'
import Echarts from 'echarts'
import infiniteScroll from 'vue-infinite-scroll'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import * as custom from '../filters'
// 全局指令
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Lodash);
Vue.use(Echarts);
Vue.use(infiniteScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
