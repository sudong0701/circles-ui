# `Picker` 选择器组件
Picker 组件定义一个选择器。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model | Array | [] | 初始数据的下标数组。
| isCascade | Boolean | false | 是否是级联选择器。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| isShowTitle | Boolean | true | 是否展示title。
| title | String | '标题' | 标题的文字。
| right-button-text | String | '确认' | 右边按钮文案。
| left-button-text | String | '取消' | 左边按钮文案。
| customName | String | 'name' | 自定义文字属性名。
| customChild | String | 'children' | 自定义子类数组名。

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
```
<template>
    <div>
        <div @click="showPopup">点击显示</div>
        <sdPopup v-model="show">
            <div style="height: 200px"></div>
        </sdPopup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                show: false
            }
        },
        methods: {
            showPopup() {
                this.show = true
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/06/1596704209263.gif)
