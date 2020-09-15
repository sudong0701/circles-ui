<template>
    <div :class="`csCheckbox ${type === 'cell' ? 'csCheckbox-cell' : ''}`" ref="csCheckbox" :style="`padding-left: ${isGroup ? '' : '0.32rem'}; padding-bottom: ${type === 'cell' ? '' : '0.16rem'};padding-top: ${type === 'cell' ? '' : '0.16rem'}`">
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
        <div :class="`csCheckbox-content ${labelDisabled ? '' : 'csCheckbox-content-pointer'}`" @click="selectCheckBox" :style="labelDisabled ? '' : ''">
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
<style scoped lang="scss">
    .csCheckbox {
        position: relative;
        display: flex;
        flex-direction: row;
        .csCheckbox-iconBox {
            position: relative;
            min-height: 0.4rem;
            min-width: 0.4rem;
            /deep/ .csCheckbox-icon {
                position: absolute;
                font-size: 0.4rem;
                color: #c8c9cc;
            }
            .csCheckbox-icon-disabled {
                color: #ebedf0;
            }
            .csCheckbox-active {
                /deep/ .csCheckbox-icon {
                    color: var(--color);
                }
                .csCheckbox-icon-disabled {
                    color: #ebedf0;
                }
            }
            /deep/ img {
                position: absolute;
                width: 0.4rem;
                height: 0.4rem;
            }
        }
        .csCheckbox-content {
            flex: 1;
            margin-left: 0.16rem;
            color: #323233;
            line-height: 0.46rem;
        }
        .csCheckbox-content-pointer {
            cursor: pointer;
        }
        .csCheckbox-line {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 0.02rem;
            background-color: #ebedf0;
        }
        //淡入淡出-图片预览
        .animation-fade-imagePreview-enter-active {
            animation-name: fade-in-imagePreview;
            animation-duration: 0.28s;
        }
        .animation-fade-imagePreview-leave-active {
            animation-name: fade-out-imagePreview;
            animation-duration: 0.28s;
        }
        @keyframes fade-in-imagePreview {
            0% {
                opacity: 0;
            }
            50% {
                -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
                animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
            }
            100% {
                -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                opacity: 1;
            }
        }
        @keyframes fade-out-imagePreview {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }
    .csCheckbox-cell {
        padding: 0.2rem 0.32rem 0.2rem 0;
        .csCheckbox-content {
            order: -3;
        }
    }
</style>