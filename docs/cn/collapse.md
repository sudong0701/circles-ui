# `Collapse` 折叠面板
Collapse 组件定义一个折叠面板。

## Collapse Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(activeNames) | Array & String | '' | 打开的面板的下标或name集合。
| accordion | Boolean | false | 是否为手风琴模式。

## CollapseItem Props
| Prop | Type | Default | Note |
|---|---|---|---|
| title | String | '' | 标题栏左侧内容。
| value | String | '' | 标题栏内容。
| icon | String | '' | 标题栏左侧icon图标名称或图片链接。
| name | String | '' | 唯一标识符，默认为索引值。
| is-link | Boolean | true | 是否展示标题栏右侧箭头并开启点击反馈。
| disabled | Boolean | false | 是否禁用。

## Collapse Events
| Event Name | Returns | Notes |
|---|---|---|
| change | activeNames(当前打开的所有面板的下标或name) | 切换面板时触发。

## CollapseItem Events
| Event Name | Returns | Notes |
|---|---|---|
| change | isUnfold(当前面板是否打开的布尔值) | 面板状态改变时触发。
| showed |  | 面板完全显示时触发。
| change |  | 面板完全隐藏时触发。

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
    <div class="collapse">
        <sd-collapse  @change="changeCollapse" v-model="collapseActive">
            <sd-collapse-item title="标题" icon="close" value="右侧" name="1" @change="changeCollapseItem">
                春江潮水连海平，海上明月共潮生。<br/>
                艳艳水波千万里，何处春江无月明。<br/>
                江流宛转绕芳甸，月照花林皆似霰。<br/>
                空中流霜不觉飞，汀上白沙看不见。<br/>
                江天一色无纤尘，皎皎空中孤月轮。<br/>
                江畔何人初见月，江月何年初照人。<br/>
                人生代代无穷已，江月年年只相似。<br/>
                不知江月待何人，但见长江送流水。
            </sd-collapse-item>
            <sd-collapse-item title="标题" icon="close" value="右侧" name="2">
                春江潮水连海平，海上明月共潮生。<br/>
                艳艳水波千万里，何处春江无月明。<br/>
                江流宛转绕芳甸，月照花林皆似霰。<br/>
                空中流霜不觉飞，汀上白沙看不见。<br/>
                江天一色无纤尘，皎皎空中孤月轮。<br/>
                江畔何人初见月，江月何年初照人。<br/>
                人生代代无穷已，江月年年只相似。<br/>
                不知江月待何人，但见长江送流水。
            </sd-collapse-item>
            <sd-collapse-item title="标题" icon="close" value="右侧" name="3">
                春江潮水连海平，海上明月共潮生。<br/>
                艳艳水波千万里，何处春江无月明。<br/>
                江流宛转绕芳甸，月照花林皆似霰。<br/>
                空中流霜不觉飞，汀上白沙看不见。<br/>
                江天一色无纤尘，皎皎空中孤月轮。<br/>
                江畔何人初见月，江月何年初照人。<br/>
                人生代代无穷已，江月年年只相似。<br/>
                不知江月待何人，但见长江送流水。
            </sd-collapse-item>
        </sd-collapse>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                collapseActive: ['1']
            }
        },
        methods: {
            changeCollapse(e) {
                console.log(e)
            },
            changeCollapseItem(e) {
                console.log(e)
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599209615915.gif)
