<template>
    <div class="circle">
        <cs-circle v-model="value"></cs-circle>
        <button @click="changeValue">改变value</button>
        <!--<div>-->
            <!--<p style="height: 6rem"></p>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                value: 30
            }
        },
        methods: {
            changeValue() {
                if(this.value === 30) {
                    this.value = 80
                } else {
                    this.value = 30
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .circle {
        padding-top: 2rem;
        height: 20rem;
        background-color: #f4f4f4;
    }
</style>