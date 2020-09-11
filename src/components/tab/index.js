import '../main'
import csTab from './src/tab.vue'


csTab.install = function (Vue) {
    Vue.component(csTab.name, csTab)
}

export default csTab