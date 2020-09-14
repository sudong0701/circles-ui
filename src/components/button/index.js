import '../main'
import csButton from './src/button.vue'

csButton.install = function (Vue) {
    Vue.component(csButton.name, csButton)
}

export default csButton