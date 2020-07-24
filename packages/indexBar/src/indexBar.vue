<template>
    <div class="sdIndexBar" :style="`height: ${barHeight}`">
        <div class="sdIndexBar_title" :style="`color: ${color}`">{{currTitle}}</div>
        <div class="sdIndexBar_content" ref="sdIndexBar_content" @scroll="scrollBar($event)">
            <slot></slot>
        </div>
        <div class="sdIndexBar_sort">
            <span @click="selectSort(key)" v-for="(item, key) in tabNameArr" :style="`color: ${currIndex === key ? color : ''}`">{{sortArr.length ? item.customize : item.label}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sdIndexBar',
        data() {
            return {
                currTitle: '',
                currIndex: 0,
                scrollTop: 0,
                tabNameArr: []
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
                default: '#07c160'
            }
        },
        model: {
            prop: 'active',
            event: 'change'
        },
        mounted() {
            const indexBarContent = this.$refs.sdIndexBar_content
            const sdIndexBarChild = this.$refs.sdIndexBar_content.children
            this.currTitle = sdIndexBarChild[0].__vue__.index
            for(let i = 0; i < sdIndexBarChild.length; i++) {
                if(i === Number(this.active)) {
                    indexBarContent.scrollTo(0, sdIndexBarChild[i].offsetTop)
                }
                this.tabNameArr.push({
                    label: sdIndexBarChild[i].__vue__.index,
                    top: sdIndexBarChild[i].offsetTop,
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
                const indexBarContent = this.$refs.sdIndexBar_content
                this.currTitle = this.tabNameArr[key].label
                this.currIndex = this.tabNameArr[key].key
                indexBarContent.scrollTo(0, this.tabNameArr[key].top)
                this.$emit('change', key)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
