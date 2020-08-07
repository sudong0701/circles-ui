# `dateTimePicker` 时间选择器组件
dateTimePicker 组件定义一个时间选择器。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(value) | Date | new Date() | 当前时间。
| type | String | 'date' | year-month(YYYY-MM)、date(YYYY-MM-DD)、datetime(YYYY-MM-DD HH:mm:ss)。
| isShowTitle | Boolean | true | 是否展示title。
| title | String | '' | 标题的文字。
| right-button-text | String | '确认' | 右边按钮文案。
| left-button-text | String | '取消' | 左边按钮文案。
| minDate | Date | 10年前的今天 | 最小时间。
| maxDate | Date | 10年后的今天 | 最大时间。
| customChild | String | 'children' | 自定义子类数组名(仅isCascade为true时有效)。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | DateValue | 当前选中的时间。
| clickLeftBtn | DateValue | 点击左边按钮时触发。
| clickRightBtn | DateValue | 点击右边按钮时触发。

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
    <div style="padding: 0.3rem" class="picker">
        <div @click="showYMPicker">显示year-month的picker</div>
        <div @click="showDatePicker">显示date的picker</div>
        <div @click="showDateTimePicker">显示datetime的picker</div>

        <sdPopup v-model="showPopup">
            <sd-dateTimePicker v-model="dateValue" type="year-month" :minDate="minDate" :maxDate="maxDate" @clickLeftB="cancel" @clickRightBtn="confirm"></sd-dateTimePicker>
        </sdPopup>

        <sdPopup v-model="showDatePopup">
            <sd-dateTimePicker v-model="dateValue" type="date" :minDate="minDate" :maxDate="maxDate" @clickLeftB="cancel" @clickRightBtn="confirm"></sd-dateTimePicker>
        </sdPopup>

        <sdPopup v-model="showDateTimePopup">
            <sd-dateTimePicker v-model="dateValue" type="datetime" :minDate="minDate" :maxDate="maxDate" @clickLeftB="cancel" @clickRightBtn="confirm"></sd-dateTimePicker>
        </sdPopup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                showPopup: false,
                showDatePopup: false,
                showDateTimePopup: false,
                dateValue: new Date(2009, 8, 9, 15, 30, 30),
                minDate: new Date(2000, 5, 6),
                maxDate: new Date(2038, 5, 1)
            }
        },
        methods: {
            /**
             显示year-month选择器
             @param
             @return
             */
            showYMPicker() {
                this.showPopup = true
            },
            /**
             显示date选择器
             @param
             @return
             */
            showDatePicker() {
                this.showDatePopup = true
            },
            /**
             显示datetime选择器
             @param
             @return
             */
            showDateTimePicker() {
                this.showDateTimePopup = true
            },
            /**
             点击右侧(确认)按钮时触发
             @param {Date} date 选中的时间
             @return
             */
            confirm(date) {
                console.log(date)
                this.showPopup = false
                this.showDatePopup = false
                this.showDateTimePopup = false
            },
            /**
             点击左侧(取消)按钮时触发
             @param {Date} date 选中的时间
             @return
             */
            cancel(date) {
                console.log(date)
                this.showPopup = false
                this.showDatePopup = false
                this.showDateTimePopup = false
            }
        }
    }
</script>
```

## Screenshots
### 普通选择器
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596787279095.gif)



