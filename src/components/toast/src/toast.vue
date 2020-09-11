<template>
    <div class="csToast" id="csToast">
        <transition name="animation-fade">
            <div v-if="(type !== 'loading' && (!icon && !image)) && isShow" class="csToast-box-default" :style="`background: ${bgColor ? bgColor : (type === '' ? '' : typeObj[type])}`">
                <div class="csToast-icon"></div>
                <div class="csToast-content">{{content}}</div>
            </div>
        </transition>
        <transition name="animation-fade">
            <div v-if="(type === 'loading' || icon || image) && isShow" class="csToast-box-loading" :style="`background: ${bgColor ? bgColor : ''}`">
                <div v-if="!icon && !image" class="csToast-icon aniRotate">
                    <i class="iconfont iconloading"></i>
                </div>
                <div v-if="icon" class="csToast-icon">
                    <i :class="`iconfont icon${icon}`"></i>
                </div>
                <div v-if="image" class="csToast-icon">
                    <img :src="image" />
                </div>
                <div class="csToast-content">
                    <span>{{content ? content : (type === 'loading' ? '加载中...' : '')}}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'csToast',
        data() {
            return {
                typeObj: {
                    success: '#67C23A',
                    error: '#FF2C7D',
                    warning: '#E6A23C',
                    loading: 'rgba(0, 0, 0, 0.8)'
                },
                isShow: false,
                content: '',   //toast提示文字内容
                duration: 3000,   //toast展示时间 为0则永久展示
                type: 'default',    //toast类型
                icon: '',   //icon的标识
                image: '',   //图片链接
                bgColor: ''   //自定义背景颜色
            }
        },
        mounted() {
            this.isShow = true
            if(this.duration > 0){
                setTimeout(()=>{
                    this.isShow = false
                    setTimeout(()=>{
                        this.$destroy(true);
                        if(this.$el.parentNode) {
                            this.$el.parentNode.removeChild(this.$el);
                        }
                    },300)
                },this.duration)
            }
        },
        methods: {
            /**
             * 关闭toast
             * @param
             * @return
             */
            close() {
                this.isShow = false
                setTimeout(()=>{
                    this.$destroy(true);
                    this.$el.parentNode.removeChild(this.$el);
                },300)
            }
        },
        watch: {
            isShow(val) {
                if(!val) {
                    this.resolve()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .csToast{
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        .csToast-box-default{
            padding: 0.18rem 0.3rem;
            min-width: 1.5rem;
            text-align: center;
            border-radius: 0.08rem;
            font-size: 0.28rem;
            line-height: 0.28rem;
            background-color: rgba(0, 0, 0, 0.8);
            .csToast-content {
                display: inline-block;
                font-size: 0.28rem;
                text-align: left;
                line-height: 0.28rem;
                color: #fff;
            }
        }
        .csToast-box-loading{
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 2.6rem;
            padding: 0.3rem;
            border-radius: 0.08rem;
            background-color: rgba(0, 0, 0, 0.8);
            .csToast-icon {
                margin-top: 0.2rem;
                text-align: center;
                i {
                    font-size: 0.7rem;
                    color: #fff;
                }
                img {
                    width: 1rem; height: 1rem;
                }
            }
            .csToast-content {
                margin-top: 0.3rem;
                font-size: 0.28rem;
                line-height: 0.28rem;
                text-align: center;
                span{
                    display: inline-block;
                    font-size: 0.28rem;
                    line-height: 0.28rem;
                    color: #fff;
                    text-align: left;
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
        //旋转动画
        .aniRotate {
            animation-name: aniRotate; /*动画的名称 */
            animation-duration: 800ms; /*动画从开始到结束的时间*/
            animation-timing-function: linear; /*动画执行快慢的参数*/
            animation-iteration-count: infinite; /*动画执行多少次的参数*//*以下是兼容ios所需，参数意义与上相同*/
            -webkit-animation-name: aniRotate;
            -webkit-animation-duration: 800ms;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
        }
        @keyframes aniRotate {
            /*开始转的角度*/
            from {
                transform: rotate(0deg);
                -webkit-transform:rotate(0deg);
            }
            /*结束的角度*/
            to {
                transform: rotate(359deg);
                -webkit-transform:rotate(359deg);
            }
        }
    }
</style>