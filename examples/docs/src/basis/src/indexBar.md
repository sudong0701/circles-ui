# IndexBar 索引栏
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csIndexBar, csIndexBarItem } from 'circles-ui';

       Vue.use(csIndexBar);
       Vue.use(csIndexBarItem);
   ```
:::


## 代码演示

:::card
### 基础用法
> 点击索引栏时，会自动跳转到对应的 `active` 锚点位置

   ```html
    <csIndexBar v-model="active" @change="change">
        <csIndexBarItem index="A">
            <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
        </csIndexBarItem>
        <csIndexBarItem index="B">
            <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
        </csIndexBarItem>

        ...
    </csIndexBar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                active: 6
            }
        }
    }
   ```
:::

## API

:::card
### IndexBar Props

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
                  name: 'v-model(active)',
                  remake: '当前所在的索引栏的下标',
                  type: 'String | Number',
                  default: 'false'
                },
                {
                  name: 'sortArr',
                  remake: '自定义右侧字符列表',
                  type: 'Array',
                  default: '[]'
                },
                {
                  name: 'height',
                  remake: '索引栏的高度',
                  type: 'String | Number',
                  default: "true"
                },
                {
                  name: 'color',
                  remake: '索引栏选中时title和右侧字符列表的字体颜色',
                  type: 'String',
                  default: "'bottom'"
                },
                {
                  name: 'showToast',
                  remake: '点击右侧字符列表时是否有弱提示',
                  type: 'Boolean',
                  default: "true"
                }
                ],
                eventData: [{
                  name: 'scroll',
                  remake: '索引页滚动时触发',
                  param: 'event: Object'
                },
                {
                  name: 'change',
                  remake: '索引栏选中项改变时触发',
                  param: 'event: Number(当前选中项的索引)'
                }
                ],
                apiItemData: [
                    {
                        name: 'index',
                        remake: '索引栏项的索引字符',
                        type: 'String | Number',
                        default: "''" 
                    }
                ]
    }
  }
}
</script>
:::

:::card
### IndexBarItem Props

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
          width="130">
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
### IndexBar Events

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