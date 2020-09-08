
# `Lazy` 懒加载
Lazy 组件用来懒加载。

## Example
图片懒加载
```
<template>
    <div class="lazy">
        <div v-for="(item, key) in images" :key="key">
            <img :src="item" alt="" v-lazy="item">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { csLazy } from '../../packages/index'
    Vue.use(csLazy)
    export default {
        name: '',
        data() {
            return {
                images: [
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/9517e971501edacc92675632677d2bba.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/20/fc97a7f08bc087a500c7f3d961d56357.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2019/11/13/c0c4fcbcd72f3ae73d687965ba4caa5d.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/f54a323a979a0250bca110655d395119.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/9517e971501edacc92675632677d2bba.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/20/fc97a7f08bc087a500c7f3d961d56357.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2019/11/13/c0c4fcbcd72f3ae73d687965ba4caa5d.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/f54a323a979a0250bca110655d395119.png'
                ],
            }
        },
        mounted() {

        }
    }
</script>

```

背景图片懒加载

```
<template>
    <div class="lazy">
        <div v-for="(item, key) in images" :key="key" v-lazyBGImg="item">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { csLazy } from '../../packages/index'
    Vue.use(csLazy)
    export default {
        name: '',
        data() {
            return {
                images: [
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/9517e971501edacc92675632677d2bba.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/20/fc97a7f08bc087a500c7f3d961d56357.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2019/11/13/c0c4fcbcd72f3ae73d687965ba4caa5d.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/f54a323a979a0250bca110655d395119.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/9517e971501edacc92675632677d2bba.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/20/fc97a7f08bc087a500c7f3d961d56357.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2019/11/13/c0c4fcbcd72f3ae73d687965ba4caa5d.png',
                    'http://rightinhome.oss-cn-hangzhou.aliyuncs.com/uploads/2020/04/21/f54a323a979a0250bca110655d395119.png'
                ],
            }
        },
        mounted() {

        }
    }
</script>
```

