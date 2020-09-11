import '../main'
import csCollapseItem from '../collapse/src/collapseItem.vue'

csCollapseItem.install = function (Vue) {
    Vue.component(csCollapseItem.name, csCollapseItem)
}

export default csCollapseItem