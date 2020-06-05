import sdImagePreview from './src/imagePreview.vue'

sdImagePreview.install = function (Vue) {
    Vue.component(imagePreview.name, imagePreview)
}

export default sdImagePreview