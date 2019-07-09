<template>
  <div class="home">
    <img src="@/assets/logo.png">
    <div class="title">Vue</div>
    <router-link to="/flex">Flex 布局</router-link> |
    <router-link to="/echarts">Echarts 可视化库</router-link> |
    <router-link to="/timeFilter">TimeFilter 时间组件</router-link> |
    <router-link to="/accordion">Accordion 手风琴</router-link> |
    <router-link to="/slider">Slider 进度条</router-link> |
    <router-link to="/rightClick">RightClick 右键</router-link> |
    <router-link to="/tooltips">Tooltips 提示</router-link> |
    <router-link to="/loadings">Loading 加载</router-link> |
    <router-link to="/scroll">Scroll 滚动加载</router-link> |
    <router-link to="/slot">Slot 插槽</router-link> |
    <router-link to="/nextTick">NextTick vue原生方法</router-link> |
    <router-link to="/key">Key 刷新</router-link> |
    <router-link to="/filter">Filter Vue过滤器</router-link> |
    <router-link to="/model">Model Vue自定义事件</router-link> |
    <router-link to="/update">Update Vue emit('update')</router-link> |
    <router-link to="/step">Step 进度条</router-link> |
    <router-link to="/svgCss">Svg 动画</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
  .title {
    margin-bottom: 15px;
  }
  a {
    color: #70dbdb;
  }
}
</style>

