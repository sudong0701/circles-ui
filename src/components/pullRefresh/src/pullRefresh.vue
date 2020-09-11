<!--遗留问题：在android微信浏览器下，先上滑触发scroll事件，再上滑至scroll为0触发下拉操作会触发微信浏览器的默认touch事件，暂时未想到完美的解决方案-->
<template>
    <div class="cs-pullRefresh" ref="csPullRefresh" @touchstart.stop="touchStart($event)" @touchmove.stop="touchMove($event)" @touchend.stop="touchEnd($event)" :style="`background: ${backgroundColor}`">
        <div class="cs-pullRefresh-track" ref="cs-pullRefresh-track" :style="`margin-top: -${headHeight}px;`">
            <div class="cs-pullRefresh-track-head" :style="`height: ${headHeight}px;`">
                <p v-show="pullRefreshStatus === 'pull'">{{pullingText}}</p>
                <p v-show="pullRefreshStatus === 'loos'">{{loosingText}}</p>
                <div v-show="pullRefreshStatus === 'loading'" class="cs-pullRefresh-track-head-loading">
                    <svg class="cs-pullRefresh-loading aniRotate" aria-hidden="true">
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
        name: 'csPullRefresh',
        data() {
            return {
                pullRefreshStatus: 'pull'   //下拉状态 pull:下拉、loos:释放、loading：加载、success：加载完成
             }
        },
        props: {
            maxMoveDistance: {   //允许下拉的最大高度
                type: Number,
                default: 120
            },
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
                default: 50
            },
            isThrottling: {   //是否开启节流
                type:Boolean,
                default: false
            },
            backgroundColor: {
                type: String,
                default: '#fafafa'
            }
        },
        model: {
          prop: 'isLoading',
          event: 'refresh'
        },
        mounted() {
            const csPullRefreshParent = this.$refs.csPullRefresh.parentNode
            csPullRefreshParent.addEventListener('scroll', this.fncThr(this.scroll))
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
                const csPullRefreshParent = this.$refs.csPullRefresh.parentNode
                let scrollHeight = csPullRefreshParent.scrollHeight
                let clientHeight = csPullRefreshParent.clientHeight
                let scrollTop = csPullRefreshParent.scrollTop
                if(scrollTop === 0) {

                }
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
                e[0].stopPropagation()
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
                    const csPullRefresh = this.$refs.csPullRefresh
                    //只有在元素到达顶部时下拉才会有效果
                    if(csPullRefresh.parentNode.scrollTop === 0) {
                        //禁止上拉事件
                        if(e.targetTouches[0].pageY - startPageY < 0) {
                            return
                        }
                        e.preventDefault()
                        if(this.pullRefreshStatus === 'pull' || this.pullRefreshStatus === 'loos') {
                            if(e.targetTouches[0].pageY - startPageY > this.headHeight) {
                                this.pullRefreshStatus = 'loos'
                            } else {
                                this.pullRefreshStatus = 'pull'
                            }
                            const csPullRefreshTrack = this.$refs['cs-pullRefresh-track']
                            csPullRefreshTrack.style.transition = "-webkit-transform 0 ease-out";
                            const moveDistance = (e.targetTouches[0].pageY - startPageY) > this.maxMoveDistance ? this.maxMoveDistance : e.targetTouches[0].pageY - startPageY
                            csPullRefreshTrack.style.webkitTransform = `translate(0, ${moveDistance}px)`;
                        }
                    }
                }
                e.stopPropagation()
            },
            /**
             触摸移动结束事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchEnd(e) {
                if(this.isPullRefresh) {
                    const csPullRefresh = this.$refs.csPullRefresh
                    if(csPullRefresh.parentNode.scrollTop === 0) {
                        const csPullRefreshTrack = this.$refs['cs-pullRefresh-track']
                        if(this.pullRefreshStatus === 'loos') {
                            csPullRefreshTrack.style.transition = "-webkit-transform 200ms ease-out";
                            csPullRefreshTrack.style.webkitTransform = `translate(0, ${this.headHeight}px)`;
                            this.pullRefreshStatus = 'loading'
                            this.$emit('refresh', true)
                            //e.stopPropagation()
                        } else if(this.pullRefreshStatus === 'pull') {
                            csPullRefreshTrack.style.transition = "-webkit-transform 200ms ease-out";
                            csPullRefreshTrack.style.webkitTransform = `translate(0, 0px)`;
                        }
                    }
                }
            }
        },
        watch: {
            isLoading(val) {
                if(!val) {
                    this.pullRefreshStatus = 'success'
                    const csPullRefreshTrack = this.$refs['cs-pullRefresh-track']
                    csPullRefreshTrack.style.transition = "-webkit-transform 400ms ease-out";
                    csPullRefreshTrack.style.webkitTransform = `translate(0, 0px)`;
                    setTimeout(()=> {
                        this.pullRefreshStatus = 'pull'
                    },200)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
    .cs-pullRefresh {
        overflow: hidden;
        .cs-pullRefresh-track {
            /*position: absolute;*/
            /*top: 0; left: 0;*/
            right: 0;
            .cs-pullRefresh-track-head{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                p {
                    position: relative;
                    text-align: center;
                    font-size: 0.26rem;
                    line-height: 0.44rem;
                    color: #999;
                }
                .cs-pullRefresh-track-head-loading {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .cs-pullRefresh-loading {
                        animation-name: aniSpin; /*动画的名称 */
                        animation-duration: 800ms; /*动画从开始到结束的时间*/
                        animation-timing-function: linear; /*动画执行快慢的参数*/
                        animation-iteration-count: infinite; /*动画执行多少次的参数*//*以下是兼容ios所需，参数意义与上相同*/
                        //-webkit-animation-name: aniRotate;
                        -webkit-animation-duration: 800ms;
                        -webkit-animation-timing-function: linear;
                        -webkit-animation-iteration-count: infinite;
                        height: 0.36rem; width: 0.36rem;
                        color: #bbb;
                        use {
                            color: #bbb;
                            background-color: #bbb;
                        }
                    }
                    p {
                        position: relative;
                        top: 0.04rem;
                        margin-left: 0.08rem;
                    }
                    @keyframes aniSpin {
                        /*开始转的角度*/
                        from {
                            transform: rotate(0deg);
                        }/*结束的角度*/
                        to {
                            transform: rotate(359deg);
                        }
                    }
                }
            }
        }
        //旋转动画
        .aniRotate {
            animation-name: aniRotate; /*动画的名称 */
            animation-duration: 800ms; /*动画从开始到结束的时间*/
            animation-timing-function: linear; /*动画执行快慢的参数*/
            animation-iteration-count: infinite; /*动画执行多少次的参数*//*以下是兼容ios所需，参数意义与上相同*/
            -webkit-animation-name: aniRotate;
            -webkit-animation-duration: 800ms;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
        }
        @keyframes aniRotate {
            /*开始转的角度*/
            from {
                transform: rotate(0deg);
                -webkit-transform:rotate(0deg);
            }
            /*结束的角度*/
            to {
                transform: rotate(359deg);
                -webkit-transform:rotate(359deg);
            }
        }
    }
</style>