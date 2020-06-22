<template>
    <div :class="`sdRadio ${type === 'cell' ? 'sdRadio-cell' : ''}`" ref="sdRadio" @click="changeRadio">
        <span :class="`${type === 'cell' ? 'sdRadio-iconBox-cell' : ''} sdRadio-iconBox`">
            <i :class="`iconfont icon_unSelect_round sdRadio-icon ${disabled || disabledForGroup ? 'sdRadio-icon-disabled' : ''}`"></i>
            <transition name="animation-fade-imagePreview" >
                <i v-show="isActive" :class="`iconfont icon_select_round sdRadio-icon ${disabled || disabledForGroup ? 'sdRadio-icon-disabled' : ''}`" :style="`color: ${disabled || disabledForGroup ? '#c8c9cc' : color}; z-index: 10`"></i>
            </transition>
        </span>
        <span :class="`sdRadio-content ${disabled || disabledForGroup ? 'sdRadio-content-disabled' : ''}`">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'sdRadio',
        data() {
            return {
                type: '',
                isActive: false,
                disabledForGroup: false
            }
        },
        props: {
            color: {
                type: String,
                default: '#1989fa'
            },
            name: {
                type: String | Number,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            if(this.$refs.sdRadio.parentNode.__vue__.type) {
                this.type = this.$refs.sdRadio.parentNode.__vue__.type
            }
        },
        methods: {
            changeRadio() {
                if(!this.disabledForGroup && !this.disabled) {
                    this.isActive = !this.isActive
                    if(this.$refs.sdRadio.parentNode.__vue__.changeRadio) {
                        this.$refs.sdRadio.parentNode.__vue__.changeRadio(this.name, this.isActive)
                    }
                    this.$emit('change', this.isActive)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdRadio {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.16rem;
        .sdRadio-iconBox {
            position: relative;
            height: 0.4rem;
            width: 0.4rem;
        }
        .sdRadio-iconBox-cell {

        }
        .sdRadio-icon {
            position: absolute;
            color: #c8c9cc;
            font-size: 0.38rem;
            animation-duration: .3s;
        }
        .sdRadio-content {
            margin-left: 0.16rem;
            font-size: 0.3rem;
            color: #323233;
        }
        .sdRadio-content-disabled, .sdRadio-icon-disabled {
            color: #c8c9cc;
        }
    }
    .sdRadio-cell {
        justify-content: space-between;
        .sdRadio-iconBox-cell {
            order: -3;
        }
    }
</style>