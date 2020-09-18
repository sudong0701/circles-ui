<template>
    <div class="noticeBar-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-noticeBar :text="text">
                    <template #leftIcon>
                        <cs-icon style="padding-right: 0.2rem" name="notification" color="#ed6a0c"></cs-icon>
                    </template>
                </cs-noticeBar>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">滚动播放</div>
            <div class="button-demo-content">
                <cs-noticeBar :text="text"></cs-noticeBar>
                <cs-noticeBar :text="text" :scrollable="false"></cs-noticeBar>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">多行显示</div>
            <div class="button-demo-content">
                <cs-noticeBar :text="text" :wrapable="true" :scrollable="false"></cs-noticeBar>
            </div>
        </div>
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">通知栏模式</div>
            <div class="button-demo-content">
                <cs-noticeBar :text="text" mode="close"></cs-noticeBar>
                <cs-noticeBar :text="text" mode="link"></cs-noticeBar>
            </div>
        </div>


        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义样式</div>
            <div class="button-demo-content">
                <cs-noticeBar  :text="text" color="rgb(25, 137, 250)" background="rgb(236, 249, 255)"></cs-noticeBar>
                <cs-noticeBar  :text="text" speed="100"></cs-noticeBar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                text: '春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明。'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .noticeBar-demo {
        padding-bottom: 0.3rem;
        .cs-doc-demo-block {
            padding: 0;
            .button-demo-content {
                >div {
                    margin-bottom: 0.12rem;
                }
            }
        }
    }
</style>