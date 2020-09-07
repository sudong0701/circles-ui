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