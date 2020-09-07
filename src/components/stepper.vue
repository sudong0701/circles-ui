<template>
    <div class="stepper">
        <csStepper v-model="stepperValue"  :asyncChange="false" :disabled="false" :decimalLength="2" step="2" min="-60" @add="add"></csStepper>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                stepperValue: -2
            }
        },
        methods: {
            add() {
                console.log('add')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .stepper {
        margin: 15px;
    }
</style>