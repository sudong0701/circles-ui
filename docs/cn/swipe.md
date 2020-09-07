# `swipe` 轮播图组件
swipe 组件定义一个轮播图。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| swipeIndex | Number | 0 | 轮播图起始下标。
| vertical | Boolean | false | 是否为纵向 false为横向轮播 true为纵向轮播。
| isLoop | Boolean | true | 是否嵌接滑动。
| isAuto | Boolean | true | 是否自动轮播。
| interval | Number | 5000(ms) | 自动轮播时长。
| duration | Number | 500(ms) | 滑动动画时长。
| distance | Number | 80 | 滑动距离(大于该距离会切换下标)。
| showIndicators | Boolean | true | 是否显示轮播指示器。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | 当前轮播的下标index | 轮播图下标改变触发的事件。

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
    <div class="swipe">
        <div style="text-align: center; line-height: 1.2rem">轮播图组件</div>
        <cs-swipe>
            <cs-swipe-item>
                <img src="../../static/img/1.jpg" alt="">
            </cs-swipe-item>
            <cs-swipe-item>
                <img src="../../static/img/2.jpg" alt="">
            </cs-swipe-item>
            <cs-swipe-item>
                <img src="../../static/img/3.jpg" alt="">
            </cs-swipe-item>
            <cs-swipe-item>
                <img src="../../static/img/4.jpg" alt="">
            </cs-swipe-item>
        </cs-swipe>
    </div>
</template>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599206264204.gif)
