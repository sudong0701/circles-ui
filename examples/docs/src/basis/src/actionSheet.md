# ActionSheet 动作面板
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csActionSheet } from 'circles-ui';

       Vue.use(csActionSheet);
   ```
:::


## 代码演示

:::card
### 基础用法
> 通过 `v-model` 控制动作面板显隐，通过 `actions` 配置面板选项。

   ```html
    <cs-button type="primary" text="基础用法" @click="showSheet"></cs-button>

    <csActionSheet v-model="isShow" :actions="actions" @select="select"></csActionSheet>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                actions: [{ name: '选项一'}, { name: '选项二'}, { name: '选项三'}]
            }
        },
        methods: {
            showSheet() {
                this.isShow = true
            },
            select(e) {
                this.Toast({
                    content: `选择了${e.action.name}`
                })
                this.isShow = false
            }
        }
    }
   ```
:::

:::card
### 展示取消按钮
> 通过 `cancelText` 控制取消按钮的显示和文案，点击取消按钮会触发cancel事件。

   ```html
    <cs-button type="primary" text="展示取消按钮" @click="showSheetCancel"></cs-button>

    <csActionSheet v-model="isShowCancel" :actions="actions" cancelText="取消" @cancel="cancel">
    </csActionSheet>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowCancel: false,
                actions: [{ name: '选项一'}, { name: '选项二'}, { name: '选项三'}]
            }
        },
        methods: {
           showSheetCancel() {
                this.isShowCancel = true
            },
            cancel() {
                this.isShowCancel = false
            }
        }
    }
   ```
:::

:::card
### 展示描述信息
> 通过给 `actions` 选项配置 `remake` 字段展示描述信息。

   ```html
    <cs-button type="primary" text="描述信息" @click="showSheetRemake"></cs-button>

    <csActionSheet v-model="isShowRemake" :actions="actionsRemake" @select="selectRemake"></csActionSheet>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowRemake: false,
                actionsRemake: [{ name: '选项一'}, { name: '选项二', remake: '描述信息' }, { name: '选项三'}]
            }
        },
        methods: {
            showSheetRemake() {
                this.isShowRemake = true
            },
            selectRemake() {
                this.isShowRemake = false
            }
        }
    }
   ```
:::

:::card
### 禁用选项
> 通过给 `actions` 选项配置 `disabled` 字段禁用该选项。

   ```html
    <cs-button type="primary" text="禁用选项" @click="showSheetDisabled"></cs-button>

    <csActionSheet v-model="isShowDisabled" :actions="actionsDisabled" @select="selectDisabled"></csActionSheet>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowDisabled: false,
                actionsDisabled: [{ name: '选项一'}, { name: '选项二', disabled: true }, { name: '选项三'}]
            }
        },
        methods: {
            showSheetDisabled() {
                this.isShowDisabled = true
            },
            selectDisabled() {
                this.isShowDisabled = false
            }
        }
    }
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
                  name: 'v-model(isShow)',
                  remake: '控制ActionSheet的显示隐藏',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'actions',
                  remake: 'ActionSheet的配置数据项',
                  type: 'Array',
                  default: "[]"
                },
                {
                  name: 'isOverlay',
                  remake: '是否显示背景蒙层',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'closeOnClickOverlay',
                  remake: '是否点击背景蒙层后关闭',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'cancelText',
                  remake: '取消按钮的文案，为空时不展示取消按钮',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'description',
                  remake: 'ActionSheet的标题',
                  type: 'String',
                  default: '标题'
                },
                {
                  name: 'isBorder',
                  remake: '选项是否展示分割线',
                  type: 'Boolean',
                  default: 'false'
                }, 
                {
                  name: 'isRound',
                  remake: '是否展示圆角',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'lockScroll',
                  remake: '是否锁定背景滚动',
                  type: 'Boolean',
                  default: 'true'
                },
                ],
                eventData: [
                {
                  name: 'select',
                  remake: '点击选项时触发',
                  param: 'event: Object(当前选中的action项)'
                },    
                {
                  name: 'open',
                  remake: 'ActionSheet打开时触发',
                  param: '-'
                },
                {
                  name: 'opened',
                  remake: 'ActionSheet打开且动画结束时触发',
                  param: '-'
                },
                {
                  name: 'close',
                  remake: 'ActionSheet关闭时触发',
                  param: '-'
                },
                {
                  name: 'closed',
                  remake: 'ActionSheet关闭且动画结束时触发',
                  param: '-'
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