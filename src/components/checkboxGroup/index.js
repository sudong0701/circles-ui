import '../main'
import csCheckboxGroup from '../checkbox/src/checkboxGroup.vue'


csCheckboxGroup.install = function (Vue) {
    Vue.component(csCheckboxGroup.name, csCheckboxGroup)
}

export default csCheckboxGroup