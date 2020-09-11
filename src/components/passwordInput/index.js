import '../main'
import csPasswordInput from './src/passwordInput.vue'

csPasswordInput.install = function (Vue) {
    Vue.component(csPasswordInput.name, csPasswordInput)
}

export default csPasswordInput