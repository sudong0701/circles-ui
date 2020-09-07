<template>
    <div class="tabs">
        <cs-tabs titleActiveColor="" @change="tabChange">
            <cs-tab title="标签啥肯耐珂萨1"></cs-tab>
            <cs-tab title="标签2"></cs-tab>
            <cs-tab title="标签3" disabled></cs-tab>
            <cs-tab title="标签4"></cs-tab>
            <cs-tab title="标签5"></cs-tab>
            <cs-tab title="标签6">
            </cs-tab>
            <cs-tab title="标签7"></cs-tab>
            <cs-tab title="标签8"></cs-tab>
            <cs-tab title="标签9"></cs-tab>
        </cs-tabs>

        <p style="text-align: center">春江潮水连海平，海上明月共潮生。<br/>
            艳艳水波千万里，何处春江无月明。<br/>
            江流宛转绕芳甸，月照花林皆似霰。<br/>
            空中流霜不觉飞，汀上白沙看不见。<br/>
            江天一色无纤尘，皎皎空中孤月轮。<br/>
            江畔何人初见月，江月何年初照人。<br/>
            人生代代无穷已，江月年年只相似。<br/>
            不知江月待何人，但见长江送流水。</p>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            tabChange(e) {
                //console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabs {
        padding-top: 1rem;
        height: 20rem;
    }
    .tab111 {

    }
</style>