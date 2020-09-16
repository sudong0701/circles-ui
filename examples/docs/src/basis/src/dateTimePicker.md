# DateTimePicker 日期时间选择器
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csDateTimePicker } from 'circles-ui';

       Vue.use(csDateTimePicker);
   ```
:::   

## 代码演示
<font color=red> * 由于移动端手势Touch事件无法在PC端模拟，所以文档目前不能模拟手势事件(涉及的组件太多，需要集中处理)，所以文档目前仅支持click事件。可以[点击这里](https://sudong0701.github.io/circles-UI-docs/#/demo/dateTimePicker)体验完整功能的组件，后续会对组件进行优化(1.添加PC端mouse事件；2.添加惯性滚动；3.提供更多类型的时间选择器)。</font>

:::card
### 选择年月日
> DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 `date` 表示选择年月日。通过 min-date 和 max-date 属性可以确定可选的时间范围。通过 `v-model` 指定当前选中的时间，示例配合popup组件使用。

   ```html
    <cs-button type="primary" text="选择年月日" @click="showDate"></cs-button>

    <cs-popup v-model="isShowDate">
        <csDateTimePicker ref="picker" v-model="currDate" :minDate="minDate" :maxDate="maxDate"></csDateTimePicker>
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowDate: false,
                currDate: new Date(),
                minDate: new Date('2018-07-27'),
                maxDate: new Date('2021-07-27')
            }
        },
        methods: {
            showDate() {
                this.isShowDate = true
            }
        }
    }
   ```
:::

:::card
### 选择年月日时分秒
> 将 `type` 设置为 `datetime` 即可选择完整时间，包括年月日和小时、分钟、秒。

   ```html
    <cs-button type="primary" text="选择完整时间" @click="showDateTime"></cs-button>

    <cs-popup v-model="isShowDateTime">
        <csDateTimePicker type="datetime" v-model="currDate" :minDate="minDateTime" :maxDate="maxDateTime"></csDateTimePicker>
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowDateTime: false,
                currDate: new Date(),
                minDateTime: new Date('2018-07-27 19:22:33'),
                maxDateTime: new Date('2021-07-27 19:22:33')
            }
        },
        methods: {
            showDateTime() {
                this.isShowDateTime = true
            }
        }
    }
   ```
:::

:::card
   ### 选择年月
> 将 `type` 设置为 `year-month` 即可选择年月。

   ```html
    <cs-button type="primary" text="选择年月" @click="showYearMonth"></cs-button>

    <cs-popup v-model="isShowYearMonth">
        <csDateTimePicker type="year-month" v-model="currDate" :minDate="minDate" :maxDate="maxDate"></csDateTimePicker>
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowYearMonth: false,
                currDate: new Date(),
                minDate: new Date('2018-07-27'),
                maxDate: new Date('2021-07-27'),
            }
        },
        methods: {
            showYearMonth() {
                this.isShowYearMonth = true
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
:::

<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'v-model(value)',
                  remake: '当前选中的时间',
                  type: 'Date',
                  default: 'new Date()'
                },
                {
                  name: 'type',
                  remake: '时间选择器类型，可选值 datetime、year-month，默认值date',
                  type: 'String',
                  default: "'date'"
                },
                {
                  name: 'isShowTitle',
                  remake: '是否展示title',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'title',
                  remake: '标题的文字',
                  type: 'String',
                  default: "'标题'"
                },
                {
                  name: 'right-button-text',
                  remake: '右边按钮文案',
                  type: 'String',
                  default: "'确认'"
                },
                {
                  name: 'left-button-text',
                  remake: '左边按钮文案',
                  type: 'String',
                  default: "'取消'"
                },
                {
                  name: 'right-button-color',
                  remake: '右边按钮颜色',
                  type: 'String',
                  default: '#1989FA'
                },
                {
                  name: 'left-button-color',
                  remake: '左边按钮颜色',
                  type: 'String',
                  default: '#333'
                }, 
                {
                  name: 'minDate',
                  remake: '最小可选时间',
                  type: 'Date',
                  default: '10年前的今天'
                },
                {
                  name: 'maxDate',
                  remake: '最大可选时间',
                  type: 'Date',
                  default: '10年后的今天'
                },
                ],
                eventData: [{
                  name: 'change',
                  remake: '当前选中的时间改变时触发',
                  param: 'event: Date'
                },
                {
                  name: 'clickLeftBtn',
                  remake: '点击左边按钮时触发',
                  param: 'event: Date'
                },
                {
                  name: 'clickRightBtn',
                  remake: '点击右边按钮时触发',
                  param: 'event: Date'
                }
                ]
    }
  }
}
</script>

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