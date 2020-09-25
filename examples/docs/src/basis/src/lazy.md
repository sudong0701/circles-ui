# Lazy 懒加载组件
<br/>

:::card
   ### 按需引入
   > Lazy 是 Vue 指令，使用前需要对指令进行注册

   ```js
       import Vue from 'vue';
       import { csLazy } from 'circles-ui';
       
       Vue.use( csLazy );
   ```
:::

## 代码演示
> 注: 懒加载依赖 `IntersectionObserver` 接口实现，使用时请注意兼容性

:::card
### 基础用法
> 将v-lazy指令的值设置为你需要懒加载的图片，需要设置图片的高度，高度自动撑开会使懒加载不生效

   ```html
    <div class="lazy-item">
        <img v-lazy="item" alt="" v-for="(item, key) in imageArr" :key="key">
    </div>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {
                imageArr: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg',
                ]
            }
        }
      }
   ``` 
:::

:::card
### 背景图片懒加载
> 将v-lazy指令的值设置为你需要懒加载的图片

   ```html
    <div v-for="(item, key) in imageArr" :key="key" v-lazyBGImg="item"></div>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {
                imageArr: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg',
                ]
            }
        }
      }
   ``` 
:::