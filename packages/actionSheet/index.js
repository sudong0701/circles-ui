import sdActionSheet from './src/actionSheet.vue'

sdActionSheet.install = function (Vue) {
    Vue.component(sdActionSheet.name, sdActionSheet)
}

export default sdActionSheet