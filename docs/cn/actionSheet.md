# `ActionSheet` 动作面板组件
ActionSheet 组件定义一个动作面板。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(isShow) | Boolean | false | 是否显示。
| actions | Array | [] | 选项数据数组。
| cancelText | String | '' | 底部取消按钮文字，为空时不展示底部取消按钮。
| description | String | '' | 标题的文字。
| isBorder | Boolean | true | 是否展示选项分割线。
| isRound | Boolean | true | 是否展示圆角。
| isOverlay | Boolean | true | 是否展示背景蒙层。
| lockScroll | Boolean | true | 是否锁定背景滚动。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。

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


## Screenshots
### 普通选择器
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596770770530.gif)

### 级联选择器
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596770998636.gif)

