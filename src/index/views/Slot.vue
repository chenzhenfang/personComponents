<template>
  <div class="slot">
   <Layout>
     <div slot="left" class="left">left</div>
     <div slot="right" class="right">right</div>
   </Layout>
  </div>
</template>
<script>
import Layout from '@/components/layout'
export default {
  name: 'slots',
  components: { Layout },
  data() {
    return {
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.left{
  height: 300px;
  background: yellow;
}
.right{
  height: 300px;
  background: red;
}
</style>



