<template>
  <svg
    :class="svgClass"
    :width="svgWidth"
    :height="svgHeight"
    :fill="svgFill"
    :transform="svgTransform"
    :opacity="svgOpacity"
  >
    <use :xlink:href="'#icon-' + iconName" />
  </svg>
</template>
<script>
export default {
  name: "svgIcon",
  components: {},
  props: {
    // 类名
    svgClass: {
      type: String,
      default: ""
    },
    // 宽度
    svgWidth: {
      type: String,
      default: "100"
    },
    // 高度
    svgHeight: {
      type: String,
      default: "100"
    },
    // 填充颜色
    svgFill: {
      type: String,
      default: "#000"
    },
    // 动画
    svgTransform: {
      type: String,
      default: "translate(0,0)"
    },
    // 透明度
    svgOpacity: {
      type: String,
      default: "1"
    },
    iconName: {
      type: String,
      default: "",
      required: true // 必填
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>



