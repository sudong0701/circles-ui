<template>
    <div class="numberKeyboard">
        <!--<button @click="showNumberKeyboard">点击显示</button>-->
        <input type="text" readonly @click.stop @touchstart.stop="isShow = true">
        <sdPasswordInput :gutter="'0.12rem'" :length="6" bgColor="#fff" style="margin-top: 0.5rem" :isMask="true" v-model="numberKeyboardValue" :isFocus="isFocus" @focus="focus"></sdPasswordInput>
        <sd-numberKeyboard v-model="numberKeyboardValue" title="支付密码" :show="isShow" @change="change" @blur="isShow = false; isFocus = false" maxlength="6" :isShuffle="true" :extraKey="''"></sd-numberKeyboard>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                numberKeyboardValue: '',
                extraKey: ['$', '￥'],
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
                console.log(index)
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