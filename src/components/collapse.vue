<template>
    <div class="collapse">
        <cs-collapse  @change="changeCollapse" v-model="collapseActive">
            <cs-collapse-item title="标题" icon="close" value="右侧" name="1" @change="changeCollapseItem">
                春江潮水连海平，海上明月共潮生。<br/>
                艳艳水波千万里，何处春江无月明。<br/>
                江流宛转绕芳甸，月照花林皆似霰。<br/>
                空中流霜不觉飞，汀上白沙看不见。<br/>
                江天一色无纤尘，皎皎空中孤月轮。<br/>
                江畔何人初见月，江月何年初照人。<br/>
                人生代代无穷已，江月年年只相似。<br/>
                不知江月待何人，但见长江送流水。
            </cs-collapse-item>
            <cs-collapse-item title="标题" icon="close" value="右侧" name="2">
                春江潮水连海平，海上明月共潮生。<br/>
                艳艳水波千万里，何处春江无月明。<br/>
                江流宛转绕芳甸，月照花林皆似霰。<br/>
                空中流霜不觉飞，汀上白沙看不见。<br/>
                江天一色无纤尘，皎皎空中孤月轮。<br/>
                江畔何人初见月，江月何年初照人。<br/>
                人生代代无穷已，江月年年只相似。<br/>
                不知江月待何人，但见长江送流水。
            </cs-collapse-item>
            <cs-collapse-item title="标题" icon="close" value="右侧" name="3">
                春江潮水连海平，海上明月共潮生。<br/>
                艳艳水波千万里，何处春江无月明。<br/>
                江流宛转绕芳甸，月照花林皆似霰。<br/>
                空中流霜不觉飞，汀上白沙看不见。<br/>
                江天一色无纤尘，皎皎空中孤月轮。<br/>
                江畔何人初见月，江月何年初照人。<br/>
                人生代代无穷已，江月年年只相似。<br/>
                不知江月待何人，但见长江送流水。
            </cs-collapse-item>
        </cs-collapse>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                collapseActive: ['1']
            }
        },
        methods: {
            changeCollapse(e) {
                console.log(e)
            },
            changeCollapseItem(e) {
                console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .collapse {
        padding-top: 1rem;
        height: 100%;
        background-color: #f8f8f8;
    }
</style>