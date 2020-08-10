# `IndexBar` 索引栏组件
IndexBar 组件定义一个索引栏组件。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(active) | String & Number | 0 | 索引栏选中的下标。
| sortArr | Array | [] | 自定义索引栏数组。
| height | String & Number | '' | 索引栏的高度。
| color | String | '#07c160' | 索引栏选中的颜色。
| showToast | Boolean | true | 是否在点击索引栏时显示提示。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| scroll | Object | 索引页滚动时触发。
| change | active | 选中项改变时触发。

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
    <div class="indexBar">
        <sdIndexBar height="617px" v-model="active" @change="change">
            <sdIndexBarItem index="A">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="B">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="C">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="D">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="E">
                <div v-for="(item, key) in 8" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="F">
                <div v-for="(item, key) in 7" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="G">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="H">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="I">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="J">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="K">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="L">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="M">
                <div v-for="(item, key) in 1" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="N">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="O">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="P">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="Q">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="R">
                <div v-for="(item, key) in 7" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="S">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="T">
                <div v-for="(item, key) in 9" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="U">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="V">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="W">
                <div v-for="(item, key) in 8" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="X">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="Y">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="Z">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
        </sdIndexBar>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 6
            }
        },
        methods: {
            change(index) {
                console.log(index)
            }
        }
    }
</script>

```
## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/10/1597048329028.gif)
