<template>
  <div class="route">
   <el-button @click="back">返回</el-button>
   <div class="msg">使用vue参数,返回需要返回的位置</div>
  </div>
</template>
<script>
export default {
  name: 'route',
  components: {},
  data() {
    return {
    };
  },
  methods: {
    back(){
       const routerParams = this.$route.params;
       if(routerParams.from === 'step'){
         this.$router.push('/step');
       } else {
         this.$router.push('/update');
       }
    }
  }
};
</script>
<style lang="less" scoped>
.msg{
  margin: 20px 0;
}
</style>



