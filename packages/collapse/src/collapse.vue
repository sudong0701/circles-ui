<template>
    <div class="csCollapse" ref="csCollapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csCollapse',
        data() {
            return {}
        },
        props: {
            activeNames: {
                type: Array | String,
                default: ''
            },
            accordion: {
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'activeNames',
            event: 'changeActive'
        },
        mounted() {
            const csCollapseItemArr = this.$refs.csCollapse.children
            for(let i=0; i<csCollapseItemArr.length; i++) {
                if(typeof this.activeNames === 'string') {
                    if(csCollapseItemArr[i].__vue__.name === this.activeNames) {
                        csCollapseItemArr[i].__vue__.isUnfold = true
                    }
                } else if(Array.isArray(this.activeNames)) {
                    if(this.activeNames.indexOf(csCollapseItemArr[i].__vue__.name) > -1) {
                        csCollapseItemArr[i].__vue__.isUnfold = true
                        if(this.accordion) {
                            return
                        }
                    }
                }
            }
        },
        methods: {
            /**
             更改展开或收起状态
             @param {String} name name值
             @param {Boolean} isUnfold 是否展开
             @return
             */
            changeActive(name, isUnfold) {
                const csCollapseItemArr = this.$refs.csCollapse.children
                let activeNames = [...this.activeNames], changedNames
                if(this.accordion) {   //如果为手风琴模式
                    for(let i=0; i<csCollapseItemArr.length; i++) {
                        if(csCollapseItemArr[i].__vue__.name === name) {
                            if(typeof this.activeNames === 'string') {
                                if(isUnfold) {
                                    changedNames = name
                                    this.$emit('changeActive', name)
                                } else {
                                    changedNames = ''
                                    this.$emit('changeActive', '')
                                }
                            } else if(Array.isArray(this.activeNames)) {
                                if(isUnfold) {
                                    changedNames = [name]
                                    this.$emit('changeActive', [name])
                                } else {
                                    changedNames = []
                                    this.$emit('changeActive', [])
                                }
                            }
                            csCollapseItemArr[i].__vue__.isUnfold = isUnfold
                        } else {
                            csCollapseItemArr[i].__vue__.isUnfold = false
                        }
                    }
                } else {   //如果不为手风琴模式
                    for(let i=0; i<csCollapseItemArr.length; i++) {
                        if(csCollapseItemArr[i].__vue__.name === name) {
                            if(isUnfold) {
                                activeNames.push(name)
                                this.$emit('changeActive', activeNames)
                            } else {
                                let currIndex = activeNames.indexOf(name)
                                activeNames.splice(currIndex, 1)
                                this.$emit('changeActive', activeNames)
                            }
                            csCollapseItemArr[i].__vue__.isUnfold = isUnfold
                        }
                    }
                    changedNames = activeNames
                }
                this.$emit('change', changedNames)
            }
        }
    }
</script>