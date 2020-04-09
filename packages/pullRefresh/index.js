import pullRefresh from './src/pullRefresh.vue'

pullRefresh.install = function (Vue) {
    Vue.component(pullRefresh.name, pullRefresh)
}

export default pullRefresh