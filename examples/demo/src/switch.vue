<template>
    <div class="switch-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csSwitch v-model="checked" @change="change"></csSwitch>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用状态</div>
            <div class="button-demo-content">
                <csSwitch v-model="checkedDisabled" disabled></csSwitch>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义大小</div>
            <div class="button-demo-content">
                <csSwitch v-model="checkedCustom" size="0.4rem"></csSwitch>
                <csSwitch style="margin-left: 0.3rem" v-model="checkedCustom" :size="40"></csSwitch>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义颜色</div>
            <div class="button-demo-content">
                <csSwitch v-model="checkedColor" activeParentsNodeColor="#67c23a" unActiveParentsNodeColor="#ee0a24"></csSwitch>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">异步控制</div>
            <div class="button-demo-content">
                <csSwitch v-model="checkedAsync" asyncChange @click="asyncChange"></csSwitch>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                checked: true,
                checkedDisabled: true,
                checkedCustom: true,
                checkedColor: true,
                checkedAsync: false
            }
        },
        methods: {
            change(e) {
                this.Toast({
                    content: `${e ? '开关打开了' : '开关关闭了'}`
                })
            },
            asyncChange() {
                setTimeout(()=> {
                    this.checkedAsync = !this.checkedAsync
                }, 800)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .switch-demo {

    }
</style>