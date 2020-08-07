# `Dialog` 弹出框组件
Dialog 组件定义一个弹出框(支持函数式和组件式调用)。

## 函数式调用
### Props
| Prop | Type | Default | Note |
|---|---|---|---|
| isOverlay | Boolean | true | 是否显示背景蒙层。
| overlayStyle | String | '' | 自定义背景蒙层样式。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| lockScroll | Boolean | true | 是否锁定背景滚动。
| content | String | '' | 提示文案的内容。
| isRound | Boolean | true | 是否展示圆角。
| type | String | '' | 弹出框的类型。
| right-button-text | String | '确认' | 右边按钮文案。
| left-button-text | String | '取消' | 左边按钮文案。
| customName | String | 'name' | 自定义文字属性名。
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

