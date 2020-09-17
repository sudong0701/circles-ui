# SwipeCell 滑动单元格
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csSwipeCell } from 'circles-ui';

       Vue.use(csSwipeCell);
   ```
:::


## 代码演示
<font color=red> * 由于移动端手势Touch事件无法在PC端模拟，所以文档目前不能模拟手势事件(涉及的组件太多，需要集中处理)。可以[点击这里](https://sudong0701.github.io/circles-UI-docs/#/demo/swipeCell)体验完整功能的组件，后续会对组件进行优化(1.添加PC端mouse事件)。</font>

:::card
### 基础用法
> SwipeCell组件提供了left和right两个插槽，用于定义两侧滑动区域的内容

   ```html
    <csSwipeCell>
        <template #left>
            <div class="left">查看详情</div>
        </template>
        基础用法
        <template #right>
            <div class="right">删除</div>
        </template>
    </csSwipeCell>
   ```
   ```css
    .left {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #67c23a;
            color: #fff;
        }
        .right {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #ee0a24;
            color: #fff;
        }
   ```
:::

:::card
### 自定义内容

   ```html
    <csSwipeCell>
        <template #left>
            <div class="left" style="line-height: 2.24rem">查看详情</div>
        </template>
        <div style="padding: 10px 16px;background-color: #fff;line-height: 0.48rem">
            <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" style="height: 1.76rem;width: 1.76rem">
        </div>
        <template #right>
            <div class="right" style="line-height: 2.24rem">删除</div>
        </template>
    </csSwipeCell>
   ```
   ```css
    .left {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #67c23a;
            color: #fff;
        }
        .right {
            width: 60px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #ee0a24;
            color: #fff;
        }
   ```
:::

