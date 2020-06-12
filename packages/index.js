/**
 * @author sudong.duan
 * Date: 20/2/28
 */
import sdHeader from './header/index.js';
import {sdDialog, dialog} from './dialog/index.js';
import toast from './toast/index.js'
import sdPopup from './popup/index.js'
import sdPicker from './picker/index.js'
import sdDateTimePicker from './dateTimePicker/index.js'
import {sdSwipe, sdSwipeItem} from './swipe/index.js'
import sdPullRefresh from './pullRefresh/index.js'
import sdSwipeCell from './swipeCell/index.js'
import chartRadar from './chartRadar/index'
import {sdImagePreview, imagePreview} from './imagePreview/index'
import sdNumberKeyboard from  './numberKeyboard/index'

const components = [
    sdHeader,
    sdDialog,
    sdPopup,
    sdPicker,
    sdDateTimePicker,
    sdSwipe,
    sdSwipeItem,
    sdPullRefresh,
    sdSwipeCell,
    sdImagePreview,
    sdNumberKeyboard
]

const install = function(Vue) {
    if (install.installed) return
    components.map((component) => {Vue.component(component.name, component)})
    Vue.prototype.$dialog = dialog
    Vue.prototype.$toast = toast
    Vue.prototype.$chartRadar = chartRadar
    Vue.prototype.$imagePreview = imagePreview
    Vue.prototype.$windowInfo = {
        width: document.documentElement.clientWidth || window.innerWidth,
        height: document.documentElement.clientHeight || window.innerHeight
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
//移动端集成响应式布局 rem
function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit () {
        var rem = docEl.clientWidth / 7.5
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}
flexible(window, document)
//使用阿里巴巴矢量库
function icon() {
    const script = document.createElement('script')
    const css = document.createElement('link')
    const html = document.getElementsByTagName('html')[0]
    script.src = '//at.alicdn.com/t/font_1665721_3mh2z9gabnh.js'
    script.type = 'text/javascript'
    css.href = '//at.alicdn.com/t/font_1665721_3mh2z9gabnh.css'
    css.rel = 'stylesheet'
    html.appendChild(css)
    html.appendChild(script)
}
icon()

export default {
    install,
    sdHeader,
    sdDialog,
    sdPopup,
    sdPicker,
    sdDateTimePicker,
    sdSwipe,
    sdSwipeItem,
    sdPullRefresh,
    sdSwipeCell,
    sdImagePreview,
    sdNumberKeyboard
}