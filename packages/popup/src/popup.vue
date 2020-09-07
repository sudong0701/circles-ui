<!--
 * 文件描述：弹出层组件组件
 * 创建人：段素栋
 * 创建时间：2020.3.30
-->
<template>
    <div class="cs_popup">
        <div v-if="isOverlay && isShowOverlay" :class="`cs_popup-overlay ${overlayClass}`" @click="closePopup()"></div>
        <transition :name="`ani-popup-${position}`" @after-enter="enterCancelled" @after-leave="afterLeave">
            <div v-if="isShow" :class="`cs_popup-box cs_popup-${position} ${isRound ? 'cs_popup-round-' + position : ''}`" :style="`animation-duration: ${(duration - 20) / 1000}s`">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'csPopup',
        data() {
            return {
                isShowOverlay: false   //控制popup展示
            }
        },
        props: {
            isOverlay: {   //是否显示遮罩层
                type: Boolean,
                default: true
            },
            overlayClass: {   //自定义遮罩层类名
                type: String,
                default: ''
            },
            closeOnClickOverlay: {   //是否点击遮罩层后关闭
                type: Boolean,
                default: true
            },
            isShow: {   //控制popup展示
                type: Boolean,
                default: false
            },
            position: {   //弹出层位置 botom、top、left、right、center
                type: String,
                default: 'bottom'
            },
            isRound: {   //是否展示圆角
                type: Boolean,
                default: true
            },
            duration: {   //动画时长
                type: Number,
                default: 300
            },
            lockScroll: {   //是否锁定背景滚动 默认为true
                type: Boolean,
                default: true
            },
            isNested: {
                type: Boolean,
                default: false
            }
        },
        model: {
           prop: 'isShow',
           event: 'overlayClose'
        },
        mounted() {
            if(this.lockScroll) {
                const body = document.getElementsByTagName('body')[0]
                const html = document.getElementsByTagName('html')[0]
                body.style.overflow = 'auto'
                html.style.overflow = 'auto'
                body.style.position = 'fixed'
                html.style.position = 'fixed'
                body.style.height = '100%'
                html.style.height = '100%'
                body.style.width = '100%'
                html.style.width = '100%'
                body.style.left = '0'
                html.style.left = '0'
                body.style.top = '0'
                html.style.top = '0'
            }
            this.isShowOverlay = this.isShow
        },
        methods: {
            /**
             popup打开且动画完成时触发
             @return
             */
            enterCancelled() {
                this.$emit('opened')
                document.body.style.overflow = 'hidden'
                const body = document.getElementsByTagName('body')[0]
                const html = document.getElementsByTagName('html')[0]
                body.style.overflow = 'hidden'
                html.style.overflow = 'hidden'
                body.style.position = 'fixed'
                html.style.position = 'fixed'
                body.style.left = '0'
                html.style.left = '0'
                body.style.top = '0'
                html.style.top = '0'
            },
            /**
             popup打开且动画完成时触发
             @return
             */
            afterLeave() {
                this.isShowOverlay = false
                //popup关闭且动画结束时触发触发
                this.$nextTick(()=>{
                    this.$emit('closed')
                    if(this.lockScroll){
                        document.body.style.overflow = 'auto'
                        const body = document.getElementsByTagName('body')[0]
                        const html = document.getElementsByTagName('html')[0]
                        body.style.overflow = 'auto'
                        html.style.overflow = 'auto'
                        body.style.position = 'static'
                        html.style.position = 'static'
                        body.style.left = 'auto'
                        html.style.left = 'auto'
                        body.style.top = 'auto'
                        html.style.top = 'auto'
                    }
                })
            },
            /**
             点击遮罩层时触发
             @return
             */
            closePopup() {
                if(this.closeOnClickOverlay){  //popup开始关闭时触发
                    if(this.isNested) {
                        this.$emit('clickOverlay')
                    } else {
                        this.$emit('overlayClose', false)
                    }
                }
                this.$emit('click-overlay')
            }
        },
        watch: {
            /**
             监听isShow状态
             @return
             */
            isShow(val) {
                if(val){
                    //打开popup时触发
                    this.$emit('open')
                    this.isShowOverlay = val
                    if(this.lockScroll){
                        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                        window.scrollTo(0, scrollTop + 1)
                    }
                } else {
                    this.$emit('close', false)
                }
            }
        }
    }
</script>
