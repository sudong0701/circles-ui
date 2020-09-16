# Toast 弱提示
<br/>

:::card
   ### 按需引入
   > `按需引入使用Toast时不需要在前面加this.`

   ```js
       import { Toast } from 'circles-ui';
   ```
:::

## 代码演示

:::card
### 基础用法

   ```html
    <cs-button type="primary" text="文字提示" @click="showToast"></cs-button>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            showToast() {
                this.Toast({
                    content: '账号或密码错误'
                })
            }
        }
      }
   ``` 
:::

:::card
   ### 提示类型
   >提示类型可选值有 `loading`、`success`、`error`、`warning`4种类型。

   ```html
    <cs-button type="primary" text="加载提示" @click="showToastLoading"></cs-button>
    <cs-button type="success" text="成功提示" @click="showToastSuccess"></cs-button>
    <cs-button type="danger" text="错误提示" @click="showToastError"></cs-button>
    <cs-button type="warning" text="警告提示" @click="showToastWarning"></cs-button>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            showToastLoading() {
                this.Toast.loading({
                    content: '加载中...'
                })
            },
            showToastSuccess() {
                this.Toast.success({
                    content: '恭喜您,操作成功'
                })
            },
            showToastError() {
                this.Toast.error({
                    content: '密码错误，请稍后再试'
                })
            },
            showToastWarning() {
                this.Toast.warning({
                    content: '警告，操作违规'
                })
            }
        }
      }
   ``` 
:::

:::card
   ### 自定义图标/图片
   >通过 `icon` 和 `img` 属性设置自定义图标/图片

   ```html
    <cs-button type="primary" text="自定义图标" @click="showToastIcon"></cs-button>
    <cs-button type="primary" text="自定义图片" @click="showToastImg"></cs-button>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            showToastIcon() {
                this.Toast({
                    content: '自定义图标',
                    icon: 'emojifill'
                })
            },
            showToastImg() {
                this.Toast({
                    content: '自定义图片',
                    image: 'https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/03/24/1585033151526.gif'
                })
            }
        }
      }
   ``` 
:::

:::card
   ### 自主关闭Toast
   >通过 `close` 方法主动关闭Toast

   ```html
    <cs-button type="primary" text="显示Toast" @click="showToastOpen"></cs-button>
    <cs-button type="primary" text="自主关闭" @click="showToastClose"></cs-button>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            showToastOpen() {
                this.Toast({
                    content: '自主关闭Toast',
                    duration: 0    //duration为0时Toast永久展示
                })
            },
            showToastClose() {
                this.Toast.close()
            }
        }
      }
   ``` 
:::

:::card
### 关闭Toast后的回调
>Toast关闭后会返回一个 `Promise` 对象,通过 `then` 方法执行回调

   ```html
    <cs-button type="primary" text="显示Toast" @click="showToastCallback"></cs-button>
   ```

   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            showToastCallback() {
                this.Toast({
                    content: '稍等显示Toast回调',
                    duration: 2000
                }).then(()=> {
                    this.Toast({
                    content: 'Toast已关闭'
                })
                })
            }
        }
      }
   ``` 

:::

## API

:::card
### 方法

<template>
   <el-table
        :data="funcData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="方法名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="remake"
          label="说明"
          >
        </el-table-column>
        <el-table-column
          prop="param"
          label="参数"
          width="150">
        </el-table-column>
        <el-table-column
             prop="callback"
             label="返回值"
             width="150">
        </el-table-column>
      </el-table>
    </template>
:::

:::card
### Options


<template>
   <el-table
        :data="optionData"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="参数"
          width="150">
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
             width="150">
        </el-table-column>
      </el-table>
</template>
<script>
export default {
  data () {
    return {
        funcData: [
            {
                name: 'Toast',
                remake: '展示提示',
                param: 'options || message',
                callback: "Promise对象"
            },
            {
                name: 'Toast.loading',
                remake: '展示加载提示',
                param: 'options || message',
                callback: "Promise对象"
            },
            {
                name: 'Toast.success',
                remake: '展示成功提示',
                param: 'options || message',
                callback: "Promise对象"
            },
            {
                name: 'Toast.error',
                remake: '展示失败提示',
                param: 'options || message',
                callback: "Promise对象"
            },
            {
                name: 'Toast.warning',
                remake: '展示警告提示',
                param: 'options || message',
                callback: "Promise对象"
            },
        ],
      optionData: [{
                  name: 'content',
                  remake: 'toast提示文字内容',
                  type: 'String',
                  default: "-"
                },
                {
                  name: 'duration',
                  remake: 'toast展示时间 为0则永久展示',
                  type: 'Number',
                  default: '3000'
                },
                {
                  name: 'icon',
                  remake: 'icon图标',
                  type: 'String',
                  default: "-"
                },
                {
                  name: 'image',
                  remake: '图片链接',
                  type: 'String',
                  default: "-"
                },
                {
                  name: 'bgColor',
                  remake: '自定义背景颜色',
                  type: 'String',
                  default: "-"
                }
                ],
                eventData: [{
                  name: 'click',
                  remake: '点击按钮时触发，禁用状态不会触发该事件',
                  param: 'event: Event(点击事件参数)'
                }
                ]
    }
  }
}
</script>