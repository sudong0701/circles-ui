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
<style scoped lang="scss">
    .csRadio {
        position: relative;
        display: flex;
        flex-direction: row;
        margin-bottom: 0.16rem;
        .csRadio-iconBox {
            position: relative;
            min-height: 0.4rem;
            min-width: 0.4rem;
            img {
                height: 0.4rem;
                width: 0.4rem;
            }
            .csRadio-selected {

            }
        }
        .csRadio-icon {
            position: absolute;
            color: #c8c9cc;
            font-size: 0.38rem;
            animation-duration: .3s;
        }
        .csRadio-icon-active {
            color: var(--color);
        }
        .csRadio-content {
            flex: 1;
            margin-left: 0.16rem;
            font-size: 0.3rem;
            color: #323233;
        }
        .csRadio-content-disabled, .csRadio-icon-disabled {
            color: #c8c9cc;
        }
        .csRadio-line {
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
    .csRadio-cell {
        padding: 0.2rem 0.32rem 0.2rem 0;
        margin-bottom: 0;
        justify-content: space-between;
        .csRadio-content-cell {
            order: -3;
        }
    }
</style>