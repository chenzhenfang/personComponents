<template>
  <div class="flex">
    <div class="row1">内容一</div>
    <div class="row2">内容二</div>
    <div class="row3">内容三</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
/* 中间的内容设置flex: 1 0 auto; 底部的内容设置height:100%,width:100%,则会自适应 */
.flex {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .row1 {
    height: 200px;
    background: yellow;
    flex: 1 0 auto;
  }
  .row2 {
    height: 600px;
    background: #f00;
    flex: 1 0 auto;
  }
  .row3 {
    height: 100%;
    width: 100%;
  }
}
</style>



