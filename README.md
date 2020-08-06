# sudong-ui

> 仿Vant-ui移动端Vue UI组件库

# 快速上手

## 安装
> 在Vue项目根目录下

```bash
npm i sudong-ui --save-dev
```

## 全局引入
> 在main.js里新增以下代码

 ```bash
 import sdUI from 'sudong-ui'
 import 'sudong-ui/packages/theme-default/lib/index.min.css'
 Vue.use(sdUI)
 ```
  
## 按需引入
> 在需要引入的Vue页面新增以下代码

```bash
import { sdPicker } from 'sudong-ui'
import Vue from 'vue'
Vue.use(sdPicker)
```

# 文档

## 基础组件
[`Popup` 弹出层组件](./docs/cn/popup.md)

[`Picker` 选择器组件](./docs/cn/picker.md)

[`Toast` 弱提示组件](./docs/cn/toast.md)

[`Dialog` 弹出框组件](./docs/cn/dialog.md)

[`DateTimePicker` 时间选择器组件](./docs/cn/dateTimePicker.md)

[`ChartRadar` 雷达图组件](./docs/cn/chartRadar.md)

