# Popup 弹出层
<br/>


   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csPopup } from 'circles-ui';

       Vue.use(csPopup);
   ```

## 代码演示

### 基础用法
> 通过 `v-model` 控制弹出层是否展示。
   ```html
    <cs-button type="primary" text="展示弹出层" @click="showPopup"></cs-button>
    <cs-popup v-model="isShow">
        <div style="height: 2.4rem">内容</div>
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            showPopup() {
                this.isShow = true
            }
        }
      }
   ```    

### 弹出位置
> 通过 `position` 属性控制弹出层弹出位置，可选值：`top`、`right`、`bottom`、`left`、`center`，默认值为`bottom`。

   ```html
    <cs-button type="primary" text="顶部弹出" @click="showPopupPosition('Top')"></cs-button>
    <cs-button type="primary" text="右侧弹出" @click="showPopupPosition('Right')"></cs-button>
    <cs-button type="primary" text="下部弹出" @click="showPopupPosition('Bottom')"></cs-button>
    <cs-button type="primary" text="左侧弹出" @click="showPopupPosition('Left')"></cs-button>
    <cs-button type="primary" text="中部弹出" @click="showPopupPosition('Center')"></cs-button>

    <cs-popup v-model="isShowTop" position="top">
        <div style="height: 2.4rem">顶部弹出</div>
    </cs-popup>

    <cs-popup v-model="isShowRight" position="right">
        <div style="height: 2.4rem">右侧弹出</div>
    </cs-popup>

    <cs-popup v-model="isShowBottom" position="bottom">
        <div style="height: 2.4rem">下部弹出</div>
    </cs-popup>

    <cs-popup v-model="isShowLeft" position="left">
        <div style="height: 2.4rem">左侧弹出</div>
    </cs-popup>

    <cs-popup v-model="isShowCenter" position="center">
        <div style="height: 1.5rem; width: 3rem">中部弹出</div>
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowTop: false,
                isShowRight: false,
                isShowBottom: false,
                isShowLeft: false,
                isShowCenter: false
            }
        },
        methods: {
            showPopupPosition(type) {
                this[`isShow${type}`] = true
            }
        }
      }
   ``` 

   ### 点击遮罩层关闭
> 通过 `closeOnClickOverlay` 控制是否点击遮罩层后关闭。
   ```html
    <cs-button type="primary" text="点击关闭" @click="showPopupClose"></cs-button>
    <cs-button type="primary" text="不会关闭" @click="showPopupNoClose"></cs-button>

    <cs-popup v-model="isShowClose">
        <div style="height: 3rem">点击遮罩层自动关闭</div>
    </cs-popup>

    <cs-popup v-model="isShowNoClose" :closeOnClickOverlay="false">
        <div style="height: 3rem; position: relative">
            <span style="line-height: 3rem">点击遮罩层不会关闭</span>
            <i class="iconfont icon_close_simple" style="font-size: 0.4rem; position: absolute; right: 0.24rem; 
            top: 0.24rem;cursor: pointer" @click="closePopupNoClose"></i>
        </div>
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowClose: false,
                isShowNoClose: false
            }
        },
        methods: {
            showPopupClose() {
                this.isShowClose = true
            },
            showPopupNoClose() {
                this.isShowNoClose = true
            },
            closePopupNoClose() {
                this.isShowNoClose = false
            }
        }
      }
   ```
## API

### Props

   <template>
   <el-table
        :data="apiData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="130">
        </el-table-column>
        <el-table-column
             prop="default"
             label="默认值"
             width="150">
        </el-table-column>
      </el-table>
    </template>
</template>
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'v-model(isShow)',
                  remake: '控制Popup弹出层的显示隐藏',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'isOverlay',
                  remake: '是否显示背景蒙层',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'closeOnClickOverlay',
                  remake: '是否点击背景蒙层后关闭',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'position',
                  remake: '弹出层位置，可选值top、right、bottom、left、center',
                  type: 'String',
                  default: "'bottom'"
                },
                {
                  name: 'isRound',
                  remake: '是否展示圆角',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'duration',
                  remake: '弹出/收起动画时长',
                  type: 'Number',
                  default: '300(ms)'
                },
                {
                  name: 'lockScroll',
                  remake: '弹出层显示时是否锁定背景滚动',
                  type: 'Boolean',
                  default: 'true'
                }, 
                {
                  name: 'disabled',
                  remake: '是否禁用按钮',
                  type: 'Boolean',
                  default: 'false'
                },
                ],
                eventData: [{
                  name: 'open',
                  remake: 'popup打开时触发',
                  param: '-'
                },
                {
                  name: 'opened',
                  remake: 'popup打开且动画结束时触发',
                  param: '-'
                },
                {
                  name: 'close',
                  remake: 'popup关闭时触发',
                  param: '-'
                },
                {
                  name: 'closed',
                  remake: 'popup关闭且动画结束时触发',
                  param: '-'
                },
                {
                  name: 'click-overlay',
                  remake: '点击遮罩层时触发',
                  param: '-'
                }
                ]
    }
  }
}
</script>

### Events

<template>
   <el-table
        :data="eventData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="事件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="param"
          label="回调参数"
          width="180">
        </el-table-column>
      </el-table>
      <div class="pageBottom"></div>
    </template>


