# `ActionSheet` 动作面板组件
ActionSheet 组件定义一个动作面板。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(isShow) | Boolean | false | 是否显示。
| actions | Array | [] | 选项数据数组数(数据请看下方示例,disabled控制是否禁用)。
| cancelText | String | '' | 底部取消按钮文字，为空时不展示底部取消按钮。
| description | String | '' | 标题的文字。
| isBorder | Boolean | true | 是否展示选项分割线。
| isRound | Boolean | true | 是否展示圆角。
| isOverlay | Boolean | true | 是否展示背景蒙层。
| lockScroll | Boolean | true | 是否锁定背景滚动。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| open |  | actionSheet打开时触发。
| opened |  | actionSheet打开且动画结束时触发。
| close |  | actionSheet关闭时触发。
| closed |  | actionSheet关闭且动画结束时触发。
| select | Object | 选中选项的数据。

## actions数据示例

```
actions: [{ name: '选项一', remake: '', disabled: true}, { name: '选项二', remake: '描述信息' }, { name: '选项三', remake: ''}]
```



## Example
简单用法

```
<template>
    <div class="actionSheet">
        <span>{{selectItem.action.name}}</span>
        <div @click="isShow = !isShow">点击显示</div>
        <sdActionSheet v-model="isShow" :actions="actions" cancelText="取消" description="请选择身份" @open="open" @opened="opened" @close="close" @closed="closed" @select="select" @cancel="cancel"></sdActionSheet>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                selectItem: {action: {}},
                actions: [{ name: '选项一', remake: '', disabled: true}, { name: '选项二', remake: '描述信息' }, { name: '选项三', remake: ''}],
            }
        },
        methods: {
            open() {
                console.log('open')
            },
            opened() {
               console.log('opened')
            },
            close() {
                console.log('close')
            },
            closed() {
                console.log('closed')
            },
            select(item) {
                this.selectItem = item
                console.log(item)
                this.isShow = false
            },
            cancel() {
                this.isShow = false
            }
        }
    }
</script>
```


## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596793012887.gif)
