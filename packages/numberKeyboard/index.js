import sdNumberKeyboard from './src/numberKeyboard.vue'

sdNumberKeyboard.install = function (Vue) {
    Vue.component(sdNumberKeyboard.name, sdNumberKeyboard)
}

export default sdNumberKeyboard