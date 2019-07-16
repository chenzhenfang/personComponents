<template>
  <div class="poi">
    <div class="poiInfo">
      <div class="poiNameInfo">
        <span class="poiName" :title="this.poi.name">{{this.poi.name}}</span>
        <span class="poiLevelTwo">{{this.poi.levelTwoType}}</span>
      </div>
      <div class="poiLocationInfo">
        <span class="poiAddress" :title="this.poi.address">{{this.poi.address}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "poi",
  components: {},
  props: {
    poi: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.poiInfo .poiName {
  font-size: 0.16rem;
  color: #4489f1;
}
.sf-poiLevelTwo,
.sf-poiAddress {
  margin-left: 0.1rem;
}
.poiInfo {
  display: flex;
  flex-direction: column;
  padding: 0.19rem;
  width: 220px;
}

.poiNameInfo {
  display: flex;
  justify-content: space-between;
}

.poiName {
  display: block;
  max-width: 150px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
}

.poiLevelTwo {
  color: #999;
  font-size: 0.12rem;
  border: 1px solid #d9e7ef;
  border-radius: 2px;
  padding: 0.03rem;
  background-color: #f4fbff;
  margin-left: 0.1rem;
}

.poiLocationInfo {
  display: inline-flex;
  flex: 1;
  align-items: center;
  margin-top: 0.19rem;
  color: #666;
  font-size: 0.14rem;
}

.poiAddress {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.1rem;
}
</style>



