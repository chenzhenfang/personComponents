<template>
<div>
<div @click="handleShow">{{this.visible? '显示': '隐藏'}}</div>
  <div class="update" v-show="visible"></div>
</div>
</template>
<script>
export default {
  name: "update",
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleShow() {
      this.$emit("update:visible", !this.visible);
    }
  }
};
</script>
<style lang="less" scoped>
.update {
  width: 100px;
  height: 100px;
  background: red;
  margin: 10px auto;
}
</style>



