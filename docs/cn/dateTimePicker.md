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
| change | Array(当前选项的数组) | 选项改变时触发。
| clickLeftBtn | Array(当前选项的数组) | 点击左边按钮时触发。
| clickRightBtn | Array(当前选项的数组) | 点击右边按钮时触发。

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

### 非级联选择器
```

```
### 级联选择器
```


```

## Screenshots
### 普通选择器
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596770770530.gif)

### 级联选择器
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596770998636.gif)

