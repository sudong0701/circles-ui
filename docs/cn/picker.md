# `Picker` 选择器组件
Picker 组件定义一个选择器。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model | Array | [] | 初始数据的下标数组。
| isCascade | Boolean | false | 是否是级联选择器。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| isShowTitle | Boolean | true | 是否展示title。
| title | String | '标题' | 标题的文字。
| right-button-text | String | '确认' | 右边按钮文案。
| left-button-text | String | '取消' | 左边按钮文案。
| customName | String | 'name' | 自定义文字属性名。
| customChild | String | 'children' | 自定义子类数组名(仅isCascade为true时有效)。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | Array(当前选项的数组) | 选项改变时触发。
| clickLeftBtn | Array(当前选项的数组) | 点击左边按钮时触发。
| clickRightBtn | Array(当前选项的数组) | 点击右边按钮时触发。

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

### 非级联选择器
```
<template>
    <div>
        <div @click="showPicker">显示picker</div>
        <sdPopup v-model="show">
            <sdPicker v-model="defaultArr" :columns="columns" @clickRightBtn="pickerConfirm" customName="label"></sdPicker>
        </sdPopup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                show: false,
                defaultArr: [5, 3, 4],
                columns: [
                    {
                        values: [{label: '苹果', id: 1}, {label: '橘子', id: 2}, {label: '木瓜', id: 3}, {label: '葡萄', id: 4}, {label: '西瓜', id: 5}, {label: '桃子', id: 6}, {label: '梨子', id: 7}, {label: '山竹', id: 8}, {label: '车厘子', id: 9}, {label: '香蕉', id: 10},]
                    },
                    {
                        values: [{label: '芹菜', id: 1}, {label: '苦菊', id: 2}, {label: '油麦菜', id: 3}, {label: '辣椒', id: 4}, {label: '洋葱', id: 5}, {label: '豆角', id: 6}, {label: '黄瓜', id: 7}, {label: '胡萝卜', id: 8}, {label: '杏鲍菇', id: 9}, {label: '生菜', id: 10},]
                    },
                    {
                        values: [{label: '鸡肉', id: 1}, {label: '牛肉', id: 2}, {label: '猪肉', id: 3}, {label: '鸡翅', id: 4}, {label: '鸡腿', id: 5}, {label: '龙虾', id: 6}, {label: '螃蟹', id: 7}, {label: '火鸡', id: 8}]
                    }
                ],
            }
        },
        methods: {
            showPicker() {
                this.show = true
            },
            pickerConfirm(res) {
                console.log(res)
                this.show = false
            }
        }
    }
</script>

columns示例:
columns: [
            {
                values: [{label: '苹果', id: 1}, {label: '橘子', id: 2}, {label: '木瓜', id: 3}, {label: '葡萄', id: 4}]
            },
            {
               values: [{label: '芹菜', id: 1}, {label: '苦菊', id: 2}, {label: '油麦菜', id: 3}, {label: '辣椒', id: 4}]
            },
            {
               values: [{label: '鸡肉', id: 1}, {label: '牛肉', id: 2}, {label: '猪肉', id: 3}, {label: '鸡翅', id: 4}]
            }
]
```
### 级联选择器
```
columns示例:
[
  {
  "value": "1",
  "label": "北京",
  "children": [{
    "value": "0",
    "label": "市辖区",
    "children": [{
      "value": "1",
      "label": "东城区"
    }]
  }, {
    "value": "1",
    "label": "县",
    "children": [{
      "value": "1",
      "label": "密云县"
    }, {
      "value": "2",
      "label": "延庆县"
    }]
  }]
}, , {
  "value": "2",
  "label": "天津",
  "children": [{
    "value": "0",
    "label": "市辖区",
    "children": [{
      "value": "1",
      "label": "和平区"
    }, {
      "value": "2",
      "label": "河东区"
    }]
  }, {
    "value": "1",
    "label": "县",
    "children": [{
      "value": "1",
      "label": "宁河县"
    }, {
      "value": "2",
      "label": "静海县"
    }, {
      "value": "3",
      "label": "蓟县"
    }]
  }]
}
]

```
<template>
    <div>
        <div @click="showPopup">点击显示</div>
        <sdPopup v-model="show">
            <div style="height: 200px"></div>
        </sdPopup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                show: false
            }
        },
        methods: {
            showPopup() {
                this.show = true
            }
        }
    }
</script>

```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/06/1596704209263.gif)
