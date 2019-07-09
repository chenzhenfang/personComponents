<template>
  <div class="Scroll">
    <Scroll @loadMore="handleLoadMore">
      <img v-for="(val,i) in imgArr" :src="val" :key="i">
    </Scroll>
  </div>
</template>
<script>
import Scroll from "@/components/scroll";
export default {
  name: "scrolls",
  components: { Scroll },
  data() {
    return {
      imgArr: [
        require("@/static/image/a.jpg"),
        require("@/static/image/b.jpg"),
        require("@/static/image/c.jpg"),
        require("@/static/image/d.jpg")
      ]
    };
  },
  methods: {
    handleLoadMore(){
      console.log(1)
    }
  }
};
</script>
<style lang="less" scoped>
.Scroll {
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  :global(img) {
    width: 500px;
    height: 500px;
  }
}
</style>



