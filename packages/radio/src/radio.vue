<template>
    <div :class="`sdRadio ${type === 'cell' ? 'sdRadio-cell' : ''}`" ref="sdRadio">
        <span :class="`sdRadio-iconBox`" @click="changeRadio('icon')">
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
        <span :class="`sdRadio-content ${disabled || disabledForGroup ? 'sdRadio-content-disabled' : ''} ${type === 'cell' ? 'sdRadio-content-cell' : ''}`" @click="changeRadio">
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
            },
            labelDisabled: {   //是否禁用文本的点击
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
            /**
             * 点击radio时触发
             * @param {string} type 点击类型
             * @return
             */
            changeRadio(type) {
                if(type === 'icon' || !this.labelDisabled) {
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
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->