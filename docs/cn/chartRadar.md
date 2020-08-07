# `ChartRadar` 雷达图组件
ChartRadar 组件用于绘制雷达图(仅支持函数式调用)。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| polygon | Number | 3 | 雷达图边数。
| canvasHeight | Number | 300 | canvas的高度。
| canvasWidth | Number | 300 | canvas的宽度。
| canvasRadius | Number | 100 | 雷达图半径。
| xCenter | Number | 0 | 中心点X轴坐标。
| yCenter | Number | 0 | 中心点Y轴坐标。
| lineWidth | Number | 1 | 多边形的宽度。
| isData | Boolean | true | 是否绘制闭合区域。
| dataArr | Array | [] | 雷达图数据。
| outerColor | String | '#E5E5E5' | 最外边的颜色。
| isInside | Boolean | true | 是否绘制内边。
| insideColor | String | '#EaEaEa' | 最内边的颜色。
| insideNumber | Number | 6 | 内边的层数。
| isDataCable | Boolean | true | 是否绘制区域连接线。
| isDataPoint | Boolean | true | 是否绘制区域点。
| cableColor | String | '#E8E8E8' | 连接线的颜色。
| dataPointColor | String | '#00B9EF' | 绘制区域点的颜色。
| dataCableColor | String | '#00B9EF' | 绘制区域线的颜色。
| fillColor | String | 'rgba(0, 185, 239, 0.14)' | 闭合区域的颜色。
| fontColor | String | '#999999' | 字体颜色。
| fontSize | Number | 11 | 字体大小。
| isSaveImage | Boolean | true | 是否保存为图片。
| imageType | String | 'png' | 保存图片的格式。

## Events
| Event Name | Returns | Notes |
|---|---|---|
| change | DateValue | 当前选中的时间。
| clickLeftBtn | DateValue | 点击左边按钮时触发。
| clickRightBtn | DateValue | 点击右边按钮时触发。

<!--
## Methods
None.

## Static Props
None.

## Static Methods
None.
-->



## Example
简单用法

```
<template>
    <div style="padding: 0.3rem" class="picker" ref="content">

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                dataArr: [{text: '积(G)分点', value: 0.8}, {text: '口碑(O)点', value: 0.7}, {text: '营收(I)点', value: 0.6}],
            }
        },
        mounted() {
            this.$chartRadar.draw({
                dataArr: this.dataArr
            }).then((e)=> {
                let canvasBox = this.$refs.content
                e.style.height = '300px'
                e.style.width = '300px'
                e.style.display = 'block'
                e.style.margin = '0 auto'
                canvasBox.appendChild(e)
            })
        }
    }
</script>
```

## Screenshots

![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596789546684.png)

![](https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/08/07/1596789576198.png)



