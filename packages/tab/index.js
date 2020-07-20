import sdTab from './src/tab.vue'
import sdTabs from './src/tabs.vue'

sdTab.install = function (Vue) {
    Vue.component(sdTab.name, sdTab)
}

sdTabs.install = function (Vue) {
    Vue.component(sdTabs.name, sdTabs)
}

export {sdTab, sdTabs}