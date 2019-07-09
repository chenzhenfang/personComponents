<template>
  <div class="rightClick" @contextmenu.prevent="handleRightClick">
    <img v-for="(val,i) in imgArr" :src="val" :key="i + 'a'">
    <div class="rightTextBox" :style="rightClickPosition" v-show="showRightClick">
      <div
        class="rightClickText"
        v-for="(item,index) in rightClickTexts"
        :key="index+ 'b'"
        @click="handleClick(item)"
      >{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rightClick",
  data() {
    return {
      imgArr: [
        require('@/static/image/a.jpg'),
        require('@/static/image/b.jpg'),
        require('@/static/image/c.jpg'),
        require('@/static/image/d.jpg')
      ],
      rightClickStyle: { left: 0, top: 0 },
      showRightClick: false,
      rightClickTexts: ["放大", "缩小", "下载"]
    };
  },
  components: {},
  computed: {
    rightClickPosition() {
      return { left: this.rightClickStyle.left, top: this.rightClickStyle.top };
    }
  },
  mounted() {
    document.addEventListener("click", () => {
      this.showRightClick = false;
    });
  },
  methods: {
    handleRightClick(e) {
      this.showRightClick = true;
      this.rightClickStyle.left = e.clientX + "px";
      this.rightClickStyle.top = e.clientY + "px";
    },
    handleClick(val) {
      console.log(val, "选中处理");
    }
  }
};
</script>
<style lang="less" scoped>
.rightClick {
  display: flex;
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  > img {
    width: 250px;
    height: 100%;
  }
  .rightTextBox {
    display: flex;
    flex-direction: column;
    position: fixed;
    box-shadow: 0px 3px 12px 0 rgba(141, 141, 141, 0.35);
    border-radius: 3px;
    overflow: hidden;
    .rightClickText {
      width: 70px;
      line-height: 30px;
      border-bottom: 1px solid #eee;
      background: #fff;
      color: #333;
      cursor: pointer;
      font-size: 15px;
    }
    .rightClickText:last-child {
      border: none;
    }
    .rightClickText:hover {
      background: #4285f4;
      color: #fff;
    }
  }
}
</style>



