<template>
    <div class="circle">
        <cs-circle v-model="progress" :barColor="barColor"></cs-circle>
        <button @click="changeValue">改变value</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                progress: 70
            }
        },
        components: {

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
        height: 667px;
        width: 100%;
        background-color: #f6f6f6;
    }
</style>