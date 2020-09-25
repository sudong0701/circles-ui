# NumberKeyboard 数字键盘
<br/>

:::card
   ### 按需引入

   ```javascript
       import Vue from 'vue';
       import { csNumberKeyboard } from 'circles-ui';

       Vue.use(csNumberKeyboard);
   ```
:::


## 代码演示

:::card

### 默认样式
   ```html
    <cs-button type="primary" text="默认键盘" @click="showKeyboard"></cs-button>

    <csNumberKeyboard :show="isShowKeyboard" v-model="keyboardValue" @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboard: false,
                keyboardValue: ''
            }
        },
        methods: {
            showKeyboard() {
                this.isShowKeyboard = true
            },
            keyboardBlur() {
                this.isShowKeyboard = false
            },
            keyboardInput(e) {
                this.Toast({
                    content: `当前输入值${e}`
                })
            }
        }
    }
   ```

:::

:::card
### 带右侧栏的键盘
> 将 `extraKey` 属性设置为 `.` 来展示键盘的右侧栏，常用于输入金额的场景

```html
    <cs-button type="primary" text="右侧栏的键盘" @click="showKeyboardRight"></cs-button>

    <csNumberKeyboard :show="isShowKeyboardRight" extraKey="." v-model="keyboardValue" @blur="keyboardBlur" @input="keyboardInput">
    </csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboardRight: false,
                keyboardValue: ''
            }
        },
        methods: {
            showKeyboardRight() {
                this.isShowKeyboardRight = true
            },
            keyboardBlur() {
                this.isShowKeyboardRight = false
            },
            keyboardInput(e) {
                this.Toast({
                    content: `当前输入值${e}`
                })
            }
        }
    }
   ```
:::

:::card
### 身份证号键盘
> 将 `extraKey` 属性设置为 `X` 来展示身份证号键盘。

```html
     <cs-button type="primary" text="身份证号的键盘" @click="showKeyboardCardNo"></cs-button>

    <csNumberKeyboard title="标题" :show="isShowKeyboardCardNo" extraKey="X" v-model="keyboardValue"
     @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboardCardNo: false,
                keyboardValue: ''
            }
        },
        methods: {
            showKeyboardCardNo() {
                this.isShowKeyboardCardNo = true
            },
            keyboardBlur() {
                this.isShowKeyboardCardNo = false
            },
            keyboardInput(e) {
                this.Toast({
                    content: `当前输入值${e}`
                })
            }
        }
    }
   ```
:::

:::card
### 配置多个按键
> 将 `extraKey` 以数组的形式传入 可以配置自定义按键 最多支持2个。

```html
     <cs-button type="primary" text="配置多个按键" @click="showKeyboardCustom"></cs-button>

    <csNumberKeyboard title="标题" :show="isShowKeyboardCustom" :extraKey="['$', '￥']" v-model="keyboardValue"
     @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboardCustom: false,
                keyboardValue: ''
            }
        },
        methods: {
            showKeyboardCustom() {
                this.isShowKeyboardCustom = true
            },
            keyboardBlur() {
                this.isShowKeyboardCustom = false
            },
            keyboardInput(e) {
                this.Toast({
                    content: `当前输入值${e}`
                })
            }
        }
    }
   ```
:::

:::card
### 配置安全键盘
> 将 `isShuffle` 设置为 `true` 即可配置安全键盘，适用于输入密码情况。

```html
     <cs-button type="primary" text="配置安全键盘" @click="showKeyboardUpset"></cs-button>

    <csNumberKeyboard title="配置安全键盘" :show="isShowKeyboardUpset" isShuffle v-model="keyboardValue"
    @blur="keyboardBlurUpset" @input="keyboardInput"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboardUpset: false,
                keyboardValue: ''
            }
        },
        methods: {
            showKeyboardUpset() {
                this.isShowKeyboardUpset = true
            },
            keyboardBlurUpset() {
                this.isShowKeyboardUpset = false
            },
            keyboardInput(e) {
                this.Toast({
                    content: `当前输入值${e}`
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
:::
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'v-model(value)',
                  remake: '数字键盘当前输入值(总输入值)',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'show',
                  remake: '是否显示数字键盘',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'extraKey',
                  remake: "数字键盘的类型，可选值 '.' 'X'和数组形式，数组形式可以配置多个按键(目前仅支持2个)",
                  type: 'String | Array',
                  default: ""
                },
                {
                  name: 'closeButtonText',
                  remake: '数字键盘标题右侧的文案',
                  type: 'String',
                  default: "'完成'"
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
                  name: 'maxlength',
                  remake: '数字键盘最大可输入长度',
                  type: 'Number | String',
                  default: 'true'
                }, 
                {
                  name: 'hideOnclickOutside',
                  remake: '点击外部时是否收起键盘',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'title',
                  remake: '数字键盘标题文案，为空时不展示',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'isShuffle',
                  remake: '是否打乱数字键盘',
                  type: 'Boolean',
                  default: 'false'
                }
                ],
                eventData: [{
                  name: 'change',
                  remake: '输入内容改变时触发',
                  param: 'event: String(当前的输入值)'
                },
                {
                  name: 'input',
                  remake: '点击输入内容时触发',
                  param: 'event: String(当前点击的值)'
                },
                {
                  name: 'blur',
                  remake: '点击隐藏数字键盘时触发',
                  param: '-'
                },
                {
                  name: 'delete',
                  remake: '删除输入内容时出发',
                  param: 'event: String(当前的输入值)'
                },
                {
                  name: 'show',
                  remake: '键盘完全出现时触发',
                  param: '-'
                },
                {
                  name: 'hide',
                  remake: '键盘完全隐藏时触发',
                  param: '-'
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
          width="210">
        </el-table-column>
      </el-table>
    </template>
:::    


