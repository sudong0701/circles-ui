<template>
    <div class="lazy-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <div class="lazy-item">
                    <img v-lazy="item" alt="" v-for="(item, key) in imageArr" :key="key">
                </div>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">背景图片懒加载</div>
            <div class="button-demo-content">
                <div class="lazy-item">
                    <div v-for="(item, key) in imageArr" :key="key" v-lazyBGImg="item"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                imageArr: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg',
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .lazy-demo {
        height: 667px;
        .cs-doc-demo-block {
            padding: 0;
            .button-demo-content {
                .lazy-item {
                    img {
                        width: 100%;
                        height: 300px;
                    }
                    >div {
                        width: 100%;
                        height: 300px;
                        background-size: 100% 100%;
                    }
                }
            }
        }
    }
</style>