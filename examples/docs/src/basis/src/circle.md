# Circle 步进器
<br/>

:::card
   ### 按需引入

   ```js
       import Vue from 'vue';
       import { csCircle } from 'circles-ui';

       Vue.use(csCircle);
   ```
:::


## 代码演示

:::card
### 基础用法
> `progress` 属性表示进度条的目标进度，v-model表示动画过程中的实时进度。当 `progress` 发生变化时，会以css动画的形式达到  `progress`设定的值，动画时长 `duration`(ms)。

   ```html
    <csCircle :progress="progress"></csCircle>

    <cs-button type="success" text="增加" size="mini" @click="add"></cs-button>
    <cs-button type="danger" text="减少" size="mini" @click="lower"></cs-button>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {
                progress: '70'
            }
        },
        methods: {
            add() {
                this.progress = Number(this.progress) + 10
            },
            lower() {
                this.progress = Number(this.progress) - 10
            }
        }
    }
   ```
:::

:::card
### 颜色定制
> 通过 `barColor` 定制进度条的颜色。

   ```html
    <csCircle :progress="progress" barColor="#67c23a" text="颜色定制"></csCircle>
   ```
:::

:::card
### 宽度定制
> 通过 `radius` 定制进度条的宽度。

   ```html
    <csCircle :progress="progress" barColor="#e99d3a" radius="6" text="宽度定制"></csCircle>
   ```
:::

:::card
### 逆时针
> 将 `clockwise` 设置为false，进度会从逆时针方向开始。

   ```html
    <csCircle :progress="progress" barColor="#5A5AD1" :clockwise="false" text="逆时针"></csCircle>
   ```
:::

:::card
### 方形画笔
> 将 `isRound` 设置为false，即可使用方形画笔。

   ```html
    <csCircle :progress="progress" barColor="#e99d3a" radius="6" text="宽度定制"></csCircle>
   ```
:::

:::card
### 大小定制
> 通过 `width` 定制进度条的大小。

   ```html
    <csCircle :progress="progress" barColor="#FF2C7D" width="110" text="大小定制"></csCircle>
   ```
:::

:::card
### 使用渐变色
> 传入数组形式的 `barColor` 即可使用渐变色，可以通过 `gradDire` 定义渐变的方向。

   ```html
    <csCircle :progress="progress" :barColor="barColor" text="渐变色"></csCircle>
    <csCircle :progress="progress" :barColor="barColor" gradDire="bottom" text="设置渐变方向"></csCircle>
   ```

   ```js
   export default {
        name: '',
        data() {
            return {
                progress: '70',
                barColor: [
                    {offset: '0', color: '#5a96ec'},
                    {offset: '0.5', color: '#67c23a'},
                    {offset: '1', color: '#eff23a'}
                ]
            }
        },
        methods: {
            add() {
                this.progress = Number(this.progress) + 10
            },
            lower() {
                this.progress = Number(this.progress) - 10
            }
        }
    }
   ```
:::

## API

:::card
### Props

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
      apiData: [{
                  name: 'progress',
                  remake: '环形进度条的进度值',
                  type: 'Number | String',
                  default: '0'
                },
                {
                  name: 'width',
                  remake: '环形进度条的大小',
                  type: 'Number | String',
                  default: '100'
                },
                {
                  name: 'radius',
                  remake: '环形进度条的宽度(厚度)',
                  type: 'Number | String',
                  default: "4"
                },
                {
                  name: 'barColor',
                  remake: '进度条颜色，传入数组形式为渐变色(数组结构参考示例)',
                  type: 'String | Array',
                  default: "'#1989fa'"
                },
                {
                  name: 'gradDire',
                  remake: '渐变色的渐变方向，可选值bottom(上-下)、left(右-左)、top(下-上)、right(左-右)、bottom-right(左上-右下)、bottom-left(右上-左下)、top-left(右下-左上)、top-right(左下-右上)，默认为right',
                  type: 'String',
                  default: "'right'"
                },
                {
                  name: 'clockwise',
                  remake: '是否顺时针',
                  type: 'Boolean',
                  default: 'true'
                },
                {
                  name: 'text',
                  remake: '进度条的文案',
                  type: 'String',
                  default: "''"
                }, 
                {
                  name: 'backgroundColor',
                  remake: '进度条未达到区域的颜色',
                  type: 'String',
                  default: "'#fff'"
                },
                {
                  name: 'isAnimation',
                  remake: '是否使用动画效果',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'isRound',
                  remake: '是否使用圆形画笔',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'duration',
                  remake: '动画时长',
                  type: 'String | Number',
                  default: "600(ms)"
                },
                ]
    }
  }
}
</script>
:::
