# 定制主题

----

主题色使用 `css variable` 实现，请注意兼容性。某些组件的默认颜色会根据主题色变换，使用时请额外注意。

:::card
## 使用方法

使用主题色只需在注册csUI时修改为：(目前按需引入无法使用主题色，后期会优化)
```js
import csUI from 'circles-ui'
import 'circles-ui/packages/theme-default/lib/index.min.css'
Vue.use(csUI, themeName)
```
:::

:::card
## 主题种类
| 名称      | 类型   | 色彩值      | 示例      |
| :-: | :-: | :-: | :-: |
| <div style="width: 80pt">默认     | <div style="width: 100pt">Primary   | <div style="width: 100pt">#1989fa  |<font color=#1989fa>幸得识卿桃花面，从此阡陌多暖春。</font>
| 成功     | Success   | #69c23a  |<font color=#69c23a>幸得识卿桃花面，从此阡陌多暖春。</font>
| 警告     | Warning   | #E6A23C  |<font color=#E6A23C>幸得识卿桃花面，从此阡陌多暖春。</font>
| 危险     | Danger   | #FF2C7D  |<font color=#FF2C7D>幸得识卿桃花面，从此阡陌多暖春。</font>
| 详情     | Info   | #909399  |<font color=#909399>幸得识卿桃花面，从此阡陌多暖春。</font>

:::

:::card
## 代码示例

```js
import csUI from 'circles-ui'
import 'circles-ui/packages/theme-default/lib/index.min.css'
Vue.use(csUI, 'Success')
```
:::