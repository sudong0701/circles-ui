# NoticeBar 通知栏
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csNoticeBar } from 'circles-ui';

       Vue.use(csNoticeBar);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `text` 属性设置通知栏的内容，通过 `leftIcon` 的slot可以配置最左侧内容

   ```html
    <cs-noticeBar :text="text">
        <template #leftIcon>
            <cs-icon style="padding-right: 0.2rem" name="notification" color="#ed6a0c"></cs-icon>
        </template>
    </cs-noticeBar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                text: '春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。'
            }
        }
    }
   ```
:::

:::card
### 滚动播放
> 通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

   ```html
    <cs-noticeBar :text="text"></cs-noticeBar>
    <cs-noticeBar :text="text" :scrollable="false"></cs-noticeBar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                text: '春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。'
            }
        }
    }
   ```
:::

:::card
### 多行提示
> 文字较长时，可以通过设置 `wrapable` 属性来开启多行展示,需要将 `scrollable` 设置为 `false` 才会生效。

   ```html
    <cs-noticeBar :text="text" :wrapable="true" :scrollable="false"></cs-noticeBar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                text: '春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。'
            }
        }
    }
   ```
:::

:::card
### 通知栏模式
> 通过 `mode` 字段可以设置通知栏模式，通知栏支持 `close` 和 `link` 两种模式。

   ```html
    <cs-noticeBar :text="text" mode="close"></cs-noticeBar>
    <cs-noticeBar :text="text" mode="link"></cs-noticeBar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                text: '春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。'
            }
        }
    }
   ```
:::

:::card
### 自定义样式
> 通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色，通过 `speed` 属性设置滚动速度(单位为px)。

   ```html
    <cs-noticeBar  :text="text" color="rgb(25, 137, 250)" background="rgb(236, 249, 255)"></cs-noticeBar>
    <cs-noticeBar  :text="text" speed="100"></cs-noticeBar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                text: '春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。'
            }
        }
    }
   ```
:::

## API

:::card
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
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'text',
                  remake: '通知栏的文字内容',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'mode',
                  remake: '通知栏模式，可选值close、link',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'scrollable',
                  remake: '是否在长度溢出时滚动',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'wrapable',
                  remake: '是否开启文本换行，需要关闭长度溢出滚动',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'delay',
                  remake: '延迟滚动时间',
                  type: 'Number | String',
                  default: "1(s)"
                },
                {
                  name: 'speed',
                  remake: '通知栏滚动速率，默认单位px',
                  type: 'Number | String',
                  default: '50(px)'
                },
                {
                  name: 'color',
                  remake: '文字颜色',
                  type: 'String',
                  default: '#ed6a0c'
                }, 
                {
                  name: 'background',
                  remake: '通知栏背景颜色',
                  type: 'String',
                  default: '#fffbe8'
                },
                ],
                eventData: [
                {
                  name: 'click',
                  remake: '点击通知栏时触发',
                  param: 'void'
                },
                {
                  name: 'close',
                  remake: 'mode为close时点击右侧关闭按钮触发的事件',
                  param: 'void'
                },
                {
                  name: 'link',
                  remake: 'mode为link时点击右侧按钮触发的事件',
                  param: 'void'
                },
                {
                  name: 'finish',
                  remake: '滚动栏一轮滚动结束时触发',
                  param: 'void'
                },
                {
                  name: 'replay',
                  remake: '滚动栏重新开始滚动时触发',
                  param: 'void'
                }
                ]
    }
  }
}
</script>
:::

:::card
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
    </template>
:::