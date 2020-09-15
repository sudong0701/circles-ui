<template>
    <div class="toast-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="文字提示" @click="showToast"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">提示类型</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="加载提示" @click="showToastLoading
                "></cs-button>
                <cs-button type="success" text="成功提示" @click="showToastSuccess
                "></cs-button>
                <cs-button type="danger" text="错误提示" @click="showToastError
                "></cs-button>
                <cs-button type="warning" text="警告提示" @click="showToastWarning
                "></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义图标</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="自定义图标" @click="showToastIcon"></cs-button>
                <cs-button type="primary" text="自定义图片" @click="showToastImg"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自主关闭</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="显示Toast" @click="showToastOpen"></cs-button>
                <cs-button type="primary" text="自主关闭" @click="showToastClose"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">关闭后的回调</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="显示Toast" @click="showToastCallback"></cs-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

            }
        },
        methods: {
            showToast() {
                this.Toast({
                    content: '账号或密码错误'
                })
            },
            showToastLoading() {
                this.Toast.loading({
                    content: '加载中...'
                })
            },
            showToastSuccess() {
                this.Toast.success({
                    content: '恭喜您,操作成功'
                })
            },
            showToastError() {
                this.Toast.error({
                    content: '密码错误，请稍后再试'
                })
            },
            showToastWarning() {
                this.Toast.warning({
                    content: '警告，操作违规'
                })
            },
            showToastIcon() {
                this.Toast({
                    content: '自定义图标',
                    icon: 'emojifill'
                })
            },
            showToastImg() {
                this.Toast({
                    content: '自定义图片',
                    image: 'https://rightinhome.oss-cn-hangzhou.aliyuncs.com/jlbk_xcx/2020/03/24/1585033151526.gif'
                })
            },
            showToastOpen() {
                this.Toast({
                    content: '自主关闭Toast',
                    duration: 0
                })
            },
            showToastClose() {
                this.Toast.close()
            },
            showToastCallback() {
                this.Toast({
                    content: '稍等显示Toast回调',
                    duration: 2000
                }).then(()=> {
                    this.Toast({
                    content: 'Toast已关闭'
                })
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .toast-demo {
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