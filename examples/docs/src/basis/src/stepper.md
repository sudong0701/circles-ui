# Stepper 步进器
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csStepper } from 'circles-ui';

       Vue.use(csStepper);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `v-model` 绑定输入值，可以通过 `change` 事件监听到输入值的变化

   ```html
    <csStepper v-model="value" @change="change"></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                value: 1
            }
        },
        methods: {
            change(e) {
                this.Toast({
                    content: `当前值为${e}`
                })
            }
        }
    }
   ```
:::

:::card
### 步长设置
> 通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`

   ```html
    <csStepper v-model="valueStep" step="2"></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                valueStep: 1
            }
        }
    }
   ```
:::

:::card
### 限制输入范围
> 通过 `min` 和 `max` 属性限制输入值的范围

   ```html
    <csStepper v-model="valueRange" min="-3" max="6"></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                valueRange: 1
            }
        }
    }
   ```
:::

:::card
### 可以输入小数
> 将 `integer` 属性设置为 `false` 允许输入小数，通过 `decimalLength` 属性设置小数的位数

   ```html
    <csStepper v-model="valueInteger" :integer="false" :decimalLength="1"></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                valueInteger: 3
            }
        }
    }
   ```
:::

:::card
### 禁用步进器
> 通过 `disabled` 禁用步进器

   ```html
    <csStepper v-model="valueDisabled" disabled></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                valueDisabled: 2
            }
        }
    }
   ```
:::

:::card
### 禁用输入框
> 通过 `disabledEnter` 禁用步进器输入框 此时按钮仍然可以点击

   ```html
    <csStepper v-model="valueDisabledEnter" disabledEnter></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                valueDisabledEnter: 5
            }
        }
    }
   ```
:::

:::card
### 异步变更
> 将 `asyncChange` 设置为 `true` 开启异步变更，异步变更下按钮的默认动作会取消，需要调用组件的 `add` `lower` 事件处理按钮点击

   ```html
    <csStepper v-model="valueAsync" disabledEnter asyncChange @add="add" @lower="lower"></csStepper>
   ```
   ```js
        export default {
        name: '',
        data() {
            return {
                valueAsync: 2
            }
        },
        methods: {
            add() {
               setTimeout(()=> {
                   this.valueAsync++
               }, 1000)
            },
            lower() {
                setTimeout(()=> {
                    this.valueAsync--
                }, 1000)
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
                  name: 'v-model(value)',
                  remake: '步进器绑定的值',
                  type: 'String | Number',
                  default: "-"
                },
                {
                  name: 'step',
                  remake: '步长，每次增加/减少的值',
                  type: 'String | Number',
                  default: '1'
                },
                {
                  name: 'min',
                  remake: '最小输入范围',
                  type: 'String | Number',
                  default: "0"
                },
                {
                  name: 'max',
                  remake: '最大输入范围',
                  type: 'String | Number',
                  default: "10"
                },
                {
                  name: 'integer',
                  remake: '是否限制输入整数',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'decimalLength',
                  remake: '保留的小数位(使用前需要将integer设置为false)',
                  type: 'Number',
                  default: '0'
                },
                {
                  name: 'disabled',
                  remake: '是否禁用掉步进器',
                  type: 'Boolean',
                  default: 'false'
                }, 
                {
                  name: 'disabledEnter',
                  remake: '是否禁用步进器输入功能',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'asyncChange',
                  remake: '是否开启异步变更',
                  type: 'Boolean',
                  default: 'false'
                }
                ],
                eventData: [{
                  name: 'change',
                  remake: '步进器值改变时触发(开启异步变更后按钮不会触发该事件)',
                  param: 'event: String(步进器当前的值)'
                },
                {
                  name: 'add',
                  remake: '点击+号按钮触发的事件',
                  param: '-'
                },
                {
                  name: 'lower',
                  remake: '点击-号按钮触发的事件',
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
          width="240">
        </el-table-column>
      </el-table>
    </template>
:::