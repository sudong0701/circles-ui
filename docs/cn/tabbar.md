# `Tabbar` 标签栏
Tabbar 组件定义一个标签栏。

## Tabbar Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(active) | String & Number | 0 | 当前选中tabbar的索引。
| fixed | Boolean | false | 是否使用fixed布局。
| activeColor | String | #1989fa | 选中时的颜色。
| inactiveColor | String | #7d7e80 | 未选中时的颜色。

## TabbarItem Props
| Prop | Type | Default | Note |
|---|---|---|---|
| icon | String | '' | 图标icon。
| dot | Boolean | false | 是否显示右上角小红点。
| badge | String | '' | 图标右上角徽标的内容。

## TabbarItem Slots
| Slots Name | Notes |
|---|---|
| icon | 自定义tabbar图标。

## Tabbar Events
| Event Name | Returns | Notes |
|---|---|---|
| change | active | 当前选中的tabbar改变时触发。

## TabbarItem Events
| Event Name | Returns | Notes |
|---|---|---|
| select |  | item被选中时触发。

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
    <div class="tabbar">
        <div @click="show">显示</div>
        <cs-tabbar fixed v-model="active" @change="changeTab" ref="tabbar">
            <csTabbarItem icon="home" :dot="true">主页</csTabbarItem>
            <csTabbarItem  badge="2">购物车
                <template #icon="props">
                    <i :style="`color: ${props.active ? '#1989fa' : '#7d7e80'}`" class="iconfont iconcart"></i>
                </template>
            </csTabbarItem>
            <csTabbarItem v-if="isShow" icon="apps">菜单</csTabbarItem>
            <csTabbarItem icon="people">我的</csTabbarItem>
        </cs-tabbar>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 0,
                isShow: false
            }
        },
        methods: {
            changeTab(key) {
                console.log(key)
            },
            show() {
                this.isShow = !this.isShow
                this.$refs.tabbar.initComponent()
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/07/1599448627070.gif)
