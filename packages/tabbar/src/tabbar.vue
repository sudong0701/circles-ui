<template>
    <div :class="`sdTabbar ${fixed ? 'sdTabbar_fixed' : ''}`" ref="sdTabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'sdTabbar',
        data() {
            return {

            }
        },
        props: {
            active: {
                type: String | Number,
                default: 0
            },
            fixed: {
                type: Boolean,
                default: false
            },
            activeColor: {
                type: String,
                default: '#1989fa'
            },
            inactiveColor: {
                type: String,
                default: '#7d7e80'
            }
        },
        model: {
            prop: 'active',
            event: 'change'
        },
        mounted() {
            this.initComponent()
        },
        methods: {
            initComponent() {
                this.$nextTick(()=> {
                    const sdTabbarChild = this.$refs.sdTabbar.children
                    console.log(sdTabbarChild)
                    for(let i = 0; i < sdTabbarChild.length; i++) {
                        sdTabbarChild[i].__vue__.activeColor = this.activeColor
                        sdTabbarChild[i].__vue__.inactiveColor = this.inactiveColor
                        sdTabbarChild[i].__vue__.key = i
                        if(i === Number(this.active)) {
                            sdTabbarChild[i].__vue__.isActive = true
                        } else {
                            sdTabbarChild[i].__vue__.isActive = false
                        }
                    }
                })
            },
            /**
             * tab页改动时触发
             * @param {Number} key 选中的下标
             * @return
             */
            changeTab(key) {
                const sdTabbarChild = this.$refs.sdTabbar.children
                this.$emit('change', key)
                for(let i = 0; i < sdTabbarChild.length; i++) {
                    if(i === key) {
                        sdTabbarChild[i].__vue__.isActive = true
                    } else {
                        sdTabbarChild[i].__vue__.isActive = false
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
