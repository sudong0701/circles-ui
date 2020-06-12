import Vue from 'vue'
import sdImagePreview from './src/sdImagePreview.vue'
import $imagePreview from './src/imagePreview.vue'
let instance, imagePreviewConstructor = Vue.extend($imagePreview)

let imagePreview = (options = {}) => {
    instance = new imagePreviewConstructor({
        data: options
    })
    console.log(instance)
    document.body.appendChild(instance.$mount().$el)
}



sdImagePreview.install = function (Vue) {
    Vue.component(sdImagePreview.name, sdImagePreview)
}

export {sdImagePreview, imagePreview}