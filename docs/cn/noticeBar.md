# `Popup` 弹出层
Popup 组件定义一个弹出层。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| mode | String | '' | 通知栏模式 可选值为link和close。
| text | String | '' | 通知栏内容。
| scrollable | Boolean | true | 是否在长度溢出时滚动。
| delay | Number & String | 1(s) | 滚动动画延时。
| speed | Number & String | 50px/s | 滚动速度。
| wrapable | Boolean | false | 是否开启文本换行(开始文本换行后 scrollable不生效)。
| color | String | '#ed6a0c' | 文字颜色。
| background | String | '#fffbe8' | 通知栏背景颜色。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| click |  | 点击通知栏时触发。
| finish |  | 每当滚动栏一轮滚动结束时触发。
| replay |  | 每当滚动栏重新开始滚动时触发。
| close |  | 点击close按钮时触发。
| link |  | 点击link图标时触发。

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
    <div class="noticeBar">
        <sd-noticeBar  :scrollable="true" :text="text" mode="close" delay="0.5" speed="50">
        </sd-noticeBar>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597042398017.gif)
