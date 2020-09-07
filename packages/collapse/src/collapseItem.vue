<template>
    <div class="csCollapseItem" ref="collapseItem" :style="`height: ${isUnfold ? `${contentHeight + cellHeight}px` : `${cellHeight}px`}`" @webkitTransitionEnd="animationEnd($event)" @transitionend="animationEnd($event)">
        <div class="csCollapseItem-cell"  @click="clickCollapseItem" ref="collapseItemCell">
            <div class="csCollapseItem-left" v-if="icon">
                <img v-if="icon.indexOf('http') > -1 || icon.indexOf('https') > -1" :src="icon" alt="">
                <i v-if="icon.indexOf('http') === -1 && icon.indexOf('https') === -1" :class="`iconfont icon${icon}`"></i>
            </div>

            <div class="csCollapseItem-title">
                <slot name="title">
                    <span class="csCollapseItem-titleContent">{{title}}</span>
                </slot>
            </div>

            <div class="csCollapseItem-value">
                <slot name="value">
                    <span class="csCollapseItem-valueContent">{{value}}</span>
                </slot>
            </div>

            <div class="csCollapseItem-right" v-if="isLink">
                <i class="iconfont iconfanhui" :style="`transform: rotate(${isUnfold ? 90 : 270}deg)`"></i>
            </div>
            <div class="csCollapseItem-line"></div>
        </div>
        <div class="csCollapseItem-content" ref="collapseItemContent" >
            <div class="csCollapseItem-line"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'csCollapseItem',
        data() {
            return {
                isUnfold: false,
                cellHeight: 0,
                contentHeight: 0
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
            },
            name: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.cellHeight = this.$refs.collapseItemCell.clientHeight
            this.contentHeight = this.$refs.collapseItemContent.clientHeight
        },
        methods: {
            /**
             点击列表项展开或收起
             @param
             @return
             */
            clickCollapseItem() {
                this.$refs.collapseItem.style.transitionDuration = '0.3s'
                this.isUnfold = !this.isUnfold
                this.$emit('change', this.isUnfold)   //面板显隐改变时触发
                this.$refs.collapseItem.parentNode.__vue__.changeActive(this.name, this.isUnfold)
            },
            /**
             动画结束时触发
             @param
             @return
             */
            animationEnd(e) {
                if(this.isUnfold) {
                    this.$emit('showed')   //面板完全显示时触发
                } else {
                    this.$emit('hided')   //面板完全隐藏时触发
                }
                e.preventDefault()
                e.stopPropagation()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->