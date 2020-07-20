<template>
    <div class="stepper">
        <sdStepper v-model="stepperValue" :integer="true" :asyncChange="false" :disabled="false" :decimalLength="2" step="2" min="-60" @add="add"></sdStepper>
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
//                setTimeout(()=> {
//                    this.stepperValue = this.stepperValue + 0.3
//                }, 2000)
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