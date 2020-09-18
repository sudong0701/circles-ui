<template>
    <div class="swiper-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csSwiper :interval="3000">
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
                    </csSwiperItem>
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
                    </csSwiperItem>
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="">
                    </csSwiperItem>
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-4.jpg" alt="">
                    </csSwiperItem>
                </csSwiper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义指示器</div>
            <div class="button-demo-content">
                <csSwiper :interval="3000" indicatorClass="indicatorClass" indicatorSelectedClass="indicatorSelectedClass">
                    <csSwiperItem v-for="(item, key) in 4" :key="key">
                        <div class="default">{{key}}</div>
                    </csSwiperItem>
                </csSwiper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">纵向滚动</div>
            <div class="button-demo-content" style="height: 6rem">
                <csSwiper :interval="3000" :vertical="true">
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
                    </csSwiperItem>
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
                    </csSwiperItem>
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="">
                    </csSwiperItem>
                    <csSwiperItem>
                        <img src="https://img.yzcdn.cn/vant/apple-4.jpg" alt="">
                    </csSwiperItem>
                </csSwiper>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">取消自动切换</div>
            <div class="button-demo-content">
                <csSwiper :interval="3000" :isAuto="false">
                    <csSwiperItem v-for="(item, key) in 4" :key="key">
                        <div class="default">{{key}}</div>
                    </csSwiperItem>
                </csSwiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .swiper-demo {
        padding-bottom: 0.3rem;
        .cs-doc-demo-block {
            padding: 0;
            .button-demo-content {
                img {
                    width: 100%;
                    height: 6rem;
                }
                .default {
                    width: 100%;
                    height: 3rem;
                    background-color: #1989fa;
                    color: #fff;
                    text-align: center;
                    line-height: 3rem;
                    font-size: 0.32rem;
                }
                /deep/ .indicatorClass {
                    width: 0.3rem;
                    height: 0.3rem;
                    background-color: #fff;
                }

                /deep/ .indicatorSelectedClass {
                    background-color: #FF2C7D;
                }
            }
        }
    }
</style>