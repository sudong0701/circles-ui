# `Stepper` 步进器
Stepper 组件定义一个步进器。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(value) | String & Number | '' | 步进器绑定的值。
| min | String & Number | 0 | 最小值。
| max | String & Number | 10 | 最大值。
| step | String & Number | 1 | 每一次增加/减少的值。
| integer | Boolean | false | 是否限制输入整数。
| decimalLength | Number | 0 | 保留的小数位。
| disabled | Boolean | false | 是否禁用步进器。
| disabledEnter | Boolean | false | 是否禁止输入。
| asyncChange | Boolean | false | 是否开启异步更改。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | value | 更改后的值。
| add |  | 点击+号触发。
| lower |  | 点击-号触发。

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
    <div class="stepper">
        <csStepper v-model="stepperValue"  :asyncChange="false" :disabled="false" :decimalLength="2" step="2" min="-60" @add="add"></csStepper>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                stepperValue: -2
            }
        },
        methods: {
            add() {
                console.log('add')
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597043799867.gif)
