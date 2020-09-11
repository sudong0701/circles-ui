import '../main'
import csCircle from './src/circle.vue'

csCircle.install = function (Vue) {
    Vue.component(csCircle.name, csCircle)
}

export default csCircle