import csNumberKeyboard from './src/numberKeyboard.vue'

csNumberKeyboard.install = function (Vue) {
    Vue.component(csNumberKeyboard.name, csNumberKeyboard)
}

export default csNumberKeyboard