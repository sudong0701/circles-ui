# Button 按钮



   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csButton } from 'circles-ui';

       Vue.use(csButton);
   ```

## 代码演示

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

   ### 朴素按钮
   > 通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

   ```html
       <cs-button type="primary" text="朴素按钮" plain></cs-button>
       <cs-button type="success" text="朴素按钮" plain></cs-button>
       <cs-button type="warning" text="朴素按钮" plain></cs-button>
   ```

   ### 禁用状态
   > 通过`disabled`属性将按钮设置为禁用按钮，禁用状态下的按钮不可点击，也无法触发click事件。

   ```html
       <cs-button type="primary" text="禁用状态" disabled></cs-button>
       <cs-button type="success" text="禁用状态" disabled></cs-button>
       <cs-button type="warning" text="禁用状态" disabled></cs-button>
   ```

   ### 圆形按钮
   > 通过`round`属性将按钮设置为圆形按钮。

   ```html
       <cs-button type="primary" text="圆形按钮" round></cs-button>
       <cs-button type="success" text="圆形按钮" round></cs-button>
       <cs-button type="warning" text="圆形按钮" round></cs-button>
   ```

   ### 图标按钮
   > 通过`icon`属性设置圆形按钮，支持 Icon 组件里的所有图标，也可以传入图标 URL。

   ```html
       <cs-button type="primary" icon="redpacket"></cs-button>
       <cs-button type="success" text="按钮" icon="redpacket"></cs-button>
       <cs-button type="warning" text="按钮" icon="https://img.yzcdn.cn/vant/user-active.png"></cs-button>
   ```

   ### 按钮尺寸
   > 按钮支持 `large`、`normal`、`small`、`mini`4种类型，默认为`normal`。

   ```html
       <cs-button type="primary" text="大号按钮" size="large"></cs-button>
       <cs-button type="primary" text="普通按钮"></cs-button>
       <cs-button type="primary" text="小型按钮" size="small"></cs-button>
       <cs-button type="primary" text="迷你按钮" size="mini"></cs-button>
   ```

## API

### Props
| Prop | Type | Default | Note |
| :-: | :-: | :-: | :-: |
| <div style="width: 100pt">v-model(isShow) | <div style="width: 80pt">Boolean | <div style="width: 80pt">false | <div style="width: 300pt">控制Popup的显示隐藏。
| isOverlay | Boolean | true | 是否显示背景蒙层。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| position | String | 'bottom' | 弹出层的位置(top、right、bottom、left、center)。
| isRound | Boolean | true | 是否展示圆角。
| duration | Number | 300(ms) | 动画时长。
| lockScroll | Boolean | true | 是否锁定背景滚动。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| open |  | popup打开时触发。
| opened |  | popup打开且动画结束时触发。
| close |  | popup关闭时触发。
| closed |  | popup关闭且动画结束时触发。
| click-overlay |  | p点击遮罩层时触发。

