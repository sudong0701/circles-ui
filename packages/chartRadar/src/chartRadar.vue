<template>

</template>

<script>
    export default {
        name: 'sdChartRadar',
        data() {
            return {
                polygon: 3,   //绘制几边形
                canvasHeight: 300,  //canvas的高度
                canvasWidth: 300,   //canvas的宽度
                canvasRadius: 100,   //canvas的半径
                xCenter: 0,   //中心点X轴坐标
                lineWidth: 1,   //连接线的宽度
                yCenter: 0,   //中心点Y轴坐标
                isData: true,    //是否绘制填充区域
                dataArr: [],  //绘制区域的数据
                outerColor: '#E5E5E5',   //最外边的颜色
                isInside: true,   //是否绘制内边
                insideColor: '#EaEaEa',   //内边的颜色
                insideNumber: 6,   //内边层数
                isCable: true,   //是否绘制连接线
                isDataCable: true,   //是否绘制区域连接线
                isDataPoint: true,   //是否绘制区域点
                dataPointColor: '#00B9EF',   //绘制区域点的颜色
                dataCableColor: '#00B9EF',   //绘制区域线的颜色
                cableColor: '#E8E8E8',   //连接线的颜色
                fillColor: 'rgba(0, 185, 239, 0.14)',   //闭合区域的颜色
                fontColor: '#999',   //字体颜色
                fontSize: 11,   //字体大小
                isSaveImage: true,   //是否保存为图片
                imageType: 'png'   //保存图片的格式
            }
        },
        mounted() {
            this.startDraw()
        },
        methods: {
            /**
             初始化页面
             @param
             @return
             */
            startDraw() {
                try {
                    //绘制外边形
                    const canvas = document.createElement('canvas')
                    canvas.width = this.canvasWidth
                    canvas.height = this.canvasHeight
                    let ctx = canvas.getContext('2d')
                    let lineArr = []
                    let rAngle = Math.PI * 2 / this.polygon; // 算出每一个内角和
                    let xCenter = this.xCenter ? this.xCenter : this.canvasWidth / 2, yCenter = this.yCenter ? this.yCenter : this.canvasHeight / 2 // 确定中心点
                    let curR = this.canvasRadius;   // 半径长度
                    ctx.strokeStyle = this.outerColor  // 设置线条颜色
                    ctx.lineWidth = this.lineWidth
                    ctx.beginPath()   //开始路径
                    for (let i = 0; i < this.polygon; i++) {
                        lineArr[i] = {}
                        lineArr[i].y = yCenter - curR * Math.cos(rAngle * i)
                        lineArr[i].x = xCenter - curR * Math.sin(rAngle * i)
                        ctx.lineTo(lineArr[i].x, lineArr[i].y)
                    }
                    ctx.closePath()   //结束路径
                    ctx.stroke()    //开始绘制
                    ctx.save()
                    ctx.restore()    //未知 需要了解

                    //绘制内边框
                    if(this.isInside) {
                        for(let j = 1; j < this.insideNumber + 1; j++) {
                            ctx.strokeStyle = this.insideColor  // 设置线条颜色
                            ctx.lineWidth = this.lineWidth
                            ctx.beginPath();   //开始路径
                            var curRadius = this.canvasRadius * (this.insideNumber - j) / this.insideNumber   // 确定半径长度
                            for (let i = 0; i < this.polygon; i++) {
                                const yInside = yCenter - curRadius * Math.cos(rAngle * i)
                                const xInside = xCenter - curRadius * Math.sin(rAngle * i)
                                ctx.setLineDash([2])
                                ctx.lineTo(xInside, yInside)
                            }
                            ctx.closePath()   //结束路径
                            ctx.stroke()    //开始绘制
                            ctx.setLineDash([])
                            ctx.save()
                            ctx.restore()
                        }
                    }

                    //绘制连接线
                    if(this.isCable) {
                        ctx.strokeStyle = this.cableColor
                        ctx.lineWidth = this.lineWidth / 2
                        ctx.beginPath()
                        for (let k = 0; k < this.polygon; k++) {
                            ctx.moveTo(lineArr[k].x, lineArr[k].y)
                            ctx.lineTo(xCenter, yCenter)
                            ctx.stroke()
                        }
                        ctx.closePath()
                        ctx.save()
                        ctx.restore()
                    }


                    // 绘制数据区域
                    if(this.isData) {
                        ctx.beginPath()
                        for (let i = 0; i < this.polygon; i++) {
                            lineArr[i].yEnd = yCenter - curR * Math.cos(rAngle * i) * this.dataArr[i].value
                            lineArr[i].xEnd = xCenter - curR * Math.sin(rAngle * i) * this.dataArr[i].value
                            let fillY = yCenter - curR * Math.cos(rAngle * i) * this.dataArr[i].value * 0.95
                            let fillX = xCenter - curR * Math.sin(rAngle * i) * this.dataArr[i].value * 0.95
                            ctx.lineTo(fillX, fillY)
                        }
                        ctx.fillStyle = this.fillColor
                        ctx.fill()   //填充
                        ctx.stroke()
                        ctx.save()
                        ctx.closePath()
                        ctx.restore()
                    }

                    //绘制区域连接线
                    if(this.isDataCable) {
                        ctx.beginPath()
                        ctx.strokeStyle = this.dataCableColor
                        ctx.lineWidth = this.lineWidth
                        for (let i = 0; i < this.polygon; i++) {
                            ctx.lineTo(lineArr[i].xEnd, lineArr[i].yEnd)
                        }
                        ctx.closePath()
                        ctx.stroke()    //开始绘制
                        ctx.save()
                        ctx.restore()    //未知 需要了解
                    }

                    //绘制区域点
                    if(this.isDataPoint) {
                        ctx.fillStyle = this.dataPointColor
                        for (let i = 0; i < this.polygon; i++) {
                            ctx.beginPath()
                            ctx.arc(lineArr[i].xEnd, lineArr[i].yEnd, 4, 0, Math.PI*2, true);
                            ctx.fill()
                            ctx.closePath()
                        }
                        ctx.save()
                        ctx.restore()
                    }

                    //绘制数据名
                    if(this.isData) {
                        ctx.font = this.fontSize + 'px Microsoft Yahei'  //设置字体
                        ctx.fillStyle = this.fontColor  // 颜色
                        for (let i = 0; i < this.polygon; i++) {
                            let s_width = ctx.measureText(this.dataArr[i].text).width //获取当前绘画的字体宽度
                            const xText = xCenter - s_width / 2 + (-curR - s_width / 2 - 16) * Math.sin(rAngle * i)
                            const yText = yCenter + this.fontSize / 2 + (-curR - this.fontSize / 2 - 8) * Math.cos(rAngle * i)
                            ctx.fillText(this.dataArr[i].text, xText, yText)
                        }
                        ctx.save()
                        ctx.restore()
                    }
                    if(this.isSaveImage) {
                        this.finish(this.convertCanvasToImage(canvas))
                    } else {
                        this.finish(canvas)
                    }
                }
                catch(res) {
                    this.fail(res)
                }
            },
            /**
             将canvas保存为图片
             @param {canvas} canvas  canvas
             @return
             */
            convertCanvasToImage(canvas) {
                let image = new Image()
                image.src = canvas.toDataURL(`image/${this.imageType}`)
                return image
            }
        },
    }
</script>