<template>
    <div class="sdCollapseItem" ref="collapseItem" :style="`height: ${isUnfoldCopy ? 'auto' : `${cellHeight}px`}`" @webkitTransitionEnd="animationEnd" @transitionend="animationEnd">
        <div class="sdCollapseItem-cell"  @click="clickCollapseItem" ref="collapseItemCell">
            <div class="sdCollapseItem-left" v-if="icon">
                <img v-if="icon.indexOf('http') > -1 || icon.indexOf('https') > -1" :src="icon" alt="">
                <i v-if="icon.indexOf('http') === -1 && icon.indexOf('https') === -1" :class="`iconfont icon${icon}`"></i>
            </div>

            <div class="sdCollapseItem-title">
                <slot name="title">
                    <span class="sdCollapseItem-titleContent">{{title}}</span>
                </slot>
            </div>

            <div class="sdCollapseItem-value">
                <slot name="value">
                    <span class="sdCollapseItem-valueContent">{{value}}</span>
                </slot>
            </div>

            <div class="sdCollapseItem-right" v-if="isLink">
                <i class="iconfont iconfanhui" :style="`transform: rotate(${isUnfoldCopy ? 270 : 90}deg)`"></i>
            </div>

            <div class="sdCollapseItem-line"></div>
        </div>
        <div class="sdCollapseItem-content" ref="collapseItemContent" :style="`height: ${contentHeight ? (isUnfoldCopy ? `calc(${contentHeight}px + 0.4rem)` : `0px`) : 'auto'}; padding: ${isUnfoldCopy ? '0.2rem 0.32rem' : '0 0.32rem'}`">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sdCollapseItem',
        data() {
            return {
                isUnfold: false,
                isUnfoldCopy: false,
                cellHeight: 0,
                contentHeight: 0,
                iShowContent: false
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            'is-link': {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.cellHeight = this.$refs.collapseItemCell.clientHeight
            console.log(this.cellHeight)
            this.contentHeight = this.$refs.collapseItemContent.clientHeight
            console.log(this.contentHeight)
        },
        methods: {
            /**
             点击列表项展开或收起
             @param
             @return
             */
            clickCollapseItem() {
//                if(this.isUnfoldCopy) {
//                    this.isUnfoldCopy = false
//                } else {
//
//                }
                this.isUnfoldCopy = !this.isUnfoldCopy
//                if(this.isUnfold) {   //
//                    this.isUnfoldCopy = !this.isUnfoldCopy
//                }
                //this.isUnfold = !this.isUnfold
                this.$nextTick(()=> {
                    this.$refs.collapseItem.style.transitionDuration = '0.3s'
                })
            },
            /**
             动画结束时触发
             @param
             @return
             */
            animationEnd() {
                console.log(1111)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdCollapseItem {
        transition-property: height;
        transition-duration: 0s;
        overflow-y: hidden;
        .sdCollapseItem-cell {
            position: relative;
            display: flex;
            flex-direction: row;
            transition-property: padding;
            padding: 0.2rem 0.32rem;
            transition-duration: 0.3s;
            background-color: #fff;
            .sdCollapseItem-left {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-right: 0.1rem;
                >img {
                    height: 0.4rem;
                    width: 0.4rem;
                }
                >i {
                    font-size: 0.32rem;
                }
            }
            .sdCollapseItem-title {
                flex: 1;
                .sdCollapseItem-titleContent {
                    font-size: 0.28rem;
                    color: #333;
                }
            }
            .sdCollapseItem-value {
                flex: 1;
                text-align: right;
                .sdCollapseItem-valueContent {
                    font-size: 0.28rem;
                    color: #999;
                }
            }
            .sdCollapseItem-right {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-left: 0.1rem;
                >i {
                    transform: rotate(270deg);
                    transition-property: transform;
                    transition-duration: 0.3s;
                    font-size: 0.32rem;
                    color: #999;
                }
            }
            .sdCollapseItem-line {
                position: absolute;
                height: 0.02rem;
                left: 0.32rem;
                right: 0;
                bottom: 0;
                background-color: #f3f3f3;
            }
        }
        .sdCollapseItem-content {
            box-sizing: border-box;
            transition-property: all;
            transition-duration: 0.3s;
            padding: 0.2rem 0.32rem;
            font-size: 0.28rem;
            -webkit-transform-origin: top;
            -ms-transform-origin: top;
            transform-origin: top;
            background-color: #fff;
            color: #999;
        }
        .sdCollapseItem-content-hide {
            padding: 0;
        }
    }
</style>