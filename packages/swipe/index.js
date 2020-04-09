import sdSwipe from './src/swipe.vue'
import sdSwipeItem from './src/swipe-item.vue'

sdSwipe.install = function (Vue) {
    Vue.component(sdSwipe.name, sdSwipe)
}

sdSwipeItem.install = function (Vue) {
    Vue.component(sdSwipeItem.name, sdSwipeItem)
}


export {sdSwipe, sdSwipeItem};