<template>
  <div class="Tooltips">
    <el-tooltip effect="light" placement="top">
      <el-button class="msg">hover 态</el-button>
      <div slot="content">
        <PoiInfo :poi="result" />
      </div>
    </el-tooltip>
  </div>
</template>
<script>
import PoiInfo from "@/components/poi";
export default {
  name: "tooltips",
  data() {
    return {
      result: 
        {
          levelOneType: "房地产",
          address: "深圳市南山区沁园路4269深圳市南山区沁园路4269",
          distance: "5",
          province: "广东省",
          city: "深圳市",
          district: "南山区",
          latitude: "22.611151765955",
          levelTwoType: "宿舍",
          name: "深圳麒麟山庄员工宿舍深圳麒麟山庄员工宿舍",
          longitude: "113.97357189201"
        }
      
    };
  },
  components: { PoiInfo },
  methods: {}
};
</script>
<style lang="less" scoped>
.Tooltips {
  margin-top: 100px;
}
</style>



