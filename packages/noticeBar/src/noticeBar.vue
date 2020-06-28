<template>
    <div :class="`sdNoticeBar`" :style="`padding-right: ${mode ? '0.18rem' : ''}; background-color: ${background ? background : ''}`" @click="clickNoticeBar">
        <div class="sdNoticeBar-leftIcon">
            <slot name="leftIcon"></slot>
        </div>
        <div ref="sdNoticeBarContent" :style="`color: ${color ? color : ''}`" :class="`sdNoticeBar-content ${scrollable ? 'sdNoticeBar-content-noWarp' : (wrapable ? '' : 'sdNoticeBar-content-noWarpable')}`" @webkitTransitionEnd="animationEnd($event)" @transitionend="animationEnd($event)">
            <span ref="sdNoticeBarNotice" :style="`color: ${color ? color : ''}`">{{text}}</span>
        </div>

        <div class="sdNoticeBar-rightIcon" @click="clickRightIcon">
            <i v-if="mode === 'link'" :style="`color: ${color ? color : ''}`" class="iconfont icon_next"></i>
            <i v-if="mode === 'close'" :style="`color: ${color ? color : ''}`" class="iconfont icon_close_simple"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sdNoticeBar',
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
            const sdNoticeBarContent = this.$refs.sdNoticeBarContent
            const sdNoticeBarNotice = this.$refs.sdNoticeBarNotice
            if(this.scrollable && sdNoticeBarNotice.clientWidth > sdNoticeBarContent.clientWidth) {
                const sdNoticeBarNotice = this.$refs.sdNoticeBarNotice
                this.createAnimation(sdNoticeBarNotice.clientWidth / Number(this.speed), Number(this.delay), '-100%, 0')
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
                const sdNoticeBarContent = this.$refs.sdNoticeBarContent
                const sdNoticeBarNotice = this.$refs.sdNoticeBarNotice
                if(this.scrollable && sdNoticeBarNotice.clientWidth > sdNoticeBarContent.clientWidth) {
                    if(this.type === '0') {
                        this.type = '1'
                        this.$emit('finish')
                        this.createAnimation(0.001, 0, `${sdNoticeBarContent.clientWidth}px, 0`)
                    } else if(this.type === '1') {
                        this.type = '0'
                        this.$emit('replay ')
                        this.createAnimation((sdNoticeBarNotice.clientWidth + sdNoticeBarContent.clientWidth) / Number(this.speed), 0, '-100%, 0')
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
                const sdNoticeBarNotice = this.$refs.sdNoticeBarNotice
                sdNoticeBarNotice.style['transition-property'] = `transform` ;
                sdNoticeBarNotice.style['-webkit-transition-property'] = `-webkit-transform` ;
                sdNoticeBarNotice.style['transition-duration'] = `${duration}s`
                sdNoticeBarNotice.style['-webkit-transition-duration'] = `${duration}s`
                sdNoticeBarNotice.style['transition-timing-function'] = `linear`
                sdNoticeBarNotice.style['-webkit-transition-timing-function'] = `linear`
                sdNoticeBarNotice.style['transition-delay'] = `${delay}s`
                sdNoticeBarNotice.style['-webkit-transition-delay'] = `${delay}s`
                sdNoticeBarNotice.style.transform=`translate(${value})`
                sdNoticeBarNotice.style['-webkit-transform']=`-webkit-translate(${value})`
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->