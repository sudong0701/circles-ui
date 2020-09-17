<template>
    <div class="circle-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <csCircle :progress="progress"></csCircle>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">样式定制</div>
            <div class="button-demo-content">
                <csCircle :progress="progress" barColor="#67c23a"></csCircle>

                <csCircle :progress="progress" barColor="#e99d3a"></csCircle>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">使用渐变色</div>
            <div class="button-demo-content">
                <csCircle :progress="progress" :barColor="barColor"></csCircle>
            </div>
        </div>
    </div>
</template>s

<script>
    export default {
        name: '',
        data() {
            return {
                progress: '70',
                barColor: [
                    {offset: '0', color: '#5a96ec'},
                    {offset: '0.5', color: '#67c23a'},
                    {offset: '1', color: '#eff23a'}
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .circle-demo {
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