# Checkbox 复选框
<br/>


   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csCheckbox, csCheckboxGroup } from 'circles-ui';

       Vue.use(csPopup);
       Vue.use(csCheckboxGroup);
   ```

## 代码演示

### 基础用法
> 通过 `v-model` 绑定复选框的勾选状态

   ```html
    <csCheckbox v-model="isCheck">基础用法</csCheckbox>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isCheck: true
            }
        }
    }
   ```

### 禁用状态
> 通过 `disabled` 设置checkbox为禁用状态

   ```html
    <csCheckbox v-model="isCheck" disabled>基础用法</csCheckbox>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isCheck: true
            }
        }
    }
   ```

### 自定义形状
> 通过 `shape` 设置checkbox的形状，可选值 `square`(方形)，默认round(圆形)

   ```html
    <csCheckbox v-model="isCheckShape" shape="square">自定义形状</csCheckbox>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isCheckShape: true
            }
        }
    }
   ```

### 自定义颜色
> 通过 `color` 设置checkbox选中框的颜色。

   ```html
    <csCheckbox v-model="isCheckColor" color="#67c23a">自定义颜色</csCheckbox>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isCheckColor: true
            }
        }
    }
   ```

### 自定义图标
> 通过 `slot` 自定义选中/未选中的图标

   ```html
    <csCheckbox v-model="isCheckImg" color="#67c23a">
        <template #activeIcon>
            <img  src="https://img.yzcdn.cn/vant/user-active.png" alt="">
        </template>
        <template #unActiveIcon>
            <img  src="https://img.yzcdn.cn/vant/user-inactive.png" alt="">
        </template>
        自定义图标
    </csCheckbox>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isCheckImg: true
            }
        }
    }
   ```

### 禁用文本点击
> 通过 `labelDisabled` 设置checkbox是否禁用文本点击。

   ```html
    <csCheckbox v-model="isCheckLabel" labelDisabled>禁用文本点击</csCheckbox>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isCheckLabel: true
            }
        }
    }
   ```

### 复选框组
> 复选框可以与复选框组一起使用，复选框组通过 `v-model` 数组绑定复选框的勾选状态。

   ```html
    <csCheckboxGroup v-model="checkValue">
        <csCheckbox name="0">复选框0</csCheckbox>
        <csCheckbox name="1">复选框1</csCheckbox>
        <csCheckbox name="2">复选框2</csCheckbox>
        <csCheckbox name="3">复选框3</csCheckbox>
    </csCheckboxGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkValue: ['0', '2']
            }
        }
    }
   ```

### 限制最大可选数
> 通过 在复选框组上声明 `max` 属性控制复选框的最大可选个数。

   ```html
    <csCheckboxGroup v-model="checkValueMax" max="2">
        <csCheckbox name="0">复选框0</csCheckbox>
        <csCheckbox name="1">复选框1</csCheckbox>
        <csCheckbox name="2">复选框2</csCheckbox>
        <csCheckbox name="3">复选框3</csCheckbox>
    </csCheckboxGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkValueMax: ['1']
            }
        }
    }
   ```

### 单元格样式
> 通过在复选框组上声明 `type='cell'`声明单元格样式的复选框 。

   ```html
    <div class="button-demo-content">
        <csCheckboxGroup v-model="checkValueCell" type="cell">
        <csCheckbox name="0">复选框0</csCheckbox>
        <csCheckbox name="1">复选框1</csCheckbox>
        <csCheckbox name="2">复选框2</csCheckbox>
        <csCheckbox name="3">复选框3</csCheckbox>
    </csCheckboxGroup>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                checkValueCell: ['0']
            }
        }
    }
   ```

## API

### Checkbox Props

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

### CheckboxGroup Props

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
                  name: 'v-model(checked)',
                  remake: '复选框是否选中',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'shape',
                  remake: '复选框类型，可选值square(方形、round(圆形))',
                  type: 'String',
                  default: 'round'
                },
                {
                  name: 'color',
                  remake: '复选框选中时的颜色',
                  type: 'String',
                  default: "'#1989fa'"
                },
                {
                  name: 'disabled',
                  remake: '是否禁用复选框',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'labelDisabled',
                  remake: '是否禁用文字点击',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'name',
                  remake: '复选框的唯一标识，和checkboxGroup配合使用时必填',
                  type: 'String',
                  default: '-'
                },
                ],
        apiGroupData: [
                {
                  name: 'v-model(value)',
                  remake: '选中复选框的name的数组',
                  type: 'Array',
                  default: '[]'
                },
                {
                  name: 'disabled',
                  remake: '是否禁用复选框组',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'type',
                  remake: '复选框组的类型，可选值cell，单元格类型的复选框',
                  type: 'String',
                  default: '-'
                },
                {
                  name: 'max',
                  remake: '复选框组最大可选项，-1为不限制数量',
                  type: 'Number',
                  default: '-1'
                }
        ],
        eventData: [{
                  name: 'change',
                  remake: '复选框项的状态改变时触发',
                  param: 'event: Boolean(复选框项的选中状态)'
                }
        ],
        eventGroupData: [{
                  name: 'change',
                  remake: '复选框组选中项改变时触发',
                  param: 'event: Array(当前选中项name的集合)'
        }],
        slotData: [
            {
                name: 'activeIcon',
                remake: '复选框组选中时的插槽',
                props: '-'
            },
            {
                name: 'unActiveIcon',
                remake: '复选框组未选中时的插槽',
                props: '-'
            }
        ]
    }
  }
}
</script>


### Checkbox  Events

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

### CheckboxGroup  Events

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

### Checkbox  Slots

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
      <div class="pageBottom"></div>
</template>