import csTab from './src/tab.vue'
import csTabs from './src/tabs.vue'

csTab.install = function (Vue) {
    Vue.component(csTab.name, csTab)
}

csTabs.install = function (Vue) {
    Vue.component(csTabs.name, csTabs)
}

export {csTab, csTabs}