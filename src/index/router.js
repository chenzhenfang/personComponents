import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Flex from './views/Flex.vue'
import Echarts from './views/Echarts.vue'
import TimeFilter from './views/TimeFilter.vue'
import Accordion from './views/Accordion.vue'
import Slider from './views/Slider.vue'
import RightClick from './views/RightClick.vue'
import Tooltips from './views/Tooltips.vue'
import Loadings from './views/Loadings.vue'
import Scroll from './views/Scroll.vue'
import Slot from './views/Slot.vue'
import NextTick from './views/NextTick.vue'
import Key from './views/Key.vue'
import Filter from './views/Filter.vue'
import Model from './views/Model.vue'
import Update from './views/Update.vue'
import Step from './views/Step.vue'
import SvgCss from './views/SvgCss.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Flex',
      name: 'flex',
      component: Flex
    },
    {
      path: '/Echarts',
      name: 'echarts',
      component: Echarts
    },
    {
      path: '/TimeFilter',
      name: 'timeFilter',
      component: TimeFilter
    },
    {
      path: '/Accordion',
      name: 'accordion',
      component: Accordion
    }, 
    {
      path: '/Slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/RightClick',
      name: 'rightClick',
      component: RightClick
    },
    {
      path: '/Tooltips',
      name: 'tooltips',
      component: Tooltips
    },
    {
      path: '/Loadings',
      name: 'loadings',
      component: Loadings
    },
    {
      path: '/Scroll',
      name: 'scroll',
      component: Scroll
    },
    {
      path: '/Slot',
      name: 'slot',
      component: Slot
    },
    {
      path: '/NextTick',
      name: 'nextTick',
      component: NextTick
    },
    {
      path: '/Key',
      name: 'key',
      component: Key,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/Filter',
      name: 'filter',
      component: Filter,
    },
    {
      path: '/Model',
      name: 'model',
      component: Model,
    },
    {
      path: '/Update',
      name: 'update',
      component: Update,
    },
    {
      path: '/Step',
      name: 'step',
      component: Step,
    },
    {
      path: '/SvgCss',
      name: 'svgCss',
      component: SvgCss,
    }
  ]
})
