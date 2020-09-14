<template>
    <div>
        <div class="cs-header" :style="`height: ${height}`">
            <div class="cs-header-left">
                <slot name="left" clas="slot">
                    <div class="cs-header-leftBox" @click="goBack()">
                        <i class="cs-header-leftImg iconfont iconfanhui" v-if="isBack"></i>
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
            },
            isBack: {
                type: Boolean,
                default: true
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

<style scoped lang="scss">
    .cs-header{
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        border-bottom:  0.02rem solid #f2f2f2;
        background-color: #fff;
        z-index: 49;
        .cs-header-left{
            position: absolute;
            left: 0; top: 0;
            height: 100%;
            .cs-header-leftBox{
                margin-left: 0.2rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 100%;
                padding: 0 0.3rem 0 0.1rem;
                .cs-header-leftImg{
                    font-size: 0.5rem;
                }
            }
        }
        .cs-header-title{
            font-size: 0.32rem;
            text-align: center;
        }
        .cs-header-right{
            position: absolute;
            right: 0.3rem; top: 0;
            height: 100%;
            .cs-header-rightImg{
                font-size: 0.44rem;
            }
        }
    }

</style>
