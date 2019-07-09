<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/flex">Flex</router-link>|
      <router-link to="/echarts">Echarts</router-link>|
      <router-link to="/timeFilter">TimeFilter</router-link>|
      <router-link to="/accordion">Accordion</router-link>|
      <router-link to="/slider">Slider</router-link>|
      <router-link to="/rightClick">RightClick</router-link>|
      <router-link to="/tooltips">Tooltips</router-link>|
      <router-link to="/loadings">Loading</router-link>|
      <router-link to="/scroll">Scroll</router-link>|
      <router-link to="/slot">Slot</router-link>|
      <router-link to="/nextTick">NextTick</router-link>|
      <router-link to="/key">key</router-link> |
      <router-link to="/filter">Filter</router-link> |
      <router-link to="/model">Model</router-link> |
      <router-link to="/update">Update</router-link> |
      <router-link to="/step">Step</router-link> |
      <router-link to="/svgCss">SvgCss</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
