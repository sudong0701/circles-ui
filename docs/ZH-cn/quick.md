# 快速上手

----

在使用之前，推荐学习 Vue 和 ES2015 ，并正确配置 Node.js v6.x 或以上版本
## 通过npm安装
> 在Vue项目根目录下执行以下命令

```bash
> npm i circles-ui --save-dev
```

## 全局引入
> 在main.js里新增以下代码
```js
import csUI from 'circles-ui'
import 'circles-ui/packages/theme-default/lib/index.min.css'
Vue.use(csUI)
```

## 按需引入
> 在需要引入的Vue页面新增以下代码
```js
import { csPicker } from 'circles-ui'
import Vue from 'vue'
Vue.use(csPicker)
```