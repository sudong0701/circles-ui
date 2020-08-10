# `PasswordInput` 密码输入框
PasswordInput 组件定义一个密码输入框。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(value) | String | Number | '' | 控制Popup的显示隐藏。
| length | Number | 6 | 密码输入框长度。
| gutter | Number | String | 0 | 输入框格子之间的间距 number默认单位为px。
| bgColor | String | '#fff' | 背景颜色。
| isMask | Boolean | true | 是否隐藏密码内容。
| isFocus | Boolean | false | 输入框是否获取焦点。
| height | String | Number | '' | 输入框的高度 number默认单位为px。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| focus |  | 输入框获取焦点时触发。

<!--
## Methods
None.

## Static Props
None.

## Static Methods
None.
-->

## Example
简单用法
```
<template>
    <div class="numberKeyboard">
        <sdPasswordInput :gutter="'0.12rem'" :length="6" bgColor="#fff" style="margin-top: 0.5rem" :isMask="true" v-model="numberKeyboardValue" :isFocus="isFocus" @focus="focus"></sdPasswordInput>
        <sd-numberKeyboard v-model="numberKeyboardValue" title="支付密码" :show="isShow" @change="change" @blur="isShow = false; isFocus = false" maxlength="6" :isShuffle="true" :extraKey="''"></sd-numberKeyboard>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                numberKeyboardValue: '',
                extraKey: '.',   //'' '.' 'X' ['$', '￥'],
                isFocus: false
            }
        },
        methods: {
            showNumberKeyboard() {
              this.isShow = !this.isShow
            },
            focus() {
                this.isShow = true
                this.isFocus = true
            },
            change(index) {

            }
        }
    }
</script>

```

