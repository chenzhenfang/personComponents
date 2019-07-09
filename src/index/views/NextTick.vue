<template>
  <div class="nextTick">
    <button id="firstBtn" @click="testClick" ref="aa">{{testMsg}}</button>
  </div>
</template>
<script>
export default {
  name: "nextTick",
  components: {},
  data() {
    return {
      testMsg: "原始值"
    };
  },
  mounted() {
    console.log(this.$refs.aa.innerText); //输出：原始值
  },
  methods: {
    testClick() {
      console.log(this.$refs.aa.innerText); //输出：原始值
      this.testMsg = "修改值";
      this.$nextTick(function() {
        console.log(this.$refs.aa.innerText); //输出：修改值
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>



