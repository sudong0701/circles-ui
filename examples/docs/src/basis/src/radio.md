# Radio 单选框
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csRadio, csRadioGroup } from 'circles-ui';

       Vue.use(csRadio);
       Vue.use(csRadioGroup);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `v-model` 绑定值当前选中项的 name

   ```html
    <csRadioGroup v-model="radio">
        <csRadio name="1">单选框1</csRadio>
        <csRadio name="2">单选框2</csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radio: '1'
            }
        }
    }
   ```
:::

:::card
### 禁用状态
> 通过 `disabled` 属性禁止选项切换，在 `csRadio` 上设置 `disabled` 可以禁用单个选项

   ```html
    <csRadioGroup v-model="radioDisabled" disabled>
        <csRadio name="1">禁用单选框1</csRadio>
        <csRadio name="2">禁用单选框2</csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radioDisabled: '1'
            }
        }
    }
   ```
:::

:::card
### 单个禁用

   ```html
    <csRadioGroup v-model="radioDisabled">
        <csRadio name="1" disabled >禁用单选框1</csRadio>
        <csRadio name="2">禁用单选框2</csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radioDisabled: '1'
            }
        }
    }
   ```
:::

:::card
### 自定义形状
> 将 `shape` 属性设置为 `square` ，单选框的形状会变成方形
   ```html
    <csRadioGroup v-model="radioSquare">
        <csRadio name="1">方形单选框1</csRadio>
        <csRadio name="2">方形单选框2</csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radioSquare: '2'
            }
        }
    }
   ```
:::

:::card
### 自定义形状
> 通过 `unActiveIcon`和 `activeIcon` 插槽自定义未选中和选中的图标
   ```html
    <csRadioGroup v-model="radioIcon" color="#67c23a">
        <csRadio name="1">
            <!--未选中时的图标-->
            <template #unActiveIcon>
                <img src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
            </template>
            <template #activeIcon>
                <img src="https://img.yzcdn.cn/vant/user-active.png" alt="">
            </template>
            单选框1
        </csRadio>
        <csRadio name="2">
            <!--选中时的图标-->
            <template #unActiveIcon>
                <img src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
            </template>
            <template #activeIcon>
                <img src="https://img.yzcdn.cn/vant/user-active.png" alt="">
            </template>
            单选框2
        </csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radioSquare: '2'
            }
        }
    }
   ```
:::

:::card
### 禁用文本点击
> 将 `labelDisabled` 属性设置为 `true` 即可禁用文本点击。
   ```html
    <csRadioGroup v-model="radioLabel" :labelDisabled="true" >
        <csRadio name="1">单选框1</csRadio>
        <csRadio name="2">单选框2</csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radioLabel: '2'
            }
        }
    }
   ```
:::

:::card
### 单元格样式
> 将 `type` 属性设置为 `cell` 即可使用单元格样式的radio。
   ```html
    <csRadioGroup v-model="radioCell" type="cell">
        <csRadio name="1">单选框1</csRadio>
        <csRadio name="2">单选框2</csRadio>
    </csRadioGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                radioCell: '1'
            }
        }
    }
   ```
:::

## API

:::card
### Radio Props

<template>
   <el-table
        :data="apiData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="150">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="120">
        </el-table-column>
        <el-table-column
             prop="default"
             label="默认值"
             width="150">
        </el-table-column>
      </el-table>
</template>
:::

:::card
### RadioGroup Props

<template>
   <el-table
        :data="apiGroupData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="150">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="120">
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
                  name: 'name',
                  remake: '单选框唯一标识',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'disabled',
                  remake: '是否禁用单选选项组件',
                  type: 'Boolean',
                  default: 'false'
                }
                ],
        apiGroupData: [
                {
                  name: 'v-model(value)',
                  remake: '当前选中单选框的name',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'disabled',
                  remake: '是否禁用单选框框组',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'type',
                  remake: '单选框组的类型，可选值cell，单元格类型的单选框',
                  type: 'String',
                  default: '-'
                },
                {
                  name: 'shape',
                  remake: '单选框的样式，可选值square(方形)，默认round(圆形)',
                  type: 'String',
                  default: "'round'"
                },
                {
                  name: 'color',
                  remake: '单选框的选中时的颜色',
                  type: 'String',
                  default: "'#1989fa'"
                },
                {
                  name: 'labelDisabled',
                  remake: '是否禁用文本的点击',
                  type: 'Boolean',
                  default: "'false'"
                }
        ],
        eventData: [{
                  name: 'change',
                  remake: '单选框项的选中状态改变时触发',
                  param: 'event: Boolean(单选框项的选中状态)'
                }
        ],
        eventGroupData: [{
                  name: 'change',
                  remake: '单选框组选中项改变时触发',
                  param: 'event: String(当前选中单选框的name)'
        }],
        slotData: [
            {
                name: 'activeIcon',
                remake: '单选框组选中时的插槽',
                props: '-'
            },
            {
                name: 'unActiveIcon',
                remake: '单选框组未选中时的插槽',
                props: '-'
            }
        ]
    }
  }
}
</script>

:::

:::card
### Radio  Events

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
          width="320">
        </el-table-column>
      </el-table>
</template>
:::

:::card
### RadioGroup  Events

<template>
   <el-table
        :data="eventGroupData"
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
          width="320">
        </el-table-column>
      </el-table>
</template>
:::

:::card
### Radio  Slots

<template>
   <el-table
        :data="slotData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="props"
          label="SlotProps"
          width="320">
        </el-table-column>
      </el-table>
</template>
:::