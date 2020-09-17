<template>
    <!--函数形式调用-->
    <div class="csDialog">
        <div class="csDialog-alert">
            <transition name="animation-fade" >
                <div class="csDialog-alert-box" v-if="type === 'alert' && isShow" :style="isRound ? 'border-radius: 0.24rem;' : '' ">
                    <p class="csDialog-content">
                        <span>{{content}}</span>
                    </p>
                    <div :style="`color: ${confirmBthColor}; background-color: ${confirmBthBgColor}`" class="csDialog-btn" @click="confirmBthFnc()">{{confirmBtnText}}</div>
                </div>
            </transition>
        </div>

        <div class="csDialog-confirm">
            <transition name="animation-fade">
                <div class="csDialog-confirm-box" v-if="type === 'confirm' && isShow" :style="isRound ? 'border-radius: 0.24rem;' : '' ">
                    <p class="csDialog-content">
                        <span>{{content}}</span>
                    </p>
                    <div @click="cancelBthFnc" :style="`color: ${cancelBthColor}; background-color: ${cancelBthBgColor}`" class="csDialog-btn csDialog-btn-left">{{cancelBtnText}}</div>
                    <div @click="confirmBthFnc" :style="`color: ${confirmBthColor}; background-color: ${confirmBthBgColor}`" class="csDialog-btn csDialog-btn-right">{{confirmBtnText}}</div>
                </div>
            </transition>
        </div>

        <div v-if="isOverlay && isShowOverlay"  :class="`csDialog-bg ${overlayClass}`" :style="isOverlay ? `background-color: rgba(0, 0, 0, 0.6);${overlayStyle}` : ''" @click="closeOverlay($event)" @touchmove="overlayMove($event)"></div>
    </div>
</template>

<script>
    export default {
        name: 'globalDialog',
        data() {
            return {
                isShow: false,
                isShowOverlay: true,
                isOverlay: true,   //是否显示遮罩层
                overlayClass: '',   //自定义遮罩层类名
                overlayStyle: '',   //自定义遮罩层样式
                closeOnClickOverlay: true,  //是否点击遮罩层后关闭
                lockScroll: true,   //是否锁定背景滚动
                content: '',    //文案内容
                isRound: true,  //是否展示圆角
                type: '',   //弹出框类型
                confirmBtnText: '确定',   //确认按钮文案，alert类型时为底部按钮的文案
                confirmBthColor: '',   //确认按钮文字颜色
                confirmBthBgColor: '',   //确认按钮的背景颜色
                cancelBtnText: ' 取消',  //取消按钮文案
                cancelBthColor: '#333',   //取消按钮文字颜色,默认#333
                cancelBthBgColor: ''   //取消按钮的背景颜色
            }
        },
        mounted() {
            this.isShow = true
            if(this.lockScroll){
                document.body.style.overflow = 'hidden';
            }
        },
        methods: {
            /**
             * 关闭dialog
             * @param
             * @return
             */
            close(){
                this.isShow= false
                document.body.style.overflow = 'auto';
                setTimeout(()=>{
                    this.isShowOverlay = false
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el);
                },300)
            },
            /**
             * 点击遮罩层关闭弹框
             * @param {dom} e 点击事件参数
             * @return
             */
            closeOverlay(e){
                if(this.closeOnClickOverlay){
                    this.close()
                }
                e.stopPropagation()
            },
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
                -webkit-transform: scale3d(0.5, 0.5, 0.5);
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