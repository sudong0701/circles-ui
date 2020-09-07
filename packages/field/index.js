import sdField from  './src/field.vue'

sdField.install = function (Vue) {
    Vue.component(sdField.name, sdField)
}

export default sdField