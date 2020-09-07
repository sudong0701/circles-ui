<template>
    <div class="sdField">
        <div class="sdField_left">
            <span>{{label}}</span>
        </div>

        <div class="sdField_value">
            <input v-model="selfValue" :password="password" class="sdField_input" type="text" @input="oninput" :placeholder="placeholder">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sdField',
        data() {
            return {
                selfValue: ''
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
                default: 'text'   //text、tel、digit、number
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
                type: Number,
                default: 0
            },
            password: {   //是否密码格式
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.selfValue = this.value
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        computed: {

        },
        methods: {
            oninput(e) {
                if(this.maxlength) {
                    if(this.selfValue.length > this.maxlength) {
                        this.selfValue = this.selfValue.slice(0, this.maxlength)
                        console.log(this.selfValue)
                    }
                }
                this.$nextTick(()=> {
                    this.$emit('change', this.selfValue)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdField {
        display: flex;
        flex-direction: row;
        padding: 0.2rem 0.32rem;
        line-height: 0.48rem;
        background-color: #fff;
        .sdField_left {
            width: 1.8rem;
            margin-right: 0.24rem;
        }
        .sdField_value {
            flex: 1;
            .sdField_input {
                display: block;
                box-sizing: border-box;
                width: 100%;
                min-width: 0;
                margin: 0;
                padding: 0;
                color: #323233;
                line-height: inherit;
                text-align: left;
                outline: none;
                background-color: transparent;
                border: 0;
                resize: none;

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
    }
</style>