<template>
  <div class="box">
    <img src="/images/girl.jpg" />
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
  </div>
</template>
<script>
export default {
  name: "positions",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.box {
  width: 800px;
  height: 600px;
  background: rgba(0, 0, 0, 0.4);
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .one,
  .two,
  .three,
  .four {
    width: 100px;
    height: 100px;
    position: absolute;
    background-repeat: no-repeat;
  }
  .one {
    left: 125px;
    background-image: url("/images/border1.png");
    top: 20px;
  }
  .two {
    top: 20px;
    right: 50px;
    background-image: url("/images/border2.png");
  }
  .three {
    bottom: -50px;
    left: 120px;
    background-image: url("/images/border3.png");
  }
  .four {
    bottom: -35px;
    right: 90px;
    background-image: url("/images/border4.png");
  }
}
</style>



