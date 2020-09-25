# 快速上手

----

在使用之前，推荐学习 Vue 和 ES2015 ，并正确配置 Node.js v6.x 或以上版本

:::card
## 通过npm安装
- 在Vue项目根目录下执行以下命令

```shell
npm i circles-ui --save-dev
```
:::

:::card
## 全局引入
- 在main.js里新增以下代码
```js
import csUI from 'circles-ui'
import 'circles-ui/lib/theme/index.css'

Vue.use(csUI)
```
:::

:::card
## 按需引入
- 首先，安装 babel-plugin-component：

```shell
cnpm i babel-plugin-component --save-dev
```

- 更改根目录的.babelrc文件为下面的代码
```js
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime", ["component", {
    "libraryName": "circles-ui",
    "styleLibrary": {
      "name": "theme",
      "base": false
    }
  }]]
}
```

- 如果使用Picker组件则在需要引入的Vue页面新增以下代码
```js
import { csPicker } from 'circles-ui'
import Vue from 'vue'
Vue.use(csPicker)
```
:::