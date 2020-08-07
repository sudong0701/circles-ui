# `Toast` 弱提示组件
Toast 组件定义一个弱提示组件。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| content | String | '' | 提示文字内容。
| duration | Number | 3000 | 弱提示展示时长默认3000ms，为0则永久展示，此时调用close方法即可关闭toast。
| type | String | '' | toast提示类型(default(默认)、success(成功)、error(错误)、warning(警告)、loading(加载))。
| icon | String | '' | icon的标识。
| image | String | '' | 图片的地址。
| bgColor | String | '' | 自定义toast背景颜色。

## Events
  None。

<!--
## Methods
None.

## Static Props
None.

## Static Methods
None.
-->



## Example
用法示例:
```
<template>
    <div style="padding: 0.3rem">
        <div @click="showToast">显示普通toast</div>
        <div @click="showSuccessToast">显示成功toast</div>
        <div @click="showErrorToast">显示错误toast</div>
        <div @click="showWarnToast">显示警告toast</div>
        <div @click="showIconToast">显示带icon的toast</div>
        <div @click="showImgToast">显示带img的toast</div>
        <div @click="showLoadingToast">显示带Loading的toast</div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            /**
             普通提示
             @param
             @return
             */
            showToast() {
                this.$toast.default({
                    content: '这是一条弱提示',
                    duration: 3000
                }).then(()=> {
                    //关闭时的回调
                })
            },
            /**
             成功提示
             @param
             @return
             */
            showSuccessToast() {
                this.$toast.success({
                    content: '这是一条成功提示',
                    duration: 3000
                }).then(()=> {
                    //关闭时的回调
                })
            },
            /**
             错误提示
             @param
             @return
             */
            showErrorToast() {
                this.$toast.error({
                    content: '这是一条错误提示',
                    duration: 3000
                }).then(()=> {
                    //关闭时的回调
                })
            },
            /**
             警告提示
             @param
             @return
             */
            showWarnToast() {
                this.$toast.warning({
                    content: '这是一条警告提示',
                    duration: 3000
                }).then(()=> {
                    //关闭时的回调
                })
            },
            /**
             带icon的toast
             @param
             @return
             */
            showIconToast() {
                this.$toast.warning({
                    content: '提示信息',
                    duration: 30000,
                    icon: 'question'
                }).then(()=> {
                    //关闭时的回调
                })
            },
            /**
             带图片的toast
             @param
             @return
             */
            showImgToast() {
                this.$toast.warning({
                    content: '提示信息',
                    duration: 30000,
                    image: 'https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/03/24/1585033151526.gif'
                }).then(()=> {
                    //关闭时的回调
                })
            },
            /**
             带loading的toast
             @param
             @return
             */
            showLoadingToast() {
                this.$toast.loading({
                    content: '提示信息',
                    duration: 30000,
                }).then(()=> {
                    //关闭时的回调
                })
            }
        }
    }
</script>

```

## Screenshots
### 普通弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778538083.gif)
### 成功弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778659214.gif)
### 失败弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778680695.gif)
### 警告弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778700593.gif)
### 带icon的弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778722962.gif)
### 带image的弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778751198.gif)
### loading的弱提示
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596778770865.gif)


