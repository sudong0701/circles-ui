# `Tab` 标签页
Tab 组件定义一个标签页。

## Tabs Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(active) | String & Number | '0' | 当前选择标签页的下标。
| tabBackGround | String | #fff | 标签页的背景颜色。
| titleActiveColor | String | '#1989fa' | title选中的颜色。
| titleInactiveColor | String | '333' | title未选中的颜色。
| isSticky | Boolean | true | 是否吸顶。
| swipeThreshold | String & Number | 4 | 滚动阈值，标签数量超过阈值时开始横向滚动。

## Tab Props
| Prop | Type | Default | Note |
|---|---|---|---|
| title | String| '' | 标签页的内容。
| disabled | Boolean | false | 是否禁用。

## Tabs Events
| Event Name | Returns | Notes |
|---|---|---|
| change | active(当前选中的下标) | tab选中项改变时触发。

## Tab Slots
| Slots Name | Returns |
|---|---|
| 默认 | tab页的内容。

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
    <div class="tabs">
        <cs-tabs titleActiveColor="#1989fa" @change="tabChange">
            <cs-tab title="标签啥肯耐珂萨1"></cs-tab>
            <cs-tab title="标签2"></cs-tab>
            <cs-tab title="标签3" disabled></cs-tab>
            <cs-tab title="标签4"></cs-tab>
            <cs-tab title="标签5"></cs-tab>
            <cs-tab title="标签6">
            </cs-tab>
            <cs-tab title="标签7"></cs-tab>
            <cs-tab title="标签8"></cs-tab>
            <cs-tab title="标签9"></cs-tab>
        </cs-tabs>

        <p style="text-align: center">春江潮水连海平，海上明月共潮生。<br/>
            艳艳水波千万里，何处春江无月明。<br/>
            江流宛转绕芳甸，月照花林皆似霰。<br/>
            空中流霜不觉飞，汀上白沙看不见。<br/>
            江天一色无纤尘，皎皎空中孤月轮。<br/>
            江畔何人初见月，江月何年初照人。<br/>
            人生代代无穷已，江月年年只相似。<br/>
            不知江月待何人，但见长江送流水。</p>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            tabChange(e) {
                //console.log(e)
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599213432495.gif)
