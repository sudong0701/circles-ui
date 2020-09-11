import '../main'
import csRadioGroup from '../radio/src/radioGroup.vue'

csRadioGroup.install = function (Vue) {
    Vue.component(csRadioGroup.name, csRadioGroup)
}

export default csRadioGroup