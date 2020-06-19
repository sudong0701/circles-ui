import sdCollapse from './src/collapse.vue'
import sdCollapseItem from './src/collapseItem.vue'

sdCollapse.install = function (Vue) {
    Vue.component(sdCollapse.name, sdCollapse)
}

sdCollapseItem.install = function (Vue) {
    Vue.component(sdCollapseItem.name, sdCollapseItem)
}

export {sdCollapse, sdCollapseItem}