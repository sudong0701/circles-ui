<template>
    <div :class="`csTabbar ${fixed ? 'csTabbar_fixed' : ''}`" ref="csTabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csTabbar',
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
                default: ''
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
                    const csTabbarChild = this.$refs.csTabbar.children
                    for(let i = 0; i < csTabbarChild.length; i++) {
                        csTabbarChild[i].__vue__.activeColor = this.activeColor
                        csTabbarChild[i].__vue__.inactiveColor = this.inactiveColor
                        csTabbarChild[i].__vue__.key = i
                        if(i === Number(this.active)) {
                            csTabbarChild[i].__vue__.isActive = true
                        } else {
                            csTabbarChild[i].__vue__.isActive = false
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
                const csTabbarChild = this.$refs.csTabbar.children
                this.$emit('change', key)
                for(let i = 0; i < csTabbarChild.length; i++) {
                    if(i === key) {
                        csTabbarChild[i].__vue__.isActive = true
                    } else {
                        csTabbarChild[i].__vue__.isActive = false
                    }
                }
            }
        },
        watch: {
            active(index) {
                const csTabbarChild = this.$refs.csTabbar.children
                for(let i = 0; i < csTabbarChild.length; i++) {
                    if(i === index) {
                        csTabbarChild[i].__vue__.isActive = true
                    } else {
                        csTabbarChild[i].__vue__.isActive = false
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csTabbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 1rem;
        background-color: #fff;
    }
    .csTabbar_fixed {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
