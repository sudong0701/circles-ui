import csSwipe from './src/swipe.vue'
import csSwipeItem from './src/swipe-item.vue'

csSwipe.install = function (Vue) {
    Vue.component(csSwipe.name, csSwipe)
}

csSwipeItem.install = function (Vue) {
    Vue.component(csSwipeItem.name, csSwipeItem)
}


export {csSwipe, csSwipeItem};