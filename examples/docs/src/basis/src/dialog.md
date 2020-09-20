# Dialog 弹出框
<br/>

:::card
   ### 按需引入(函数调用)
   > 此时使用 `Dialog` 时不需要在前面加 `this.`

   ```js
       import { Dialog } from 'circles-ui';
   ```
:::

:::card
   ### 按需引入(组件调用)

   ```js
       import Vue from 'vue';
       import { csDialog } from 'circles-ui';

       Vue.use(csDialog);  
   ```
:::


## 代码演示

:::card
### 消息提示
> 用于提示一些消息，只包含一个确认按钮

   ```html
    <cs-button type="primary" text="函数调用" @click="showDialogFnc"></cs-button>
    <cs-button type="primary" text="组件调用" @click="showDialog"></cs-button>

    <csDialog v-model="isShow" content="幸得识卿桃花面，从此阡陌多暖春。" @confirm="closeDialog"></csDialog>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            //函数式调用
            showDialogFnc() {
                this.Dialog.alert({
                    content: '幸得识卿桃花面，从此阡陌多暖春。'
                }).then(()=> {
                    //点击确定按钮的回调
                    this.Dialog.close()
                })
            },
            //组件式调用
            showDialog() {
                this.isShow = true
            },
            closeDialog() {
                this.isShow = false
            }
        }
    }
   ```
:::

:::card
### 确认消息
> 用于确认消息，包含取消和确认按钮

   ```html
    <cs-button type="primary" text="函数调用" @click="showConfirmFnc"></cs-button>
    <cs-button type="success" text="组件调用" @click="showConfirm"></cs-button>

    <csDialog v-model="isShowConfirm" type="confirm" content="幸得识卿桃花面，从此阡陌多暖春。" 
    @confirm="confirm" @cancel="cancel"></csDialog>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowConfirm: false
            }
        },
        methods: {
            //函数式调用
            showConfirmFnc() {
                this.Dialog.confirm({
                    content: '幸得识卿桃花面，从此阡陌多暖春。'
                }).then(()=> {
                    //点击确定按钮的回调
                    this.Toast({
                        content: '点击了确认按钮'
                    })
                    this.Dialog.close()
                }).catch(()=> {   //点击取消按钮的回调
                    this.Toast({
                        content: '点击了取消按钮'
                    })
                    this.Dialog.close()
                })
            },
            showConfirm() {
                this.isShowConfirm = true
            },
            confirm() {
                this.Toast({
                    content: '点击了确认按钮'
                })
                this.isShowConfirm = false
            },
            cancel() {
                this.Toast({
                    content: '点击了取消按钮'
                })
                this.isShowConfirm = false
            }
        }
    }
   ```
:::

:::card
### 点击遮罩层不关闭弹出层
> 将 `closeOnClickOverlay` 属性设置为 `false` 点击遮罩层后不关闭弹出层

   ```html
    <cs-button type="primary" text="函数调用" @click="showOverlayFnc"></cs-button>
    <cs-button type="success" text="组件调用" @click="showOverlay"></cs-button>

    <csDialog v-model="isShowOverlay" :closeOnClickOverlay="false" content="幸得识卿桃花面，从此阡陌多暖春。" 
    @confirm="closeOverlay"></csDialog>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                isShowOverlay: false
            }
        },
        methods: {
            //函数式调用
             showOverlayFnc() {
                this.Dialog.alert({
                    content: '幸得识卿桃花面，从此阡陌多暖春。',
                    closeOnClickOverlay: false
                }).then(()=> {
                    //点击确定按钮的回调
                    this.Dialog.close()
                })
            },
            showOverlay() {
                this.isShowOverlay = true
            },
            closeOverlay() {
                this.isShowOverlay = false
            }
        }
    }
   ```
:::

## API

:::card
### 方法(函数式调用)

<template>
   <el-table
        :data="methodData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="方法名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="param"
          label="参数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="callback"
          label="返回值"
          width="100">
        </el-table-column>
      </el-table>
    </template>
:::

:::card
### Options(函数式调用)

<template>
   <el-table
        :data="OptionData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="param"
          label="参数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="default"
          label="默认值"
          width="120">
        </el-table-column>
      </el-table>
    </template>
:::

:::card
### Props(组件式调用)

   <template>
   <el-table
        :data="apiData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="130">
        </el-table-column>
        <el-table-column
             prop="default"
             label="默认值"
             width="150">
        </el-table-column>
      </el-table>
