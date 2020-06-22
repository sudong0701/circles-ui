import sdRadio from './src/radio.vue'
import sdRadioGroup from './src/radioGroup.vue'

sdRadio.install = function (Vue) {
    Vue.component(sdRadio.name, sdRadio)
}

sdRadioGroup.install = function (Vue) {
    Vue.component(sdRadioGroup.name, sdRadioGroup)
}

export {sdRadio, sdRadioGroup}