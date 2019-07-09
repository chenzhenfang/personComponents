<template>
  <div class="Model">
    <VModel v-model="demo" :visible.sync="visible" @before-visible="handleBeforeVisible" />
  </div>
</template>
<script>
import VModel from '@/components/vModel'
export default {
  name: "model",
  components: { VModel },
  data() {
    return {
      demo: "ces",
      visible: true
    };
  },
  methods: {
    /**
     * 操作前处理
     */
    handleBeforeVisible(done) {
      this.$confirm("是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "确定操作!"
          });

          // 执行回调操作
          done();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消操作"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
</style>



