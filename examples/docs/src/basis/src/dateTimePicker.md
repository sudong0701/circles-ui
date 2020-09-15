# DateTimePicker 日期时间选择器
<br/>


   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csDateTimePicker } from 'circles-ui';

       Vue.use(csDateTimePicker);
   ```

## 代码演示

### 选择年月日
> DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 `date` 表示选择年月日。通过 min-date 和 max-date 属性可以确定可选的时间范围。通过 `v-model` 指定当前选中的时间，示例配合popup组件使用。