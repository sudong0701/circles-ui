<template>
    <div class="csSwipe" ref="csSwipe">
        <div class="csSwipe_box" ref="csSwipe_box" @touchstart.stop="touchStart($event)"
             @touchmove.stop="touchMove($event)" @touchend.stop="touchEnd($event)"
             :style="`transform: translate(${!vertical ? (-clientNum * (isLoop ? currentIndex + 1 : currentIndex)) : '0'}px , ${!vertical ? '0' : (-clientNum * (isLoop ? currentIndex + 1 : currentIndex))}px)`">
            <slot ref="slot"></slot>
        </div>
        <div v-if="showIndicators" :class="`${vertical ? 'csIndicator_portrait' : 'csIndicator'}`">
            <div @click="selectSwipeItem(key)" v-for="(item, key) in indicatorArr"
                 :class="`${indicatorClass} ${(key == currentIndex || ((key == indicatorArr.length - 1) && currentIndex >= indicatorArr.length)) ? indicatorSelectedClass + ' csIndicator_select' : ''}`"></div>
        </div>
    </div>
</template>

<script>
    let startPageY, startPageX, swipeTimer, prePageNum, touchDirection = ''
    export default {
        name: 'csSwipe',
        data() {
            return {
                currentIndex: 0,   //当前轮播的下标
                csSwipeNum: 0,   //总长度
                clientNum: 0,
                indicatorArr: []
            }
        },
        props: {
            swipeIndex: {
                type: Number,
                default: 0
            },
            vertical: {   //是否为纵向
                type: Boolean,
                default: false
            },
            isLoop: {   //是否嵌接滑动
                type: Boolean,
                default: true
            },
            indicatorClass: {   //自定义滑块类名
                type: String,
                default: ''
            },
            indicatorSelectedClass: {   //自定义滑块选中类名
                type: String,
                default: ''
            },
            isAuto: {   //是否自动切换
                type: Boolean,
                default: true
            },
            interval: {   //自动切换时长
                type: Number,
                default: 5000
            },
            duration: {   //滑动动画时长
                type: Number,
                default: 500
            },
            distance: {   //滑动距离(大于该距离会切换)
                type: Number,
                default: 80
            },
            showIndicators: { //是否显示轮播指示器
                type: Boolean,
                default: true
            }
        },
        mounted() {
            this.currentIndex = this.swipeIndex
            const csSwipe_box = this.$refs.csSwipe_box
            const csSwipe = this.$refs.csSwipe
            const csSwipeArr = document.getElementsByClassName('csSwipeItem')
            this.autoPlay()
            if (!csSwipeArr.length) {
                return
            }
            for (let i = 0; i < csSwipeArr.length; i++) {
                this.indicatorArr.push(i)
            }
            if (this.isLoop) {
                this.csSwipeNum = csSwipeArr.length + 2
                const csSwipeEnd = document.getElementsByClassName('csSwipeItem')[csSwipeArr.length - 1].cloneNode(true)
                const csSwipeStart = document.getElementsByClassName('csSwipeItem')[0].cloneNode(true)
                csSwipe_box.appendChild(csSwipeStart)
                csSwipe_box.insertBefore(csSwipeEnd, document.getElementsByClassName('csSwipeItem')[0])
            } else {
                this.csSwipeNum = csSwipeArr.length
            }
            //横向
            if (!this.vertical) {
                this.clientNum = csSwipe.clientWidth
                this.$refs.csSwipe.style.width = `${csSwipe_box.clientWidth}px`
                csSwipe_box.style['flex-direction'] = 'row'
                csSwipe_box.style.width = `${this.clientNum * this.csSwipeNum}px`
                csSwipe_box.style.height = `${100}%`
                for (let i = 0; i < csSwipeArr.length; i++) {
                    csSwipeArr[i].style.width = `${this.clientNum}px`
                }
                //纵向
            } else {
                this.clientNum = csSwipe.clientHeight
                csSwipe_box.style['flex-direction'] = 'column'
                csSwipe_box.style.height = `${this.clientNum * this.csSwipeNum}px`
                csSwipe_box.style.width = `${100}%`
                for (let i = 0; i < csSwipeArr.length; i++) {
                    csSwipeArr[i].style.height = `${this.clientNum}px`
                }
            }
        },
        methods: {
            /**
             设置当前的下标
             @param {Number} index 索引
             @return
             */
            setCurrentIndex(index) {
                this.currentIndex = index
            },
            /**
             点击滑块时触发
             @param {Number} index 索引
             @return
             */
            selectSwipeItem(index) {
                if (index === this.currentIndex) {
                    return
                }
                //横向
                const csSwipe_box = this.$refs[`csSwipe_box`]
                csSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                this.currentIndex = index
                setTimeout(() => {
                    this.$emit('change', index)
                }, 200)
                this.autoPlay()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchStart(e) {
                if (swipeTimer) {
                    clearInterval(swipeTimer)
                }
                if (!this.vertical) {
                    startPageX = e.targetTouches[0].pageX
                    prePageNum = e.targetTouches[0].pageX
                } else {
                    startPageY = e.targetTouches[0].pageY
                    prePageNum = e.targetTouches[0].pageY
                }
                e.stopPropagation()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸移动事件参数
             @return
             */
            touchMove(e) {
                const csSwipe_box = this.$refs[`csSwipe_box`]
                if (!this.vertical) {   //X轴滑动
                    if (prePageNum > e.targetTouches[0].pageX) {   //向左滑
                        touchDirection = 'left'
                    } else {
                        touchDirection = 'right'
                    }
                    prePageNum = e.targetTouches[0].pageX
                    if (this.isLoop) {
                        csSwipe_box.style.transform = `translate(${e.targetTouches[0].pageX - startPageX + -this.clientNum * (this.currentIndex + 1)}px, 0)`;
                        //非嵌接滑动
                    } else {
                        const movePageX = e.targetTouches[0].pageX
                        //右滑
                        if (movePageX - startPageX > 0) {
                            if (this.currentIndex == 0) {
                                return
                            } else {
                                csSwipe_box.style.transform = `translate(${e.targetTouches[0].pageX - startPageX + -this.clientNum * (this.currentIndex)}px, 0)`;
                            }
                        } else if (movePageX - startPageX < 0) {   //左滑
                            if (this.currentIndex == this.csSwipeNum - 1) {
                                return
                            } else {
                                csSwipe_box.style.transform = `translate(${e.targetTouches[0].pageX - startPageX + -this.clientNum * (this.currentIndex)}px, 0)`;
                            }
                        }
                    }
                } else {   //Y轴滑动
                    if (prePageNum > e.targetTouches[0].pageY) {   //向上滑
                        touchDirection = 'top'
                    } else {
                        touchDirection = 'bottom'
                    }
                    prePageNum = e.targetTouches[0].pageY
                    //是否嵌接滑动
                    if (this.isLoop) {
                        csSwipe_box.style.transform = `translate(0, ${e.targetTouches[0].pageY - startPageY + -this.clientNum * (this.currentIndex + 1)}px)`;
                    } else {   //非嵌接滑动
                        const movePageY = e.targetTouches[0].pageY
                        //下滑
                        if (movePageY - startPageY > 0) {
                            if (this.currentIndex == 0) {
                                return
                            } else {
                                csSwipe_box.style.transform = `translate(0, ${e.targetTouches[0].pageY - startPageY + -this.clientNum * (this.currentIndex)}px)`;
                            }
                        } else if (movePageY - startPageY < 0) {   //上滑
                            if (this.currentIndex == this.csSwipeNum - 1) {
                                return
                            } else {
                                csSwipe_box.style.transform = `translate(0, ${e.targetTouches[0].pageY - startPageY + -this.clientNum * (this.currentIndex)}px)`;
                            }
                        }
                    }
                }
                e.stopPropagation()
                e.preventDefault()
            },
            /**
             触摸事件结束事件
             @param {dom} e 触摸结束事件参数
             @return
             */
            touchEnd(e) {
                const csSwipe_box = this.$refs[`csSwipe_box`]
                //横向轮播
                if (!this.vertical) {
                    const endPageX = e.changedTouches[0].pageX
                    //是否为点击
                    if (startPageX === endPageX) {
                        return
                    } else {
                        //右滑
                        if (endPageX - startPageX > this.distance) {
                            if (touchDirection === 'right') {
                                csSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                const currentIndex = this.currentIndex - 1
                                //是否嵌接滑动
                                if (this.isLoop) {
                                    this.currentIndex = currentIndex
                                    setTimeout(() => {
                                        if (this.currentIndex == -1) {
                                            csSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                            this.currentIndex = this.csSwipeNum - 3
                                        }
                                        this.$emit('change', this.currentIndex)
                                    }, 200)
                                    this.autoPlay()
                                    //非嵌接滑动
                                } else {
                                    if (this.currentIndex != 0) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            this.$emit('change', currentIndex)
                                        }, 200)
                                        this.autoPlay()
                                    }
                                }
                            } else {
                                csSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                csSwipe_box.style.transform = `translate(${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px, 0)`
                            }

                            //左滑
                        } else if (endPageX - startPageX < -(this.distance)) {
                            if (touchDirection === 'left') {
                                csSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                const currentIndex = touchDirection === 'left' ? this.currentIndex + 1 : this.currentIndex
                                //是否嵌接滑动
                                if (this.isLoop) {
                                    this.currentIndex = currentIndex
                                    setTimeout(() => {
                                        if (this.currentIndex == (this.csSwipeNum - 2)) {
                                            csSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                            this.currentIndex = 0
                                        }
                                        this.$emit('change', this.currentIndex)
                                    }, 200)
                                    this.autoPlay()
                                    //非嵌接滑动
                                } else {
                                    if (this.currentIndex !== this.csSwipeNum - 1) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            this.$emit('change', currentIndex)
                                        }, 200)
                                        this.autoPlay()
                                    }
                                }
                            } else {
                                csSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                csSwipe_box.style.transform = `translate(${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px, 0)`
                            }
                        } else {
                            csSwipe_box.style.transition = "-webkit-transform 100ms ease-out";
                            if (this.isLoop) {
                                csSwipe_box.style.webkitTransform = `translate(${-this.clientNum * (this.currentIndex + 1)}px, 0)`;
                            } else {
                                csSwipe_box.style.webkitTransform = `translate(${-this.clientNum * (this.currentIndex)}px, 0)`;
                            }
                        }
                    }
                } else {
                    //纵向滑动
                    const endPageY = e.changedTouches[0].pageY
                    if (startPageY === endPageY) {
                        return
                    } else {
                        //下滑
                        if (endPageY - startPageY > this.distance) {
                            if (touchDirection === 'bottom') {
                                csSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                const currentIndex = this.currentIndex - 1
                                //是否嵌接滑动
                                if (this.isLoop) {
                                    this.currentIndex = currentIndex
                                    setTimeout(() => {
                                        if (this.currentIndex == -1) {
                                            csSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                            this.currentIndex = this.csSwipeNum - 3
                                        }
                                        this.$emit('change', this.currentIndex)
                                    }, 200)
                                    this.autoPlay()
                                } else {   //非嵌接滑动
                                    if (this.currentIndex != 0) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            this.$emit('change', currentIndex)
                                        })
                                        this.autoPlay()
                                    }
                                }
                            } else {
                                csSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                csSwipe_box.style.transform = `translate(0, ${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px)`
                            }
                        } else if (endPageY - startPageY < -(this.distance)) {   //上滑
                            if (touchDirection === 'top') {
                                csSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                const currentIndex = this.currentIndex + 1
                                if (this.isLoop) {   //是否嵌接滑动
                                    this.currentIndex = currentIndex
                                    if (currentIndex == (this.csSwipeNum - 2)) {
                                        setTimeout(() => {
                                            csSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                            this.currentIndex = 0
                                            this.$emit('change', 0)
                                        }, 200)
                                    } else {
                                        setTimeout(() => {
                                            this.$emit('change', currentIndex)
                                        })
                                    }
                                    this.autoPlay()
                                } else {   //非嵌接滑动
                                    if (this.currentIndex != this.csSwipeNum - 1) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            this.$emit('change', currentIndex)
                                        }, 200)
                                        if (currentIndex != this.csSwipeNum - 1) {
                                            this.autoPlay()
                                        }
                                    }
                                }
                            } else {
                                csSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                csSwipe_box.style.transform = `translate(0, ${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px)`
                            }
                        } else {
                            csSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                            if (this.isLoop) {
                                csSwipe_box.style.webkitTransform = `translate(0, ${-this.clientNum * (this.currentIndex + 1)}px)`;
                            } else {
                                csSwipe_box.style.webkitTransform = `translate(0, ${-this.clientNum * (this.currentIndex)}px)`;
                            }
                        }
                    }

                }
                this.autoPlay()
            },
            /**
             自动切换事件
             @param {dom} e 触摸结束事件参数
             @return
             */
            autoPlay() {
                if (swipeTimer) {
                    clearInterval(swipeTimer)
                }
                if (!this.isAuto) {
                    return
                }
                if (!this.isLoop && this.currentIndex == this.csSwipeNum - 1) {
                    return
                }
                swipeTimer = setInterval(() => {
                    const csSwipe_box = this.$refs[`csSwipe_box`]
                    csSwipe_box.style.transition = `-webkit-transform ${this.duration}ms ease-out`;
                    const currentIndex = this.currentIndex + 1
                    this.currentIndex = currentIndex
                    //是否嵌接滑动
                    if (this.isLoop) {
                        this.$emit('change', currentIndex == (this.csSwipeNum - 2) ? 0 : currentIndex)
                        setTimeout(() => {
                            if (this.currentIndex == (this.csSwipeNum - 2)) {
                                csSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                this.currentIndex = 0
                            }
                        }, this.duration)
                    } else {
                        this.$emit('change', currentIndex)
                        setTimeout(() => {
                            if (this.currentIndex == (this.csSwipeNum - 1)) {
                                clearInterval(swipeTimer)
                            }
                        }, this.duration)
                    }
                }, this.interval)
            }
        },
        watch: {
            swipeIndex(index) {
                const csSwipe_box = this.$refs[`csSwipe_box`]
                csSwipe_box.style.transition = `-webkit-transform ${this.duration}ms ease-out`;
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped lang="scss">
    .csSwipe{
        position: relative;
        height: 100%; width: 100%;
        overflow: hidden;
        z-index: 50;
        .csSwipe_box {
            touch-action: none;
            box-sizing: border-box;
            display: flex;
        }
        .csIndicator {
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: 0.3rem;
            left: 0; right: 0;
            div {
                width: 0.16rem; height: 0.16rem;
                margin-right: 0.08rem;
                border-radius: 50%;
                background-color: rgba(235, 237, 240, 0.3);
            }
            .csIndicator_select{
                background-color: #fff;
            }
        }
        .csIndicator_portrait {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            left: 0.3rem;
            top: 0; bottom: 0;
            margin: auto;
            div {
                width: 0.16rem; height: 0.16rem;
                margin-bottom: 0.08rem;
                border-radius: 50%;
                background-color: rgba(235, 237, 240, 0.3);
            }
            .csIndicator_select{
                background-color: #fff;
            }
        }
    }
</style>