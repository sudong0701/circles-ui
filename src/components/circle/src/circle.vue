
<template>
    <div class="csCircle">
        <svg style="transform: rotate(-90deg)" :width="width" :height="width" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!--使用渐变色-->
                <linearGradient v-if="isGradient"  id="csCircleGrad" :x1="x1" :y1="y1" :x2="x2" :y2="y2">
                    <stop v-for="(item, key) in barColor" :key="key" :offset="item.offset" :stop-color="item.color"></stop>
                </linearGradient >

            </defs>
            <circle :r="(width-radius)/2"
                    :cy="width/2"
                    :cx="width/2"
                    :stroke-width="radius"
                    :stroke="backgroundColor"
                    fill="none"
            />
            <circle v-if="!isGradient"
                    class="csCircle-progress 111"
                    :style="`transition: all ${isAnimation ? duration : 0}ms; -webkit-transition: all ${isAnimation ? duration : 0}ms`"
                    :r="(width-radius)/2"
                    :cy="width/2"
                    :cx="width/2"
                    :stroke="barColor"
                    :stroke-width="radius"
                    :stroke-linecap="isRound ? 'round' : 'square'"
                    :stroke-dasharray="(width - radius) * 3.14"
                    :stroke-dashoffset="(width - radius) * 3.14 * (100 - currProgress) / 100"
                    fill="none"
            >
            </circle>

            <circle v-if="isGradient"
                    class="csCircle-progress"
                    :style="`transition: all ${isAnimation ? duration : 0}ms; -webkit-transition: all ${isAnimation ? duration : 0}ms`"
                    :r="(width-radius)/2"
                    :cy="width/2"
                    :cx="width/2"
                    stroke="url(#csCircleGrad)"
                    :stroke-width="radius"
                    :stroke-linecap="isRound ? 'round' : 'square'"
                    :stroke-dasharray="(width - radius) * 3.14"
                    :stroke-dashoffset="(width - radius) * 3.14 * (100 - currProgress) / 100"
                    fill="none"
            >
            </circle>
            <text transform="rotate(90 0,0)" :x="width/2" :y="-width/2" style='dominant-baseline:middle; text-anchor:middle;font-size: 0.32rem;color: #323233'>{{ text ? text : progress + '%'}}</text>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'csCircle',
        data() {
            return {
                currProgress: 0
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
            text: {
                type: String,
                default: ''
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
            isGradient() {
              if(Array.isArray(this.barColor)) {
                  return true
              } else {
                  return false
              }
            },
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
            },
        },
        mounted() {
            setTimeout(()=> {
                this.currProgress = this.progress
            },0)
        },
        watch: {
            progress(value) {
                this.currProgress = value
            }
        }
    }
</script>

<style scoped lang="scss">

</style>