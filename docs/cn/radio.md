# `Radio` 单选框组件
Radio 组件定义一个单选框。

## RadioGroup Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(value) | String | '' | 单选选中的name 默认为索引。
| type | String | '' | 单选组件的类型 支持列表类型(type === 'cell')和默认类型。
| disabled | Boolean | false | 是否禁用单选组件。

## Radio Props
| Prop | Type | Default | Note |
|---|---|---|---|
| color | String | '#1989fa' | 选中时的颜色。
| name | String & Number | '' | 单选组件唯一标识 默认为索引。
| shape | String | 'round' | 单选框的样式 支持round(圆形)和square(方形)。
| disabled | Boolean | false | 是否禁用单选选项组件。
| labelDisabled | Boolean | false | 是否禁用文本的点击反馈。

## Radio Slots
| Slot Name | Notes |
|---|---|
| 默认 | 单选的内容。
| unActiveIcon | 未选中时的icon图标或图片。
| activeIcon | 选中时的icon图标或图片。

## RadioGroup Events
| Event Name | Returns | Notes |
|---|---|---|
| change | (name & index)当前选中的单选框的name | 选中项改变时触发。

## Radio Events
| Event Name | Returns | Notes |
|---|---|---|
| change | isActive单选框的选中状态 | 单选框选中状态改变时触发。

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
    <div class="radio">
        <sdRadioGroup type="cell" v-model="value" @change="changeGroup" :disabled="false">
            <sdRadio color="#67c23a" name="1" @change="changeRadio">单选框1</sdRadio>
            <sdRadio name="2" :labelDisabled="true">单选框2</sdRadio>
            <sdRadio name="3">单选框3</sdRadio>
        </sdRadioGroup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                value: '2'
            }
        },
        methods: {
            changeGroup(e) {
                console.log(e)
            },
            changeRadio(e) {
                console.log(e)
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599211139626.gif)

![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599211147443.gif)
