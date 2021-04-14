<template>
    <div :class="`csField ${disabled ? 'csField-disabled' : ''}`">
        <div class="csField_left" v-if="label">
            <div class="leftIcon">
                <slot name="left">
                    <cs-icon :name="leftIcon"></cs-icon>
                </slot>
            </div>
            <span>{{label}}</span>
        </div>

        <div class="csField_value">
            <input ref="csFieldInput" v-model="selfValue" :disabled="disabled || readonly" :password="password" :class="`csField_input ${isError ? 'csField_input-error' : ''}`" type="text" @input="oninput" @focus="focus" @blur="blur" :placeholder="placeholder">
            <i class="csIcon iconfont iconroundclosefill csField_value-clear" v-show="clear && isFocus && selfValue && !disabled && !readonly" @mousedown="onClear" @touchstart="onClear"></i>
        </div>

        <div class="csField_right">
            <slot name="right">
                <cs-icon class="rightIcon" :name="rightIcon"></cs-icon>
            </slot>
        </div>
        <div :class="`csField-error ${isShowError  ? 'csField-showError' : ''}`">
            <span>{{errMessage}}</span>
        </div>
    </div>
</template>

<script>
import csIcon from '../../icon/src/icon.vue'
export default {
    name: 'csField',
    data() {
        return {
            selfValue: '',
            isFocus: false,
            isError: false
        }
    },
    props: {
        value: {   //输入框的值
            type: Number | String,
            default: ''
        },
        label: {   //左侧文案
            type: String,
            default: ''
        },
        type: {   //输入框类型
            type: String,
            default: 'text'   //text、decimal、number
        },
        maxlength: {   //最大长度
            type: Number | String,
            default: ''
        },
        disabled: {   //是否禁用
            type: Boolean,
            default: false
        },
        readonly: {   //是否只读
            type: Boolean,
            default: false
        },
        placeholder: {   //输入框占位符
            type: String,
            default: ''
        },
        toFixed: {   //保留几位小数 仅type为number时有效  -1为不限制
            type: Number | String,
            default: -1
        },
        password: {   //是否密码格式
            type: Boolean,
            default: false
        },
        leftIcon: {    //左边icon的name值
            type: String,
            default: ''
        },
        rightIcon: {    //右侧Icon的name值
            type: String,
            default: ''
        },
        clear: {    //是否显示清除按钮
            type: Boolean,
            default: false
        },
        vaildFnc: {   //校验函数
            type: Function,
            default: () => {
                return true
            }
        },
        errMessage: {    //报错信息
            type: String,
            default: ''
        },
        isShowEmptyErrMessage: {    //空状态时是否在下方显示报错信息
            type: Boolean,
            default: false
        }
    },
    components: {
        csIcon
    },
    mounted() {
        this.selfValue = this.value
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        /**
         * 计算在输入框下方是否显示报错信息
         * @param
         * @return {Boolean} 是否显示报错信息
         */
        isShowError() {
            if(this.isShowEmptyErrMessage) {
                return this.isError
            } else {
                return this.isError && Boolean(this.selfValue)
            }
        }
    },
    methods: {
        /**
         * input框获取焦点事件
         * @param
         * @return
         */
        focus() {
            //重新获取焦点时错误取消
            this.isError = false
            this.isFocus = true
            this.$emit('focus')
        },
        /**
         * input框失去焦点事件
         * @param
         * @return
         */
        blur() {
            this.$emit('blur')
            this.isFocus = false
        },
        /**
         * 点击清除按钮时触发
         * @param
         * @return
         */
        onClear() {
            //点击清除按钮时触发
            this.$emit('clear')
            this.selfValue = ''
            this.$emit('change', '')
        },
        /**
         * input框输入时触发
         * @param {Event} e 输入事件事件参数
         * @return
         */
        oninput(e) {
            this.$emit('input', e)
            switch (this.type) {
                //数字 支持小数
                case 'decimal':
                    //如果保留位数为0 则为整数
                    let selfValue
                    if (this.toFixed == 0) {
                        selfValue = this.selfValue.replace(/[^\d]/g, '')   //过滤非数字
                    } else if (this.toFixed >= 0) {
                        selfValue = this.selfValue.replace(/[^\d\.]/g, '')   //过滤非数字和.
                        selfValue = selfValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")   //去除多余的.
                        let regStr = '^(\\-)*(\\d+)\\.('
                        for (let i = 0; i < this.toFixed; i++) {
                            regStr += '\\d'
                        }
                        regStr += ').*$'
                        const decimalReg = new RegExp(regStr)
                        selfValue = selfValue.replace(decimalReg, '$1$2.$3')  //小数点后最多 this.decimalLength 位
                    } else {
                        selfValue = this.selfValue.replace(/[^\d\.]/g, '')   //过滤非数字和.
                        selfValue = selfValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")   //去除多余的.
                    }
                    this.selfValue = selfValue
                    this.$emit('change', selfValue)
                    break
                //整数
                case 'number':
                    const numberValue = this.selfValue.replace(/[^\d]/g, '')   //过滤非数字
                    this.selfValue = numberValue
                    this.$emit('change', numberValue)
                    break
                //文本
                case 'text':
                    this.$emit('change', this.selfValue)
                    break
            }
        },
        vaild() {
            const result = this.vaildFnc(this.selfValue)
            this.isError = !result
            return result
        }
    },
    watch: {
        value(val) {
            this.selfValue = val
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.csField {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0.2rem 0.32rem;
    //line-height: 0.48rem;
    background-color: #fff;
    .csField_left {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 1.8rem;
        margin-right: 0.24rem;
        .leftIcon {
            margin-right: 0.06rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        i {
            font-size: 0.36rem;
        }
        span {
            font-size: 0.28rem;
            line-height: 0.48rem;
        }
    }
    .csField_value {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        flex: 1;
        .csField_input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            color: #323233;
            line-height: inherit;
            text-align: left;
            line-height: 0.48rem;
            outline: none;
            background-color: transparent;
            border: 0;
            resize: none;
        }
        .csField_input-error {
            color: crimson;
        }
        .csField_input-error::-webkit-input-placeholder {
            /* WebKit browsers */
            color: crimson;
            
        }
        .csField_input-error::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: crimson;
        }
        .csField_input-error:-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: crimson;
        }
        .csField_value-clear {
            position: absolute;
            right: 0.32rem;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #ddd;
            font-size: 0.32rem;
        }
        input::placeholder {
            color: #aaa;
        }
        input::-webkit-input-placeholder {
            color: #aaa;
        }

        input::-moz-placeholder {
            color: #aaa;
        }

        input:-ms-input-placeholder {
            color: #aaa;
        }

        input::-moz-placeholder {
            color: #aaa;
        }
    }
    .csField_right {
        .rightIcon {
            margin-left: 0.06rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 0.36rem;
        }
    }
    .csField-error {
        position: absolute;
        left: 2.36rem;
        bottom: -0.32rem;
        font-size: 0.24rem;
        line-height: 0.24rem;
        color: crimson;
        transform: rotateX(-90deg);
        transform-origin: center 0;
        transition: all 0.15s;
        span {
            font-size: 0.24rem;
        }
    }
    .csField-showError {
        transform: rotateX(0deg);
    }
}
.csField-disabled {
    opacity: 0.7;
    .csField_value {
        .csField_input {
            cursor: not-allowed;
        }
    }
}
</style>