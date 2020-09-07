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
                cancelBthBgColor: '',   //取消按钮的背景颜色
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