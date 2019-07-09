<template>
  <div class="Slider">
    <div class="container">
      <SvgIcon id="svgIcon" :iconName="iconname" :width="100" :height="100"></SvgIcon>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/svgIcon";
export default {
  name: "svgCss",
  components: { SvgIcon },
  data() {
    return {
      iconname: "zuqiu"
    };
  },
  mounted() {
    document.onmousemove = function(ev) {
      let oEvent = ev || event;
      let svgs = document.getElementById("svgIcon");
      svgs.style.left = oEvent.clientX + "px";
      svgs.style.top = oEvent.clientY + "px";
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.Slider {
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
}
#svgIcon {
  position: absolute;
}
</style>



