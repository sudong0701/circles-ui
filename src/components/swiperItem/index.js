import '../main'
import csSwiperItem from '../swiper/src/swiperItem.vue'

csSwiperItem.install = function (Vue) {
    Vue.component(csSwiperItem.name, csSwiperItem)
}

export default csSwiperItem