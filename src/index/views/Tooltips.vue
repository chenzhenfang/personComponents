<template>
  <div class="Tooltips">
    <el-tooltip content="hover content" effect="light" placement="top"> 
      <el-button class="msg">hover 态</el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'tooltips',
  data() {
    return {
    };
  },
  components: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.Tooltips{
  margin-top: 100px;
}
</style>



