<template>
    <div :class="`csButton ${plain ? 'csButton-plain csButton-plain-' + type : 'csButton-' + type} csButton-${size} ${round ? 'csButton-round' : ''} ${disabled ? 'csButton-disabled' : ''}`" @click="clickButton" :style="`color: ${color}`">
        <div class="csButton-content">
            <i v-if="iconType === 'icon'" :class="`iconfont icon${icon}`"></i>
            <img v-if="iconType === 'img'" :src="icon" alt="">
            <span v-if="text">{{text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'csButton',
        data() {
            return {}
        },
        props: {
            type: {   //按钮类型
                type: String,
                default: 'default'
            },
            size: {   //按钮尺寸
                type: String,
                default: 'normal'
            },
            text: {   //按钮文字
                type: String,
                default: ''
            },
            color: {   //按钮颜色
                type: String,
                default: ''
            },
            icon: {   //左侧图标名称或图片链接
                type: String,
                default: ''
            },
            plain: {   //是否为朴素模式
                type: Boolean,
                default: false
            },
            round: {   //是否为圆形按钮
                type: Boolean,
                default: false
            },
            disabled: {   //是否禁用按钮
                type: Boolean,
                default: false
            },
            block: {   //是否为块级元素
                type: Boolean,
                default: false
            }
        },
        computed: {
            iconType() {
                if(this.icon === '') {
                    return ''
                }
                if(this.icon.indexOf('http') > -1 || this.icon.indexOf('https') > -1) {
                    return 'img'
                } else {
                    return 'icon'
                }
            }
        },
        methods: {
            clickButton(e) {
                if(!this.disabled) {
                    this.$emit('click', e)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csButton {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        height: 0.88rem;
        margin: 0;
        padding: 0;
        font-size: 0.32rem;
        line-height: 0.88rem;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        -webkit-transition: opacity 0.2s;
        transition: opacity 0.2s;
        -webkit-appearance: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        >.csButton-content {
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            height: 100%;
            >i {
                font-size: 0.4rem;
            }
            >img {
                height: 0.4rem;
                width: 0.4rem;
            }
            >span {
                margin-left: 0.1rem;
            }
        }
    }
    .csButton:active {
        opacity: 0.8;
    }
    .csButton-normal {
        padding: 0 0.3rem;
        font-size: 0.28rem;
    }
    .csButton-default {
        background-color: #fff;
        color: #333;
        border: 0.02rem solid #ebedf0;
    }
    .csButton-default:active {
        background-color: #f9f9f9;
    }
    .csButton-success {
        background-color: #67c23a;
        color: #fff;
        border: 0.02rem solid #67c23a;
    }
    .csButton-primary {
        border: 0.02rem solid #1989fa;
        background-color: #1989fa;
        color: #fff;
    }
    .csButton-warning {
        border: 0.02rem solid #E6A23C;
        background-color: #E6A23C;
        color: #fff;
    }
    .csButton-danger {
        border: 0.02rem solid #FF2C7D;
        background-color: #FF2C7D;
        color: #fff;
    }
    .csButton-info {
        border: 0.02rem solid #909399;
        background-color: #909399;
        color: #fff;
    }
    .csButton-plain-default {
        border: 0.02rem solid #ebedf0;
        background-color: #fff;
        color: #333;
    }
    .csButton-plain-default:active {
        background-color: #f9f9f9;
    }
    .csButton-plain-success {
        border: 0.02rem solid #67c23a;
        background-color: #fff;
        color: #67c23a;
    }
    .csButton-plain-primary {
        border: 0.02rem solid #1989fa;
        background-color: #fff;
        color: #1989fa;
    }
    .csButton-plain-warning {
        border: 0.02rem solid #E6A23C;
        background-color: #fff;
        color: #E6A23C;
    }
    .csButton-plain-danger {
        border: 0.02rem solid #FF2C7D;
        background-color: #fff;
        color: #FF2C7D;
    }
    .csButton-plain-info {
        border: 0.02rem solid #909399;
        background-color: #fff;
        color: #909399;
    }
    .csButton-plain:active {
        background-color: #f9f9f9;
    }
    .csButton-large {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    .csButton-small {
        height: 0.64rem;
        padding: 0 0.16rem;
        font-size: 0.24rem;
        line-height: 0.64rem;
    }
    .csButton-mini {
        height: 0.48rem;
        padding: 0 0.08rem;
        font-size: 0.2rem;
        line-height: 0.48rem;
    }
    .csButton-round {
        border-radius: 0.64rem;
    }
    .csButton-disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .csButton-disabled:active {
        opacity: 0.5;
    }
</style>