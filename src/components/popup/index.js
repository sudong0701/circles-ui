import '../main'
import Popup from './src/popup.vue'

Popup.install = function (Vue) {
    Vue.component(Popup.name, Popup)
}
export default Popup