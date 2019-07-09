<template>
  <div class="vModel">
    <div class="pt pb event-demo-component">
      <el-button @click="handleEmit">改变内容</el-button>
      <el-button @click="handleToggle">{{visible ? '隐藏' : '显示'}}内容</el-button>
      <el-button @click="handleToggleBefore">{{visible ? '隐藏' : '显示'}}内容前操作</el-button>

      <transition name="el-zoom-in-center">
       <div>{{value}}</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div class="mt">
          <slot name="code" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "vModel",
  components: {},
  props: {
    value: [Number, String],
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleEmit() {
      // 通过emit（‘input’）来改变value的值，即改变父组件v-model里面的值
      this.$emit("input", '通过$emit("input")改变value');
    },

    handleToggle() {
      this.$emit("update:visible", !this.visible);
    },

    handleToggleBefore() {
      if (this.$listeners["before-visible"]) {
        this.$emit("before-visible", this.handleToggle);
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>



