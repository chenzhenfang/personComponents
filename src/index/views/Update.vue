<template>
  <div class="Upload">
   <Update :visible.sync="visible"></Update>
   <el-button @click="change">Route跳转</el-button>
  </div>
</template>
<script>
import Update from '@/components/update'
export default {
  name: 'updates',
  components: { Update },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    change(){
      this.$router.push({name: 'route', params: {from: 'update'}});
    }
  }
};
</script>
<style lang="less" scoped>
</style>



