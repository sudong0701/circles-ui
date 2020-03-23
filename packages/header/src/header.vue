<template>
    <div>
        <div class="sd-header" :style="`height: ${height}`">
            <div class="sd-header-left">
                <slot name="left" clas="slot">
                    <div class="sd-header-leftBox" @click="goBack()">
                        <i class="sd-header-leftImg iconfont iconfanhui"></i>
                    </div>
                </slot>
            </div>
            <div :style="`line-height: ${height}`" class="sd-header-title">{{title}}</div>
            <div class="sd-header-right">
                <slot name="right">
                    <div class="sd-header-rightBox" @click="clickRight()">
                        <i :style="`line-height: ${height}`" v-if="type === 'share'" class="iconfont iconfenxiang sd-header-rightImg"></i>
                        <i :style="`line-height: ${height}`" v-if="type === 'point'" class="iconfont icontishi sd-header-rightImg"></i>
                    </div>
                </slot>
            </div>
        </div>
        <div :style="`height: ${height}`"></div>
    </div>
</template>

<script>
    export default {
        name:'sdHeader',
        data() {
            return {}
        },
        props: {
            title: String,   //header中部title
            type: String,   //右侧类型 share分享
            height: {
                type: String,
                default: '1rem'
            }
        },
        methods: {
            /**
             * 点击header左侧按钮事件
             * @param
             * @return
             */
            goBack(){

                this.$emit('click-left')
            },
            /**
             * 点击header右侧按钮事件
             * @param
             * @return
             */
            clickRight(){
                this.$emit('click-right')
            }
        }
    }
</script>
