<template>
    <div class="skeleton-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csSkeleton title row="3"></csSkeleton>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">配置各列宽度</div>
            <div class="button-demo-content">
                <csSkeleton title row="3" :rowWidth="rowWidth"></csSkeleton>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">显示头像</div>
            <div class="button-demo-content">
                <csSkeleton title row="3" avatar :rowWidth="rowWidth"></csSkeleton>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">展示子组件</div>
            <div class="button-demo-content">
                <cs-switch v-model="isShow" size="0.48rem" style="margin-bottom: 0.2rem"></cs-switch>
                <csSkeleton title row="3" avatar :rowWidth="rows" :isLoad="!isShow">
                    <div class="content">
                        <div class="left">
                            <img src="https://avatars1.githubusercontent.com/u/46431309?s=460&u=097881d30353d77d9c135db0cd5a7f07c90589a4&v=4" alt="">
                        </div>
                        <div class="right">
                            <div class="title">春江花月夜</div>
                            <div class="list">
                                <div class="item">春江潮水连海平，海上明月共潮生。</div>
                                <div class="item">滟滟随波千万里，何处春江无月明。</div>
                                <div class="item">江流宛转绕芳甸</div>
                            </div>
                        </div>
                    </div>
                </csSkeleton>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isShow: false,
                rowWidth: [100, 80 , 60],
                rows: [100, 100, 50]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .skeleton-demo {
        padding-bottom: 0.3rem;
        background-color: #fff;
        .button-demo-content {
            /deep/ .content {
                display: flex;
                flex-direction: row;
                .left {
                    margin-right: 0.32rem;
                    img {
                        height: 0.64rem;
                        width: 0.64rem;
                        border-radius: 50%;
                    }
                }
                .right {
                    flex: 1;
                    padding-top: 0.16rem;
                    .title {
                        font-size: 0.36rem;
                        margin-bottom: 0.2rem;
                    }
                    .list {
                        .item {
                            font-size: 0.3rem;
                            margin-bottom: 0.2rem;
                        }
                        .item:nth-last-child(1) {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>