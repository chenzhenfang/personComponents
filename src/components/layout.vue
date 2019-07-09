<template>
  <div class="layout">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
  .layout {
    display: flex;
    height: calc(100% - 61px);
    .left {
      width: 560px;
      flex: none;
      box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.13);
    }
    .right {
      flex: auto;
    }
  }
</style>



