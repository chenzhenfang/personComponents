<template>
  <div class="home">
    <img src="@/assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  mounted() {
    console.log(`这个是多页面测试页的主页：${this.$store.state.myname}`)
  }
}
</script>