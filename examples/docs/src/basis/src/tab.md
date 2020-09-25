# Tab 标签页
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csTabs, csTab } from 'circles-ui';

       Vue.use(csTabs);
       Vue.use(csTab);
   ```
:::

## 代码演示
<font color=red> * 由于移动端手势Touch事件无法在PC端模拟，所以Tab组件目前不能模拟拖动事件(涉及的组件太多，需要集中处理)，所以文档目前仅支持click事件。可以[点击这里](https://sudong0701.github.io/circles-UI-docs/#/demo/tab)体验完整功能的组件，后续会对组件进行优化(1.添加PC端mouse事件)。</font>

:::card
### 基础用法
> 通过 `v-model` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。
   ```html
    <cs-tabs titleActiveColor="" @change="tabChange" v-model="active">
        <cs-tab title="标签1"></cs-tab>
        <cs-tab title="标签2"></cs-tab>
        <cs-tab title="标签3"></cs-tab>
    </cs-tabs>
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
             tabChange(e) {
                this.Toast({
                    content: `当前索引${e}`
                })
            }
        }
      }
   ```
:::

:::card
### 标签页滚动
> 标签数量超过 `swipeThreshold` 个时，标签页可以在水平方向上滚动，`swipeThreshold`默认为4。
   ```html
    <div class="cs-doc-demo-block">
        <div class="cs-doc-demo-block__title">标签页滚动</div>
        <div class="button-demo-content">
            <cs-tabs v-model="activeScroll">
                <cs-tab title="标签1"></cs-tab>
                <cs-tab title="标签2"></cs-tab>
                <cs-tab title="标签3"></cs-tab>
                <cs-tab title="标签4"></cs-tab>
                <cs-tab title="标签5"></cs-tab>
                <cs-tab title="标签6"></cs-tab>
                <cs-tab title="标签7"></cs-tab>
                <cs-tab title="标签8"></cs-tab>
                <cs-tab title="标签9"></cs-tab>
            </cs-tabs>
        </div>
    </div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeScroll: 2
            }
        },
      }
   ```
:::

:::card
### 禁用标签
> 通过给标签项声明 `disabled` 属性禁用标签页项。
   ```html
    <div class="cs-doc-demo-block">
        <div class="cs-doc-demo-block__title">禁用标签</div>
        <div class="button-demo-content">
            <cs-tabs v-model="activeDisabled">
                <cs-tab title="标签1"></cs-tab>
                <cs-tab title="标签2" disabled></cs-tab>
                <cs-tab title="标签3"></cs-tab>
                <cs-tab title="标签4"></cs-tab>
                <cs-tab title="标签5"></cs-tab>
                <cs-tab title="标签6"></cs-tab>
            </cs-tabs>
        </div>
    </div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeDisabled: 0
            }
        },
      }
   ```
:::

:::card
### 自定义样式
> 通过 `tabBackGround` 属性定义标签页的背景色 `titleActiveColor` 属性定义标签页选中文字的颜色 `titleInactiveColor` 定义标签页未选中时标签页的颜色。
   ```html
    <div class="cs-doc-demo-block">
        <div class="cs-doc-demo-block__title">自定义样式</div>
        <div class="button-demo-content">
            <cs-tabs v-model="activeCustom" titleActiveColor="red" >
                <cs-tab title="标签1"></cs-tab>
                <cs-tab title="标签2"></cs-tab>
                <cs-tab title="标签3"></cs-tab>
                <cs-tab title="标签4"></cs-tab>
                <cs-tab title="标签5"></cs-tab>
                <cs-tab title="标签6"></cs-tab>
            </cs-tabs>
        </div>
    </div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeCustom: 0
            }
        },
      }
   ```
:::

:::card
### 自动吸顶
> 通过 `isSticky` 属性设置为 `true` 开启自动吸顶功能。<font color=red> * 注意: 自动吸顶功能通过 `IntersectionObserver` 接口实现，使用时请注意兼容性。</font>
   ```html
    <div class="cs-doc-demo-block">
        <div class="cs-doc-demo-block__title">自动吸顶</div>
        <div class="button-demo-content">
            <div class="sticky">
                <cs-tabs v-model="activeSticky" isSticky >
                    <cs-tab title="标签1"></cs-tab>
                    <cs-tab title="标签2"></cs-tab>
                    <cs-tab title="标签3"></cs-tab>
                    <cs-tab title="标签4"></cs-tab>
                    <cs-tab title="标签5"></cs-tab>
                    <cs-tab title="标签6"></cs-tab>
                </cs-tabs>
                <div style="height: 2rem; background-color: #fafafa; text-align: center; line-height: 2rem" v-for="(item, key) in 15">
                        {{key + 1}}
                </div>
            </div>
        </div>
    </div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                activeSticky: 0
            }
        },
      }
   ```
:::

## API

:::card
### Tabs Props

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
                  remake: '当前所在的标签页的下标',
                  type: 'String | Number',
                  default: '0'
                },
                {
                  name: 'swipeThreshold',
                  remake: '标签页滚动的阈值(即大于该值启用标签页滚动功能)',
                  type: 'String | Number',
                  default: '4'
                },
                {
                  name: 'isSticky',
                  remake: '是否开启自动吸顶',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'tabBackGround',
                  remake: '标签页的背景颜色',
                  type: 'String',
                  default: "'#fff'"
                },
                {
                  name: 'titleActiveColor',
                  remake: '标签页选中时文字的颜色',
                  type: 'String',
                  default: "'#1989FA'"
                },
                {
                  name: 'titleInactiveColor',
                  remake: '标签页未选中时文字的颜色',
                  type: 'String',
                  default: "'#333'"
                }
                ],
                eventData: [
                {
                  name: 'change',
                  remake: '标签页选中项改变时触发',
                  param: 'event: Number(当前选中项的索引)'
                }
                ],
                apiItemData: [
                    {
                        name: 'title',
                        remake: '标签页的标题',
                        type: 'String | Number',
                        default: "''" 
                    },
                    {
                        name: 'disabled',
                        remake: '是否禁用标签页',
                        type: 'Boolean',
                        default: "false" 
                    }
                ]
    }
  }
}
</script>
:::

:::card
### Tab Props

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
### Tabs Events

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

