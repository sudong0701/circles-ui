import sdIndexBar from './src/indexBar.vue'
import sdIndexBarItem from './src/indexBarItem.vue'

sdIndexBar.install = function (Vue) {
    Vue.component(sdIndexBar.name, sdIndexBar)
}

sdIndexBarItem.install = function (Vue) {
    Vue.component(sdIndexBarItem.name, sdIndexBarItem)
}

export {
    sdIndexBar,
    sdIndexBarItem
}