import '../main'
import csTabbar from './src/tabbar.vue'

csTabbar.install = function (Vue) {
    Vue.component(csTabbar.name, csTabbar)
}

export default csTabbar