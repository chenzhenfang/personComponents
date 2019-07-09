<template>
  <div class="Accordion">
    <div class="btn" @click="show">{{!showContent ? '收起' : '展开'}}</div>
    <CollapseTransition>
      <div v-show="showContent" class="content"></div>
    </CollapseTransition>
  </div>
</template>
<script>
// CollapseTransition element ui 內置过渡动画
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
export default {
  data() {
    return {
      showContent: true,
    };
  },
  components: { CollapseTransition },
  methods: {
    show() {
      this.showContent = !this.showContent;
    }
  }
};
</script>
<style lang="less" scoped>
.Accordion {
  .content {
    width: 90%;
    height: 200px;
    background: yellow;
  }
}
</style>



