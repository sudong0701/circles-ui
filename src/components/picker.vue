<template>
    <div style="padding: 0.3rem" class="picker" ref="content">
        <cs-switch v-model="isOpen" @change="change"></cs-switch>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            change(val) {
                console.log(val)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .picker{
        padding: 0 0.3rem;
        line-height: 0.64rem;
    }
</style>