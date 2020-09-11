import '../main'
import csCheckbox from './src/checkbox.vue'


csCheckbox.install = function (Vue) {
    Vue.component(csCheckbox.name, csCheckbox)
}



export default csCheckbox