<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-distance="10" class="scroll">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "scroll",
  props: {
  },
  data() {
    return {
      isInit: true
    };
  },
  components: {},
  methods: {
    loadMore() {
      if (this.isInit) {
        this.isInit = false;
        return;
      }
      this.$emit("loadMore");
    }
  }
};
</script>
<style lang="less" scoped>
.scroll {
  height: 1000px;
  overflow: auto;
}
</style>



