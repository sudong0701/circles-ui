<template>
    <div class="sdCircle">
        <canvas class="sdCircle-item" ref="sdCircle"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'sdCircle',
        data() {
            return {}
        },
        props: {

        },
        mounted() {
            this.drawMain(this.$refs.sdCircle, 50, '#1989fa', '#ccc')
        },
        methods: {
            /**
             更改展开或收起状态
             @param {Dom} drawing_elem name值
             @param {Boolean} percent 是否展开
             @param {Boolean} forecolor 是否展开
             @param {Boolean} bgcolor 是否展开
             @return
             */
            drawMain(drawing_elem, percent, forecolor, bgcolor) {
                var canvas = this.$refs.sdCircle,
                    ctx = canvas.getContext("2d"),
                    circleValue = {
                        x : 150,
                        y : 50,
                        radius : 40,
                        startAngle : 0,
                        endAngle : 2 * Math.PI,
                        anticlockwise : false
                    };

                drowArc(ctx,0.8);
                function drowArc(ctx,percent){

                    //打底 圆环 绘制
                    ctx.lineWidth = 11;
                    ctx.beginPath();
                    var grd = ctx.createRadialGradient(circleValue.x, circleValue.y, 72, circleValue.x, circleValue.y, 93);
                    grd.addColorStop(0,"#e9eae9");
                    grd.addColorStop("0.8","#fefefe");
                    grd.addColorStop("1","#e9eae9");
                    ctx.strokeStyle = grd;
                    ctx.arc(circleValue.x, circleValue.y, circleValue.radius, circleValue.startAngle, circleValue.endAngle, circleValue.anticlockwise);
                    ctx.closePath();
                    ctx.stroke();

                    //展示进度圆环绘制
                    ctx.lineWidth = 11;
                    ctx.beginPath();
                    var linear = ctx.createLinearGradient(100,100,150,100);
                    linear.addColorStop(0,'#ffc26b');
//                    linear.addColorStop(0.5,'#ff9a5f');
                    linear.addColorStop(1,'#ff8157');
                    ctx.strokeStyle = linear;
                    ctx.arc(circleValue.x, circleValue.y, circleValue.radius, circleValue.startAngle, circleValue.endAngle*percent, circleValue.anticlockwise);
                    ctx.stroke();

//                    //进度起点圆角
//                    ctx.beginPath();
//                    ctx.fillStyle = '#ff8157';
//                    ctx.arc(circleValue.x + circleValue.radius, circleValue.y - 1, 5.5, circleValue.startAngle, circleValue.endAngle, circleValue.anticlockwise);
//                    ctx.closePath();
//                    ctx.fill();

                    //终点圆角
                    ctx.lineWidth = 3.5;
                    ctx.beginPath();
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = '#ff7854';
                    ctx.fillStyle = '#ff7854';
                    ctx.strokeStyle = '#fff';
                    //计算终点的坐标
                    var getX = circleValue.x + circleValue.radius * Math.cos(2 * percent * Math.PI),
                        getY = circleValue.y + circleValue.radius * Math.sin(2 * percent * Math.PI);
                    ctx.arc(getX , getY, 9, circleValue.startAngle, circleValue.endAngle, circleValue.anticlockwise);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdCircle {
        .sdCircle-item {

        }
    }
</style>