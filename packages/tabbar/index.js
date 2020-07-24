import sdTabbar from './src/tabbar.vue'
import sdTabbarItem from './src/tabbarItem.vue'


sdTabbar.install = function (Vue) {
    Vue.component(sdTabbar.name, sdTabbar)
}

sdTabbarItem.install = function (Vue) {
    Vue.component(sdTabbarItem.name, sdTabbarItem)
}

export {sdTabbar, sdTabbarItem}