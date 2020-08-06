# `Popup` 弹出层
Popup 组件定义一个弹出层。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(isShow) | Boolean | false | 控制Popup的显示隐藏。
| isOverlay | Boolean | true | 是否显示背景蒙层。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| position | String | 'bottom' | 弹出层的位置(top、right、bottom、left、center)。
| isRound | Boolean | true | 是否展示圆角。
| duration | Number | 300(ms) | 动画时长。
| lockScroll | Boolean | true | 是否锁定背景滚动。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| open |  | popup打开时触发。
| opened |  | popup打开且动画结束时触发。
| close |  | popup关闭时触发。
| closed |  | popup关闭且动画结束时触发。
| click-overlay |  | p点击遮罩层时触发。

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
![](../img/1.gif?raw=true)
