<template>
    <!--组件形式调用-->
    <div class="sdDialog">
            <div class="sdDialog-alert">
                <transition name="animation-fade" >
                    <div class="sdDialog-alert-box" v-if="type === 'alert' && isShow" :style="isRound ? 'border-radius: 0.24rem;' : '' ">
                        <slot>
                            <p class="sdDialog-content">
                                <span>{{content}}</span>
                            </p>
                        </slot>
                        <div :style="`color: ${confirmBthColor}; background-color: ${confirmBthBgColor}`" class="sdDialog-btn" @click="confirmBthFnc">{{confirmBtnText}}</div>
                    </div>
                </transition>
            </div>

        <div class="sdDialog-confirm">
            <transition name="animation-fade">
                <div class="sdDialog-confirm-box" v-if="type === 'confirm' && isShow" :style="isRound ? 'border-radius: 0.24rem;' : '' ">
                    <slot>
                        <p class="sdDialog-content">
                            <span>{{content}}</span>
                        </p>
                    </slot>
                    <div @click="cancelBthFnc" :style="`color: ${cancelBthColor} background-color: ${cancelBthBgColor}`" class="sdDialog-btn sdDialog-btn-left">{{cancelBtnText}}</div>
                    <div @click="confirmBthFnc" :style="`color: ${confirmBthColor}; background-color: ${confirmBthBgColor}`" class="sdDialog-btn sdDialog-btn-right">{{confirmBtnText}}</div>
                </div>
            </transition>
        </div>

        <div v-if="isOverlay && isShowOverlay"  :class="`sdDialog-bg ${overlayClass}`" :style="isOverlay ? `background-color: rgba(0, 0, 0, 0.6);${overlayStyle}` : ''" @click="closeOverlay($event)"></div>
    </div>
</template>

<script>
    export default {
        name: 'sdDialog',
        data() {
            return {
                isShowOverlay: false,
            }
        },
        props: {
            isShow: {  //是否显示弹框
                type: Boolean,
                default: false
            },
            isOverlay: {   //是否显示遮罩层
                type: Boolean,
                default: true
            },
            content: {   //文案内容
                type: String,
                default: ''
            },
            isRound: {   //是否展示圆角
                type: Boolean,
                default: true
            },
            type: {   //弹出框类型
                type: String,
                default: ''
            },
            confirmBtnText: {   //确认按钮文案，alert类型时为底部按钮的文案
                type: String,
                default: '确定'
            },
            confirmBthColor: {   //确认按钮文字颜色,默认#FF2C7D
                type: String,
                default: '#FF2C7D'
            },
            confirmBthBgColor: {   //确认按钮的背景颜色
                type: String
            },
            cancelBtnText: {   //取消按钮文案
                type: String,
                default: '取消'
            },
            cancelBthColor: {   //取消按钮文字颜色,默认#333
                type: String,
                default: '#333'
            },
            cancelBthBgColor: {   //取消按钮的背景颜色
                type: String
            },
            overlayClass: {   //自定义遮罩层类名
                type: String
            },
            overlayStyle: {   //自定义遮罩层样式
                type: String
            },
            closeOnClickOverlay: {   //是否点击遮罩层后关闭
                type: Boolean,
                default: true
            },
            lockScroll: {   //是否锁定背景滚动
                type: Boolean,
                default: true
            }
        },
        model: {
            prop: 'isShow',
            event: 'overlayClose'
        },
        mounted() {
            //此处为解决ios弹簧效果
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
        },
        methods: {
            /**
             * 点击确认按钮
             * @param
             * @return
             */
            confirmBthFnc(){
                //点击确认按钮时触发
                this.$emit('confirm')
            },
            /**
             * 点击取消按钮
             * @param
             * @return
             */
            cancelBthFnc(){
                //点击取消按钮时触发
                this.$emit('cancel')
            },
            /**
             * 点击遮罩层关闭弹框
             * @param {dom} e 点击事件参数
             * @return
             */
            closeOverlay(e){
                this.$emit('overlayClose', false)
                e.stopPropagation()
            }
        },
        watch: {
            isShow(boolean) {
                if(boolean) {
                    this.isShowOverlay = true
                    if(this.lockScroll){
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
                    }
                    setTimeout(()=>{
                        //打开弹出层切动画结束后触发
                        this.$emit('opened')
                    },300)
                } else {
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
                    setTimeout(()=>{
                        //关闭弹出层切动画结束后触发
                        this.$emit('closed')
                        this.isShowOverlay = false
                    },300)
                }
            }
        }
    }
</script>