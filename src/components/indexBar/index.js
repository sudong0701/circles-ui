import '../main'
import csIndexBar from './src/indexBar.vue'


csIndexBar.install = function (Vue) {
    Vue.component(csIndexBar.name, csIndexBar)
}

export default csIndexBar