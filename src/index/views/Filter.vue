<template>
  <div class="Filter">
    <div>{{name | toUpCase}} 大写过滤器(局部)</div>
    <div>{{text | lowercase}} 小写过滤器(全局)</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      name: "czf",
      text: 'HANGZHOU'
    };
  },
  methods: {},
  filters: {
    toUpCase(val) {
      return val.toUpperCase();
    }
  }
};
</script>
<style lang="less" scoped>
</style>



