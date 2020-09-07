# `swipeCell` 滑动单元格组件
swipeCell 组件定义一个滑动单元格。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|

## Events
| Event Name | Returns | Notes |
|---|---|---|

## Slot
left 定义左侧滑动的内容(需要自己定义样式)</br>
right 定义右侧滑动的内容(需要自己定义样式)

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
    <div class="swipeCell">
        <csSwipeCell v-for="(item, key) in cellArr" :key="key">
            <template #left>
                <div class="left">查看详情</div>
            </template>
            <div style="padding: 10px 16px;background-color: #fff;line-height: 0.48rem">测试滑动单元格组件{{key}}</div>
            <template #right>
                <div class="right">删除</div>
            </template>
        </csSwipeCell>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                cellArr: [1,1,1,1,1,1]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .swipeCell {
        .left {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #67c23a;
            color: #fff;
        }
        .right {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #ee0a24;
            color: #fff;
        }
    }
</style>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599207888863.gif)
