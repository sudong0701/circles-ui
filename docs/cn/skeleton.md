# `Skeleton` 骨架屏
Skeleton 组件定义一个骨架屏组件。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| isLoad | Boolean | true | 是否显示骨架屏。
| title | Boolean | false | 是否展示标题占位图。
| avatar | Boolean | false | 是否展示头像占位图。
| row | Number & String | 0 | 配置占位段落行数。
| rowWidth | string[] & number[](number时默认单位为%) | [] | 配置占位段落宽度。
| avatarSize | Number & String | 0.64rem | 头像占位大小 number默认单位为px。
| avatarShape | String | round | 头像类型 round(圆形) square(方形)。
| animate | Boolean | true | 是否有动画。

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
    <div class="Skeleton">
        <csSkeleton title avatar row="3" :rowWidth="rowWidth"></csSkeleton>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                rowWidth: [100, 100, 50]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Skeleton {
        padding: 1rem 0.32rem 0 0.32rem;
    }
</style>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/09/1599630757771.gif)
