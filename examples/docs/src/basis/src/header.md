# Header 头部组件
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csHeader } from 'circles-ui';

       Vue.use(csHeader);
   ```
:::


## 代码演示

:::card
### 基础用法


   ```html
    <csHeader title="标题" @left="left"></csHeader>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            left() {
                this.Toast({
                    content: '触发left事件'
                })
            }
        }
    }
   ```
:::

:::card
### 指定类型
> 可以通过 `type` 指定header的类型可选值 `share` `point`，也可以通过 `leftIcon` `rightIcon` 自定义Icon，也可以通过 `left` `right` 的 `slot` 通过插槽自定义左侧和右侧的元素。

   ```html
    <csHeader title="分享" type="share" @left="left" @right="right"></csHeader>

    <csHeader title="提示" type="point" @left="left" @right="right"></csHeader>

    <csHeader title="自定义" leftIcon="home" rightIcon="notice1" @left="left" @right="right"></csHeader>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            left() {
                this.Toast({
                    content: '触发left事件'
                })
            },
            right() {
                this.Toast({
                    content: '触发right事件'
                })
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
                  name: 'title',
                  remake: 'header标题的文案',
                  type: '',
                  default: "''"
                },
                {
                  name: 'type',
                  remake: 'header类型，可选值share、point',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'height',
                  remake: 'header的高度，number类型默认单位为px',
                  type: 'String | Number',
                  default: "0.92rem"
                },
                {
                  name: 'leftIcon',
                  remake: '左侧icon的标识',
                  type: 'String',
                  default: "'fanhui'"
                },
                {
                  name: 'leftIconColor',
                  remake: '左侧icon的颜色',
                  type: 'String',
                  default: "'#1989FA'"
                },
                {
                  name: 'rightIcon',
                  remake: '右侧icon的标识',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'rightIconColor',
                  remake: '右侧icon的颜色',
                  type: 'String',
                  default: "'#1989FA'"
                }
                ],
                eventData: [{
                  name: 'left',
                  remake: '点击左侧图标时触发',
                  param: '-'
                },
                {
                  name: 'right',
                  remake: '点击右侧图标时触发',
                  param: '-'
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