import csIcon from './src/icon.vue'

csIcon.install = function (Vue) {
    Vue.component(csIcon.name, csIcon)
}

export default csIcon