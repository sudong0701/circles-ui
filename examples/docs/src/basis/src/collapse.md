# Collapse 折叠面板
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csCollapse } from 'circles-ui';

       Vue.use(csCollapse);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `v-model` 控制展开的面板列表。

   ```html
    <cs-collapse  @change="changeCollapse" v-model="collapseActive">
        <cs-collapse-item title="标题" name="1">
            <p>幸得识卿桃花面，从此阡陌多暖春。</p>
        </cs-collapse-item>
        <cs-collapse-item title="标题" name="2">
            <p>年年岁岁花相似，岁岁年年人不同。</p>
        </cs-collapse-item>
        <cs-collapse-item title="标题" name="3">
            <p>时光如水，总是无言。你若安好，便是晴天。</p>
        </cs-collapse-item>
    </cs-collapse>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                collapseActive: '1'
            }
        },
        methods: {
            changeCollapse(e) {
                if(Array.isArray(e)) {
                    this.Toast({
                        content: `当前打开${e.join('、')}`
                    })
                } else {
                    this.Toast({
                        content: `当前打开${e}`
                    })
                }
            }
        }
    }
   ```
:::

:::card
### 手风琴模式
> 通过 `accordion` 可以设置为手风琴模式，最多展开一个面板。

   ```html
    <cs-collapse  v-model="collapseActive" accordion>
        <cs-collapse-item title="标题" name="1">
            <p>幸得识卿桃花面，从此阡陌多暖春。</p>
        </cs-collapse-item>
        <cs-collapse-item title="标题" name="2">
            <p>年年岁岁花相似，岁岁年年人不同。</p>
        </cs-collapse-item>
        <cs-collapse-item title="标题" name="3">
            <p>时光如水，总是无言。你若安好，便是晴天。</p>
        </cs-collapse-item>
    </cs-collapse>
   ```
:::

:::card
### 自定义标题内容
> 通过 `icon` 设置左侧图标，`value` 设置右侧文字内容``。

   ```html
    <cs-collapse  v-model="collapseActive" accordion>
        <cs-collapse-item title="标题" name="1" icon="present" iconColor="#FF2C7D">
            <p>幸得识卿桃花面，从此阡陌多暖春。</p>
        </cs-collapse-item>
        <cs-collapse-item title="标题" name="2" value="内容">
            <p>年年岁岁花相似，岁岁年年人不同。</p>
        </cs-collapse-item>
        <cs-collapse-item title="标题" name="3" icon="https://img.yzcdn.cn/vant/user-active.png">
            <p>时光如水，总是无言。你若安好，便是晴天。</p>
        </cs-collapse-item>
    </cs-collapse>
   ```
:::

## API

:::card
### collapse Props

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
### CheckboxGroup Props

<template>
   <el-table
        :data="apiItemData"
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
                  name: 'v-model(activeNames)',
                  remake: '当前展开面板的 name',
                  type: 'Array | String',
                  default: "''"
                },
                {
                  name: 'accordion',
                  remake: '是否为手风琴模式',
                  type: 'Boolean',
                  default: 'false'
                }
                ],
        apiItemData: [
                {
                  name: 'name',
                  remake: '折叠面板项的标识',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'icon',
                  remake: '标题栏左侧图标名称或图片链接',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'iconColor',
                  remake: 'icon图标的颜色',
                  type: 'String',
                  default: "'#333'"
                },
                {
                  name: 'title',
                  remake: '标题栏左侧内容',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'value',
                  remake: '标题栏右侧内容',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'is-link',
                  remake: '是否展示标题栏右侧箭头',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'disabled',
                  remake: '是否禁用面板',
                  type: 'Boolean',
                  default: "false"
                }
        ],
        eventData: [{
                  name: 'change',
                  remake: '切换面板时触发',
                  param: 'event: Array | String(当前打开的所有面板的name)'
                }
        ],
        eventItemData: [
            {
                name: 'change',
                remake: '面板状态改变时触发',
                param: 'event: Boolean(当前面板是否打开)'
            },
            {
                name: 'showed',
                remake: '面板完全显示时触发',
                param: 'void'
            },
            {
                name: 'hided',
                remake: '面板完全隐藏时触发',
                param: 'void'
            }
        ],
        slotData: [
            {
                name: 'default',
                remake: '折叠面板内容',
                props: '-'
            }
        ]
    }
  }
}
</script>

:::

:::card
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
:::

:::card
### CheckboxGroup  Events

<template>
   <el-table
        :data="eventItemData"
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
</template>
:::