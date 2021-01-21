# Swiper 轮播图
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csSwiper， csSwiperItem } from 'circles-ui';

       Vue.use(csSwiper);
       Vue.use(csSwiperItem);
   ```
:::


## 代码演示
<font color=red> * 由于移动端手势Touch事件无法在PC端模拟，所以Swiper组件目前不能模拟手势事件(涉及的组件太多，需要集中处理)，可以[点击这里](https://sudong0701.github.io/circles-UI-docs/#/demo/swiper)体验完整功能的组件，后续会对组件进行优化(1.添加PC端mouse事件)。</font>

:::card
### 基础用法
> 每个 SwiperItem 代表一张轮播卡片，可以通过 `interval` 属性设置自动轮播的间隔，csSwiper的父类容器需要声明宽度。

   ```html
    <csSwiper :interval="3000">
        <csSwiperItem>
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
        </csSwiperItem>
        <csSwiperItem>
            <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
        </csSwiperItem>
        <csSwiperItem>
            <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="">
        </csSwiperItem>
        <csSwiperItem>
            <img src="https://img.yzcdn.cn/vant/apple-4.jpg" alt="">
        </csSwiperItem>
    </csSwiper>
   ```
   ```css
   img {
        width: 100%;
        height: 6rem;
    }
   ```
:::

:::card
### 自定义指示器
> 通过 `indicatorClass` 和 `indicatorSelectedClass` 属性分别定义未选中和选中指示器的类名，然后通过 /deep/ 深度选择器定义样式

   ```html
    <csSwiper :interval="3000" indicatorClass="indicatorClass" indicatorSelectedClass="indicatorSelectedClass">
        <csSwiperItem v-for="(item, key) in 4">
            <div class="default">{{key}}</div>
        </csSwiperItem>
    </csSwiper>
   ```
   ```css
   .default {
        width: 100%;
        height: 3rem;
        background-color: #1989fa;
        color: #fff;
        text-align: center;
        line-height: 3rem;
        font-size: 0.32rem;
    }
    /deep/ .indicatorClass {
        width: 0.3rem;
        height: 0.3rem;
        background-color: #fff;
    }

    /deep/ .indicatorSelectedClass {
        background-color: #FF2C7D;
    }
   ```
:::

:::card
### 纵向滚动
> 通过 `vertical` 属性定义纵向滑动，csSwiper的父类容器需要声明高度。

   ```html
    <div class="button-demo-content" style="height: 6rem">
        <csSwiper :interval="3000" :vertical="true">
            <csSwiperItem>
                <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
            </csSwiperItem>
            <csSwiperItem>
                <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
            </csSwiperItem>
            <csSwiperItem>
                <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="">
            </csSwiperItem>
            <csSwiperItem>
                <img src="https://img.yzcdn.cn/vant/apple-4.jpg" alt="">
            </csSwiperItem>
        </csSwiper>
    </div>
   ```
:::

:::card
### 取消自动切换
> 通过 `isAuto` 设置为 `false` 即可取消自动切换

   ```html
    <csSwiper :interval="3000" :isAuto="false">
        <csSwiperItem v-for="(item, key) in 4" :key="key">
            <div class="default">{{key}}</div>
        </csSwiperItem>
    </csSwiper>
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
                  name: 'swipeIndex',
                  remake: 'swiper轮播开始的下标',
                  type: 'Number',
                  default: '0'
                },
                {
                  name: 'isLoop',
                  remake: '是否嵌接滑动',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'vertical',
                  remake: '是否为纵向',
                  type: 'Boolean',
                  default: "false"
                },
                {
                  name: 'isAuto',
                  remake: '是否自动切换',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'interval',
                  remake: '自动切换时长',
                  type: 'Number',
                  default: "5000(ms)"
                },
                {
                  name: 'duration',
                  remake: '滑动动画时长',
                  type: 'Number',
                  default: '500(ms)'
                },
                {
                  name: 'distance',
                  remake: '滑动距离阈值(大于该距离会切换)',
                  type: 'Number',
                  default: '80(px)'
                }, 
                {
                  name: 'showIndicators',
                  remake: '是否显示轮播指示器',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'indicatorClass',
                  remake: '自定义滑块类名',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'indicatorSelectedClass',
                  remake: '自定义滑块选中类名',
                  type: 'String',
                  default: "''"
                }
                ],
                eventData: [{
                  name: 'change',
                  remake: '当前轮播下标改变触发的事件',
                  param: 'event: Number(当前轮播的下标index)'
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
          width="280">
        </el-table-column>
      </el-table>
    </template>
:::