<template>
  <div class="Step">
    <Steps :active="activeStep" :stepList="stepList"></Steps>
    <el-button @click="pre" class="preButton">上一步</el-button>
    <el-button @click="next" class="nextButton">下一步</el-button>
  </div>
</template>
<script>
import Steps from "@/components/steps";
export default {
  name: "step",
  components: { Steps },
  data() {
    return {
      activeStep: 1,
      stepList: [{ title: "步骤1" }, { title: "步骤2" }, { title: "步骤3" }]
    };
  },
  methods: {
    next() {
      this.activeStep += 1;
    },
    pre() {
      if (this.activeStep <= 1) {
        this.activeStep = 1;
      } else {
        this.activeStep--;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.nextButton,
.preButton {
  margin-top: 20px;
}
</style>



