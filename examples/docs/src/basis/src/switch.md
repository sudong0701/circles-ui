# Switch 开关
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csSwitch } from 'circles-ui';

       Vue.use(csSwitch);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `v-model` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

   ```html
    <csSwitch v-model="checked" @change="change"></csSwitch>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checked: true
            }
        },
        methods: {
            change(e) {
                this.Toast({
                    content: `${e ? '开关打开了' : '开关关闭了'}`
                })
            }
        }
    }
   ```
:::

:::card
### 禁用状态
> 将 `disabled` 属性设置为true即可禁用开关组件。

   ```html
    <csSwitch v-model="checkedDisabled" disabled></csSwitch>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkedDisabled: true
            }
        }
    }
   ```
:::

:::card
### 自定义大小
> 通过 `size` 设置开发组件的大小，Number类型默认单位为px。

   ```html
    <csSwitch v-model="checkedCustom" size="0.4rem"></csSwitch>
    <csSwitch style="margin-left: 0.3rem" v-model="checkedCustom" :size="40"></csSwitch>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkedCustom: true
            }
        }
    }
   ```
:::

:::card
### 自定义颜色
> 通过 `activeParentsNodeColor` `activeNodeColor` `unActiveParentsNodeColor` `unActiveNodeColor` 属性自定义颜色。

   ```html
    <csSwitch v-model="checkedColor" activeParentsNodeColor="#67c23a" unActiveParentsNodeColor="#ee0a24"></csSwitch>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkedColor: false
            }
        }
    }
   ```
:::

:::card
### 异步控制
> 将 `asyncChange` 属性设置为 `true` 使用异步控制功能，此时点击开关按钮不会触发 `change` 事件，可以使用click事件控制开关状态。

   ```html
     <csSwitch v-model="checkedAsync" asyncChange @click="asyncChange"></csSwitch>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkedAsync: false
            }
        },
        methods: {
            asyncChange() {
                setTimeout(()=> {
                    this.checkedAsync = !this.checkedAsync
                }, 800)
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
          width="210">
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
                  name: 'v-model(isActive)',
                  remake: '开关组件的状态',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'disabled',
                  remake: '是否禁用开关',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'size',
                  remake: '开关组件的大小(Number类型默认单位为px)',
                  type: 'String | Number',
                  default: "'0.6rem'"
                },
                {
                  name: 'activeParentsNodeColor',
                  remake: '打开时switch的背景颜色',
                  type: 'String',
                  default: "'#1989fa'"
                },
                {
                  name: 'activeNodeColor',
                  remake: '打开时switch圆圈的背景颜色',
                  type: 'String',
                  default: "'#fff'"
                },
                {
                  name: 'unActiveParentsNodeColor',
                  remake: '关闭时switch的背景颜色',
                  type: 'String',
                  default: "'#fff'"
                },
                {
                  name: 'unActiveNodeColor',
                  remake: '关闭时switch圆圈的背景颜色',
                  type: 'String',
                  default: "'#fff'"
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
                  remake: 'switch状态改变时触发(开启异步变更后不会触发该事件)',
                  param: 'event: Boolean(switch状态)'
                },
                {
                  name: 'click',
                  remake: '点击switch时触发',
                  param: '-'
                },
                {
                  name: 'opened',
                  remake: 'switch打开且动画结束后触发',
                  param: '-'
                },
                {
                  name: 'closed',
                  remake: 'switch关闭且动画结束后触发',
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