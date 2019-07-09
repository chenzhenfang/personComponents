<template>
  <div class="Key" :key="Refresh">
    <Layout>
      <div slot="left" class="left" @click="refresh">
       點我刷新頁面
      </div>
      <div slot="right" class="right">
        <TimeComponent></TimeComponent>
      </div>
    </Layout>
  </div>
</template>
<script>
import Layout from "@/components/layout";
import TimeComponent from "@/components/timeComponent";
export default {
  name: "key",
  components: { Layout, TimeComponent },
  data() {
    return {
      Refresh: ""
    };
  },
  methods: {
    refresh() {
      this.Refresh = Math.random();
    }
  }
};
</script>
<style lang="less" scoped>
.left,.right{
 height: 200px;
 display: flex;
 justify-content: center;
 align-items: center;
}
.left{
  background: red;
}
.right{
  background: yellow;
}
</style>



