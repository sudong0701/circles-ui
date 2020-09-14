<template>
    <div class="button-demo">
        <cs-header title="Button" :isBack="false"></cs-header>
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">按钮类型</div>
            <div class="button-demo-content">
                <cs-button text="默认按钮"></cs-button>
                <cs-button type="primary" text="主要按钮"></cs-button>
                <cs-button type="success" text="成功按钮"></cs-button>
                <cs-button type="warning" text="警告按钮"></cs-button>
                <cs-button type="danger" text="危险按钮"></cs-button>
                <cs-button type="info" text="信息按钮"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">朴素按钮</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="朴素按钮" plain></cs-button>
                <cs-button type="success" text="朴素按钮" plain></cs-button>
                <cs-button type="warning" text="朴素按钮" plain></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用状态</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="禁用状态" disabled></cs-button>
                <cs-button type="success" text="禁用状态" disabled></cs-button>
                <cs-button type="warning" text="禁用状态" disabled></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">圆形按钮</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="圆形按钮" round></cs-button>
                <cs-button type="success" text="圆形按钮" round></cs-button>
                <cs-button type="warning" text="圆形按钮" round></cs-button>
            </div>
        </div>


        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">图标按钮</div>
            <div class="button-demo-content">
                <cs-button type="primary" icon="redpacket"></cs-button>
                <cs-button type="success" text="按钮" icon="redpacket"></cs-button>
                <cs-button type="warning" text="按钮" icon="https://img.yzcdn.cn/vant/user-active.png"></cs-button>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">按钮尺寸</div>
            <div class="button-demo-content">
                <cs-button type="primary" text="大号按钮" size="large"></cs-button>
                <cs-button type="primary" text="普通按钮"></cs-button>
                <cs-button type="primary" text="小型按钮" size="small"></cs-button>
                <cs-button type="primary" text="迷你按钮" size="mini"></cs-button>
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
    .button-demo {
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