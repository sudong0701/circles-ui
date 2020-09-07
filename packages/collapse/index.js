import csCollapse from './src/collapse.vue'
import csCollapseItem from './src/collapseItem.vue'

csCollapse.install = function (Vue) {
    Vue.component(csCollapse.name, csCollapse)
}

csCollapseItem.install = function (Vue) {
    Vue.component(csCollapseItem.name, csCollapseItem)
}

export {csCollapse, csCollapseItem}