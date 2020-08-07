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
| type | String | '' | 弹出框的类型(alert、confirm)。
| confirmBtnText | String | '确定' | 确认按钮文案。
| confirmBthColor | String | '#FF2C7D' | 确认按钮文字颜色。
| confirmBthBgColor | String | '#ffffff' | 确认按钮的背景颜色。
| cancelBtnText | String | '取消' | 取消按钮文案。
| cancelBthColor | String | '#333' | 取消按钮文字颜色。
| cancelBthBgColor | String | '#ffffff' | 取消按钮的背景颜色。
### Events
None.
### Methods


## 组件式调用
### Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(isShow) | Boolean | false | 是否展示弹出框。
| isOverlay | Boolean | true | 是否显示背景蒙层。
| overlayStyle | String | '' | 自定义背景蒙层样式。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| lockScroll | Boolean | true | 是否锁定背景滚动。
| content | String | '' | 提示文案的内容。
| isRound | Boolean | true | 是否展示圆角。
| type | String | '' | 弹出框的类型(alert、confirm)。
| confirmBtnText | String | '确定' | 确认按钮文案。
| confirmBthColor | String | '#FF2C7D' | 确认按钮文字颜色。
| confirmBthBgColor | String | '#ffffff' | 确认按钮的背景颜色。
| cancelBtnText | String | '取消' | 取消按钮文案。
| cancelBthColor | String | '#333' | 取消按钮文字颜色。
| cancelBthBgColor | String | '#ffffff' | 取消按钮的背景颜色。



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

