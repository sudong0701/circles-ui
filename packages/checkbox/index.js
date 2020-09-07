import csCheckbox from './src/checkbox.vue'
import csCheckboxGroup from './src/checkboxGroup.vue'

csCheckbox.install = function (Vue) {
    Vue.component(csCheckbox.name, csCheckbox)
}

csCheckboxGroup.install = function (Vue) {
    Vue.component(csCheckboxGroup.name, csCheckboxGroup)
}

export {csCheckbox, csCheckboxGroup}