<template>
    <div :class="`sdRadio ${type === 'cell' ? 'sdRadio-cell' : ''}`" ref="sdRadio" @click="changeRadio">
        <span :class="`sdRadio-iconBox`">
            <slot name="unActiveIcon">
                <i v-if="shape === 'round'" :class="`iconfont icon_unSelect_round sdRadio-icon ${disabled || disabledForGroup ? 'sdRadio-icon-disabled' : ''}`" :style="`color: ${isActive ? '#fff' : ''}`"></i>
                <i v-if="shape === 'square'" :class="`iconfont icon_unSelect_square sdRadio-icon ${disabled || disabledForGroup ? 'sdRadio-icon-disabled' : ''}`" :style="`color: ${isActive ? '#fff' : ''}`"></i>
            </slot>
            <transition name="animation-fade-imagePreview" >
                <div v-show="isActive" class="sdRadio-selected">
                    <slot name="activeIcon">
                        <i v-if="shape === 'round'"  :class="`iconfont icon_select_round sdRadio-icon ${disabled || disabledForGroup ? 'sdRadio-icon-disabled' : ''}`" :style="`color: ${disabled || disabledForGroup ? '#c8c9cc' : color}; z-index: 10`"></i>
                        <i v-if="shape === 'square'" :class="`iconfont icon_select_square sdRadio-icon ${disabled || disabledForGroup ? 'sdRadio-icon-disabled' : ''}`" :style="`color: ${disabled || disabledForGroup ? '#c8c9cc' : color}; z-index: 10`"></i>
                    </slot>
                </div>
            </transition>
        </span>
        <span :class="`sdRadio-content ${disabled || disabledForGroup ? 'sdRadio-content-disabled' : ''} ${type === 'cell' ? 'sdRadio-iconBox-cell' : ''}`">
            <slot></slot>
        </span>
        <i class="sdRadio-line" v-if="type === 'cell'"></i>
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
            },
            shape: {   //形状
                type: String,
                default: 'round'
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
        position: relative;
        display: flex;
        flex-direction: row;
        margin-bottom: 0.16rem;
        .sdRadio-iconBox {
            position: relative;
            min-height: 0.4rem;
            min-width: 0.4rem;
            img {
                height: 0.4rem;
                width: 0.4rem;
            }
            .sdRadio-selected {

            }
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
        .sdRadio-line {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.02rem;
            background-color: #ebedf0;
        }
    }
    .sdRadio-cell {
        padding: 0.2rem 0.32rem 0.2rem 0;
        margin-bottom: 0;
        justify-content: space-between;
        .sdRadio-iconBox-cell {
            order: -3;
        }
    }
</style>