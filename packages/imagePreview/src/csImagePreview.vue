<template>
    <transition name="animation-fade-imagePreview">
        <div class="csImagePreview_list" v-if="isShow" @click="closeImagePreview">
            <div class="csImagePreview_list_index" v-if="showIndex">{{currIndex + 1}} / {{images.length}}</div>
            <cs-swipe ref="csSwipe" :isAuto="false" @change="swipeChange" :swipeIndex="currIndex" :duration="duration" :showIndicators="showIndicators">
                <cs-swipe-item v-for="(item, index) in images" :key="index">
                    <div :ref="`${currIndex === index ? 'csImagePreview_item' : ''}`" class="csImagePreview_item" :style="`transform: scale3d(${(currIndex === index) ? `${zoom},${zoom},1`  : 1})`" @touchstart="touchStart($event)"
                         @touchmove="touchMove($event)" @touchend="touchEnd($event)" @click="imagePreviewZoom(index)">
                        <img :src="item" alt="">
                    </div>
                </cs-swipe-item>
            </cs-swipe>
            <i v-if="isShowClose" @click.stop="closeImagePreview('close')" class="iconfont iconclose csImagePreview_close"></i>
            <div class="csImagePreview_overlay"></div>
        </div>
    </transition>
</template>

<script>
    let startPageObj = {}, endChangeX = 0, endChangeY = 0, moveChangeX = 0, moveChangeY = 0, distance = 0, preZoom = 0, currDate = 0
    export default {
        name: 'csImagePreview',
        data() {
            return {
                currIndex: 0,
                zoom: 1,
                maxPageX: 0,
                maxPageY: 0,
                isDbTouch: false
            }
        },
        mounted() {
            if(this.isShow) {
                this.currIndex = this.startPosition
                this.$refs.csSwipe.setCurrentIndex(this.startPosition)
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
                default: true
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
             @param
             @return
             */
            imagePreviewZoom() {
                const csImagePreview_item = this.$refs[`csImagePreview_item`][0]
                csImagePreview_item.style.transformOrigin = '50% 50%'
                if(new Date().getTime() - currDate <= 400) {
                    if(this.zoom !== 1) {
                        this.zoom = 1;
                        endChangeX = 0
                        endChangeY = 0
                        moveChangeX = 0
                        moveChangeY = 0
                    } else {
                        this.zoom = 2
                    }
                }
                currDate = new Date().getTime()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchStart(e) {
                //如果为单点触摸
                const csImagePreview_item = this.$refs[`csImagePreview_item`][0]
                csImagePreview_item.style.transitionDuration = '0s'
                if(e.targetTouches.length === 1) {
                    if(this.zoom !== 1) {
                        if(this.zoom > 1) {
                            startPageObj = {
                                x: e.targetTouches[0].pageX,
                                y: e.targetTouches[0].pageY
                            }
                        }
                        e.stopPropagation()
                    }
                } else {   //如果为双点触摸
                    const distanceX = e.targetTouches[0].pageX - e.targetTouches[1].pageX
                    const distanceY = e.targetTouches[0].pageY - e.targetTouches[1].pageY
                    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
                    preZoom = this.zoom
                    this.isDbTouch = true
                    e.stopPropagation()
                }
            },
            /**
             触摸移动事件
             @param {dom} e 触摸移动事件参数
             @return
             */
            touchMove(e) {
                if(e.targetTouches.length === 1 && !this.isDbTouch) {
                    if(this.zoom > 1) {
                        e.stopPropagation()
                        const changePageX = e.targetTouches[0].pageX - startPageObj.x
                        const changePageY = e.targetTouches[0].pageY - startPageObj.y
                        const csImagePreview_item = this.$refs[`csImagePreview_item`][0]
                        moveChangeX = changePageX + endChangeX > this.maxPageX ? this.maxPageX : (changePageX + endChangeX < -this.maxPageX ? -this.maxPageX : changePageX + endChangeX)
                        moveChangeY = changePageY+ endChangeY > this.maxPageY ? this.maxPageY : (changePageY + endChangeY < -this.maxPageY ? -this.maxPageY : changePageY+ endChangeY)
                        csImagePreview_item.style.transform = `scale3d(${this.zoom}, ${this.zoom}, 1) translate(${moveChangeX}px, ${moveChangeY}px)`;
                    } else if(this.zoom < 1) {
                        e.stopPropagation()
                    }
                } else {  //如果为双点触摸
                    this.isDbTouch = true
                    const distanceX = e.targetTouches[0].pageX - e.targetTouches[1].pageX
                    const distanceY = e.targetTouches[0].pageY - e.targetTouches[1].pageY
                    this.zoom = preZoom * Math.sqrt(distanceX * distanceX + distanceY * distanceY) / distance >= 3 ? 3 : preZoom * Math.sqrt(distanceX * distanceX + distanceY * distanceY) / distance   //最大放大三倍
                    e.stopPropagation()
                }
                e.preventDefault()
            },
            /**
             触摸事件结束事件
             @param {dom} e 触摸结束事件参数
             @return
             */
            touchEnd(e) {
                const csImagePreview_item = this.$refs[`csImagePreview_item`][0]
                csImagePreview_item.style.transitionDuration = '0.3s'
                if(this.zoom !== 1) {
                    if(this.zoom > 1) {
                        endChangeX = moveChangeX
                        endChangeY = moveChangeY
                    } else if(this.zoom < 1) {
                        this.zoom = 1
                    }
                    e.stopPropagation()
                }
                preZoom =  0
                this.isDbTouch = false
            }
        },
        watch: {
            isShow(value) {
                if(value) {
                    this.$nextTick(()=> {
                        this.currIndex = this.startPosition
                        this.$refs.csSwipe.setCurrentIndex(this.startPosition)
                    })
                } else {
                    this.zoom = 1
                    this.$emit('close')
                }
            },
            zoom(value) {
                this.maxPageX = this.$windowInfo.width * (0.5 - 1 / 2 / value)
                this.maxPageY = this.$windowInfo.height * (0.5 - 1 / 2 / value)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->