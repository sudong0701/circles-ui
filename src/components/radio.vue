<template>
    <div class="radio">
        <csRadioGroup v-model="value" @change="changeGroup" :disabled="false">
            <csRadio color="#67c23a" name="1" @change="changeRadio">单选框1</csRadio>
            <csRadio name="2" :labelDisabled="true">单选框2</csRadio>
            <csRadio name="3">单选框3</csRadio>
        </csRadioGroup>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                value: '2'
            }
        },
        methods: {
            changeGroup(e) {
                console.log(e)
            },
            changeRadio(e) {
                console.log(e)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .radio {
        padding-top: 0.6rem;
    }
</style>