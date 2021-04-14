# Field 输入框
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csField } from 'circles-ui';

       Vue.use(csField);
   ```
:::


## 代码演示

:::card
### 基础用法

   ```html
    <cs-field label="用户名：" placeholder="请输入用户名" v-model="fieldBasis" @input="onInput"></cs-field>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldBasis: ''
            }
        },
        methods: {  
            onInput(val) {
                this.Toast({
                    content: `当前输入值: ${val.target.value}`
                })
            }
        }
    }
   ```
:::

:::card
### 自定义类型
> Field输入框有 `text(文本)`、`number(整数)`、`decimal(数字)`3种类型，默认为`text`。当Field类型为`decimal`时，可以通过`toFixed`字段指定保留的小数位。

   ```html
    <cs-field label="整数：" placeholder="请输入整数" type="number" v-model="fieldNumber"></cs-field>

    <cs-field label="数字：" placeholder="请输入数字(支持4位小数)" type="decimal" toFixed="4" v-model="fieldDecimal"></cs-field>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldNumber: '',
                fieldDecimal: ''
            }
        }
    }
   ```
:::

:::card
### 禁用输入框
> 通过设置 `disabled` 和 `readonly` 属性可以设置输入框为禁用和只读状态

   ```html
    <cs-field label="用户名：" placeholder="禁用输入框" disabled v-model="fieldDisabled"></cs-field>

    <cs-field label="用户名：" placeholder="只读输入框" readonly v-model="fieldReadonly"></cs-field>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldDisabled: '',
                fieldReadonly: ''
            }
        }
    }
   ```
:::

:::card
### 显示清除按钮
> 通过设置 `clear`属性，支持一键清除功能。

   ```html
    <cs-field label="用户名：" placeholder="请输入用户名" clear v-model="fieldClear"></cs-field>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldClear: ''
            }
        }
    }
   ```
:::

:::card
### 显示图标
> 通过设置 `leftIcon`或`rightIcon`属性，可以设置[Icon](http://116.62.141.204:888/#/docs/components/icon)库中的任意图标，也可以通过`slot`的`left`和`right`自定义左右侧图标

   ```html
    <cs-field label="用户名：" placeholder="请输入用户名" leftIcon="people" v-model="fieldLeftIcon"></cs-field>

    <cs-field label="密码：" placeholder="请输入密码" v-model="fieldLeftIconSlot">
        <template #left>
            <img class="left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAllBMVEUAAAAyMjIyMjIiIiIkJCQyMjIzMzMuLi4zMzMyMjIuLi4yMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIxMTExMTExMTEwMDAvLy8yMjIyMjIxMTEvLy8vLy8rKysyMjIyMjIyMjIyMjInJycyMjIxMTExMTExMTEuLi4yMjIyMjIyMjIxMTExMTEuLi4yMjIyMjIzMzMSfeZDAAAAMXRSTlMAf/kECPb8Fu2EHp165t/SqIrxuHJXUTMZs5dfLSMTo5KPaw3pW0xGG8vDr2Q8J9m+ayTd6QAAAuFJREFUWMPtmNm2ojAQRSVhRgQVGQXB6Tpr/v/nelGLZbcSSBH68Z7HpNhAqpKcZCIUvStXzyXE9a7KnU7GypjO2D+aTY1xOIewL2lpIc87LBhHZiiJoxXrkCXFU6/N44tNFtmqakeZrzVNG4nk0GUzZsrub+POapD+cKLDQIn92Zw375kP5a3gMXJo92x16PoZxiv29UP6sftdM3UQMIWHtvzO6fBU2zrksqt7CcnfDQDOoYCLzvdBrgM8j7rwgOCFHh54h1/qGfWY1crRQKtvBEEvfs56Bz3ri4BEO2ggLIHrvoifOuKCBkISews3h9pGA1mt3ogdrBvDgIiQX+Av8Bf4js6zKvH2hOy9pMoeY4FF4LEPudVjBNBONdZWEkkC45QwvhxDBrhasE6Zq+HAt/SLEq4Nqsbr0Dq/W6WBrvXhlh6VNgro3mjLJZe6PHDDdRvRWRYYdHnbtAXEeEMt7HMCoBWOd4J6IeAo+4mLGAX0ITjDOOYNhhdBqC86IzwhLEIAk8YbYhwau4p5Dwi8YV1zjjOvM4rIHcE57Rna7TooG7uG9cDAZ+8kiNrWQa8BNvKA+Y9pe2QJsfhpqQTAC/fYFXJbb3XrUgCEA4X93apwv/sOWZFywwBUWuefunUvAOqwLOGAKiwiAiBUK/2PQLMOKnBAA2Y96oiCA8IkeGIOUSEOuMKUTQkXCjjgHFPYWR10xgHPmKl3YlDZGGAOocJ1xONNCoXf+P4Z4cHVpZy5fPyqwj1u5bR59yG0JNp3pgJYOWPkLmoKh+akYffRdbONYgpWz1F7BWbfCyCoxF1rIqxIqMPStRtklo7dEQfCWnkXzj+mb7v6laFXfjRp3D73l4ora/KGl3ppLHFGW11bk4ES6EITE9YglY/Szecmk7s0peX7WPGaHuFYEYXWZcxFce/B5ziRUOx38RzZy/bI19s04jwm8jpNn584LzAmI2Xf0tfMJMR8LsuDeLX6A+2c4Igkk+KHAAAAAElFTkSuQmCC" alt="">
        </template>
    </cs-field>

    <cs-field label="用户名：" placeholder="请输入用户名" rightIcon="_next" v-model="fieldRightIcon"></cs-field>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldLeftIcon: '',
                fieldLeftIconSlot: '',
                fieldRightIcon: ''
            }
        }
    }
   ```
:::

:::card
### 插入按钮
> 通过设置`slot`的`right`插槽可以在Field组件右侧插入按钮

   ```html
    <cs-field label="短信验证码：" placeholder="请输入短信验证码" v-model="fieldRight">
        <template #right>
            <cs-button type="success" text="发送验证码" size="small"></cs-button>
        </template>
    </cs-field>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldRight: ''
            }
        }
    }
   ```
:::

:::card
### 格式校验
> 通过设置`vaildFnc`属性并执行组件的`vaild()`方法可以对输入框的格式进行检验，同时还可以通过`errMessage`设置组件的报错信息

   ```html
    <cs-field ref="cs-field-vaild" v-model="fieldVal" label="手机号：" placeholder="请输入手机号" :vaildFnc="vaildPhone" errMessage="请输入正确的手机号"></cs-field>

     <cs-button @click="submit" type="primary" size="small" style="position: relative; left: 50%; transform: translateX(-50%)" text="提交信息"></cs-button>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                fieldRight: ''
            }
        },
        methods: {
            vaildPhone(phone) {
                return /^(1)[0-9]{10}$/.test(phone)
            },
            submit() {
                if (!this.$refs['cs-field-vaild'].vaild()) {
                    return
                }
                this.Toast({
                    content: '提交成功'
                })
            }
        }
    }
   ```
:::

## API

:::card
### field Props

<template>
   <el-table
        :data="apiData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="150">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="180">
        </el-table-column>
        <el-table-column
             prop="default"
             label="默认值"
             width="240">
        </el-table-column>
      </el-table>
</template>
<script>
export default {
  data () {
    return {
        apiData: [{
                  name: 'v-model(value)',
                  remake: '输入框的值',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'label',
                  remake: '输入框左侧的文案',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'type',
                  remake: '输入框的类型',
                  type: 'String',
                  default: "text(可选值：text、decimal、number)"
                },
                {
                  name: 'maxlength',
                  remake: '最大长度',
                  type: 'Number | String',
                  default: "''"
                },
                {
                  name: 'disabled',
                  remake: '是否禁用输入框',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'readonly',
                  remake: '是否只读输入框',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'placeholder',
                  remake: '输入框占位符',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'toFixed',
                  remake: '保留的小数位 -1为不限制 仅在type为decimal时有效',
                  type: 'Number | String',
                  default: "-1"
                },
                {
                  name: 'password',
                  remake: '是否为密文格式',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'leftIcon',
                  remake: '左侧Icon的name值',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'rightIcon',
                  remake: '右侧Icon的name值',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'clear',
                  remake: '是否展示清除按钮',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'vaildFnc',
                  remake: '是否展示清除按钮',
                  type: 'Function',
                  default: "()=> { return true }"
                },
                {
                  name: 'errMessage',
                  remake: '校验失败的提示信息',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'isShowEmptyErrMessage',
                  remake: '输入框值为空时校验失败时是否在下方展示失败的信息',
                  type: 'Boolean',
                  default: "false"
                },
            ],
        eventData: [
            {
                name: 'focus',
                remake: '输入框获取焦点时触发',
                param: 'void'
            },
            {
                name: 'blur',
                remake: '输入框失去焦点时触发',
                param: 'void'
            },
            {
                name: 'clear',
                remake: '点击清除按钮时触发',
                param: 'void'
            },
            {
                name: 'input',
                remake: '输入框输入时触发',
                param: 'Event:输入框输入事件参数'
            },
            {
                name: 'change',
                remake: '输入框值改变时触发',
                param: 'String:输入框变化后的值'
            },
        ],
        slotData: [
            {
                name: 'left',
                remake: 'Field左侧的插槽',
                props: '-'
            },
            {
                name: 'right',
                remake: 'Field右侧的插槽',
                props: '-'
            }
        ]
    }
  }
}
</script>
:::

:::card
### Field  Events

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
          width="320">
        </el-table-column>
      </el-table>
</template>
:::

:::card
### Field  Slots

<template>
   <el-table
        :data="slotData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="props"
          label="SlotProps"
          width="320">
        </el-table-column>
      </el-table>
</template>
:::