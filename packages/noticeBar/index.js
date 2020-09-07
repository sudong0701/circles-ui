import csNoticeBar from './src/noticeBar.vue'

csNoticeBar.install = function (Vue) {
    Vue.component(csNoticeBar.name, csNoticeBar)
}

export default csNoticeBar