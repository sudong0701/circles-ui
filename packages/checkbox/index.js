import sdCheckbox from './src/checkbox.vue'
import sdCheckboxGroup from './src/checkboxGroup.vue'

sdCheckbox.install = function (Vue) {
    Vue.component(sdCheckbox.name, sdCheckbox)
}

sdCheckboxGroup.install = function (Vue) {
    Vue.component(sdCheckboxGroup.name, sdCheckboxGroup)
}

export {sdCheckbox, sdCheckboxGroup}