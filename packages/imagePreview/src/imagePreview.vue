<template>
    <transition name="animation-fade-imagePreview">
        <div class="sdImagePreview_list" v-if="isShow" @click="closeImagePreview">
            <div class="sdImagePreview_list_index">{{currIndex + 1}} / {{images.length}}</div>
            <sd-swipe ref="sdSwipe" :isAuto="false" @change="swipeChange" :swipeIndex="currIndex" :duration="duration" :isZoom="isDblClick">
                <sd-swipe-item v-for="(item, index) in images" :key="index">
                    <div class="sdImagePreview_item" :style="`transform: scale(${(isDblClick && currIndex === index) ? 8 : 1})`">
                        <img @click="imagePreviewZoom(index)" :src="item" alt="">
                    </div>
                </sd-swipe-item>
            </sd-swipe>
            <i v-if="isShowClose" @click.stop="closeImagePreview('close')" class="iconfont iconclose sdImagePreview_close"></i>
        </div>
    </transition>
</template>

<script>
    let startPageObj = {}
    export default {
        name: 'sdImagePreview',
        data() {
            return {
                currIndex: 0,
                isDblClick: false
            }
        },
        mounted() {
            if(this.isShow) {
                this.currIndex = this.startPosition
                this.$refs.sdSwipe.setCurrentIndex(this.startPosition)
            }
        },
        props: {
            isShow: {   //是否展示
                type: Boolean,
                default: false
            },
            images: {   //图片的数组
                type: Array,
                default: ()=> {
                    return []
                }
            },
            loop: {   //是否循环播放
                type: Boolean,
                default: true
            },
            startPosition: {   //开始下标
                type: Number,
                default: 0
            },
            showIndex: {   //是否显示页码
                type: Boolean,
                default: false
            },
            showIndicators: {   //是否显示轮播指示器
                type: Boolean,
                default: false
            },
            isClickClose: {   //是否点击任意区域关闭
                type: Boolean,
                default: false
            },
            isShowClose: {   //是否显示关闭按钮
                type: Boolean,
                default: true
            },
            duration: {   //动画时长
                type: Number,
                default: 100
            }
        },
        model: {
            prop: 'isShow',
            event: 'change'
        },
        methods: {
            /**
             swipe改变事件
             @param {Number} index 变化后的下标
             @return
             */
            swipeChange(index) {
                this.currIndex = index
            },
            /**
             关闭ImagePreview
             @param {String} type 关闭类型
             @return
             */
            closeImagePreview(type) {
                if(this.isClickClose || type === 'close') {
                    setTimeout(()=> {
                        this.$emit('change', false)
                    }, 280)
                }
            },
            /**
             双击图片
             @param {dom} e 事件参数
             @return
             */
            imagePreviewZoom(e) {
                this.isDblClick = !this.isDblClick
//                if(!this.isDblClick) {
//                    const sdImagePreview = this.$refs[`sdImagePreview_item`][0]
//                    sdImagePreview.style.transform=`translate(0, 0)`
//                }
            },
        },
        watch: {
            isShow(value) {
                if(value) {
                    this.$nextTick(()=> {
                        this.currIndex = this.startPosition
                        this.$refs.sdSwipe.setCurrentIndex(this.startPosition)
                    })
                } else {
                    this.$emit('close')
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdImagePreview_list {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0; right: 0;
        left:0; bottom: 0;
        .sdImagePreview_list_index {
            position: absolute;
            left: 0; right: 0;
            top: 0.2rem;
            text-align: center;
            color: #fff;
            z-index: 2019;
        }
        .sdImagePreview_item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            width: 7.5rem;
            overflow: auto;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            transition-duration: 0.3s;
            transform-style: all;
            img {
                display: block;
                width: 100%;
            }
        }
        .sdImagePreview_close {
            position: absolute;
            right: 0.32rem;
            top: 0.32rem;
            font-size: 0.42rem;
            z-index: 2020;
            color: #ccc;
        }
    }
</style>