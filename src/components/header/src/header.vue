<template>
    <div>
        <div class="cs-header" :style="`height: ${realHeight}`">
            <div class="cs-header-left">
                <slot name="left" clas="slot">
                    <div class="cs-header-leftBox" @click="goBack()">
                        <i :class="`cs-header-leftImg iconfont icon${leftIcon}`" :style="`color: ${leftIconColor}`"></i>
                    </div>
                </slot>
            </div>
            <div :style="`line-height: ${realHeight}`" class="cs-header-title">{{title}}</div>
            <div class="cs-header-right">
                <slot name="right">
                    <div class="cs-header-rightBox" @click="clickRight">
                        <i :class="`iconfont icon${computedIcon} cs-header-rightImg`" :style="`line-height: ${realHeight}; color: ${rightIconColor}`"></i>
                    </div>
                </slot>
            </div>
        </div>
        <div :style="`height: ${realHeight}`"></div>
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
                type: String | Number,
                default: '0.92rem'
            },
            leftIcon: {
                type: String,
                default: 'fanhui'
            },
            leftIconColor: {
                type: String,
                default: '#1989FA'
            },
            rightIcon: {
                type: String,
                default: ''
            },
            rightIconColor: {
                type: String,
                default: '#1989FA'
            },
        },
        computed: {
            computedIcon() {
                if(this.type === 'share') {
                    return 'fenxiang'
                } else if(this.type === 'point') {
                    return 'tishi'
                } else {
                    return this.rightIcon
                }
            },
            realHeight() {
                if(typeof this.height === 'number') {
                    return `${this.height}px`
                } else {
                    return this.height
                }
            }
        },
        methods: {
            /**
             * 点击header左侧按钮事件
             * @param
             * @return
             */
            goBack(){

                this.$emit('left')
            },
            /**
             * 点击header右侧按钮事件
             * @param
             * @return
             */
            clickRight(){
                this.$emit('right')
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
                cursor: pointer;
                .cs-header-leftImg{
                    font-size: 0.5rem;
                }
            }
        }
        .cs-header-left:active {
            background-color: #fafafa;
        }
        .cs-header-title{
            font-size: 0.32rem;
            text-align: center;
        }
        .cs-header-right{
            position: absolute;
            padding: 0 0.3rem;
            right: 0; top: 0;
            height: 100%;
            .cs-header-rightImg{
                font-size: 0.44rem;
            }
        }
        .cs-header-right:active {
            background-color: #fafafa;
        }
    }

</style>
