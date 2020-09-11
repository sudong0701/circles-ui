import '../main'
import csStepper from './src/stepper.vue'

csStepper.install = function (Vue) {
    Vue.component(csStepper.name, csStepper)
}

export default csStepper