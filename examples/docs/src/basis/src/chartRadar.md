# ChartRadar 雷达图
<br/>

:::card
   ### 按需引入(仅支持函数调用)

   ```js
       import { csChartRadar } from 'circles-ui';
   ```
:::


## 代码演示

:::card
### 基础用法
> `dataArr` 用来指定雷达图数据，数组数据结构参考示例。调用雷达图组件方法会返回一个 `Promise` 对象，通过 `then` 方法接收雷达图组件绘制好的图片/canvas。

   ```html
    <div ref="basis"></div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        mounted() {
            this.initChartRadar()
        },
        methods: {
            initChartRadar() {
                this.ChartRadar.draw({
                    dataArr: [
                        {text: '积(G)分点', value: 0.8},
                        {text: '口碑(O)点', value: 0.7},
                        {text: '营收(I)点', value: 0.6}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['basis']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })
            }
        }
    }
   ```
:::

:::card
### 多边形定制
> `dataArr` 的数组长度指定几边形 

   ```html
    <div ref="polygon"></div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        mounted() {
            this.initChartRadar()
        },
        methods: {
            initChartRadar() {
                //多边形定制
                this.ChartRadar.draw({
                    dataArr: [
                        {text: '击杀', value: 0.9},
                        {text: '助攻', value: 0.7},
                        {text: '伤害', value: 0.9},
                        {text: '生存', value: 0.4},
                        {text: '视野', value: 0.4}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['polygon']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })
            }
        }
    }
   ```
:::

:::card
### 颜色定制
> `outerColor` 定义最外边的颜色，`insideColor` 定义内边的颜色，`dataPointColor` 定义数据点的颜色，`dataCableColor` 定义数据连接线的颜色，`fillColor` 定义数据区域的颜色，`cableColor` 定义中点到角的颜色，

   ```html
    <div ref="color"></div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        mounted() {
            this.initChartRadar()
        },
        methods: {
            initChartRadar() {
                //颜色定制
                this.ChartRadar.draw({
                    outerColor: 'rgba(90,150,236)',
                    insideColor: 'rgba(90,150,236, 0.6)',
                    cableColor: 'rgba(90,150,236)',
                    dataPointColor: 'rgba(255,44,125)',
                    dataCableColor: 'rgba(255,44,125)',
                    fillColor: 'rgba(255,44,125, 0.7)',
                    dataArr: [
                        {text: '击杀', value: 0.4},
                        {text: '助攻', value: 0.9},
                        {text: '伤害', value: 0.5},
                        {text: '生存', value: 0.6},
                        {text: '视野', value: 0.9}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['color']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
                })
            }
        }
    }
   ```
:::

:::card
### 内边数定制
> `insideNumber` 用来指定内边的数量

   ```html
    <div ref="number"></div>
   ```
   ```js
    export default {
        name: '',
        data() {
            return {}
        },
        mounted() {
            this.initChartRadar()
        },
        methods: {
            initChartRadar() {
                this.ChartRadar.draw({
                    insideNumber: 4,
                    dataArr: [
                        {text: '积(G)分点', value: 0.8},
                        {text: '口碑(O)点', value: 0.7},
                        {text: '营收(I)点', value: 0.6}
                    ]
                }).then((e)=> {
                    let canvasBox = this.$refs['number']
                    e.style.height = '300px'
                    e.style.width = '300px'
                    e.style.display = 'block'
                    e.style.margin = '0 auto'
                    canvasBox.appendChild(e)
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
             width="180">
        </el-table-column>
      </el-table>
</template>
<script>
export default {
  data () {
    return {
        funcData: [
            {
                name: 'ChartRadar.draw',
                remake: '绘制雷达图',
                param: 'options',
                callback: "Promise对象"
            }
        ],
      optionData: [{
                  name: 'dataArr',
                  remake: '绘制区域的数据',
                  type: 'Array',
                  default: "[]"
                },
                {
                  name: 'lineWidth',
                  remake: '连接线的宽度',
                  type: 'Number',
                  default: '1'
                },
                {
                  name: 'outerColor',
                  remake: '最外边的颜色',
                  type: 'String',
                  default: "#E5E5E5"
                },
                {
                  name: 'isInside',
                  remake: '是否绘制内边',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'insideColor',
                  remake: '内边的颜色',
                  type: 'String',
                  default: "#EaEaEa"
                },
                {
                  name: 'insideNumber',
                  remake: '内边层数',
                  type: 'Number',
                  default: "6"
                },
                {
                  name: 'isCable',
                  remake: '是否绘制中心到角的连接线',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'isDataCable',
                  remake: '是否绘制区域连接线',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'isDataPoint',
                  remake: '是否绘制区域点',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'dataPointColor',
                  remake: '绘制区域点的颜色',
                  type: 'String',
                  default: "#00B9EF"
                },
                {
                  name: 'cableColor',
                  remake: '中心点到角的连接线的颜色',
                  type: 'String',
                  default: "#EaEaEa"
                },
                {
                  name: 'fillColor',
                  remake: '闭合区域的颜色',
                  type: 'String',
                  default: "rgba(0, 185, 239, 0.14)"
                },
                {
                  name: 'fontColor',
                  remake: '字体颜色',
                  type: 'String',
                  default: "#999"
                },
                {
                  name: 'fontSize',
                  remake: '字体大小',
                  type: 'Number',
                  default: "22"
                },
                {
                  name: 'isSaveImage',
                  remake: '是否保存为图片',
                  type: 'Boolean',
                  default: "true"
                },
                {
                  name: 'imageType',
                  remake: '保存图片的格式',
                  type: 'String',
                  default: "png"
                }
                ]
    }
  }
}
</script>
