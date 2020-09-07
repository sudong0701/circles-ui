<template>
    <div :class="`csNoticeBar`" :style="`padding-right: ${mode ? '0.18rem' : ''}; background-color: ${background ? background : ''}`" @click="clickNoticeBar">
        <div class="csNoticeBar-leftIcon">
            <slot name="leftIcon"></slot>
        </div>
        <div ref="csNoticeBarContent" :style="`color: ${color ? color : ''}`" :class="`csNoticeBar-content ${scrollable ? 'csNoticeBar-content-noWarp' : (wrapable ? '' : 'csNoticeBar-content-noWarpable')}`" @webkitTransitionEnd="animationEnd($event)" @transitionend="animationEnd($event)">
            <span ref="csNoticeBarNotice" :style="`color: ${color ? color : ''}`">{{text}}</span>
        </div>

        <div class="csNoticeBar-rightIcon" @click="clickRightIcon">
            <i v-if="mode === 'link'" :style="`color: ${color ? color : ''}`" class="iconfont icon_next"></i>
            <i v-if="mode === 'close'" :style="`color: ${color ? color : ''}`" class="iconfont icon_close_simple"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'csNoticeBar',
        data() {
            return {
                type: '0'
            }
        },
        props: {
            mode: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            scrollable: {   //是否在长度溢出时滚动
                type: Boolean,
                default: true
            },
            delay: {
                type: Number | String,
                default: 1
            },
            speed: {
                type: Number | String,
                default: 50
            },
            wrapable: {   //是否开启文本换行
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: ''
            },
            background: {
                type: String,
                default: ''
            }
        },
        mounted() {
            const csNoticeBarContent = this.$refs.csNoticeBarContent
            const csNoticeBarNotice = this.$refs.csNoticeBarNotice
            if(this.scrollable && csNoticeBarNotice.clientWidth > csNoticeBarContent.clientWidth) {
                const csNoticeBarNotice = this.$refs.csNoticeBarNotice
                this.createAnimation(csNoticeBarNotice.clientWidth / Number(this.speed), Number(this.delay), '-100%, 0')
            }
        },
        methods: {
            /**
             点击右侧icon图标
             @param
             @return
             */
            clickRightIcon() {
                if(this.mode === 'close') {
                    this.$emit('close')
                } else if(this.mode === 'link') {
                    this.$emit('link')
                }
            },
            /**
             点击通知栏时触发
             @param
             @return
             */
            clickNoticeBar() {
                this.$emit('click')
            },
            /**
             动画结束时触发
             @param
             @return
             */
            animationEnd() {
                const csNoticeBarContent = this.$refs.csNoticeBarContent
                const csNoticeBarNotice = this.$refs.csNoticeBarNotice
                if(this.scrollable && csNoticeBarNotice.clientWidth > csNoticeBarContent.clientWidth) {
                    if(this.type === '0') {
                        this.type = '1'
                        this.$emit('finish')
                        this.createAnimation(0.001, 0, `${csNoticeBarContent.clientWidth}px, 0`)
                    } else if(this.type === '1') {
                        this.type = '0'
                        this.$emit('replay ')
                        this.createAnimation((csNoticeBarNotice.clientWidth + csNoticeBarContent.clientWidth) / Number(this.speed), 0, '-100%, 0')
                    }
                }
            },
            /**
             创建动画
             @param {Number} duration 动画时长
             @param {Number} delay 动画延时
             @param {String} value 过渡属性
             @return
             */
            createAnimation(duration, delay, value) {
                const csNoticeBarNotice = this.$refs.csNoticeBarNotice
                csNoticeBarNotice.style['transition-property'] = `transform` ;
                csNoticeBarNotice.style['-webkit-transition-property'] = `-webkit-transform` ;
                csNoticeBarNotice.style['transition-duration'] = `${duration}s`
                csNoticeBarNotice.style['-webkit-transition-duration'] = `${duration}s`
                csNoticeBarNotice.style['transition-timing-function'] = `linear`
                csNoticeBarNotice.style['-webkit-transition-timing-function'] = `linear`
                csNoticeBarNotice.style['transition-delay'] = `${delay}s`
                csNoticeBarNotice.style['-webkit-transition-delay'] = `${delay}s`
                csNoticeBarNotice.style.transform=`translate(${value})`
                csNoticeBarNotice.style['-webkit-transform']=`-webkit-translate(${value})`
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->