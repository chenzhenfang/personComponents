<template>
  <div class="timeFilter">
    <TimeComponent :timeTitle="timeTitle" :size="size" @changeTime="handleTimeChange"></TimeComponent>
  </div>
</template>

<script>
import TimeComponent from "@/components/timeComponent";
export default {
  name: "timeComponent",
  components: { TimeComponent },
  data() {
    return {
      timeTitle: "时间段",
      size: "small"
    };
  },
  mounted() {},
  methods: {
    handleTimeChange(val) {
      console.log(val, "??");
    }
  }
};
</script>
