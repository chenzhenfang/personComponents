<!-- 
json数据结构示例：
dateList: [
  {
    label: 7,
    name: "7天内",
    key: 1,
    type: 'week',
  },
  {
    label: 15,
    name: "15天内",
    key: 2,
      type: 'halfMonth',
  },
  {
    label: 30,
    name: "30天内",
    key: 3,
      type: 'month',
  }
]

数据流：
  当父组件传递data数据，子组件则修改(拷贝)节点数据。不传则显示默认dateList的数据。点击节点emit('change'),把this.resultsData数据emit到父组件，
  父组件再进行数据处理。父组件传递type，触发watch，也可以修改数据信息。currentSelect与type进行绑定，注意点：点击切换节点，记录一下时间，点击
  恢复默认的时候，返回上一次记录的时间，可看handleReset方法。datePickerOptions方法是设置禁用日期（当大于当日日期时，禁用）。

emit事件:
  handleFilterDate：切换节点
  hangleReset：自定义恢复默认
  change：emit出去的数据
-->

<template>
  <div class="timeFitler">
    <div class="sf-timeFitler__label" v-show="timeTitle">{{timeTitle}}</div>
    <div class="date-section-component">
      <el-radio-group v-model="currentSelect" @change="handleFilterDate" :size="size">
        <!-- 不限 -->
        <el-radio-button :label="-1" v-if="showUnlimited">{{unlimitedText}}</el-radio-button>
        <!-- 常规 -->
        <el-radio-button
          :label="item.label"
          :key="index"
          v-for="(item, index) in dateList"
        >{{item.name}}</el-radio-button>
        <!-- 自定义 -->
        <el-radio-button :label="0" v-if="showCustom">
          <span class="dot" v-if="currentSelect === 0"></span>
          <el-date-picker
            v-model="rangTime"
            :popper-class="popperClass + ' ' + uniqueId"
            key="custom-date-picker"
            ref="date-picker"
            type="datetimerange"
            :picker-options="datePickerOptions"
            @change="handlePickerChange"
            :default-time="defaultTimes"
            format="yyyy.MM.dd HH:mm:ss"
            @click.native="handlePickerClick"
          ></el-date-picker>
          {{customText}}
        </el-radio-button>
      </el-radio-group>
    </div>

    <!-- 时间输入有误弹窗 -->
    <el-dialog
      width="20%"
      :visible.sync="dialogVisi"
      :closeOnClickModal="false"
      :append-to-body="true"
      top="20vh"
    >
      <div class="timeDialog">
        <div>
          <span class="title">输入时间有误</span>
          <span class="content">仅可输入今天及今天以前的时间</span>
        </div>
        <div>
          <el-button type="primary" @click="dialogVisi = false">我知道了</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import cloneDeep from "lodash/cloneDeep";
import { setTimeout } from "timers";

