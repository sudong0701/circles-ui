# Picker 选择器组件
> 提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](https://sudong0701.github.io/circles-UI-docs/#/demo/popup)组件配合使用

<br/>

:::card
   ### 按需引入

   ```javascript
       import Vue from 'vue';
       import { csPicker } from 'circles-ui';

       Vue.use(csPicker);
   ```
:::


## 代码演示

<font color=red> * 由于移动端手势Touch事件无法在PC端模拟，所以文档目前不能模拟手势事件(涉及的组件太多，需要集中处理)，所以文档目前仅支持click事件。可以[点击这里](https://sudong0701.github.io/circles-UI-docs/#/demo/picker)体验完整功能的组件，后续会对组件进行优化(1.添加PC端mouse事件；2.添加惯性滚动)。</font>

:::card

### 基础用法
> Picker 通过 `columns` 属性配置选项数据，`columns`是一个包含字符串或对象的数组
```html
    <cs-button type="primary" text="基础用法" @click="showBasis"></cs-button>

    <cs-popup v-model="isShowBasis" :closeOnClickOverlay="false">
        <cs-Picker v-model="valueBasis" :columns="columnsBasis" @change="basisChange" @clickRightBtn="closePicker" 
        @clickLeftBtn="closePicker"></cs-Picker >
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowBasis: false,
                valueBasis: [2],
                columnsBasis: [
                    {
                        values: [{name: '苹果', id: 1}, {name: '橘子', id: 2}, {name: '木瓜', id: 3}, 
                        {name: '葡萄', id: 4}, {name: '西瓜', id: 5}, {name: '桃子', id: 6}, 
                        {name: '梨子', id: 7}, {name: '山竹', id: 8}, {name: '车厘子', id: 9}, 
                        {name: '香蕉', id: 10}]
                    }
                ]
            }
        },
        methods: {
            showBasis() {
                this.isShowBasis = true
            },
            basisChange(e) {
                console.log(e)
                this.Toast({
                    content: `当前选择${e[0].name},索引${e[0].key}`
                })
            },
            closePicker() {
                this.isShowBasis = false
            }
        }
    }
   ```
:::

:::card

### 多列选择
> columns属性可以通过对象数组的形式配置多列选择
```html
    <cs-button type="primary" text="多列选择" @click="showMulti"></cs-button>

    <cs-popup v-model="isShowMulti">
        <cs-Picker v-model="valueMulti" :columns="columnsMulti" @change="multiChange" @clickRightBtn="isShowMulti = false" 
            @clickLeftBtn="isShowMulti = false"></cs-Picker >
    </cs-popup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowMulti: false,
                valueMulti: [2,6,3],
                columnsMulti: [
                    {
                        values: [{name: '苹果', id: 1}, {name: '橘子', id: 2}, {name: '木瓜', id: 3},
                            {name: '葡萄', id: 4}, {name: '西瓜', id: 5}, {name: '桃子', id: 6},
                            {name: '梨子', id: 7}, {name: '山竹', id: 8}, {name: '车厘子', id: 9},
                            {name: '香蕉', id: 10}]
                    },
                    {
                        values: [{name: '芹菜', id: 1}, {name: '苦菊', id: 2}, {name: '油麦菜', id: 3},
                            {name: '辣椒', id: 4}, {name: '洋葱', id: 5}, {name: '豆角', id: 6},
                            {name: '黄瓜', id: 7}, {name: '胡萝卜', id: 8}, {name: '杏鲍菇', id: 9},
                            {name: '生菜', id: 10}]
                    },
                    {
                        values: [{name: '猪肉', id: 1}, {name: '牛肉', id: 2}, {name: '羊肉', id: 3},
                            {name: '驴肉', id: 4}, {name: '耗牛肉', id: 5}, {name: '鸡肉', id: 6},
                            {name: '鸭肉', id: 7}, {name: '鹅肉', id: 8}]
                    },
                ]
            }
        },
        methods: {
            showMulti() {
                this.isShowMulti = true
            }
        }
    }
   ```
:::

:::card

### 级联选择器
> 通过设置 `isCascade` 为 `true` 使用级联选择器，<font color=red>注意：级联选择器选项的数据格式和普通选择器不一样，使用时需要注意。</font>

```html
    <cs-button type="warning" text="级联选择" @click="showCascade"></cs-button>

    <cs-popup v-model="isShowCascade">
            <cs-Picker v-model="valueCascade" :isCascade="true" customName="label" customChild="children"  :columns="city" 
            @change="cascadeChange" @clickRightBtn="isShowCascade = false" @clickLeftBtn="isShowCascade = false"></cs-Picker >
        </cs-popup>
   ```
   ```js
    import city from '../../assets/js/city'
    export default {
        name: '',
        data() {
            return {
                city: city,
                isShowCascade: false,
                valueCascade: [4,2,3]
            }
        },
        methods: {
            showCascade() {
                this.isShowCascade = true
            },
            cascadeChange(e) {
                this.Toast({
                    content: `${e[0].label}/${e[1].label}/${e[2].label}`
                })
            }
        }
    }
   ```
   <font color=#e99d3a>city.js文件示例，完整文件请[查看这里](https://github.com/sudong0701/circles-ui/blob/1d8f31f9a49b0fa1ebc1b3344cac0b5a92845ea6/static/city-data.js)</font>
   ```js
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
        }, {
            "value": "2",
            "label": "西城区"
        }, {
            "value": "3",
            "label": "崇文区"
        }, {
            "value": "4",
            "label": "宣武区"
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
}, {
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
        }, {
            "value": "3",
            "label": "河西区"
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
:::

## API

:::card
### Props

   <template>
   <el-table
        :data="apiData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="130">
        </el-table-column>
        <el-table-column
             prop="default"
             label="默认值"
             width="150">
        </el-table-column>
      </el-table>
</template>
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'v-model(defaultArr)',
                  remake: '选中数据的下标数组',
                  type: 'Array',
                  default: '[]'
                },
                {
                  name: 'columns',
                  remake: '数据数组(普通选择器和级联选择器数据结构不一致，具体结构请参考上方示例)',
                  type: 'Array',
                  default: '[]'
                },
                {
                  name: 'isCascade',
                  remake: '是否为级联选择器',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'isShowTitle',
                  remake: '是否展示title',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'title',
                  remake: '标题的文字',
                  type: 'String',
                  default: "'标题'"
                },
                {
                  name: 'right-button-text',
                  remake: '右边按钮文案',
                  type: 'String',
                  default: "'确认'"
                }, 
                {
                  name: 'left-button-text',
                  remake: '左边按钮文案',
                  type: 'String',
                  default: "'取消'"
                },
                {
                  name: 'right-button-color',
                  remake: '右边按钮颜色',
                  type: 'String',
                  default: "#1989FA"
                }, 
                {
                  name: 'left-button-color',
                  remake: '左边按钮颜色',
                  type: 'String',
                  default: "#333"
                },
                {
                  name: 'customName',
                  remake: '自定义文字内容的属性名',
                  type: 'String',
                  default: "'name'"
                },
                {
                  name: 'customChild',
                  remake: '自定义子类数组的属性名(仅级联选择器有效)',
                  type: 'String',
                  default: "'children'"
                },
                ],
                eventData: [{
                  name: 'change',
                  remake: '选择器选项改变时触发',
                  param: 'event: Array(选中项的数组)'
                },
                {
                  name: 'clickLeftBtn',
                  remake: '点击左边按钮时触发',
                  param: 'event: Array(选中项的数组)'
                },
                {
                  name: 'clickRightBtn',
                  remake: '点击右边按钮时触发',
                  param: 'event: Array(选中项的数组)'
                }
                ]
    }
  }
}
</script>
:::

:::card
### Events

<template>
   <el-table
        :data="eventData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="事件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="param"
          label="回调参数"
          width="240">
        </el-table-column>
      </el-table>
    </template>
:::