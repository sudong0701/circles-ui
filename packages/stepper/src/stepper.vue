<template>
    <div class="sdStepper">
        <div :class="`sdStepper-lower ${inputValue <= min || disabled ? 'sdStepper-lower-disabled' : ''}`" @click="lowerStepper"></div>
        <input type="text" :disabled="disabledEnter || disabled" :class="`sdStepper-content ${disabled ? 'sdStepper-lower-disabled' : ''}`" v-model="inputValue" @keyup="stepperKeyUp($event)" @change="stepperChange">
        <div :class="`sdStepper-add ${inputValue >= max || disabled ? 'sdStepper-lower-disabled' : ''}`" @click="addStepper"></div>
    </div>
</template>

<script>
    export default {
        name: 'sdStepper',
        data() {
            return {
                inputValue: ''
            }
        },
        props: {
            value: {
                type: String | Number,
                default: ''
            },
            min: {
                type: String | Number,
                default: 0
            },
            max: {
                type: String | Number,
                default: 10
            },
            step: {
                type: String | Number,
                default: 1
            },
            integer: {   //是否限制输入整数
                type: Boolean,
                default: false
            },
            decimalLength: {
                type: Number,
                default: 2
            },
            disabled: {
                type: Boolean,
                default: false
            },
            disabledEnter: {
                type: Boolean,
                default: false
            },
            asyncChange: {
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            if(this.value === '') {
                this.inputValue = Number(this.min).toFixed(this.decimalLength)
            } else {
                this.inputValue = Number(this.value).toFixed(this.decimalLength)
            }
        },
        methods: {
            /**
             * 点击减少按钮时触发
             * @param
             * @return
             */
            lowerStepper() {
                if(!this.disabled && Number(this.inputValue) > Number(this.min)) {
                    this.inputValue = Number(this.inputValue) - Number(this.step) > Number(this.min) ? this.toFixedValue(Number(this.inputValue) - Number(this.step)) : this.toFixedValue(this.min)
                }
            },
            /**
             * 点击增加按钮时触发
             * @param
             * @return
             */
            addStepper() {
                if(!this.disabled && Number(this.inputValue) < Number(this.max)) {
                    this.inputValue = Number(this.inputValue) + Number(this.step) < Number(this.max) ? this.toFixedValue(Number(this.inputValue) + Number(this.step)) : this.toFixedValue(Number(this.max))
                }
            },
            /**
             * input框输入时触发
             * @param
             * @return
             */
            stepperKeyUp() {
                if(this.integer) {
                    this.$emit('change', this.inputValue.replace(/[\D]/g, '') > this.max ? this.max : (this.inputValue.replace(/[\D]/g, '') < this.min ? this.min : this.inputValue.replace(/[\D]/g, '')))
                } else {
                    const stepperReg = eval(`/\\d+(\\.\\d{0,${this.decimalLength}})?/`)
                    const inputValue = this.inputValue.match(stepperReg)
                    if(!inputValue) {
                        this.$emit('change', '')
                        return
                    }
                    this.$emit('change', inputValue[0] > this.max ? this.max : inputValue[0] < this.min ? this.min : inputValue[0])
                }
            },
            /**
             * input值改变时触发
             * @param
             * @return
             */
            stepperChange() {
                this.$emit('change', this.inputValue === '' ? this.toFixedValue(this.min) : this.toFixedValue(Number(this.inputValue)))
            },
            /**
             * input值改变时触发
             * @param {Number} value 值
             * @return {Number} 返回的值
             */
            toFixedValue(value) {
                return value.toFixed(this.decimalLength)
            }
        },
        watch: {
            value(value) {
                this.inputValue = value
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdStepper {
        display: flex;
        flex-direction: row;
        .sdStepper-lower {
            position: relative;
            box-sizing: border-box;
            width: 28px;
            height: 28px;
            margin: 0;
            padding: 0;
            color: #323233;
            vertical-align: middle;
            background-color: #f2f3f5;
            border: 0;
            cursor: pointer;
        }
        .sdStepper-lower::before {
            position: absolute;
            width: 50%;
            height: 0.02rem;
            top: 50%;
            left: 50%;
            background-color: currentColor;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            content: '';
        }
        .sdStepper-content {
            box-sizing: border-box;
            width: 32px;
            height: 28px;
            margin: 0 2px;
            padding: 0;
            color: #323233;
            font-size: 14px;
            line-height: normal;
            text-align: center;
            vertical-align: middle;
            background-color: #f2f3f5;
            border: 0;
            outline: none;
            border-radius: 0;
            -webkit-appearance: none;
        }
        .sdStepper-add {
            position: relative;
            box-sizing: border-box;
            width: 28px;
            height: 28px;
            margin: 0;
            padding: 0;
            color: #323233;
            vertical-align: middle;
            background-color: #f2f3f5;
            border: 0;
            cursor: pointer;
        }
        .sdStepper-add::after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.02rem;
            height: 50%;
            background-color: currentColor;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            content: '';
        }
        .sdStepper-add::before {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 0.02rem;
            background-color: currentColor;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            content: '';
        }
        .sdStepper-lower-disabled {
            color: #c8c9cc;
            background-color: #f7f8fa;
            cursor: not-allowed;
        }
    }
</style>