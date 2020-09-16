<template>
    <div class="numberKeyboard-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">默认样式</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="默认键盘" @click="showKeyboard"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">右侧栏的键盘</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="右侧栏的键盘" @click="showKeyboardRight"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">身份证号的键盘</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="身份证号的键盘" @click="showKeyboardCardNo"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">配置多个按键</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="配置多个按键" @click="showKeyboardCustom"></cs-button>
            </div>
        </div>

        <csNumberKeyboard :show="isShowKeyboard" v-model="keyboardValue" @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>

        <csNumberKeyboard :show="isShowKeyboardRight" extraKey="." v-model="keyboardValue" @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>

        <csNumberKeyboard title="标题" :show="isShowKeyboardCardNo" extraKey="X" v-model="keyboardValue" @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>

        <csNumberKeyboard title="标题" :show="isShowKeyboardCustom" :extraKey="['$', '￥']" v-model="keyboardValue" @blur="keyboardBlur" @input="keyboardInput"></csNumberKeyboard>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShowKeyboard: false,
                isShowKeyboardRight: false,
                isShowKeyboardCardNo: false,
                isShowKeyboardCustom: false,
                keyboardValue: ''
            }
        },
        methods: {
            showKeyboard() {
                this.isShowKeyboard = true
            },
            showKeyboardRight() {
                this.isShowKeyboardRight = true
            },
            showKeyboardCardNo() {
                this.isShowKeyboardCardNo = true
            },
            showKeyboardCustom() {
                this.isShowKeyboardCustom = true
            },
            keyboardBlur() {
                this.isShowKeyboard = false
                this.isShowKeyboardRight = false
                this.isShowKeyboardCardNo = false
                this.isShowKeyboardCustom = false
            },
            keyboardInput(e) {
                this.Toast({
                    content: `当前输入值${e}`
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .numberKeyboard-demo {

    }
</style>