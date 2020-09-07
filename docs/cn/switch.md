# `Switch` 开关组件
Switch 组件定义一个弹出层。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(isActive) | Boolean | false | 控制Popup的显示隐藏。
| size | String & Number | 0.6rem | Switch大小。
| activeParentsNodeColor | String | '#1989fa' | 打开时switch的背景颜色。
| activeNodeColor | String | 'fff' | 打开时switch圆圈的背景颜色。
| unActiveParentsNodeColor | String | '#fff' | 关闭时switch的背景颜色。
| unActiveNodeColor | String | '#fff' | 关闭时switch圆圈的背景颜色。
| disabled | Boolean | false | 是否禁用。
| asyncChange | Boolean | false | 是否开始异步变化。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | isActive | switch状态。
| opened |  | switch打开动画结束后触发。
| closed |  | switch关闭动画结束后触发。

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
    <div style="padding: 0.3rem" class="picker" ref="content">
        <sd-switch v-model="isOpen" @change="change"></sd-switch>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            change(val) {
                console.log(val)
            }
        }
    }
</script>

```
## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597045613374.gif)
