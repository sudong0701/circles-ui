<template>
    <div :class="`sdTabs`"  @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
        <div :class="`sdTabs-box ${isFixed ? 'sdTabs-box-fixed' : ''}`" :style="`transform: translateX(${transformWidth}px)`" ref="sdTabs-box">
            <div class="sdTabs-list" ref="sdTabsList">
                <slot :titleActiveColor="titleActiveColor" :titleInactiveColor="titleInactiveColor"></slot>
            </div>
            <div class="sdTabs-list-line" ref="sdTabsListLine" :style="`transform: translate(${totalNum_line + rightWidth}px, 0); color: ${active ? titleActiveColor : titleInactiveColor}`"></div>
        </div>
        <div class="sdTabs-sticky" ref="sdTabs-sticky" v-if="isSticky"></div>
    </div>
</template>

<script>
    let startPageX = 0, totalWidth = 0, tabWidthArr = [], moveNum = 0, itemWidth = 0
    export default {
        name: 'sdTabs',
        data() {
            return {
                transformWidth: 0,
                isFixed: false,
                rightWidth: 0,
                totalNum_line: 0
            }
        },
        props: {
            active: {
                type: String | Number,
                default: '0'
            },
            tabBackGround: {
                type: String,
                default: '#fff'
            },
            titleActiveColor: {
                type: String,
                default: ''
            },
            titleInactiveColor: {
                type: String,
                default: ''
            },
            isSticky: {   //是否吸顶
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: 'line'
            },
            swipeThreshold: {
                type: String | Number,
                default: 4
            }
        },
        model: {
            prop: 'active',
            event: 'change'
        },
        mounted() {
            this.initData()
            this.initPage()
        },
        methods: {
            /**
             * 初始化数据
             * @param
             * @return
             */
            initData() {
                const line = this.$refs.sdTabsListLine, tabs = this.$refs.sdTabsList.children, tabsLength = tabs.length > Number(this.swipeThreshold) ? Number(this.swipeThreshold) + 0.5 : tabs.length
                let totalNum = 0
                for(let i = 0; i < tabs.length; i++) {
                    tabs[i].__vue__.index = i
                    if(tabs.length > Number(this.swipeThreshold)) {
                        tabs[i].style.minWidth = `${100 / Number(this.swipeThreshold) - 3}%`
                    }
                    tabWidthArr.push(tabs[i].offsetWidth)
                    totalNum += tabs[i].offsetWidth
                    tabs[i].__vue__.titleActiveColor = this.titleActiveColor
                    tabs[i].__vue__.titleInactiveColor = this.titleInactiveColor
                    tabs[i].__vue__.tabBackGround = this.tabBackGround
                    tabs[i].__vue__.tabsLength = tabs.length
                    tabs[i].__vue__.swipeThreshold = this.swipeThreshold
                    if(i == this.active) {
                        itemWidth = tabs[i].offsetWidth
                        tabs[i].__vue__.active = true
                    }
                }
                this.rightWidth = ( itemWidth - 120 / tabsLength) * 0.5
                totalWidth = totalNum - this.$windowInfo.width
                moveNum = totalWidth / (tabs.length - Number(this.swipeThreshold) - 1)
                line.style.width = 120 / tabsLength + 'px'
                line.style.transition = `transform, 0.3s`
                line.style['-webkit-transition'] = `-webkit-transform, 0.2s`
            },
            /**
             * 初始化页面
             * @param
             * @return
             */
            initPage() {
                if(this.isSticky) {
                    let observer  = new IntersectionObserver(
                        (entries)=> {
                            entries.map((item)=> {
                                if(!item.isIntersecting) {   //吸顶
                                    this.isFixed = true
                                } else {
                                    this.isFixed = false
                                }
                            })
                        }
                    )
                    observer.observe(this.$refs['sdTabs-sticky'])
                }
            },
            /**
             * tab改变时触发
             * @param {Number} index 点击的下标
             * @return
             */
            changeTab(index) {
                const tabs = this.$refs.sdTabsList.children
                this.totalNum_line = this.computedTran(index)
                this.$emit('change', index)
                for(let i = 0; i < tabs.length; i++) {
                    if(i == index) {
                        tabs[i].__vue__.active = true
                        if(tabs[i].offsetLeft + itemWidth + this.transformWidth > this.$windowInfo.width) {
                            this.transformWidth = this.transformWidth - moveNum < -totalWidth ? -totalWidth : this.transformWidth - moveNum
                        } else if(tabs[i].offsetLeft + itemWidth + this.transformWidth < itemWidth) {
                            this.transformWidth = this.transformWidth + moveNum > 0 ? 0 : this.transformWidth + moveNum
                        }
                    } else {
                        tabs[i].__vue__.active = false
                    }
                }
            },
            /**
             * 触摸开始事件
             * @param {dom} e 触摸开始事件参数
             * @return
             */
            touchStart(e) {
                const tabBox = this.$refs['sdTabs-box']
                tabBox.style.transition = `transform, 0s`
                startPageX = e.touches[0].pageX
            },
            /**
             * 触摸移动事件
             * @param {dom} e 触摸移动事件参数
             * @return
             */
            touchMove(e) {
                let transformWidth = this.transformWidth + e.touches[0].pageX - startPageX
                transformWidth = -transformWidth > totalWidth ? -totalWidth : (-transformWidth < 0 ? 0 : transformWidth)
                this.transformWidth = transformWidth
                startPageX = e.touches[0].pageX
            },
            /**
             * 触摸结束事件
             * @param
             * @return
             */
            touchEnd() {
                const tabBox = this.$refs['sdTabs-box']
                tabBox.style.transition = `transform, 0.3s`
            },
            /**
             * 计算滑块的位置
             * @param {Number} index 当前的下标
             * @return {Number} 滑块的位置
             */
            computedTran(index) {
                let totalNum = 0
                for(let i = 0; i < Number(index); i++) {
                    totalNum += tabWidthArr[i]
                }
                return totalNum
            }
        },
        watch: {
            tabBackGround(value) {
                const tabs = this.$refs.sdTabsList.children
                for(let i = 0; i < tabs.length; i++) {
                    tabs[i].__vue__.tabBackGround = value
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->