<template>
    <div class="tab-demo">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-tabs titleActiveColor="" @change="tabChange" v-model="active">
                    <cs-tab title="标签1"></cs-tab>
                    <cs-tab title="标签2"></cs-tab>
                    <cs-tab title="标签3"></cs-tab>
                </cs-tabs>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">标签栏滚动</div>
            <div class="button-demo-content">
                <cs-tabs v-model="activeScroll">
                    <cs-tab title="标签1"></cs-tab>
                    <cs-tab title="标签2"></cs-tab>
                    <cs-tab title="标签3"></cs-tab>
                    <cs-tab title="标签4"></cs-tab>
                    <cs-tab title="标签5"></cs-tab>
                    <cs-tab title="标签6"></cs-tab>
                    <cs-tab title="标签7"></cs-tab>
                    <cs-tab title="标签8"></cs-tab>
                    <cs-tab title="标签9"></cs-tab>
                </cs-tabs>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">禁用标签</div>
            <div class="button-demo-content">
                <cs-tabs v-model="activeDisabled">
                    <cs-tab title="标签1"></cs-tab>
                    <cs-tab title="标签2" disabled></cs-tab>
                    <cs-tab title="标签3"></cs-tab>
                    <cs-tab title="标签4"></cs-tab>
                    <cs-tab title="标签5"></cs-tab>
                    <cs-tab title="标签6"></cs-tab>
                </cs-tabs>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自定义样式</div>
            <div class="button-demo-content">
                <cs-tabs v-model="activeCustom" titleActiveColor="red" >
                    <cs-tab title="标签1"></cs-tab>
                    <cs-tab title="标签2"></cs-tab>
                    <cs-tab title="标签3"></cs-tab>
                    <cs-tab title="标签4"></cs-tab>
                    <cs-tab title="标签5"></cs-tab>
                    <cs-tab title="标签6"></cs-tab>
                </cs-tabs>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">自动吸顶</div>
            <div class="button-demo-content">
                <div class="sticky">
                    <cs-tabs v-model="activeSticky" isSticky >
                        <cs-tab title="标签1"></cs-tab>
                        <cs-tab title="标签2"></cs-tab>
                        <cs-tab title="标签3"></cs-tab>
                        <cs-tab title="标签4"></cs-tab>
                        <cs-tab title="标签5"></cs-tab>
                        <cs-tab title="标签6"></cs-tab>
                    </cs-tabs>
                    <div style="height: 2rem; background-color: #fafafa; text-align: center; line-height: 2rem" v-for="(item, key) in 15">
                        {{key + 1}}
                    </div>
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
                active: 0,
                activeScroll: 2,
                activeDisabled: 0,
                activeCustom: 0,
                activeSticky: 0
            }
        },
        methods: {
            tabChange(e) {
                this.Toast({
                    content: `当前索引${e}`
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .tab-demo {
        height: calc(100% - 0.92rem);
        overflow-y: auto;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        .cs-doc-demo-block {
            padding: 0;
            .button-demo-content {
                /deep/ .csTabs-box-fixed {
                    top: 0.92rem;
                }
            }
        }
    }
    .tab-demo::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
</style>