</template>
<script>
export default {
  data () {
    return {
       methodData: [
           {
                name: 'Dialog.alert',
                remake: '展示消息提示弹窗',
                param: 'options	',
                callback: 'Promise'
           },
           {
                name: 'Dialog.confirm',
                remake: '控制Popup弹出层的显示隐藏',
                param: 'options',
                callback: 'Promise'
            },
            {
                name: 'Dialog.close',
                remake: '关闭弹窗',
                param: '-',
                callback: 'void'
            }
       ],
       OptionData: [
           {
               param: 'content',
               remake: '弹出框文案内容',
               type: 'String',
               default: "''"
           },
           {
               param: 'isRound',
               remake: '是否展示圆角',
               type: 'Boolean',
               default: 'true'
           },
           {
               param: 'isOverlay',
               remake: '是否显示遮罩层',
               type: 'Boolean',
               default: 'true'
           },
           {
               param: 'overlayStyle',
               remake: '自定义遮罩层样式',
               type: 'String',
               default: "''"
           },
           {
               param: 'closeOnClickOverlay',
               remake: '是否点击遮罩层后关闭',
               type: 'Boolean',
               default: 'true'
           },
           {
               param: 'lockScroll',
               remake: '是否锁定背景滚动',
               type: 'Boolean',
               default: 'true'
           },
           {
               param: 'confirmBtnText',
               remake: '确认按钮文案，alert类型时为底部按钮的文案',
               type: 'String',
               default: "'确定'"
           },
           {
               param: 'confirmBthColor',
               remake: '确认按钮文字颜色',
               type: 'String',
               default: "'#1989FA'"
           },
           {
               param: 'confirmBthBgColor',
               remake: '确认按钮的背景颜色',
               type: 'String',
               default: "'#fff'"
           },
           {
               param: 'cancelBtnText',
               remake: '取消按钮文案',
               type: 'String',
               default: "'取消'"
           },
           {
               param: 'cancelBthColor',
               remake: '取消按钮文字颜色',
               type: 'String',
               default: "'#333'"
           },
           {
               param: 'cancelBthBgColor',
               remake: '取消按钮的背景颜色',
               type: 'String',
               default: "'#fff'"
           },
       ],
      apiData: [{
                  name: 'v-model(isShow)',
                  remake: '是否显示弹框',
                  type: 'Boolean',
                  default: 'false'
                },
                {
                  name: 'content',
                  remake: '文案内容',
                  type: 'String',
                  default: "''"
                },
                {
                  name: 'isOverlay',
                  remake: '是否显示背景蒙层',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'closeOnClickOverlay',
                  remake: '是否点击背景蒙层后关闭',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'isRound',
                  remake: '是否展示圆角',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'type',
                  remake: '弹出框类型。可选值confirm，默认alert',
                  type: 'String',
                  default: "'alert'"
                },
                {
                  name: 'lockScroll',
                  remake: '弹出层显示时是否锁定背景滚动',
                  type: 'Boolean',
                  default: 'true'
                }, 
                {
                  name: 'confirmBtnText',
                  remake: '确认按钮文案，alert类型时为底部按钮的文案',
                  type: 'String',
                  default: "'确定'"
                },
                {
                  name: 'confirmBthColor',
                  remake: '确认按钮文字颜色',
                  type: 'String',
                  default: "'#1989FA'"
                },
                {
                  name: 'confirmBthBgColor',
                  remake: '确认按钮的背景颜色',
                  type: 'String',
                  default: "'#fff'"
                },
                {
                  name: 'cancelBtnText',
                  remake: '取消按钮文案',
                  type: 'String',
                  default: "'取消'"
                },
                {
                  name: 'cancelBthColor',
                  remake: '取消按钮文字颜色,默认#333',
                  type: 'String',
                  default: "'#333'"
                },
                {
                  name: 'cancelBthBgColor',
                  remake: '取消按钮的背景颜色',
                  type: 'String',
                  default: "'#fff'"
                },
                ],
                eventData: [
                    {
                  name: 'confirm',
                  remake: '点击确认按钮时触发',
                  param: 'void'
                },
                {
                  name: 'cancel',
                  remake: '点击取消按钮时触发',
                  param: 'void'
                },
                {
                  name: 'open',
                  remake: 'dialog打开时触发',
                  param: 'void'
                },
                {
                  name: 'opened',
                  remake: 'dialog打开且动画结束时触发',
                  param: 'void'
                },
                {
                  name: 'close',
                  remake: 'dialog关闭时触发',
                  param: 'void'
                },
                {
                  name: 'closed',
                  remake: 'dialog关闭且动画结束时触发',
                  param: 'void'
                }
                ]
    }
  }
}
</script>
:::

:::card
### Events

<template>
   <el-table
        :data="eventData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="事件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="param"
          label="回调参数"
          width="180">
        </el-table-column>
      </el-table>
    </template>
:::