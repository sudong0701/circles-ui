<template>
    <div class="swipeCell-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csSwipeCell>
                    <template #left>
                        <div class="left">查看详情</div>
                    </template>
                    <div style="padding: 10px 16px;background-color: #fff;line-height: 0.48rem;font-size: 14px">测试滑动单元格组件</div>
                    <template #right>
                        <div class="right">删除</div>
                    </template>
                </csSwipeCell>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义内容</div>
            <div class="button-demo-content">
                <csSwipeCell>
                    <template #left>
                        <div class="left" style="line-height: 2.24rem">查看详情</div>
                    </template>
                    <div style="padding: 10px 16px;background-color: #fff;line-height: 0.48rem">
                        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt="" style="height: 1.76rem;width: 1.76rem">
                    </div>
                    <template #right>
                        <div class="right" style="line-height: 2.24rem">删除</div>
                    </template>
                </csSwipeCell>
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
    .swipeCell-demo {
        .cs-doc-demo-block {
            padding: 0;
        }
        .left {
            width: 80px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #67c23a;
            color: #fff;
        }
        .right {
            width: 80px;
            height: 100%;
            font-size: 0.28rem;
            text-align: center;
            line-height: 44px;
            background-color: #ee0a24;
            color: #fff;
        }
    }
</style>