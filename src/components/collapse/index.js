import '../main'
import csCollapse from './src/collapse.vue'


csCollapse.install = function (Vue) {
    Vue.component(csCollapse.name, csCollapse)
}



export default csCollapse