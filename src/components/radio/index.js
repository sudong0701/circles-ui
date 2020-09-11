import '../main'
import csRadio from './src/radio.vue'

csRadio.install = function (Vue) {
    Vue.component(csRadio.name, csRadio)
}

export default csRadio