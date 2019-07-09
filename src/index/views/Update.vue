<template>
  <div class="Upload">
   <Update :visible.sync="visible"></Update>
  </div>
</template>
<script>
import Update from '@/components/update'
export default {
  name: 'updates',
  components: { Update },
  data() {
    return {
      visible: true
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>



