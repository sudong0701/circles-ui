import csIndexBar from './src/indexBar.vue'
import csIndexBarItem from './src/indexBarItem.vue'

csIndexBar.install = function (Vue) {
    Vue.component(csIndexBar.name, csIndexBar)
}

csIndexBarItem.install = function (Vue) {
    Vue.component(csIndexBarItem.name, csIndexBarItem)
}

export {
    csIndexBar,
    csIndexBarItem
}