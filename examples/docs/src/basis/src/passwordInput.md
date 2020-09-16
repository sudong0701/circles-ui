# PasswordInput 密码输入框
> 带网格的输入框组件，可以用于输入支付密码、短信验证码等，通常与[数字键盘](https://sudong0701.github.io/circles-UI-docs/#/demo/numberKeyboard)组件配合使用

<br/>

:::card
   ### 按需引入

   ```javascript
       import Vue from 'vue';
       import { csPasswordInput } from 'circles-ui';

       Vue.use(csPasswordInput);
   ```
:::


## 代码演示

:::card

### 默认样式

```html
    <cs-PasswordInput @focus="passwordInputFocus" :isFocus="isFocus" v-model="keyboardValue"></cs-PasswordInput >

    <csNumberKeyboard :show="isShowKeyboard" v-model="keyboardValue" @blur="keyboardBlur" @show="isFocus = true" 
    @hide="isFocus = false" :maxlength="6"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboard: false,
                keyboardValue: '123',
                isFocus: false
            }
        },
        methods: {
            passwordInputFocus() {
                this.isShowKeyboard = true
            },
            keyboardBlur() {
                this.isShowKeyboard = false
            }
        }
    }
   ```
:::

:::card

### 自定义长度
> 通过设置 `length`属性修改输入框的长度

```html
    <cs-PasswordInput :length="4" :gutter="20" @focus="passwordInputCustomFocus" :isFocus="isFocusCustom" 
    v-model="keyboardCustomValue"></cs-PasswordInput >

    <csNumberKeyboard :show="isShowKeyboardCustom" v-model="keyboardCustomValue" @blur="keyboardCustomBlur"
     @show="isFocusCustom = true" @hide="isFocusCustom = false" :maxlength="4"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboardCustom: false,
                keyboardCustomValue: '1',
                isFocusCustom: false
            }
        },
        methods: {
            passwordInputCustomFocus() {
                this.isShowKeyboardCustom = true
            },
            keyboardCustomBlur() {
                this.isShowKeyboardCustom = false
            }
        }
    }
   ```
:::

:::card

### 明文展示
> 通过改变 `isMask`属性切换输入框是否隐藏密码内容

```html
    <cs-PasswordInput :length="6" :isMask="false" @focus="inputFocus" :isFocus="isFocusInput" v-model="keyboardInputValue">
    </cs-PasswordInput >

    <csNumberKeyboard :show="isShowKeyboardInput" v-model="keyboardInputValue" @blur="keyboardInputBlur" 
    @show="isFocusInput = true" @hide="isFocusInput = false" :maxlength="6" :isShuffle="true"></csNumberKeyboard>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowKeyboardInput: false,
                keyboardInputValue: '',
                isFocusInput: false
            }
        },
        methods: {
            inputFocus() {
                this.isShowKeyboardInput = true
            },
            keyboardInputBlur() {
                this.isShowKeyboardInput = false
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
                  remake: '密码输入框输入值',
                  type: 'String | Number',
                  default: "''"
                },
                {
                  name: 'length',
                  remake: '密码输入框的长度',
                  type: 'Number',
                  default: '6'
                },
                {
                  name: 'gutter',
                  remake: "输入框格子之间的间距，默认单位为px",
                  type: 'Number | String',
                  default: "0"
                },
                {
                  name: 'bgColor',
                  remake: '输入框背景颜色',
                  type: 'String',
                  default: "#fff"
                },
                {
                  name: 'isMask',
                  remake: '是否隐藏密码内容',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'isFocus',
                  remake: '是否已聚焦，聚焦时会显示光标',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'height',
                  remake: '输入框的高度，默认单位为px',
                  type: 'Number | String',
                  default: 'true'
                }
                ],
                eventData: [{
                  name: 'focus',
                  remake: '输入框获取焦点时触发。',
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