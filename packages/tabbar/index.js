import csTabbar from './src/tabbar.vue'
import csTabbarItem from './src/tabbarItem.vue'


csTabbar.install = function (Vue) {
    Vue.component(csTabbar.name, csTabbar)
}

csTabbarItem.install = function (Vue) {
    Vue.component(csTabbarItem.name, csTabbarItem)
}

export {csTabbar, csTabbarItem}