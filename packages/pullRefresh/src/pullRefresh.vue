<template>
    <div class="sd-pullRefresh" ref="sdPullRefresh" @touchstart.stop="touchStart($event)" @touchmove.stop="touchMove($event)" @touchend.stop="touchEnd($event)">
        <div class="sd-pullRefresh-track" ref="sd-pullRefresh-track" :style="`margin-top: -${headHeight}px;`">
            <div class="sd-pullRefresh-track-head" :style="`height: ${headHeight}px;`">
                <p v-show="pullRefreshStatus === 'pull'">{{pullingText}}</p>
                <p v-show="pullRefreshStatus === 'loos'">{{loosingText}}</p>
                <div v-show="pullRefreshStatus === 'loading'" class="sd-pullRefresh-track-head-loading">
                    <svg class="sd-pullRefresh-loading" aria-hidden="true">
                        <use xlink:href="#iconloading"></use>
                    </svg>
                    <p>{{loadingText}}</p>
                </div>
                <p v-show="pullRefreshStatus === 'success'">{{successText}}</p>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    let startPageY, startPageX
    export default {
        name: 'sdPullRefresh',
        data() {
            return {
                pullRefreshStatus: 'pull'   //下拉状态 pull:下拉、loos:释放、loading：加载、success：加载完成
             }
        },
        props: {
            isLoading: {   //是否处于加载状态
              type: Boolean,
              default: false
            },
            isPullRefresh: {    //是否开启上拉刷新
               type: Boolean,
               default: true
            },
            'pulling-text': {   //下拉过程提示文案
                type: String,
                default: '下拉即可刷新...'
            },
            'loosing-text': {   //释放过程提示文案
                type: String,
                default: '释放即可刷新...'
            },
            'loading-text': {    //加载过程提示文案
                type: String,
                default: '加载中...'
            },
            'success-text': {   //刷新成功提示文案
                type: String,
                default: '刷新成功'
            },
            'head-height': {   //头部的高度
                type: Number,
                default: 50
            },
            lower: {    //页面触底事件的阈值
                type: Number,
                default: 200
            },
            isThrottling: {   //是否开启节流
                type:Boolean,
                default: false
            }
        },
        model: {
          prop: 'isLoading',
          event: 'refresh'
        },
        mounted() {
            const sdPullRefreshParent = this.$refs.sdPullRefresh.parentNode
            sdPullRefreshParent.addEventListener('scroll', this.fncThr(this.scroll))
        },
        methods: {
            /**
             节流函数
             @param {function} fnc 回调函数
             @return
             */
            fncThr(fnc) {
                let isScroll
                let t = this
                return function () {
                    t.$emit('bindscroll', arguments[0])
                    if(!isScroll) {
                        isScroll = true
                        fnc(t, arguments, ()=> {
                            isScroll = false
                        })
                    }
                }
            },
            /**
             页面滑动事件
             @param {Object} t this
             @param {dom} e 滚动事件事件参数
             @param {function} fnc 回调函数
             @return
             */
            scroll(t, e, fnc) {
                const sdPullRefreshParent = this.$refs.sdPullRefresh.parentNode
                let scrollHeight = sdPullRefreshParent.scrollHeight
                let clientHeight = sdPullRefreshParent.clientHeight
                let scrollTop = sdPullRefreshParent.scrollTop
                if(scrollTop + clientHeight + t.lower >= scrollHeight) {
                    //是否节流
                    if(t.isThrottling) {
                        t.$emit('scrolltolower', fnc)
                    } else {
                        t.$emit('scrolltolower')
                        fnc()
                    }
                } else {
                    fnc()
                }
            },
            /**
             触摸移动开始事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchStart(e) {
                startPageY = e.targetTouches[0].pageY
                e.stopPropagation()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchMove(e) {
                if(this.isPullRefresh) {
                    const sdPullRefresh = this.$refs.sdPullRefresh
                    if(sdPullRefresh.parentNode.scrollTop === 0) {
                        if(this.pullRefreshStatus === 'pull' || this.pullRefreshStatus === 'loos') {
                            if(e.targetTouches[0].pageY - startPageY > this.headHeight) {
                                this.pullRefreshStatus = 'loos'
                            } else {
                                this.pullRefreshStatus = 'pull'
                            }
                            const sdPullRefreshTrack = this.$refs['sd-pullRefresh-track']
                            sdPullRefreshTrack.style.transition = "-webkit-transform 0 ease-out";
                            sdPullRefreshTrack.style.webkitTransform = `translate(0, ${e.targetTouches[0].pageY - startPageY}px)`;
                            e.stopPropagation()
                            e.preventDefault()
                        }
                    }
                }
            },
            /**
             触摸移动结束事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchEnd(e) {
                if(this.isPullRefresh) {
                    const sdPullRefresh = this.$refs.sdPullRefresh
                    if(sdPullRefresh.parentNode.scrollTop === 0) {
                        const sdPullRefreshTrack = this.$refs['sd-pullRefresh-track']
                        if(this.pullRefreshStatus === 'loos') {
                            sdPullRefreshTrack.style.transition = "-webkit-transform 200ms ease-out";
                            sdPullRefreshTrack.style.webkitTransform = `translate(0, ${this.headHeight}px)`;
                            this.pullRefreshStatus = 'loading'
                            this.$emit('refresh', true)
                            e.stopPropagation()
                        } else if(this.pullRefreshStatus === 'pull') {
                            sdPullRefreshTrack.style.transition = "-webkit-transform 200ms ease-out";
                            sdPullRefreshTrack.style.webkitTransform = `translate(0, 0px)`;
                        }
                    }
                }
            }
        },
        watch: {
            isLoading(val) {
                if(!val) {
                    this.pullRefreshStatus = 'success'
                    const sdPullRefreshTrack = this.$refs['sd-pullRefresh-track']
                    sdPullRefreshTrack.style.transition = "-webkit-transform 400ms ease-out";
                    sdPullRefreshTrack.style.webkitTransform = `translate(0, 0px)`;
                    setTimeout(()=> {
                        this.pullRefreshStatus = 'pull'
                    },200)
                }
            }
        }
    }
</script>