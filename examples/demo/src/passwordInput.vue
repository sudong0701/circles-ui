<template>
    <div class="passwordInput-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">默认样式</div>
            <div class="button-demo-content">
                <cs-PasswordInput @focus="passwordInputFocus" :isFocus="isFocus" v-model="keyboardValue"></cs-PasswordInput >
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义长度</div>
            <div class="button-demo-content">
                <cs-PasswordInput :length="4" :gutter="20" @focus="passwordInputCustomFocus" :isFocus="isFocusCustom" v-model="keyboardCustomValue"></cs-PasswordInput >
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">明文展示</div>
            <div class="button-demo-content">
                <cs-PasswordInput :length="6" :isMask="false" @focus="inputFocus" :isFocus="isFocusInput" v-model="keyboardInputValue"></cs-PasswordInput >
            </div>
        </div>

        <csNumberKeyboard :show="isShowKeyboard" v-model="keyboardValue" @blur="keyboardBlur" @show="isFocus = true" @hide="isFocus = false" :maxlength="6"></csNumberKeyboard>

        <csNumberKeyboard :show="isShowKeyboardCustom" v-model="keyboardCustomValue" @blur="keyboardCustomBlur" @show="isFocusCustom = true" @hide="isFocusCustom = false" :maxlength="4"></csNumberKeyboard>

        <csNumberKeyboard :show="isShowKeyboardInput" v-model="keyboardInputValue" @blur="keyboardInputBlur" @show="isFocusInput = true" @hide="isFocusInput = false" :maxlength="6" :isShuffle="true"></csNumberKeyboard>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShowKeyboard: false,
                isShowKeyboardCustom: false,
                isShowKeyboardInput: false,
                keyboardValue: '123',
                keyboardCustomValue: '1',
                keyboardInputValue: '',
                isFocus: false,
                isFocusCustom: false,
                isFocusInput: false
            }
        },
        methods: {
            passwordInputFocus() {
                this.isShowKeyboard = true
            },
            keyboardBlur() {
                this.isShowKeyboard = false
            },
            passwordInputCustomFocus() {
                this.isShowKeyboardCustom = true
            },
            keyboardCustomBlur() {
                this.isShowKeyboardCustom = false
            },
            inputFocus() {
                this.isShowKeyboardInput = true
            },
            keyboardInputBlur() {
                this.isShowKeyboardInput = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>