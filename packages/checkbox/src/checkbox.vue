<template>
    <div :class="`sdCheckbox ${type === 'cell' ? 'sdCheckbox-cell' : ''}`" ref="sdCheckbox" :style="`padding-left: ${isGroup ? '' : '0.32rem'}; padding-bottom: ${type === 'cell' ? '' : '0.16rem'}`">
        <span class="sdCheckbox-iconBox" @click="selectCheckBox('icon')">
            <div v-show="isGroup ? !checkedGroup : !checked">
                <slot name="unActiveIcon">
                <i v-if="shape !== 'square'" :class="`iconfont icon_unSelect_round sdCheckbox-icon ${disabled || disabledGroup? 'sdCheckbox-icon-disabled' : ''}`" :style="`color: ${!isGroup && checked ? '#fff' : ''}`"></i>
                <i v-if="shape === 'square'" :class="`iconfont icon_unSelect_square sdCheckbox-icon ${disabled || disabledGroup ? 'sdCheckbox-icon-disabled' : ''}`" :style="`color: ${!isGroup && checked ? '#fff' : ''}`"></i>
            </slot>
            </div>
            <transition name="animation-fade-imagePreview" >
            <div class="sdCheckbox-active" v-show="isGroup ? checkedGroup : checked">
                <slot name="activeIcon">
                    <i v-if="shape !== 'square'" :class="`iconfont icon_select_round sdCheckbox-icon ${disabled || disabledGroup ? 'sdCheckbox-icon-disabled' : ''}`" :style="`color: ${disabled ? '' : color}`"></i>
                    <i v-if="shape === 'square'" :class="`iconfont icon_select_square sdCheckbox-icon ${disabled || disabledGroup ? 'sdCheckbox-icon-disabled' : ''}`" :style="`color: ${disabled ? '' : color}`"></i>
                </slot>
            </div>
        </transition>
        </span>
        <div class="sdCheckbox-content" @click="selectCheckBox">
            <slot></slot>
        </div>

         <div class="sdCheckbox-line" v-if="isGroup"></div>
    </div>
</template>

<script>
    export default {
        name: 'sdCheckbox',
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
                        this.$refs.sdCheckbox.parentNode.__vue__.changeValue(this.name)
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdCheckbox {
        position: relative;
        display: flex;
        flex-direction: row;
        .sdCheckbox-iconBox {
            position: relative;
            min-height: 0.4rem;
            min-width: 0.4rem;
            .sdCheckbox-icon {
                position: absolute;
                font-size: 0.4rem;
                color: #c8c9cc;
            }
            .sdCheckbox-icon-disabled {
                color: #ebedf0;
            }
            .sdCheckbox-active {
                .sdCheckbox-icon {
                    color: #1989fa;
                }
                .sdCheckbox-icon-disabled {
                    color: #ebedf0;
                }
            }
            img {
                position: absolute;
                width: 0.4rem;
                height: 0.4rem;
            }
        }
        .sdCheckbox-content {
            flex: 1;
            margin-left: 0.16rem;
            color: #323233;
            line-height: 0.46rem;
        }
        .sdCheckbox-line {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.02rem;
            background-color: #ebedf0;
        }
    }
    .sdCheckbox-cell {
        padding: 0.2rem 0.32rem 0.2rem 0;
        .sdCheckbox-content {
            order: -3;
        }
    }
</style>