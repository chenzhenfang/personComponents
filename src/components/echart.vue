
<template>
  <div style="this.$props.style"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echart",
  data() {
    return {
      chartLine: null
    };
  },
  props: {
    data: {
      type: Object
    }
  },
  watch: {
    data() {
      this.renderCharts();
    }
  },
  components: {},
  created() {},
  mounted() {
    this.renderCharts();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  destroyed() {
    this.chartLine.clear(this.$el);
    this.chartLine.dispose(this.$el);
    this.chartLine = null;
  },
  methods: {
    renderCharts() {
      if (!this.chartLine) {
        this.chartLine = echarts.init(this.$el, "white");
      }
      this.chartLine.clear(this.$el);
      this.chartLine.setOption(this.data, true);
      this.handleResize();
    },
    handleResize() {
      this.chartLine.resize();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>