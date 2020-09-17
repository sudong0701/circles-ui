<template>
    <div class="csStepper">
        <div :class="`csStepper-lower ${inputValue <= Number(min) || disabled ? 'csStepper-lower-disabled' : ''}`" @click="lowerStepper"></div>
        <input type="text" :disabled="disabledEnter || disabled" :class="`csStepper-content ${disabled ? 'csStepper-lower-disabled' : ''}`" v-model="inputValue" @keyup="stepperKeyUp($event)" @change="stepperChange">
        <div :class="`csStepper-add ${inputValue >= Number(max) || disabled ? 'csStepper-lower-disabled' : ''}`" @click="addStepper"></div>
    </div>
</template>

<script>
    export default {
        name: 'csStepper',
        data() {
            return {
                inputValue: '',
                componentStep: 0,
                componentDecimalLength: 0
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
                default: true
            },
            decimalLength: {   //保留的小数位
                type: Number,
                default: 0
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
            if(this.integer) {   //整数不允许保留小数
                this.componentDecimalLength = 0
            } else {
                this.componentDecimalLength = this.decimalLength
            }
            if(this.value === '') {
                this.inputValue = this.toFixedValue(this.min)
            } else {
                this.inputValue = this.toFixedValue(this.value)
            }
        },
        methods: {
            /**
             * 点击减少按钮时触发
             * @param
             * @return
             */
            lowerStepper() {
                this.$emit('lower')
                if(!this.disabled && Number(this.inputValue) > Number(this.min) && !this.asyncChange) {
                    this.$emit('change', Number(this.inputValue) - Number(this.step) > Number(this.min) ? this.toFixedValue(Number(this.inputValue) - Number(this.step)) : this.toFixedValue(this.min))
                }
            },
            /**
             * 点击增加按钮时触发
             * @param
             * @return
             */
            addStepper() {
                this.$emit('add')
                if(!this.disabled && Number(this.inputValue) < Number(this.max) && !this.asyncChange) {
                    this.$emit('change', Number(this.inputValue) + Number(this.step) < Number(this.max) ? this.toFixedValue(Number(this.inputValue) + Number(this.step)) : this.toFixedValue(Number(this.max)))
                }
            },

            /**
             * input框输入时触发
             * @param
             * @return
             */
            stepperKeyUp() {
                let extraValue = ''
                if(this.inputValue.substring(0, 1) === '-') {
                    extraValue = '-'
                }
                if(this.integer) {
                    const stepperReg = eval(`/\\d+()?/`)
                    const inputValue = this.inputValue.match(stepperReg)
                    if(!inputValue) {
                        this.$emit('change', extraValue)
                    } else {
                        let currValue = Number(extraValue + inputValue[0]) > this.max ? this.getAccordValue(extraValue + inputValue[0], 'max') : (Number(extraValue + inputValue[0]) < this.min ? this.getAccordValue(extraValue + inputValue[0], 'min') : extraValue + inputValue[0])
                        this.$emit('change', currValue)
                        if(!this.asyncChange) {
                            this.inputValue = currValue
                        }
                    }
                } else {
                    let stepperReg = eval(`/\\d+(\\.\\d{0,${this.componentDecimalLength}})?/`)
                    if(this.decimalLength === 0) {
                        stepperReg = eval(`/\\d+()?/`)
                    }
                    const inputValue = this.inputValue.match(stepperReg)
                    if(!inputValue) {
                        this.$emit('change', extraValue)
                        return
                    }
                    let currValue =  Number(extraValue + inputValue[0]) > this.max ? this.getAccordValue(inputValue[0], 'max') : Number(extraValue + inputValue[0])< this.min ? this.getAccordValue(inputValue[0], 'min') : extraValue + inputValue[0]
                    this.$emit('change', currValue)
                    if(!this.asyncChange) {
                        this.inputValue = currValue
                    }
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
                return Number(value).toFixed(this.componentDecimalLength)
            },
            /**
             * 获取符合条件的值
             * @param {string} value 待处理的值
             * @param {string} type max或min
             * @return {string} 符合条件的值
             */
            getAccordValue(value, type) {
                if(type === 'max') {
                    if(Number(value.substring(0, value.length - 1)) <= this[type]) {
                        return value.substring(0, value.length - 1)
                    } else {
                        return this.getAccordValue(value.substring(0, value.length - 1))
                    }
                } else {
                    if(Number(value.substring(0, value.length - 1)) >= this[type]) {
                        return value.substring(0, value.length - 1)
                    } else {
                        return this.getAccordValue(value.substring(0, value.length - 1))
                    }
                }
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
    .csStepper {
        display: flex;
        flex-direction: row;
        .csStepper-lower {
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
        .csStepper-lower::before {
            position: absolute;
            width: 40%;
            height: 0.02rem;
            top: 50%;
            left: 50%;
            background-color: #666;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            content: '';
        }
        .csStepper-content {
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
        .csStepper-add {
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
        .csStepper-add::after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.02rem;
            height: 40%;
            background-color: #666;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            content: '';
        }
        .csStepper-add::before {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40%;
            height: 0.02rem;
            background-color: #666;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            content: '';
        }
        .csStepper-lower-disabled {
            color: #c8c9cc;
            background-color: #f7f8fa;
            cursor: not-allowed;
        }
    }
</style>