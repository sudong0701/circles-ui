import Vue from 'vue'
import '../main'
import $imagePreview from '../imagePreview/src/imagePreview.vue'

let instance, imagePreviewConstructor = Vue.extend($imagePreview)

let imagePreview = (options = {}) => {
    instance = new imagePreviewConstructor({
        data: options
    })
    document.body.appendChild(instance.$mount().$el)
}

export default $imagePreview