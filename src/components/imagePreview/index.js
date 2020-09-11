import '../main'
import csImagePreview from './src/csImagePreview.vue'

csImagePreview.install = function (Vue) {
    Vue.component(csImagePreview.name, csImagePreview)
}

export default csImagePreview