<template>
    <div class="csIndexBar" :style="`height: ${barHeight}`">
        <div class="csIndexBar_title" :style="`color: ${color}`">{{currTitle}}</div>
        <div class="csIndexBar_content" ref="csIndexBar_content" @scroll="scrollBar($event)">
            <slot></slot>
        </div>
        <div class="csIndexBar_sort">
            <span @click="selectSort(key)" v-for="(item, key) in tabNameArr" :class="`${currIndex === key ? 'csIndexBarActive' : ''}`" :style="`color: ${currIndex === key ? color : ''}`">{{sortArr.length ? item.customize : item.label}}</span>
        </div>
        <transition name="animation-fade-imagePreview">
            <div v-show="isToast" class="csIndexBar_tip">{{currTitle}}</div>
        </transition>
    </div>
</template>

<script>
    let indexBarTimer
    export default {
        name: 'csIndexBar',
        data() {
            return {
                currTitle: '',
                currIndex: 0,
                scrollTop: 0,
                tabNameArr: [],
                isToast: false
            }
        },
        props: {
            active: {
                type: String | Number,
                default: 0
            },
            sortArr: {
                type: Array,
                default: ()=> {
                    return []
                }
            },
            height: {
                type: String | Number,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            showToast: {
                type: Boolean,
                default: true
            }
        },
        model: {
            prop: 'active',
            event: 'change'
        },
        mounted() {
            const indexBarContent = this.$refs.csIndexBar_content
            const csIndexBarChild = this.$refs.csIndexBar_content.children
            this.currTitle = csIndexBarChild[0].__vue__.index
            for(let i = 0; i < csIndexBarChild.length; i++) {
                if(i === Number(this.active)) {
                    indexBarContent.scrollTo(0, csIndexBarChild[i].offsetTop)
                }
                this.tabNameArr.push({
                    label: csIndexBarChild[i].__vue__.index,
                    top: csIndexBarChild[i].offsetTop,
                    key: i,
                    customize: this.sortArr.length ? (this.sortArr[i] ? this.sortArr[i] : '') : ''
                })
            }
        },
        computed: {
            barHeight() {
                return this.height === '' ? `${this.$windowInfo.height}px` : (typeof this.height === 'number' ? this.height + 'px' : this.height)
            }
        },
        methods: {
            /**
             索引页滚动时触发
             @param
             @return
             */
            scrollBar(e) {
                for(let i = 0; i < this.tabNameArr.length; i++) {
                    if(this.tabNameArr[i].top > e.srcElement.scrollTop) {
                        if(i - 1 !== this.currIndex) {
                            this.$emit('change', i - 1)
                        }
                        this.currTitle = this.tabNameArr[i - 1].label
                        this.currIndex = this.tabNameArr[i - 1].key
                        break
                    }
                }
                this.$emit('scroll', {
                    index: this.currIndex,
                    scrollTop: e.srcElement.scrollTop
                })
            },
            /**
             点击右侧栏选项时触发
             @param
             @return
             */
            selectSort(key) {
                const indexBarContent = this.$refs.csIndexBar_content
                this.currTitle = this.tabNameArr[key].label
                this.currIndex = this.tabNameArr[key].key
                indexBarContent.scrollTo(0, this.tabNameArr[key].top)
                if(this.showToast) {
                    this.isToast = true
                    if(indexBarTimer) {
                        clearTimeout(indexBarTimer)
                    }
                    indexBarTimer = setTimeout(()=> {
                        this.isToast = false
                        indexBarTimer = null
                    }, 1000)
                }
                this.$emit('change', key)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csIndexBar {
        display: flex;
        flex-direction: column;
        position: relative;
        .csIndexBar_title {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 0.64rem;
            padding: 0 0.32rem;
            line-height: 0.64rem;
            z-index: 9;
            background-color: #f7f8f8;
            color: var(--color);
        }
        .csIndexBar_content {
            flex: 1;
            overflow-y: auto;
            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */
            overflow-x: hidden;
        }
        .csIndexBar_content::-webkit-scrollbar {
            display: none; /* Chrome Safari */
        }
        .csIndexBar_sort {
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0.3rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.24rem;
            text-align: center;
            cursor: pointer;
            user-select: none;
            >span {
                font-size: 0.24rem;
            }
            .csIndexBarActive {
                color: var(--color);
            }
        }
        .csIndexBar_tip {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 0.06rem 0.5rem;
            border-radius: 0.06rem;
            background-color: rgba(0, 0, 0, 0.75);
            color: #fff;
        }
        //淡入淡出-图片预览
        .animation-fade-imagePreview-enter-active {
            animation-name: fade-in-imagePreview;
            animation-duration: 0.28s;
        }
        .animation-fade-imagePreview-leave-active {
            animation-name: fade-out-imagePreview;
            animation-duration: 0.28s;
        }
        @keyframes fade-in-imagePreview {
            0% {
                opacity: 0;
            }
            50% {
                -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
                animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
            }
            100% {
                -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                opacity: 1;
            }
        }
        @keyframes fade-out-imagePreview {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }

</style>
