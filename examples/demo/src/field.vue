<template>
    <div class="field-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-field label="用户名：" placeholder="请输入用户名" v-model="fieldBasis" @input="onInput"></cs-field>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义类型</div>
            <div class="button-demo-content">
                <cs-field label="整数：" placeholder="请输入整数(支持负数)" type="number" v-model="fieldInteger" toFixed="0"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="自然数：" placeholder="请输入自然数(最多四位小数)" type="number" v-model="fieldNatural4" toFixed="4"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="自然数：" placeholder="请输入自然数(不限制小数位)" type="number" v-model="fieldNatural"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="正整数：" placeholder="请输入正整数(不支持负数)" type="positive" toFixed="0" v-model="fieldPositiveInteger"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="正数：" placeholder="请输入正数(最多4位小数)" type="positive" toFixed="4" v-model="fieldPositive4"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="正数：" placeholder="请输入正数(不限制小数位)" type="positive" v-model="fieldPositive"></cs-field>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用输入框</div>
            <div class="button-demo-content">
                <cs-field label="用户名：" placeholder="禁用输入框" disabled v-model="fieldDisabled"></cs-field>
            </div>

            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="用户名：" placeholder="只读输入框" readonly v-model="fieldReadonly"></cs-field>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">显示清除按钮</div>
            <div class="button-demo-content">
                <cs-field label="用户名：" placeholder="请输入用户名" clear v-model="fieldClear"></cs-field>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">显示图标</div>
            <div class="button-demo-content">
                <cs-field label="用户名：" placeholder="请输入用户名" leftIcon="people" v-model="fieldLeftIcon"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="密码：" placeholder="请输入密码" v-model="fieldLeftIconSlot">
                    <template #left>
                        <img class="leftIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAllBMVEUAAAAyMjIyMjIiIiIkJCQyMjIzMzMuLi4zMzMyMjIuLi4yMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIxMTExMTExMTEwMDAvLy8yMjIyMjIxMTEvLy8vLy8rKysyMjIyMjIyMjIyMjInJycyMjIxMTExMTExMTEuLi4yMjIyMjIyMjIxMTExMTEuLi4yMjIyMjIzMzMSfeZDAAAAMXRSTlMAf/kECPb8Fu2EHp165t/SqIrxuHJXUTMZs5dfLSMTo5KPaw3pW0xGG8vDr2Q8J9m+ayTd6QAAAuFJREFUWMPtmNm2ojAQRSVhRgQVGQXB6Tpr/v/nelGLZbcSSBH68Z7HpNhAqpKcZCIUvStXzyXE9a7KnU7GypjO2D+aTY1xOIewL2lpIc87LBhHZiiJoxXrkCXFU6/N44tNFtmqakeZrzVNG4nk0GUzZsrub+POapD+cKLDQIn92Zw375kP5a3gMXJo92x16PoZxiv29UP6sftdM3UQMIWHtvzO6fBU2zrksqt7CcnfDQDOoYCLzvdBrgM8j7rwgOCFHh54h1/qGfWY1crRQKtvBEEvfs56Bz3ri4BEO2ggLIHrvoifOuKCBkISews3h9pGA1mt3ogdrBvDgIiQX+Av8Bf4js6zKvH2hOy9pMoeY4FF4LEPudVjBNBONdZWEkkC45QwvhxDBrhasE6Zq+HAt/SLEq4Nqsbr0Dq/W6WBrvXhlh6VNgro3mjLJZe6PHDDdRvRWRYYdHnbtAXEeEMt7HMCoBWOd4J6IeAo+4mLGAX0ITjDOOYNhhdBqC86IzwhLEIAk8YbYhwau4p5Dwi8YV1zjjOvM4rIHcE57Rna7TooG7uG9cDAZ+8kiNrWQa8BNvKA+Y9pe2QJsfhpqQTAC/fYFXJbb3XrUgCEA4X93apwv/sOWZFywwBUWuefunUvAOqwLOGAKiwiAiBUK/2PQLMOKnBAA2Y96oiCA8IkeGIOUSEOuMKUTQkXCjjgHFPYWR10xgHPmKl3YlDZGGAOocJ1xONNCoXf+P4Z4cHVpZy5fPyqwj1u5bR59yG0JNp3pgJYOWPkLmoKh+akYffRdbONYgpWz1F7BWbfCyCoxF1rIqxIqMPStRtklo7dEQfCWnkXzj+mb7v6laFXfjRp3D73l4ora/KGl3ppLHFGW11bk4ES6EITE9YglY/Szecmk7s0peX7WPGaHuFYEYXWZcxFce/B5ziRUOx38RzZy/bI19s04jwm8jpNn584LzAmI2Xf0tfMJMR8LsuDeLX6A+2c4Igkk+KHAAAAAElFTkSuQmCC" alt="">
                    </template>
                </cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.3rem">
                <cs-field label="用户名：" placeholder="请输入用户名" rightIcon="_next" v-model="fieldRightIcon"></cs-field>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">插入按钮</div>
            <div class="button-demo-content">
                <cs-field label="短信验证码：" placeholder="请输入短信验证码" v-model="fieldRight">
                    <template #right>
                        <cs-button type="success" text="发送验证码" size="small"></cs-button>
                    </template>
                </cs-field>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">格式检验</div>
            <div class="button-demo-content">
                <cs-field ref="cs-field-vaild" v-model="fieldVal" label="手机号：" placeholder="请输入手机号" :vaildFnc="vaildPhone" errMessage="请输入正确的手机号"></cs-field>
            </div>
            <div class="button-demo-content" style="margin-top: 0.4rem">
                <cs-button @click="submit" type="primary" size="small" style="position: relative; left: 50%; transform: translateX(-50%)" text="提交信息"></cs-button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            fieldBasis: '',
            fieldVal: '',
            fieldInteger: '',
            fieldNatural4: '',
            fieldNatural: '',
            fieldPositiveInteger: '', 
            fieldPositive4: '',
            fieldPositive: '',
            fieldNumber: '',
            fieldDecimal: '',
            fieldDisabled: '',
            fieldReadonly: '',
            fieldClear: '',
            fieldLeftIcon: '',
            fieldLeftIconSlot: '',
            fieldRightIcon: '',
            fieldRight: ''
        }
    },
    methods: {
        /**
         * 输入框输入时触发
         * @param {String} val 输入框输入的值
         * @return
         */
        onInput(val) {
            this.Toast({
                content: `当前输入值: ${val.target.value}`
            })
        },
        /**
         * 校验手机号格式
         * @param {Number} phone 待校验的手机号
         * @return
         */
        vaildPhone(phone) {
            return /^(1)[0-9]{10}$/.test(phone)
        },
        /**
         * 点击提交信息时触发
         * @param
         * @return
         */
        submit() {
            if (!this.$refs['cs-field-vaild'].vaild()) {
                return
            }
            this.Toast({
                content: '提交成功'
            })
        }
    }
}
</script>

<style scoped lang="scss">
.field-demo {
    .cs-doc-demo-block {
        padding: 0;
    }
    .leftIcon {
        width: 0.36rem;
        height: 0.36rem;
    }
}
</style>