# `Checkbox` 复选框
Checkbox 组件定义一个复选框。

## CheckboxGroup Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(value) | Array | [] | 选中复选框的name。
| type | String | '' | 列表形式type === 'cell'其他为默认形式。
| max | Number | -1 | 最大选中项 -1为不限制选中项。
| disabled | Boolean | false | 是否禁用复选框。

## Checkbox Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(checked) | Boolean | false | 选中复选框是否选中。
| shape | String | '' | 选择框的类型 square为方形 其他为圆形。
| color | String | '#1989fa' | 选择框默认选择颜色。
| name | String | '' | 选择框唯一标识默认为索引。
| labelDisabled | Boolean | false | 是否禁用label的点击反馈。
| disabled | Boolean | false | 是否禁用复选框项。

## CheckboxGroup Events
| Event Name | Returns | Notes |
|---|---|---|
| change | value(当前选中项name的集合) | 选中项改变时触发。

## Checkbox Events
| Event Name | Returns | Notes |
|---|---|---|
| change | checked(复选框项的状态) | 复选框项的状态改变时触发。

## Checkbox Slots
| Slot Name | Returns |
|---|---|
| 默认 | 复选框的内容 |
| unActiveIcon | 未选中时的icon图标或图片 |
| activeIcon | 选中时的icon图标或图片 |

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
    <div class="checkbox">
        <csCheckboxGroup v-model="value" @change="change" type="cell">
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="1">选项11
                <template slot="unActiveIcon">
                <img src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
                </template>
                <template slot="activeIcon">
                <img src="https://img.yzcdn.cn/vant/user-active.png" alt="">
                </template>
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="2">选项22
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="3">选项33
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="4">选项44
            </cs-checkbox>
            <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="5">选项55
            </cs-checkbox>
        </csCheckboxGroup>

        <cs-checkbox shape="" color="#67c23a" :checked="checked"  @change="changeCheckbox" name="5">选项66
        </cs-checkbox>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                checked: false,
                value: ['1', '2']
            }
        },
        methods: {
            changeCheckbox(e) {
                console.log(e)
                this.checked = e
            },
            change(e) {
                console.log(e)
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/09/04/1599212379617.gif)
