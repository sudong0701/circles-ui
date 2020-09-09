import  csSkeleton from './src/skeleton.vue'

csSkeleton.install = function (Vue) {
    Vue.component(csSkeleton.name, csSkeleton)
}

export default csSkeleton