<template>
    <div class="stepper-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csStepper v-model="value" @change="change"></csStepper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">步长设置</div>
            <div class="button-demo-content">
                <csStepper v-model="valueStep" step="2"></csStepper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">限制输入范围</div>
            <div class="button-demo-content">
                <csStepper v-model="valueRange" min="-3" max="6"></csStepper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">可以输入小数</div>
            <div class="button-demo-content">
                <csStepper v-model="valueInteger" :integer="false" :decimalLength="1"></csStepper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用步进器</div>
            <div class="button-demo-content">
                <csStepper v-model="valueDisabled" disabled></csStepper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用输入框</div>
            <div class="button-demo-content">
                <csStepper v-model="valueDisabledEnter" disabledEnter></csStepper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">异步变更</div>
            <div class="button-demo-content">
                <csStepper v-model="valueAsync" disabledEnter asyncChange @add="add" @lower="lower"></csStepper>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                value: 1,
                valueStep: 0,
                valueRange: 0,
                valueInteger: 3,
                valueDisabled: 2,
                valueDisabledEnter: 5,
                valueAsync: 2
            }
        },
        methods: {
            change(e) {
                this.Toast({
                    content: `当前值为${e}`
                })
            },
            add() {
               setTimeout(()=> {
                   this.valueAsync++
               }, 1000)
            },
            lower() {
                setTimeout(()=> {
                    this.valueAsync--
                }, 1000)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .stepper-demo {
        padding-bottom: 0.4rem;
        background-color: #fff;
    }
</style>