# Button 按钮
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csButton } from 'circles-ui';

       Vue.use(csButton);
   ```
:::

## 代码演示

:::card
   ### 按钮类型
   > 按钮支持 `default`、`primary`、`success`、`warning`、`danger`、`info`6种类型，默认为`default`。

   ```html
       <cs-button text="默认按钮"></cs-button>
       <cs-button type="primary" text="主要按钮"></cs-button>
       <cs-button type="success" text="成功按钮"></cs-button>
       <cs-button type="warning" text="警告按钮"></cs-button>
       <cs-button type="danger" text="危险按钮"></cs-button>
       <cs-button type="info" text="信息按钮"></cs-button>
   ```
:::

:::card
   ### 朴素按钮
   > 通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

   ```html
       <cs-button type="primary" text="朴素按钮" plain></cs-button>
       <cs-button type="success" text="朴素按钮" plain></cs-button>
       <cs-button type="warning" text="朴素按钮" plain></cs-button>
   ```
:::

:::card
   ### 禁用状态
   > 通过`disabled`属性将按钮设置为禁用按钮，禁用状态下的按钮不可点击，也无法触发click事件。

   ```html
       <cs-button type="primary" text="禁用状态" disabled></cs-button>
       <cs-button type="success" text="禁用状态" disabled></cs-button>
       <cs-button type="warning" text="禁用状态" disabled></cs-button>
   ```
:::

:::card
   ### 圆形按钮
   > 通过`round`属性将按钮设置为圆形按钮。

   ```html
       <cs-button type="primary" text="圆形按钮" round></cs-button>
       <cs-button type="success" text="圆形按钮" round></cs-button>
       <cs-button type="warning" text="圆形按钮" round></cs-button>
   ```
:::

:::card
   ### 图标按钮
   > 通过`icon`属性设置圆标按钮，支持 Icon 组件里的所有图标，也可以传入图标 URL。

   ```html
       <cs-button type="primary" icon="redpacket"></cs-button>
       <cs-button type="success" text="按钮" icon="redpacket"></cs-button>
       <cs-button type="warning" text="按钮" icon="https://img.yzcdn.cn/vant/user-active.png"></cs-button>
   ```
:::

:::card
   ### 按钮尺寸
   > 按钮支持 `large`、`normal`、`small`、`mini`4种类型，默认为`normal`。

   ```html
       <cs-button type="primary" text="大号按钮" size="large"></cs-button>
       <cs-button type="primary" text="普通按钮"></cs-button>
       <cs-button type="primary" text="小型按钮" size="small"></cs-button>
       <cs-button type="primary" text="迷你按钮" size="mini"></cs-button>
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
</template>
<script>
export default {
  data () {
    return {
      apiData: [{
                  name: 'type',
                  remake: '按钮类型，可选值primary、info、warning、danger、success',
                  type: 'String',
                  default: 'default'
                },
                {
                  name: 'size',
                  remake: '按钮尺寸，可选值large、small、mini',
                  type: 'String',
                  default: 'normal'
                },
                {
                  name: 'text',
                  remake: '按钮文字',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'color',
                  remake: '按钮颜色',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'icon',
                  remake: '左侧图标名称或图片链接',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'plain',
                  remake: '是否为朴素按钮',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'round',
                  remake: '是否为圆形按钮',
                  type: 'Boolean',
                  default: 'false'
                }, 
                {
                  name: 'disabled',
                  remake: '是否禁用按钮',
                  type: 'Boolean',
                  default: 'false'
                },
                ],
                eventData: [{
                  name: 'click',
                  remake: '点击按钮时触发，禁用状态不会触发该事件',
                  param: 'event: Event(点击事件参数)'
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
          width="320">
        </el-table-column>
      </el-table>
    </template>



