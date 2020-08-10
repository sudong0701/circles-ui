# `NumberKeyboard` 数字键盘
NumberKeyboard 组件定义一个数字键盘。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(value) | String | '' | 当前输入值。
| show | Boolean | false | 控制数字键盘的显示与隐藏。
| extraKey | String & Array | '' | 底部额外按键的内容 string支持'', '.', 'X' 数组支持自定义底部按键但最多配置2个。
| duration | Number | 300ms | 键盘弹出收回动画时长。
| closeButtonText | String | '完成' | 关闭按钮的文案。
| maxlength | Number | String | 0 | 输入值最大长度。
| hideOnclickOutside | Boolean | true | 点击外部时是否收起键盘。
| title | String | '' | 键盘的标题。
| isRound | Boolean | true | 是否展示圆角。
| isShuffle | Boolean | false | 是否打乱数字顺序。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | value(当前的value) | 内容改变时触发。
| input | item(当前点击的值) | 点击输入内容时触发。
| blur |  | 点击隐藏密码时触发。
| delete | item | 删除输入内容时出发。
| show |  | 键盘完全出现时触发。
| hide |  | 键盘完全隐藏时触发。

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
        <input type="text" readonly @click.stop @touchstart.stop="isShow = true" v-model="numberKeyboardValue">
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
## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597039108025.gif)

 ### extraKey === '.'时
 ![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597039521799.png)
 
  ### extraKey === 'X'时
 ![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597039528283.png)
 
  ### 自定义extraKey时
 ![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597039533535.png)
 
