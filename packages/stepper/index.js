import sdStepper from './src/stepper.vue'

sdStepper.install = function (Vue) {
    Vue.component(sdStepper.name, sdStepper)
}

export default sdStepper