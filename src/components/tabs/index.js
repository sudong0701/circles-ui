import '../main'
import csTabs from '../tab/src/tabs.vue'

csTabs.install = function (Vue) {
    Vue.component(csTabs.name, csTabs)
}

export default csTabs