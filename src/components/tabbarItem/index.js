import '../main'
import csTabbarItem from '../tabbar/src/tabbarItem.vue'

csTabbarItem.install = function (Vue) {
    Vue.component(csTabbarItem.name, csTabbarItem)
}

export default csTabbarItem