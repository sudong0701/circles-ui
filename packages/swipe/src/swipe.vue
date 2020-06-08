<template>
    <div class="sdSwipe" ref="sdSwipe">
        <div class="sdSwipe_box" ref="sdSwipe_box" @touchstart.stop="touchStart($event)"
             @touchmove.stop="touchMove($event)" @touchend.stop="touchEnd($event)"
             :style="`transform: translate(${!vertical ? (-clientNum * (isLoop ? currentIndex + 1 : currentIndex)) : '0'}px , ${!vertical ? '0' : (-clientNum * (isLoop ? currentIndex + 1 : currentIndex))}px)`">
            <slot ref="slot"></slot>
        </div>
        <div :class="`${vertical ? 'sdIndicator_portrait' : 'sdIndicator'}`">
            <div @click="selectSwipeItem(key)" v-for="(item, key) in indicatorArr"
                 :class="`${indicatorClass} ${(key == currentIndex || ((key == indicatorArr.length - 1) && currentIndex >= indicatorArr.length)) ? indicatorSelectedClass + ' sdIndicator_select' : ''}`"></div>
        </div>
    </div>
</template>

<script>
    let startPageY, startPageX, swipeTimer, prePageNum, touchDirection = ''
    export default {
        name: 'sdSwipe',
        data() {
            return {
                currentIndex: 0,   //当前轮播的下标
                sdSwipeNum: 0,   //总长度
                clientNum: 0,
                indicatorArr: [],
                maxWidth: 0,
                maxHeight: 0
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
            isZoom: {   //是否放大
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.maxWidth = this.$windowInfo.width * 0.437 || 75
            this.maxHeight =  this.$windowInfo.height * 0.2 || 140
            this.currentIndex = this.swipeIndex
            const sdSwipe_box = this.$refs.sdSwipe_box
            const sdSwipe = this.$refs.sdSwipe
            const sdSwipeArr = document.getElementsByClassName('sdSwipeItem')
            this.autoPlay()
            if (!sdSwipeArr.length) {
                return
            }
            for (let i = 0; i < sdSwipeArr.length; i++) {
                this.indicatorArr.push(i)
            }
            if (this.isLoop) {
                this.sdSwipeNum = sdSwipeArr.length + 2
                const sdSwipeEnd = document.getElementsByClassName('sdSwipeItem')[sdSwipeArr.length - 1].cloneNode(true)
                const sdSwipeStart = document.getElementsByClassName('sdSwipeItem')[0].cloneNode(true)
                sdSwipe_box.appendChild(sdSwipeStart)
                sdSwipe_box.insertBefore(sdSwipeEnd, document.getElementsByClassName('sdSwipeItem')[0])
            } else {
                this.sdSwipeNum = sdSwipeArr.length
            }
            //横向
            if (!this.vertical) {
                this.clientNum = sdSwipe.clientWidth
                this.$refs.sdSwipe.style.width = `${sdSwipe_box.clientWidth}px`
                sdSwipe_box.style['flex-direction'] = 'row'
                sdSwipe_box.style.width = `${this.clientNum * this.sdSwipeNum}px`
                sdSwipe_box.style.height = `${100}%`
                for (let i = 0; i < sdSwipeArr.length; i++) {
                    sdSwipeArr[i].style.width = `${this.clientNum}px`
                }
                //纵向
            } else {
                this.clientNum = sdSwipe.clientHeight
                sdSwipe_box.style['flex-direction'] = 'column'
                sdSwipe_box.style.height = `${this.clientNum * this.sdSwipeNum}px`
                sdSwipe_box.style.width = `${100}%`
                for (let i = 0; i < sdSwipeArr.length; i++) {
                    sdSwipeArr[i].style.height = `${this.clientNum}px`
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
                const sdSwipe_box = this.$refs[`sdSwipe_box`]
                sdSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
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
                if (this.isZoom) {
                    startPageX = e.targetTouches[0].pageX
                    startPageY = e.targetTouches[0].pageY
                } else {
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
                }
                e.stopPropagation()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸移动事件参数
             @return
             */
            touchMove(e) {
                if (this.isZoom) {
                    let currPageX = e.targetTouches[0].pageX - startPageX, currPageY = e.targetTouches[0].pageY - startPageY
                    currPageX = currPageX >= this.maxWidth ? this.maxWidth : (currPageX <= -this.maxWidth ? -this.maxWidth : currPageX)
                    currPageY = currPageY >= this.maxHeight ? this.maxHeight : (currPageY <= -this.maxHeight ? -this.maxHeight : currPageY)
                    const currentIndex = this.isLoop ? this.currentIndex + 1 : this.currentIndex
                    let sdImagePreview_img = this.$refs[`sdSwipe_box`].children[currentIndex].children[0].children[0]
                    sdImagePreview_img.style.transform=`translate(${currPageX}px, ${currPageY}px)`
                } else {
                    const sdSwipe_box = this.$refs[`sdSwipe_box`]
                    if (!this.vertical) {   //X轴滑动
                        if (prePageNum > e.targetTouches[0].pageX) {   //向左滑
                            touchDirection = 'left'
                        } else {
                            touchDirection = 'right'
                        }
                        prePageNum = e.targetTouches[0].pageX
                        if (this.isLoop) {
                            sdSwipe_box.style.transform = `translate(${e.targetTouches[0].pageX - startPageX + -this.clientNum * (this.currentIndex + 1)}px, 0)`;
                            //非嵌接滑动
                        } else {
                            const movePageX = e.targetTouches[0].pageX
                            //右滑
                            if (movePageX - startPageX > 0) {
                                if (this.currentIndex == 0) {
                                    return
                                } else {
                                    sdSwipe_box.style.transform = `translate(${e.targetTouches[0].pageX - startPageX + -this.clientNum * (this.currentIndex)}px, 0)`;
                                }
                            } else if (movePageX - startPageX < 0) {   //左滑
                                if (this.currentIndex == this.sdSwipeNum - 1) {
                                    return
                                } else {
                                    sdSwipe_box.style.transform = `translate(${e.targetTouches[0].pageX - startPageX + -this.clientNum * (this.currentIndex)}px, 0)`;
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
                            sdSwipe_box.style.transform = `translate(0, ${e.targetTouches[0].pageY - startPageY + -this.clientNum * (this.currentIndex + 1)}px)`;
                        } else {   //非嵌接滑动
                            const movePageY = e.targetTouches[0].pageY
                            //下滑
                            if (movePageY - startPageY > 0) {
                                if (this.currentIndex == 0) {
                                    return
                                } else {
                                    sdSwipe_box.style.transform = `translate(0, ${e.targetTouches[0].pageY - startPageY + -this.clientNum * (this.currentIndex)}px)`;
                                }
                            } else if (movePageY - startPageY < 0) {   //上滑
                                if (this.currentIndex == this.sdSwipeNum - 1) {
                                    return
                                } else {
                                    sdSwipe_box.style.transform = `translate(0, ${e.targetTouches[0].pageY - startPageY + -this.clientNum * (this.currentIndex)}px)`;
                                }
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
                if (this.isZoom) {
                    return
                } else {
                    const sdSwipe_box = this.$refs[`sdSwipe_box`]
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
                                    sdSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                    const currentIndex = this.currentIndex - 1
                                    //是否嵌接滑动
                                    if (this.isLoop) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            if (this.currentIndex == -1) {
                                                sdSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                                this.currentIndex = this.sdSwipeNum - 3
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
                                    sdSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                    sdSwipe_box.style.transform = `translate(${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px, 0)`
                                }

                                //左滑
                            } else if (endPageX - startPageX < -(this.distance)) {
                                if (touchDirection === 'left') {
                                    sdSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                    const currentIndex = touchDirection === 'left' ? this.currentIndex + 1 : this.currentIndex
                                    //是否嵌接滑动
                                    if (this.isLoop) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            if (this.currentIndex == (this.sdSwipeNum - 2)) {
                                                sdSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                                this.currentIndex = 0
                                            }
                                            this.$emit('change', this.currentIndex)
                                        }, 200)
                                        this.autoPlay()
                                        //非嵌接滑动
                                    } else {
                                        if (this.currentIndex !== this.sdSwipeNum - 1) {
                                            this.currentIndex = currentIndex
                                            setTimeout(() => {
                                                this.$emit('change', currentIndex)
                                            }, 200)
                                            this.autoPlay()
                                        }
                                    }
                                } else {
                                    sdSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                    sdSwipe_box.style.transform = `translate(${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px, 0)`
                                }
                            } else {
                                sdSwipe_box.style.transition = "-webkit-transform 100ms ease-out";
                                if (this.isLoop) {
                                    sdSwipe_box.style.webkitTransform = `translate(${-this.clientNum * (this.currentIndex + 1)}px, 0)`;
                                } else {
                                    sdSwipe_box.style.webkitTransform = `translate(${-this.clientNum * (this.currentIndex)}px, 0)`;
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
                                    sdSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                    const currentIndex = this.currentIndex - 1
                                    //是否嵌接滑动
                                    if (this.isLoop) {
                                        this.currentIndex = currentIndex
                                        setTimeout(() => {
                                            if (this.currentIndex == -1) {
                                                sdSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                                this.currentIndex = this.sdSwipeNum - 3
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
                                    sdSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                    sdSwipe_box.style.transform = `translate(0, ${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px)`
                                }
                            } else if (endPageY - startPageY < -(this.distance)) {   //上滑
                                if (touchDirection === 'top') {
                                    sdSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                    const currentIndex = this.currentIndex + 1
                                    if (this.isLoop) {   //是否嵌接滑动
                                        this.currentIndex = currentIndex
                                        if (currentIndex == (this.sdSwipeNum - 2)) {
                                            setTimeout(() => {
                                                sdSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
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
                                        if (this.currentIndex != this.sdSwipeNum - 1) {
                                            this.currentIndex = currentIndex
                                            setTimeout(() => {
                                                this.$emit('change', currentIndex)
                                            }, 200)
                                            if (currentIndex != this.sdSwipeNum - 1) {
                                                this.autoPlay()
                                            }
                                        }
                                    }
                                } else {
                                    sdSwipe_box.style.transition = "-webkit-transform 150ms ease-out";
                                    sdSwipe_box.style.transform = `translate(0, ${-this.clientNum * (this.isLoop ? this.currentIndex + 1 : this.currentIndex)}px)`
                                }
                            } else {
                                sdSwipe_box.style.transition = "-webkit-transform 200ms ease-out";
                                if (this.isLoop) {
                                    sdSwipe_box.style.webkitTransform = `translate(0, ${-this.clientNum * (this.currentIndex + 1)}px)`;
                                } else {
                                    sdSwipe_box.style.webkitTransform = `translate(0, ${-this.clientNum * (this.currentIndex)}px)`;
                                }
                            }
                        }

                    }
                    this.autoPlay()
                }
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
                if (!this.isLoop && this.currentIndex == this.sdSwipeNum - 1) {
                    return
                }
                swipeTimer = setInterval(() => {
                    const sdSwipe_box = this.$refs[`sdSwipe_box`]
                    sdSwipe_box.style.transition = `-webkit-transform ${this.duration}ms ease-out`;
                    const currentIndex = this.currentIndex + 1
                    this.currentIndex = currentIndex
                    //是否嵌接滑动
                    if (this.isLoop) {
                        this.$emit('change', currentIndex == (this.sdSwipeNum - 2) ? 0 : currentIndex)
                        setTimeout(() => {
                            if (this.currentIndex == (this.sdSwipeNum - 2)) {
                                sdSwipe_box.style.transition = "-webkit-transform 0ms ease-out";
                                this.currentIndex = 0
                            }
                        }, this.duration)
                    } else {
                        this.$emit('change', currentIndex)
                        setTimeout(() => {
                            if (this.currentIndex == (this.sdSwipeNum - 1)) {
                                clearInterval(swipeTimer)
                            }
                        }, this.duration)
                    }
                }, this.interval)
            }
        }
    }
</script>