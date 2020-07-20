import sdCircle from './src/circle.vue'

sdCircle.install = function (Vue) {
    Vue.component(sdCircle.name, sdCircle)
}

export default sdCircle