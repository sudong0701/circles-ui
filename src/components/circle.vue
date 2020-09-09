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
                progress: 85,
                barColor: [
                    {offset: '0', color: '#5a96ec'},
                    {offset: '0.5', color: '#67c23a'},
                    {offset: '1', color: '#eff23a'}
                ],
            }
        },
        methods: {
            changeValue() {
                if(this.progress === 30) {
                    this.progress = 80
                } else {
                    this.progress = 30
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