<template>
    <div class="hello">
        <div style="height: 50px">

        </div>
        <sdIndexBar height="617px" v-model="active" @change="change">
            <sdIndexBarItem index="A">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="B">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="C">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="D">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="E">
                <div v-for="(item, key) in 8" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="F">
                <div v-for="(item, key) in 7" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="G">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="H">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="I">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="J">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="K">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="L">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="M">
                <div v-for="(item, key) in 1" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="N">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="O">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="P">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="Q">
                <div v-for="(item, key) in 3" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="R">
                <div v-for="(item, key) in 7" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="S">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="T">
                <div v-for="(item, key) in 9" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="U">
                <div v-for="(item, key) in 2" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="V">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="W">
                <div v-for="(item, key) in 8" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="X">
                <div v-for="(item, key) in 4" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="Y">
                <div v-for="(item, key) in 6" class="indexBarItem">文本</div>
            </sdIndexBarItem>
            <sdIndexBarItem index="Z">
                <div v-for="(item, key) in 5" class="indexBarItem">文本</div>
            </sdIndexBarItem>
        </sdIndexBar>
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
            change(index) {
                console.log(index)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .indexBarItem {
        padding: 0.2rem 0.32rem;
        font-size: 0.28rem;
        line-height: 0.48rem;
        border-bottom: 0.02rem solid #ebedf0;
    }
</style>