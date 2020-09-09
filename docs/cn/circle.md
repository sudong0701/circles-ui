
# `Circle` 环形进度条
Circle 组件定义一个环形进度条。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(progress) | Number & String | 0 | 进度条百分比。
| width | Number & String | 120 | 进度条宽度(大小)。
| barColor | String & Array | #1989fa | 进度条颜色，传入Array支持渐变，Array格式参考下方示例。
| gradDire | String | 'right' | 渐变方向(top,right,bottom,left,top-right,top-left,bottom-right,bottom-left)。
| backgroundColor | String | #fff | 进度条背景颜色。
| isAnimation | Boolean | true | 是否有动画效果。
| isRound | Boolean | true | 是否使用圆形画笔。
| id | String & Number | '' | 组件的id，多组件共存时使用。
| duration | Number | 600(ms) | 动画时长。
| delay | String & Number | 0 | 动画延迟时长。
| timeFunction | String | '' | 动画函数。

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
        <csPopup v-model="show">
            <div style="height: 200px"></div>
        </csPopup>
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
