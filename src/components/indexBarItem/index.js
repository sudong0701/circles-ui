import '../main'
import csIndexBarItem from '../indexBar/src/indexBarItem.vue'


csIndexBarItem.install = function (Vue) {
    Vue.component(csIndexBarItem.name, csIndexBarItem)
}

export default csIndexBarItem
