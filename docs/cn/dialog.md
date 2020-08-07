# `Dialog` 弹出框组件
Dialog 组件定义一个弹出框(支持函数式和组件式调用)。

## 函数式调用
### Props
| Prop | Type | Default | Note |
|---|---|---|---|
| isOverlay | Boolean | true | 是否显示背景蒙层。
| overlayStyle | String | '' | 自定义背景蒙层样式。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| lockScroll | Boolean | true | 是否锁定背景滚动。
| content | String | '' | 提示文案的内容。
| isRound | Boolean | true | 是否展示圆角。
| confirmBtnText | String | '确定' | 确认按钮文案。
| confirmBthColor | String | '#FF2C7D' | 确认按钮文字颜色。
| confirmBthBgColor | String | '#ffffff' | 确认按钮的背景颜色。
| cancelBtnText | String | '取消' | 取消按钮文案。
| cancelBthColor | String | '#333' | 取消按钮文字颜色。
| cancelBthBgColor | String | '#ffffff' | 取消按钮的背景颜色。
### Events
None.
### Methods
None.


## 组件式调用
### Props
| Prop | Type | Default | Note |
|---|---|---|---|
| v-model(isShow) | Boolean | false | 是否展示弹出框。
| isOverlay | Boolean | true | 是否显示背景蒙层。
| overlayStyle | String | '' | 自定义背景蒙层样式。
| closeOnClickOverlay | Boolean | true | 是否点击背景蒙层后关闭。
| lockScroll | Boolean | true | 是否锁定背景滚动。
| content | String | '' | 提示文案的内容。
| isRound | Boolean | true | 是否展示圆角。
| type | String | '' | 弹出框的类型(alert、confirm)。
| confirmBtnText | String | '确定' | 确认按钮文案。
| confirmBthColor | String | '#FF2C7D' | 确认按钮文字颜色。
| confirmBthBgColor | String | '#ffffff' | 确认按钮的背景颜色。
| cancelBtnText | String | '取消' | 取消按钮文案。
| cancelBthColor | String | '#333' | 取消按钮文字颜色。
| cancelBthBgColor | String | '#ffffff' | 取消按钮的背景颜色。
### Events
| Event Name | Returns | Notes |
|---|---|---|
| open |  | 打开弹出层时触发。
| opened |  | 打开弹出层且动画结束后触发。
| close | | 关闭弹出层时触发。
| closed | | 关闭弹出层切动画结束后时触发。
| confirm | | 点击确认按钮时触发。
| cancel | | 点击取消按钮时触发。



## Example
简单用法

```
<template>
    <div style="padding: 0.3rem">
        <div @click="showAlertDialog">弹出函数式alert弹出框</div>
        <div @click="showConfirmDialog">弹出函数式confirm弹出框</div>
        <div @click="showAlertDialogComponents">弹出组件式alert弹出框</div>
        <div @click="showConfirmDialogComponents">弹出组件式confirm弹出框</div>

        <sdDialog v-model="showAlert" content="这是一个alert" :closeOnClickOverlay="false" @open="open" @opened="opened" @close="close" @closed="closed" @confirm="alertConfirm"></sdDialog>

        <sdDialog v-model="showConfirm" content="这是一个confirm" type="confirm" @confirm="confirm" @cancel="cancel"></sdDialog>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                showAlert: false,
                showConfirm: false
            }
        },
        methods: {
            /**
             普通提示
             @param
             @return
             */
            showAlertDialog() {
                this.$dialog.alert({
                    content: '这是一个提示'
                }).then(()=> {
                    //点击确定按钮的回调
                    console.log('确定')
                    this.$dialog.close()
                })
            },
            /**
             成功提示
             @param
             @return
             */
            showConfirmDialog() {
                this.$dialog.confirm({
                    content: '这是一个提示'
                }).then(()=> {
                    //点击确定按钮的回调
                    console.log('确定')
                    this.$dialog.close()
                }).catch(()=> {
                    //点击取消按钮的回调
                    console.log('取消')
                    this.$dialog.close()
                })
            },
            showAlertDialogComponents() {
                this.showAlert = true
            },
            showConfirmDialogComponents() {
                this.showConfirm = true
            },
            open() {
                console.log('open')
            },
            opened() {
                console.log('opened')
            },
            close() {
                console.log('close')
            },
            closed() {
                console.log('closed')
            },
            alertConfirm() {
                this.showAlert = false
            },
            cancel() {
                this.showConfirm = false
            },
            confirm() {
                this.showConfirm = false
            }
        }
    }
</script>
```

## Screenshots
![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596785263231.gif)


