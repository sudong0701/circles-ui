<template>
    <div class="dialog-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">消息提示</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="函数调用" @click="showDialogFnc"></cs-button>
                <cs-button type="success" text="组件调用" @click="showDialog"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">确认消息</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="函数调用" @click="showConfirmFnc"></cs-button>
                <cs-button type="success" text="组件调用" @click="showConfirm"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">点击遮罩层不关闭弹出层</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="函数调用" @click="showOverlayFnc"></cs-button>
                <cs-button type="success" text="组件调用" @click="showOverlay"></cs-button>
            </div>
        </div>

        <csDialog v-model="isShow" content="幸得识卿桃花面，从此阡陌多暖春。" @confirm="closeDialog"></csDialog>

        <csDialog v-model="isShowConfirm" type="confirm" content="幸得识卿桃花面，从此阡陌多暖春。" @confirm="confirm" @cancel="cancel"></csDialog>

        <csDialog v-model="isShowOverlay" :closeOnClickOverlay="false" content="幸得识卿桃花面，从此阡陌多暖春。" @confirm="closeOverlay"></csDialog>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                isShowConfirm: false,
                isShowOverlay: false
            }
        },
        methods: {
            showDialogFnc() {
                this.Dialog.alert({
                    content: '幸得识卿桃花面，从此阡陌多暖春。'
                }).then(()=> {
                    //点击确定按钮的回调
                    this.Dialog.close()
                })
            },
            showDialog() {
                this.isShow = true
            },
            closeDialog() {
                this.isShow = false
            },
            //函数式调用
            showConfirmFnc() {
                this.Dialog.confirm({
                    content: '幸得识卿桃花面，从此阡陌多暖春。'
                }).then(()=> {
                    //点击确定按钮的回调
                    this.Toast({
                        content: '点击了确认按钮'
                    })
                    this.Dialog.close()
                }).catch(()=> {
                    this.Toast({
                        content: '点击了取消按钮'
                    })
                    this.Dialog.close()
                })
            },
            showConfirm() {
                this.isShowConfirm = true
            },
            confirm() {
                this.Toast({
                    content: '点击了确认按钮'
                })
                this.isShowConfirm = false
            },
            cancel() {
                this.Toast({
                    content: '点击了取消按钮'
                })
                this.isShowConfirm = false
            },
            showOverlayFnc() {
                this.Dialog.alert({
                    content: '幸得识卿桃花面，从此阡陌多暖春。',
                    closeOnClickOverlay: false
                }).then(()=> {
                    //点击确定按钮的回调
                    this.Dialog.close()
                })
            },
            showOverlay() {
                this.isShowOverlay = true
            },
            closeOverlay() {
                this.isShowOverlay = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .dialog-demo {
        .button-demo-content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            >div {
                margin-bottom: 0.3rem;
                margin-right: 0.2rem;
            }
        }
    }
</style>