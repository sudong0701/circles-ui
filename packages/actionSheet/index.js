import csActionSheet from './src/actionSheet.vue'

csActionSheet.install = function (Vue) {
    Vue.component(csActionSheet.name, csActionSheet)
}

export default csActionSheet