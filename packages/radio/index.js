import csRadio from './src/radio.vue'
import csRadioGroup from './src/radioGroup.vue'

csRadio.install = function (Vue) {
    Vue.component(csRadio.name, csRadio)
}

csRadioGroup.install = function (Vue) {
    Vue.component(csRadioGroup.name, csRadioGroup)
}

export {csRadio, csRadioGroup}