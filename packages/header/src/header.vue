<template>
    <div>
        <div class="cs-header" :style="`height: ${height}`">
            <div class="cs-header-left">
                <slot name="left" clas="slot">
                    <div class="cs-header-leftBox" @click="goBack()">
                        <i class="cs-header-leftImg iconfont iconfanhui"></i>
                    </div>
                </slot>
            </div>
            <div :style="`line-height: ${height}`" class="cs-header-title">{{title}}</div>
            <div class="cs-header-right">
                <slot name="right">
                    <div class="cs-header-rightBox" @click="clickRight()">
                        <i :style="`line-height: ${height}`" v-if="type === 'share'" class="iconfont iconfenxiang cs-header-rightImg"></i>
                        <i :style="`line-height: ${height}`" v-if="type === 'point'" class="iconfont icontishi cs-header-rightImg"></i>
                    </div>
                </slot>
            </div>
        </div>
        <div :style="`height: ${height}`"></div>
    </div>
</template>

<script>
    export default {
        name:'csHeader',
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
