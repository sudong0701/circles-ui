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
<style lang="scss" scoped>
    .sd-header{
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        border-bottom:  0.02rem solid #f2f2f2;
        z-index: 99;
        .sd-header-left{
            position: absolute;
            left: 0; top: 0;
            height: 100%;
            .sd-header-leftBox{
                margin-left: 0.2rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 100%;
                padding: 0 0.3rem 0 0.1rem;
                .sd-header-leftImg{
                    font-size: 0.5rem;
                }
            }
        }
        .sd-header-title{
            font-size: 0.32rem;
            text-align: center;
        }
        .sd-header-right{
            position: absolute;
            right: 0.6em; top: 0;
            height: 100%;
            .sd-header-rightImg{
                font-size: 0.44rem;
            }
        }
    }
</style>
