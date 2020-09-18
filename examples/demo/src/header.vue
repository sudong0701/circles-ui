<template>
    <div class="header-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <div class="basis">
                    <csHeader title="标题" @left="left"></csHeader>
                </div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">指定类型</div>
            <div class="button-demo-content">
                <div class="share">
                    <csHeader title="分享" type="share" @left="left" @right="right"></csHeader>
                </div>
                <div class="point">
                    <csHeader title="提示" type="point" @left="left" @right="right"></csHeader>
                </div>
                <div class="custom">
                    <csHeader title="自定义" leftIcon="home" rightIcon="notice1" @left="left" @right="right"></csHeader>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            left() {
                this.Toast({
                    content: '触发left事件'
                })
            },
            right() {
                this.Toast({
                    content: '触发right事件'
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header-demo {
        padding-bottom: 0.3rem;
        .cs-doc-demo-block {
            padding: 0;
            .button-demo-content {
                .basis {
                    /deep/ .cs-header {
                        top: 2.3rem;
                    }
                }
                .share {
                    /deep/ .cs-header {
                        top: 4.5rem;
                    }
                }
                .point {
                    /deep/ .cs-header {
                        top: 5.7rem;
                    }
                }
                .custom {
                    /deep/ .cs-header {
                        top: 6.9rem;
                    }
                }
            }
        }
    }
</style>