<template>
    <div :class="`csRadio ${type === 'cell' ? 'csRadio-cell' : ''}`" ref="csRadio">
        <span :class="`csRadio-iconBox`" @click="changeRadio('icon')">
            <slot name="unActiveIcon">
                <i v-if="shape === 'round'" :class="`iconfont icon_unSelect_round csRadio-icon ${disabled || disabledForGroup ? 'csRadio-icon-disabled' : ''}`" :style="`color: ${isActive ? '#fff' : ''}`"></i>
                <i v-if="shape === 'square'" :class="`iconfont icon_unSelect_square csRadio-icon ${disabled || disabledForGroup ? 'csRadio-icon-disabled' : ''}`" :style="`color: ${isActive ? '#fff' : ''}`"></i>
            </slot>
            <transition name="animation-fade-imagePreview" >
                <div v-show="isActive" class="csRadio-selected">
                    <slot name="activeIcon">
                        <i v-if="shape === 'round'"  :class="`iconfont icon_select_round csRadio-icon ${disabled || disabledForGroup ? 'csRadio-icon-disabled' : 'csRadio-icon-active'}`" :style="`color: ${disabled || disabledForGroup ? '#c8c9cc' : color}; z-index: 10`"></i>
                        <i v-if="shape === 'square'" :class="`iconfont icon_select_square csRadio-icon ${disabled || disabledForGroup ? 'csRadio-icon-disabled' : 'csRadio-icon-active'}`" :style="`color: ${disabled || disabledForGroup ? '#c8c9cc' : color}; z-index: 10`"></i>
                    </slot>
                </div>
            </transition>
        </span>
        <span :class="`csRadio-content ${disabled || disabledForGroup ? 'csRadio-content-disabled' : ''} ${type === 'cell' ? 'csRadio-content-cell' : ''}`" @click="changeRadio">
            <slot></slot>
        </span>
        <i class="csRadio-line" v-if="type === 'cell'"></i>
    </div>
</template>

<script>
    export default {
        name: 'csRadio',
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
                default: ''
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
            if(this.$refs.csRadio.parentNode.__vue__.type) {
                this.type = this.$refs.csRadio.parentNode.__vue__.type
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
                        if(this.$refs.csRadio.parentNode.__vue__.changeRadio) {
                            this.$refs.csRadio.parentNode.__vue__.changeRadio(this.name, this.isActive)
                        }
                        this.$emit('change', this.isActive)
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->