<template>
    <div class="actionSheet-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="基础用法" @click="showSheet"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">展示取消按钮</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="取消按钮" @click="showSheetCancel"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">展示描述信息</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="描述信息" @click="showSheetRemake"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用选项</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="禁用选项" @click="showSheetDisabled"></cs-button>
            </div>
        </div>

        <csActionSheet v-model="isShow" :actions="actions" @select="select"></csActionSheet>

        <csActionSheet v-model="isShowCancel" :actions="actions" cancelText="取消" @cancel="cancel"></csActionSheet>

        <csActionSheet v-model="isShowRemake" :actions="actionsRemake" @select="selectRemake"></csActionSheet>

        <csActionSheet v-model="isShowDisabled" :actions="actionsDisabled" @select="selectDisabled"></csActionSheet>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                isShowCancel: false,
                isShowRemake: false,
                isShowDisabled: false,
                actions: [{ name: '选项一'}, { name: '选项二'}, { name: '选项三'}],
                actionsRemake: [{ name: '选项一'}, { name: '选项二', remake: '描述信息' }, { name: '选项三'}],
                actionsDisabled: [{ name: '选项一'}, { name: '选项二', disabled: true }, { name: '选项三'}]
            }
        },
        methods: {
            showSheet() {
                this.isShow = true
            },
            select(e) {
                this.Toast({
                    content: `选择了${e.action.name}`
                })
                this.isShow = false
            },
            showSheetCancel() {
                this.isShowCancel = true
            },
            cancel() {
                this.isShowCancel = false
            },
            showSheetRemake() {
                this.isShowRemake = true
            },
            selectRemake() {
                this.isShowRemake = false
            },
            showSheetDisabled() {
                this.isShowDisabled = true
            },
            selectDisabled() {
                this.isShowDisabled = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .actionSheet-demo {

    }
</style>