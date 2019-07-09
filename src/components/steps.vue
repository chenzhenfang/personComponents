<template>
  <div class="sf-sfSteps">
    <div class="sf-sfSteps__content">
      <div
        class="sf-sfStepItem"
        :style="`flex-basis: 22%`"
        v-for="(item,index) in stepList"
        :key="index"
      >
        <div class="sf-sfStepItem__content" :class="`${computeStatus(index)}`">
          <div class="sf-sfStepItem__icon" :data-index="index + 1"></div>
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "steps",
  components: {},
  props: {
    active: {
      type: Number,
      default: 1
    },
    status: {
      type: String,
      default: ""
    },
    stepList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    computeStatus(index) {
      let status = "finish";
      if (index + 1 < this.active) {
        status = "finish";
      } else if (index + 1 === this.active) {
        status = "process";
      } else {
        status = "wait";
      }
      return status;
    }
  }
};
</script>
<style lang="less" scoped>
.sf-sfSteps {
  width: 100%;
  height: 52px;
  line-height: 52px;
  .sf-sfSteps__content {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    & .sf-sfStepItem:last-child .sf-sfStepItem__content {
      &::after {
        display: none;
      }
    }
  }
}

.sf-sfStepItem {
  position: relative;
  flex-shrink: 1;
  &:last-child {
    flex-basis: auto !important;
    flex-shrink: 0;
    flex-grow: 0;
  }
  .finish {
    color: #4285f4;
    .sf-sfStepItem__icon {
      background-color: #4285f4;
    }
  }
  .process {
    color: #4688f4;
    .sf-sfStepItem__icon {
      background-color: #4285f4;
    }
  }
  .wait {
    color: #666666;
    .sf-sfStepItem__icon {
      background-color: #b1bbc7;
    }
  }
  .sf-sfStepItem__content {
    text-align: center;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: center;
    &::after {
      content: "......";
      width: calc(100% - 100px);
      text-align: center;
      height: 0;
      position: absolute;
      right: 10px;
      top: -2px;
    }
  }
  .sf-sfStepItem__icon {
    width: 18px;
    height: 18px;
    background-color: rgba(66, 133, 244, 0.6);
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: attr(data-index);
      color: #ffffff;
    }
  }
}
</style>



