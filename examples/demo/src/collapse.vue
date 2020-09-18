<template>
    <div class="collapse-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-collapse  @change="changeCollapse" v-model="collapseActive">
                    <cs-collapse-item title="标题" name="1">
                        <p>幸得识卿桃花面，从此阡陌多暖春。</p>
                    </cs-collapse-item>
                    <cs-collapse-item title="标题" name="2">
                        <p>年年岁岁花相似，岁岁年年人不同。</p>
                    </cs-collapse-item>
                    <cs-collapse-item title="标题" name="3">
                        <p>时光如水，总是无言。你若安好，便是晴天。</p>
                    </cs-collapse-item>
                </cs-collapse>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">手风琴</div>
            <div class="button-demo-content">
                <cs-collapse  v-model="collapseActive" accordion>
                    <cs-collapse-item title="标题" name="1">
                        <p>幸得识卿桃花面，从此阡陌多暖春。</p>
                    </cs-collapse-item>
                    <cs-collapse-item title="标题" name="2">
                        <p>年年岁岁花相似，岁岁年年人不同。</p>
                    </cs-collapse-item>
                    <cs-collapse-item title="标题" name="3">
                        <p>时光如水，总是无言。你若安好，便是晴天。</p>
                    </cs-collapse-item>
                </cs-collapse>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义标题内容</div>
            <div class="button-demo-content">
                <cs-collapse  v-model="collapseActive" accordion>
                <cs-collapse-item title="标题" name="1" icon="present" iconColor="#FF2C7D">
                    <p>幸得识卿桃花面，从此阡陌多暖春。</p>
                </cs-collapse-item>
                <cs-collapse-item title="标题" name="2" value="内容">
                    <p>年年岁岁花相似，岁岁年年人不同。</p>
                </cs-collapse-item>
                <cs-collapse-item title="标题" name="3" icon="https://img.yzcdn.cn/vant/user-active.png">
                    <p>时光如水，总是无言。你若安好，便是晴天。</p>
                </cs-collapse-item>
            </cs-collapse>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                collapseActive: '1'
            }
        },
        methods: {
            changeCollapse(e) {
                if(Array.isArray(e)) {
                    this.Toast({
                        content: `当前打开${e.join('、')}`
                    })
                } else {
                    this.Toast({
                        content: `当前打开${e}`
                    })
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .collapse-demo {
        padding-bottom: 0.3rem;
        .cs-doc-demo-block {
            padding: 0;
        }
    }
</style>