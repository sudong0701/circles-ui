<template>
    <div :class="`csCheckbox ${type === 'cell' ? 'csCheckbox-cell' : ''}`" ref="csCheckbox" :style="`padding-left: ${isGroup ? '' : '0.32rem'}; padding-bottom: ${type === 'cell' ? '' : '0.16rem'}`">
        <span class="csCheckbox-iconBox" @click="selectCheckBox('icon')">
            <div v-show="isGroup ? !checkedGroup : !checked">
                <slot name="unActiveIcon">
                <i v-if="shape !== 'square'" :class="`iconfont icon_unSelect_round csCheckbox-icon ${disabled || disabledGroup? 'csCheckbox-icon-disabled' : ''}`" :style="`color: ${!isGroup && checked ? '#fff' : ''}`"></i>
                <i v-if="shape === 'square'" :class="`iconfont icon_unSelect_square csCheckbox-icon ${disabled || disabledGroup ? 'csCheckbox-icon-disabled' : ''}`" :style="`color: ${!isGroup && checked ? '#fff' : ''}`"></i>
            </slot>
            </div>
            <transition name="animation-fade-imagePreview" >
            <div class="csCheckbox-active" v-show="isGroup ? checkedGroup : checked">
                <slot name="activeIcon">
                    <i v-if="shape !== 'square'" :class="`iconfont icon_select_round csCheckbox-icon ${disabled || disabledGroup ? 'csCheckbox-icon-disabled' : ''}`" :style="`color: ${disabled ? '' : color}`"></i>
                    <i v-if="shape === 'square'" :class="`iconfont icon_select_square csCheckbox-icon ${disabled || disabledGroup ? 'csCheckbox-icon-disabled' : ''}`" :style="`color: ${disabled ? '' : color}`"></i>
                </slot>
            </div>
        </transition>
        </span>
        <div class="csCheckbox-content" @click="selectCheckBox">
            <slot></slot>
        </div>

         <div class="csCheckbox-line" v-if="isGroup"></div>
    </div>
</template>

<script>
    export default {
        name: 'csCheckbox',
        data() {
            return {
                isGroup: false,
                checkedGroup: false,
                disabledGroup: false,
                type: ''
            }
        },
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            shape: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            labelDisabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: ''
            }
        },
        model: {
            prop: 'checked',
            event: 'change'
        },
        methods: {
            /**
             * 选择checkbox时触发
             * @param {string} type 点击类型
             * @return
             */
            selectCheckBox(type) {
                if(!this.disabled && !this.disabledGroup) {
                    if(!this.isGroup) {
                        if(!this.labelDisabled || type === 'icon') {
                            this.$emit('change', !this.checked)
                        }
                    } else {
                        this.$refs.csCheckbox.parentNode.__vue__.changeValue(this.name)
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->