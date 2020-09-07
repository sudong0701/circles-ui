<template>
    <div class="numberKeyboard">
        <csPasswordInput :gutter="'0.12rem'" :length="6" bgColor="#fff" style="padding-top: 0.5rem" :isMask="true" v-model="numberKeyboardValue" :isFocus="isFocus" @focus="focus"></csPasswordInput>
        <cs-numberKeyboard v-model="numberKeyboardValue" title="支付密码" :show="isShow" @change="change" @blur="isShow = false; isFocus = false" maxlength="6" :isShuffle="true" :extraKey="'.'"></cs-numberKeyboard>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                numberKeyboardValue: '77',
                extraKey: '.',   //'' '.' 'X' ['$', '￥'],
                isFocus: false
            }
        },
        methods: {
            showNumberKeyboard() {
              this.isShow = !this.isShow
            },
            focus() {
                this.isShow = true
                this.isFocus = true
            },
            change(index) {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .numberKeyboard {
        background-color: #f6f6f6;
        padding-bottom: 2rem;
    }
</style>