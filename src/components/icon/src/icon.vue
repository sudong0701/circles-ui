<template>
    <i :class="`csIcon iconfont icon${name}`" :style="`font-size: ${computedSize}; color: ${color}`" @click="clickIcon"></i>
</template>

<script>
    export default {
        name: 'csIcon',
        data() {
            return {

            }
        },
        props: {
            name: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            size: {
                type: String | Number,
                default: ''
            }
        },
        computed: {
            computedSize() {
                if(typeof this.size === 'number') {
                    return `${this.size}px`
                } else {
                    return this.size
                }
            }
        },
        methods: {
            clickIcon(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csIcon {
        font-size: 0.4rem;
        color: #333;
    }
</style>