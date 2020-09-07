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
