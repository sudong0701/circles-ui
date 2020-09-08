
<template>
    <div>
        <svg style="transform: rotate(-90deg)" :width="width" :height="width" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!--使用渐变色-->
                <linearGradient  id="csCircleGrad" :x1="x1" :y1="y1" :x2="x2" :y2="y2">
                    <stop v-if="!Array.isArray(barColor)" offset="1" :stop-color="barColor" />
                    <stop v-if="Array.isArray(barColor)" v-for="(item, key) in barColor" :key="key" :offset="item.offset" :stop-color="item.color"></stop>
                </linearGradient >

            </defs>
            <circle :r="(width-radius)/2"
                    :cy="width/2"
                    :cx="width/2"
                    :stroke-width="radius"
                    :stroke="backgroundColor"
                    fill="none"
            />
            <circle ref="$bar"
                    :r="(width-radius)/2"
                    :cy="width/2"
                    :cx="width/2"
                    stroke="url(#csCircleGrad)"
                    :stroke-width="radius"
                    :stroke-linecap="isRound ? 'round' : 'square'"
                    :stroke-dasharray="(width-radius)*3.14"
                    :stroke-dashoffset="isAnimation ? (width-radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100"
                    fill="none"
            />
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'csCircle',
        data() {
            return {
                idStr: `csCircle${this.id}`
            }
        },
        props: {
            width: {   // 圆的大小
                type: Number | String,
                default: 120
            },
            radius: {   // 进度条厚度
                type: Number | String,
                default: 6
            },
            gradDire: {   //渐变方向
                type: String,
                default: 'right'
            },
            progress: {   // 进度条百分比
                type: Number | String,
                default: 0
            },
            barColor: {   // 进度条颜色
                type: String | Array,
                default: '#1989fa'
            },
            backgroundColor: {  // 背景颜色
                type: String,
                default: '#fff'
            },
            isAnimation: { // 是否是动画效果
                type: Boolean,
                default: true,
            },
            isRound: { // 是否是圆形画笔
                type: Boolean,
                default: true,
            },
            id: { // 组件的id，多组件共存时使用
                type: String | Number,
                default: '',
            },
            duration: { // 整个动画时长
                type: String | Number,
                default: 600,
            },
            delay: { // 延迟多久执行
                type: String | Number,
                default: 0,
            },
            timeFunction: { // 动画缓动函数
                type: String,
                default: '',
            },
        },
        model: {
          prop: 'progress',
          event: 'change'
        },
        computed: {
            x1() {
                if(this.gradDire === 'bottom' || this.gradDire === 'bottom-right' || this.gradDire === 'bottom-left') {
                    return 1
                } else {
                    return 0
                }
            },
            y1() {
                if(this.gradDire === 'left' || this.gradDire === 'top-left' || this.gradDire === 'bottom-left') {
                    return 1
                } else {
                    return 0
                }
            },
            x2() {
                if(this.gradDire === 'top' || this.gradDire === 'top-right' || this.gradDire === 'top-left') {
                    return 1
                } else {
                    return 0
                }
            },
            y2() {
                if(this.gradDire === 'right' || this.gradDire === 'top-right' || this.gradDire === 'bottom-right') {
                    return 1
                } else {
                    return 0
                }
            }

        },
        beforeDestroy() {
            // 清除旧组件的样式标签
            document.getElementById(this.idStr) && document.getElementById(this.idStr).remove()
        },
        mounted() {
            if (this.isAnimation) {
                // 重复定义判断
                if (document.getElementById(this.idStr)) {
                    document.getElementById(this.idStr).remove()
                }
                // 生成动画样式文件
                let style = document.createElement('style')
                style.id = this.idStr
                style.type = 'text/css'
                style.innerHTML = `
                                    @keyframes csCircle_keyframes_name_${this.id} {
                                    from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
                                    to {stroke-dashoffset: ${(this.width - this.radius) * 3.14 * (100 - this.progress) / 100}px;}}
                                    .circle_progress_bar${this.id} {
                                        animation: csCircle_keyframes_name_${this.id} ${this.duration}ms ${this.delay}ms ${this.timeFunction} forwards;
                                    }`
                // 添加新样式文件
                document.getElementsByTagName('head')[0].appendChild(style)
                // 往svg元素中添加动画class
                this.$refs.$bar.classList.add(`circle_progress_bar${this.id}`)
            }
        },
    }
</script>