<template>
    <div class="csCircle">
        <canvas width="400" height="400" style="width: 200px;height:200px;" class="csCircle-item" ref="csCircle"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'csCircle',
        data() {
            return {
                num:0,
                canvas: '',
                context: '',
                cirX: '',
                cirY: '',
                rad: '',
                r: 36,
                preValue: 0
            }
        },
        props: {
            value: {   //当前进度
                type: Number,
                default: 0
            },
            size: {   //圆环直径
                type: Number | String,
                default: 30
            },
            color: {   //进度条颜色 Object为渐变色
                type: String | Array,
                default: ()=> { return [
                    {num: 0, value: '#ffc26b'},
                    {num: 0.5, value: '#ff9a5f'},
                    {num: 1, value: '#ff8157'}
                ]}   //'#1989fa'
            },
            layerColor: {   //轨道颜色
                type: String,
                default: '#fff'
            },
            text: {   //文字
                type: String,
                default: '0'
            },
            textColor: {
                type: String,
                default: '#1989fa'
            },
            fontSize: {
                type: String | Number,
                default: 16
            },
            strokeWidth: {   //进度条宽度
                type: Number | String,
                default: 3
            },
            strokeLinecap: {   //进度条端点形状
                type: String,
                default: 'default'
            },
            clockwise: {   //是否逆时针增加
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            this.canvas = this.$refs.csCircle
            this.context = this.canvas.getContext("2d")
            this.context.scale(2,2);
            this.cirX = 150
            this.cirY = 75
            this.rad = Math.PI * 2 / 100
            this.initCircle()
        },
        methods: {
            /**
             初始化进度条
             @param
             @return
             */
            initCircle(){
                //清除所有，重新绘制
                this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
                this.writeTrack()
                this.writeText(this.value)
                this.writeGradient()   //绘制渐变
            },
            /**
             绘制轨迹圈
             @param
             @return
             */
            writeTrack(){
                this.context.save()        //save和restore可以保证样式属性只运用于该段canvas元素
                this.context.beginPath()    //开始路径
                this.context.strokeStyle = this.layerColor      //设置边线的颜色
                this.context.lineWidth = this.strokeWidth / 2
                this.context.arc(this.cirX, this.cirY, this.size, 0, Math.PI * 2, false)      //画一个圆的路径
                this.context.stroke()       //绘制边线
                this.context.closePath()
            },
            /**
             绘制文本
             @param
             @return
             */
            writeText(n){
                this.context.save()
                this.context.font = `${parseInt(this.fontSize)}px Arial`
                this.context.fillStyle= this.textColor //字体颜色
                this.context.fillText(n.toFixed(0)+"%",this.cirX - 20 ,this.cirY + 10) //绘制实心
                this.context.stroke()
                this.context.restore()
            },
            /**
             绘制渐变
             @param
             @return
             */
            writeGradient() {
                this.context.save();
                this.context.lineWidth = this.strokeWidth / 2
                this.context.lineCap = 'round'
                this.writeCircle(0)
            },
            /**
             绘制进度条
             @param
             @return
             */
            writeCircle(n){
                if(this.color instanceof Array) {   //如果为数组 渐变色
                    let linear = this.context.createLinearGradient(150 - this.size, 100,150 + this.size, 100)
                    this.color.map((item)=> {
                        linear.addColorStop(item.num, item.value)
                    })
                    this.context.strokeStyle = linear
                } else if (typeof this.color === 'string'){   //为字符串
                    this.context.strokeStyle = this.color       //设置边线的颜色
                }
                this.context.beginPath()
                this.context.arc(this.cirX, this.cirY, this.size, -Math.PI/2,-Math.PI/2+ this.rad * n, false)
                this.context.stroke()
                this.context.restore()
                if(n < Number(this.value)) {
                    window.requestAnimationFrame(()=> {
                        this.writeCircle(n + 1)
                    });
                } else if(n > Number(this.value)) {
                    window.requestAnimationFrame(()=> {
                        this.writeCircle(n - 1)
                    })
                } else {
                    this.preValue = Number(this.value)
                }
            }
        },
        watch: {
            value(value) {
                this.writeCircle(this.preValue)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->