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
                <csCircle :progress="progress" barColor="#67c23a" text="颜色定制"></csCircle>

                <csCircle :progress="progress" barColor="#e99d3a" radius="6" text="宽度定制"></csCircle>

                <csCircle :progress="progress" barColor="#5A5AD1" :clockwise="false" text="逆时针"></csCircle>

                <csCircle :progress="progress" :isRound="false" text="方形画笔"></csCircle>

                <csCircle :progress="progress" barColor="#FF2C7D" width="110" text="大小定制"></csCircle>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">使用渐变色</div>
            <div class="button-demo-content">
                <csCircle :progress="progress" :barColor="barColor" text="渐变色"></csCircle>
                <csCircle :progress="progress" :barColor="barColor" gradDire="bottom" text="设置渐变方向"></csCircle>
            </div>
        </div>

        <div class="operating">
            <cs-button type="success" text="增加" size="mini" @click="add"></cs-button>
            <cs-button type="danger" text="减少" size="mini" @click="lower"></cs-button>
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
        },
        methods: {
            add() {
                this.progress = Number(this.progress) + 10
            },
            lower() {
                this.progress = Number(this.progress) - 10
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
                margin-bottom: 0.2rem;
                margin-right: 0.12rem;
            }
        }
        .operating {
            position: fixed;
            right: 0.3rem;
            top: 1.3rem;
        }
    }
</style>