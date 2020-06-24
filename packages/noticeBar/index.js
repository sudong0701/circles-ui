import sdNoticeBar from './src/noticeBar.vue'

sdNoticeBar.install = function (Vue) {
    Vue.component(sdNoticeBar.name, sdNoticeBar)
}

export default sdNoticeBar