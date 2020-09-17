<template>
    <!--组件形式调用-->
    <div class="csDialog">
            <div class="csDialog-alert">
                <transition name="animation-fade" @after-enter="afterEnter"  @after-leave="afterLeave">
                    <div class="csDialog-alert-box" v-if="type === 'alert' && isShow" :style="isRound ? 'border-radius: 0.24rem;' : '' ">
                        <slot>
                            <p class="csDialog-content">
                                <span>{{content}}</span>
                            </p>
                        </slot>
                        <div :style="`color: ${confirmBthColor}; background-color: ${confirmBthBgColor}`" class="csDialog-btn" @click="confirmBthFnc">{{confirmBtnText}}</div>
                    </div>
                </transition>
            </div>

        <div class="csDialog-confirm">
            <transition name="animation-fade"  @after-enter="afterEnter"  @after-leave="afterLeave">
                <div class="csDialog-confirm-box" v-if="type === 'confirm' && isShow" :style="isRound ? 'border-radius: 0.24rem;' : '' ">
                    <p class="csDialog-content">
                        <slot>
                            <span>{{content}}</span>
                        </slot>
                    </p>
                    <div @click="cancelBthFnc" :style="`color: ${cancelBthColor} background-color: ${cancelBthBgColor}`" class="csDialog-btn csDialog-btn-left">{{cancelBtnText}}</div>
                    <div @click="confirmBthFnc" :style="`color: ${confirmBthColor}; background-color: ${confirmBthBgColor}`" class="csDialog-btn csDialog-btn-right">{{confirmBtnText}}</div>
                </div>
            </transition>
        </div>

        <div v-if="isOverlay && isShowOverlay"  :class="`csDialog-bg ${overlayClass}`" :style="isOverlay ? `background-color: rgba(0, 0, 0, 0.6);${overlayStyle}` : ''" @click="closeOverlay($event)"></div>
    </div>
</template>

<script>
    export default {
        name: 'csDialog',
        data() {
            return {
                isShowOverlay: false
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
                default: 'alert'
            },
            confirmBtnText: {   //确认按钮文案，alert类型时为底部按钮的文案
                type: String,
                default: '确定'
            },
            confirmBthColor: {   //确认按钮文字颜色
                type: String,
                default: ''
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
                if(this.closeOnClickOverlay) {
                    this.$emit('overlayClose', false)
                }
                e.stopPropagation()
            },
            /**
             * dialog显示动画结束后触发
             * @param {dom} e 点击事件参数
             * @return
             */
            afterEnter() {
                //打开弹出层切动画结束后触发
                this.$emit('opened')
            },
            /**
             * dialog隐藏动画结束后触发
             * @param {dom} e 点击事件参数
             * @return
             */
            afterLeave() {
                //关闭弹出层切动画结束后触发
                this.$emit('closed')
                setTimeout(()=> {
                    this.isShowOverlay = false
                }, 30)
            }
        },
        watch: {
            isShow(boolean) {
                if(boolean) {
                    this.isShowOverlay = true
                    this.$emit('open')
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
                } else {
                    this.$emit('close')
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
            }
        }
    }
</script>

<style scoped lang="scss">
    .csDialog{
    .csDialog-bg{
        position: fixed;
        top: 0;  left: 0;
        height: 100%; width: 100%;
        z-index: 50;
    }
    .csDialog-alert{
        position: fixed;
        top: 50%;  left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        width: 5.92rem;
        z-index: 99;
        background-color: transparent;
    .csDialog-alert-box{
        background-color: #fff;
        overflow: hidden;
    .csDialog-content{
        padding: 0.66rem 0.48rem;
        border-bottom: 0.01rem solid #f4f4f4;
        text-align: center;
    span{
        display: inline-block;
        text-align: left;
        font-size: 0.32rem;
    }
    }
    .csDialog-btn{
        padding: 0.26rem 0;
        text-align: center;
        font-size: 0.36rem;
        color: var(--color);
        cursor: pointer;
        user-select: none;
    }
    .csDialog-btn:active{
        background-color: #eee;
    }
    }
    }
    .csDialog-confirm{
        position: fixed;
        top: 50%;  left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        width: 5.92rem;
        z-index: 99;
    .csDialog-confirm-box{
        background-color: #fff;
        overflow: hidden;
        border: 0.01rem solid #f4f4f4;
    .csDialog-content{
        padding: 0.66rem 0.48rem;
        border-bottom: 0.01rem solid #f4f4f4;
        text-align: center;
    span{
        display: inline-block;
        text-align: left;
        font-size: 0.32rem;
    }
    }
    .csDialog-btn{
        float: left;
        width: 49.8%;
        padding: 0.26rem 0;
        text-align: center;
        font-size: 0.36rem;
        cursor: pointer;
        user-select: none;
    }
    div:nth-of-type(1){
        border-right: 0.01rem solid #f4f4f4;
    }
    .csDialog-btn-right {
        color: var(--color);
    }
    .csDialog-btn-left:active{
        background-color: #eee;
    }
    .csDialog-btn-right:active{
        background-color: #eee;
    }
    }
    }
    //淡入淡出
      .animation-fade-enter-active {
          animation-name: fade-in;
          animation-duration: 0.28s;
      }
    .animation-fade-leave-active {
        animation-name: fade-out;
        animation-duration: 0.28s;
    }
    @keyframes fade-in {
        0% {
            -webkit-transform: scale3d(0, 0, 0);
            transform: scale3d(0.5, 0.5, 0.5);
            opacity: 0;
        }
        50% {
            -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 1;
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            -webkit-transform: scale3d(0.9, 0.9, 1);
            transform: scale3d(0.9, 0.9, 1);
        }
    }
    }
</style>