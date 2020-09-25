# Tabbar 标签栏
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csTabbar, csTabbarItem } from 'circles-ui';

       Vue.use(csTabbar);
       Vue.use(csTabbarItem);
   ```
:::


## 代码演示

:::card
### 基础用法
> `v-model` 绑定选中标签的索引值，通过修改 `v-model` 即可切换选中的标签

   ```html
    <cs-tabbar v-model="active" @change="changeTab">
        <csTabbarItem icon="home">主页</csTabbarItem>
        <csTabbarItem icon="cart">购物车</csTabbarItem>
        <csTabbarItem icon="apps">菜单</csTabbarItem>
        <csTabbarItem icon="people">我的</csTabbarItem>
    </cs-tabbar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                active: 0
            }
        },
        methods: {
            changeTab(e) {
                this.Toast({
                    content: `当前选中索引${e}`
                })
            }
        }
    }
   ```
:::

:::card
### 徽标提示
> 设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标

   ```html
    <cs-tabbar v-model="activeTip">
        <csTabbarItem icon="home">主页</csTabbarItem>
        <csTabbarItem icon="cart" badge="2">购物车</csTabbarItem>
        <csTabbarItem icon="apps" :dot="true">菜单</csTabbarItem>
        <csTabbarItem icon="people">我的</csTabbarItem>
    </cs-tabbar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeTip: 1
            }
        }
    }
   ```
:::

:::card
### 自定义图标
> 支持通过插槽的方式自定义图标，插槽名为 `icon`

   ```html
    <cs-tabbar v-model="activeCustom">
        <csTabbarItem>主页
            <template #icon="props">
                <cs-icon name="upstage" :color="props.active ? '#1989fa' : '#7d7e80'"></cs-icon>
            </template>
        </csTabbarItem>
        <csTabbarItem icon="cart">购物车</csTabbarItem>
        <csTabbarItem icon="apps">设置
            <template #icon="props">
                <cs-icon name="repair" :color="props.active ? '#1989fa' : '#7d7e80'"></cs-icon>
            </template>
        </csTabbarItem>
        <csTabbarItem icon="people">我的</csTabbarItem>
    </cs-tabbar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeCustom: 2
            }
        }
    }
   ```
:::

:::card
### 自定义颜色
> 通过 `activeColor` 设置标签栏选中时的颜色 `inactiveColor` 设置标签栏未选中时的颜色

   ```html
    <cs-tabbar  v-model="activeColor" activeColor="#67c23a">
        <csTabbarItem icon="home">主页</csTabbarItem>
        <csTabbarItem icon="cart">购物车</csTabbarItem>
        <csTabbarItem icon="apps">菜单</csTabbarItem>
        <csTabbarItem icon="people">我的</csTabbarItem>
    </cs-tabbar>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeColor: 0
            }
        }
    }
   ```
:::

## API

:::card
### Tabbar Props

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
                  remake: '当前所在的标签栏的下标',
                  type: 'String | Number',
                  default: '0'
                },
                {
                  name: 'fixed',
                  remake: '是否固定在最底部',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'activeColor',
                  remake: '标签栏选中时的颜色',
                  type: 'String',
                  default: "'#1989FA'"
                },
                {
                  name: 'inactiveColor',
                  remake: '标签栏未选中时的颜色',
                  type: 'String',
                  default: "'#7d7e80'"
                },
                ],
                eventData: [
                {
                  name: 'change',
                  remake: '标签栏选中项改变时触发',
                  param: 'event: Number(当前选中项的索引)'
                }
                ],
                eventItemData: [
                {
                  name: 'select',
                  remake: '当前标签栏被选中时触发',
                  param: 'void'
                }
                ],
                apiItemData: [
                    {
                        name: 'icon',
                        remake: '标签栏Icon的name',
                        type: 'String',
                        default: "''" 
                    },
                    {
                        name: 'dot',
                        remake: '是否显示图标右上角小红点',
                        type: 'Boolean',
                        default: "false" 
                    },
                    {
                        name: 'badge',
                        remake: '图标右上角徽标的内容',
                        type: 'String',
                        default: "''" 
                    }
                ],
                slotData: [
                    {
                        name: 'icon',
                        remake: '自定义图标',
                        props: 'active: 是否为选中标签'
                    }
                ]
    }
  }
}
</script>
:::

:::card
### TabbarItem Props

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
### Tabbar Events

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

:::card
### TabbarItem Events

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
          width="240">
        </el-table-column>
      </el-table>
    </template>
:::

:::card
### TabbarItem Slots

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
          width="240">
        </el-table-column>
      </el-table>
    </template>
:::