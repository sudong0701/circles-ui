import Vue from 'vue'
import csImagePreview from './src/csImagePreview.vue'
import $imagePreview from './src/imagePreview.vue'
let instance, imagePreviewConstructor = Vue.extend($imagePreview)

let imagePreview = (options = {}) => {
    instance = new imagePreviewConstructor({
        data: options
    })
    console.log(instance)
    document.body.appendChild(instance.$mount().$el)
}



csImagePreview.install = function (Vue) {
    Vue.component(csImagePreview.name, csImagePreview)
}

export {csImagePreview, imagePreview}