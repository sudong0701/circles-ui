<template>
    <div class="indexBar-demo">
        <div class="cs-doc-demo-block">
            <div class="button-demo-content">
                <csIndexBar v-model="active">
                    <csIndexBarItem index="A">
                        <div v-for="(item, key) in 5" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="B">
                        <div v-for="(item, key) in 6" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="C">
                        <div v-for="(item, key) in 3" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="D">
                        <div v-for="(item, key) in 4" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="E">
                        <div v-for="(item, key) in 8" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="F">
                        <div v-for="(item, key) in 7" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="G">
                        <div v-for="(item, key) in 2" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="H">
                        <div v-for="(item, key) in 5" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="I">
                        <div v-for="(item, key) in 2" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="J">
                        <div v-for="(item, key) in 6" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="K">
                        <div v-for="(item, key) in 4" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="L">
                        <div v-for="(item, key) in 3" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="M">
                        <div v-for="(item, key) in 1" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="N">
                        <div v-for="(item, key) in 6" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="O">
                        <div v-for="(item, key) in 5" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="P">
                        <div v-for="(item, key) in 4" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="Q">
                        <div v-for="(item, key) in 3" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="R">
                        <div v-for="(item, key) in 7" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="S">
                        <div v-for="(item, key) in 5" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="T">
                        <div v-for="(item, key) in 9" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="U">
                        <div v-for="(item, key) in 2" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="V">
                        <div v-for="(item, key) in 4" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="W">
                        <div v-for="(item, key) in 8" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="X">
                        <div v-for="(item, key) in 4" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="Y">
                        <div v-for="(item, key) in 6" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                    <csIndexBarItem index="Z">
                        <div v-for="(item, key) in 5" class="indexBarItem" :key="key">文本</div>
                    </csIndexBarItem>
                </csIndexBar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                active: 6
            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .indexBar-demo {
        position: fixed;
        top: 1rem;
        left: 0;
        height: calc(100% - 1rem);
        width: 100%;
        background-color: #fff;
        .cs-doc-demo-block {
            padding: 0;
        }
        .indexBarItem {
            padding: 0.2rem 0.32rem;
            font-size: 0.28rem;
            line-height: 0.48rem;
            border-bottom: 0.02rem solid #ebedf0;
        }
    }
</style>