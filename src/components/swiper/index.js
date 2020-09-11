import '../main'
import csSwiper from './src/swiper.vue'

csSwiper.install = function (Vue) {
    Vue.component(csSwiper.name, csSwiper)
}

export default csSwiper