export default {
  name: "timeComponent",
  props: {
    value: [String, Array],

    data: {
      type: Array,
      default() {
        return [];
      }
    },
    type: {
      type: Number,
      default: -1
    },

    timeTitle: {
      type: String,
      default: ""
    },

    showUnlimited: {
      type: Boolean,
      default: true
    },

    unlimitedText: {
      type: String,
      default: "不限"
    },
    // 是否显示自定义
    showCustom: {
      type: Boolean,
      default: true
    },

    customText: {
      type: String,
      default: "自定义"
    },

    size: {
      type: String,
      default: "small"
    }
  },

  data() {
    return {
      dialogVisi: false,
      defaultTimes: [
        // 自定义的默认时间
        "00:00:00",
        moment(new Date().getTime() - 300 * 1000).format("HH:mm:ss")
      ],
      currentSelect: "", // 选择类型 type
      rangTime: [], // 开始时间与结束时间的集合

      // 结果数据
      resultsData: {
        type: "",
        startTime: "",
        endTime: "",
        key: "",
        label: ""
      },
      // 默认节点数据
      dateList: [
        {
          label: 7,
          name: "7天内",
          key: 1,
          type: "week"
        },
        {
          label: 15,
          name: "15天内",
          key: 2,
          type: "halfMonth"
        },
        {
          label: 30,
          name: "30天内",
          key: 3,
          type: "month"
        }
      ],

      isInit: true,

      popperClass: "time-filter-popper",

      uniqueId: ""
    };
  },
  watch: {
    type(val) {
      this.currentSelect = val;
      this.isInit = true;
      this.handleFilterDate(val, this.value);
    },
    value(val) {
      this.rangTime = val;
    },
    data: {
      handler(val) {
        this.dateList = cloneDeep(val);
      },
      deep: true
    }
  },
  computed: {
    // 超出当天时间不可选
    datePickerOptions() {
      let _this = this;
      return {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;
        },
        onPick(timeRange) {
          if (timeRange.maxDate) {
            let endTime =
              moment(new Date()).format("YYYY-MM-DD") ===
              moment(timeRange.maxDate).format("YYYY-MM-DD")
                ? // 选择日期为当日时，默认截至时间为当前时间前5min
                  moment(Date.now() - 300 * 1000).format("HH:mm:ss")
                : "23:59:59";

            _this.$set(_this.defaultTimes, 1, endTime);
          }
        }
      };
    }
  },
  mounted() {
    this.initData();
    // 创建唯一名称
    this.uniqueId = "unique-id-" + parseInt(Math.random() * 1000000000000000);
  },
  methods: {
    /**
     * 初始化数据
     */
    initData() {
      if (this.data && this.data.length) this.dateList = cloneDeep(this.data);
      this.resultsData.label = this.type;
      this.currentSelect = this.type;

      // 自定义时间
      if (this.type === 0) {
        if (this.value && this.value instanceof Array && this.value.length) {
          if (this.value[0]) this.resultsData.startTime = moment(this.value[0]);
          if (this.value[1]) this.resultsData.endTime = moment(this.value[1]);
          this.rangTime = JSON.parse(JSON.stringify(this.value));
        }
      } else {
        this.handleFilterDate(this.type, this.value, "init");
      }
    },

    /**
     * 自定义时间选择器点击，改变取消按钮文案
     */
    handlePickerClick() {
      this.$nextTick(() => {
        const inputText = document.querySelectorAll(
          `.${this.popperClass}.${
            this.uniqueId
          } .el-picker-panel__footer .el-button--text>span`
        );
        if (inputText.length) {
          for (const iterator of inputText) {
            iterator.innerText = "恢复默认";
          }
          // 绑定点击事件
          inputText[0].addEventListener("click", this.handleReset, false);
        }
      });
    },
    // key过滤方法
    filterKey(type) {
      let res = "";
      switch (type) {
        case 7:
          res = 1;
          break;
        case 15:
          res = 2;
          break;
        case 30:
          res = 3;
          break;
        case 0:
          res = 0;
          break;
        case -1:
          res = -1;
          break;
      }
      return res;
    },

    /**
     * 恢复默认值
     */
    handleReset() {
      // 延迟恢复默认值，避免与清空操作冲突
      this.$nextTick(() => {
        setTimeout(() => {
          this.currentSelect = this.resultsData.label;
          this.handleFilterDate(this.resultsData.label);
          // 恢复默认时间
          this.defaultTimes = ["00:00:00", this.resultsData.endTime];
          if (this.resultsData.label === -1) {
            this.rangTime = [];
          } else {
            let start = new Date(
              moment(this.resultsData.startTime).format("YYYY-MM-DD : 00:00:00")
            ).getTime();
            this.rangTime = [start, this.resultsData.endTime];
          }
        }, 0);
      });
    },

    /**
     * 时间下拉选择
     */
    handlePickerChange(date) {
      this.handleFilterDate(0, date);
    },

    /**
     * 切换节点
     */
    handleFilterDate(type, date) {
      this.$emit("radioChange", type); // 可要可不要，把type传到父组件（根据需求使用）

      // 过滤时间
      let filterTime = [];
      let filterCurrent = {};

      // 自定义
      if (type === 0) {
        filterCurrent.type = "custom";
        // 选择时间点击确定的时候触发
        if (date && date.length) {
          let currentTime = new Date().getTime();
          let startTime = new Date(date[0]).getTime();
          let endTime = new Date(date[1]).getTime();

          // 判断时间是否输入有误
          if (
            startTime > endTime ||
            startTime > currentTime ||
            endTime > currentTime
          ) {
            this.dialogVisi = true;
            this.rangTime = [
              this.resultsData.startTime,
              this.resultsData.endTime
            ];
            this.handleFilterDate(this.resultsData.label);
            return;
          }

          filterTime = [
            moment(date[0]).format("YYYY-MM-DD HH:mm:ss"),
            moment(date[1]).format("YYYY-MM-DD HH:mm:ss")
          ];
        } else {
          // 如果选择自定义时必须选择时间点击确定后才触发事件，否则终止后续执行
          return;
        }
      } else if (type === -1) {
        // 不限
        filterTime = [];
        filterCurrent.type = "unlimited";
      } else if (type > 0) {
        // 常规操作
        filterTime = [
          moment()
            .subtract("days", type)
            .format("YYYY-MM-DD 00:00:00"),
          moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        ];
        filterCurrent = this.dateList.filter(val => type === val.label)[0]; // 过滤dateList的type，如：week
      }

      let [startTm, endTm] = ["", ""];

      if (filterTime.length) {
        [startTm, endTm] = [
          new Date(filterTime[0]).getTime(),
          new Date(filterTime[1]).getTime()
        ];
      }

      this.rangTime = filterTime;
      // 组装结果
      this.resultsData = {
        type: filterCurrent.type,
        startTime: startTm,
        endTime: endTm,
        key: this.filterKey(type),
        label: type !== 0 ? type : this.resultsData.label
      };
      if (this.isInit) {
        this.isInit = false;
        return;
      }
      this.$emit("changeTime", this.resultsData);
    }
  }
};
</script>

<style lang="less" scoped>
.timeFitler {
  display: flex;
  // height: 0.4rem;
  align-items: center;
  justify-content: center;
  .sf-timeFitler__label{
    padding-right: 12px;
  }
  .el-range-editor.el-input__inner { // 隐藏自定义边框
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0rem;
    top: 0rem;
    padding: 0;
    border: none;
    opacity: 0;
  }
}
</style>