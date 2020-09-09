
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
| duration | Number | 600(ms) | 动画时长。

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
    <div class="circle">
        <cs-circle v-model="progress" :barColor="barColor"></cs-circle>
        <button @click="changeValue">改变value</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                progress: 85,
                barColor: [
                    {offset: '0', color: '#5a96ec'},
                    {offset: '0.5', color: '#67c23a'},
                    {offset: '1', color: '#eff23a'}
                ],
            }
        },
        methods: {
            changeValue() {
                if(this.progress === 30) {
                    this.progress = 80
                } else {
                    this.progress = 30
                }
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/09/1599617721786.gif)
