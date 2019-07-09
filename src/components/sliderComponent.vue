<template>
  <div class="formSlider">
    <div class="inputBox">
      <el-input
        :value="inputValue"
        v-model="inputValue"
        @change="changeValue"
        :max="max"
        :min="min"
      ></el-input>
    </div>
    <div class="slider">
      <el-slider v-model="sliderValue" @change="changeSlider"></el-slider>
    </div>
  </div>
</template>
<script>
export default {
  name: "sliderComponent",
  data() {
    return {
      inputValue: "0",
      sliderValue: 0,
      max: "100",
      min: "0"
    };
  },
  components: {},
  methods: {
    changeValue(val) {
      this.sliderValue = parseInt(val);
      this.inputValue = val;
    },
    changeSlider(val) {
      this.sliderValue = val;
      this.inputValue = val.toString();
    }
  }
};
</script>
<style lang="less" scoped>
.formSlider {
  width: 400px;
  line-height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #68a8ff;
  border-radius: 2px;
  margin: 0 auto;
  .inputBox {
    display: flex;
    width: 75px;;
    padding-right: 5px;
    .el-input__inner:focus {
      box-shadow: none;
    }
    .el-input {
      height: 100%;
      input {
        color: #333333;
        height: 16px;
        padding: 0;
        border-right: none;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid #7eaeff;
        background-color: transparent;
      }
    }
  }
  .slider {
    // flex: 1;
    width: 100%;
    padding: 0 13px 0 9px;
    .el-slider__runway {
      background: #acacac;
      margin: 0;
      height: 4px;
    }
    .el-slider__bar {
      height: 4px;
    }
    .el-slider__button {
      width: 14px;
      height: 14px;
      background-color: #008aff;
      border: none;
    }
    .el-slider__button-wrapper {
      width: 34px;
      height: 34px;
      z-index: 10;
    }
  }
}
</style>



