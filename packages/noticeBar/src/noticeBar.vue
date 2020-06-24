<template>
    <div :class="`sdNoticeBar ${scrollable ? 'sdNoticeBar-flex' : ''}`">
        <div :class="`sdNoticeBar-content ${scrollable ? 'sdNoticeBar-content-noWarp' : ''}`">{{text}}</div>
    </div>
</template>

<script>
    export default {
        name: 'sdNoticeBar',
        data() {
            return {}
        },
        props: {
            text: {
                type: String,
                default: ''
            },
            scrollable: {   //是否在长度溢出时滚动
                type: Boolean,
                default: true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sdNoticeBar {
        position: relative;
        padding: 0.16rem 0.32rem;
        background-color: #fffbe8;
        overflow: hidden;
        .sdNoticeBar-content {
            position: absolute;

            color: #ed6a0c;
            font-size: 0.28rem;
            line-height: 0.48rem;
        }
        .sdNoticeBar-content-noWarp {
            white-space: nowrap;
        }
    }
    .sdNoticeBar-flex {
        display: flex;
        height: 0.8rem;
    }
</style>