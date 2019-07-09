<template>
  <div class="Loadings" v-loading="loading" @click="showLoading" element-loading-text="数据加载中" element-loading-background="rgba(0, 0, 0, 0.8)"></div>
</template>
<script>
export default {
  name: 'loadings',
  data() {
    return {
      loading: false
    };
  },
  components: {},
  methods: {
    showLoading(){
      this.loading = !this.loading;
    }
  }
};
</script>
<style lang="less" scoped>
.Loadings{
  width: 1500px;
  height: 500px;
  background: red;
  margin: 0 auto;
}
</style>



