/**
 * @author sudong.duan
 * Date: 20/2/28
 */
import Vue from 'vue'
import csHeader from './header/index.js';   //头部组件
import {csDialog, dialog} from './dialog/index.js';   //弹出框组件
import toast from './toast/index.js'   //toast弱提示组件
import csPopup from './popup/index.js'   //弹出层组件
import csPicker from './picker/index.js'   //普通选择器or级联选择器组件
import csDateTimePicker from './dateTimePicker/index.js'   //时间日期选择器
import {csSwipe, csSwipeItem} from './swipe/index.js'   //轮播图组件
import csPullRefresh from './pullRefresh/index.js'   //下拉刷新or上拉加载组件
import csSwipeCell from './swipeCell/index.js'   //滑动单元格组件
import chartRadar from './chartRadar/index'   //绘制雷达图组件
import {csImagePreview, imagePreview} from './imagePreview/index'   //图片预览组件(有待优化)
import csNumberKeyboard from  './numberKeyboard/index'   //数字键盘组件
import csPasswordInput from './passwordInput'   //密码输入框组件
import {csCollapse, csCollapseItem} from './collapse/index'   //折叠面板组件
import csSwitch from './switch/index'   //开关组件
import {csRadio, csRadioGroup} from './radio/index'   //单选组件
import csStepper from './stepper/index'   //步进器组件
import {csCheckbox, csCheckboxGroup} from './checkbox/index'   //复选框组件
import csNoticeBar from './noticeBar/index'   //通知栏组件
import csActionSheet from  './actionSheet/index'   //动作面板组件
import {csTab, csTabs} from './tab/index'   //标签页组件
import csCircle from './circle/index'   //环形进度条组件
import {csTabbar, csTabbarItem} from './tabbar/index'   //标签栏组件组件
import {csIndexBar, csIndexBarItem} from './indexBar/index'   //索引栏组件
import csField from './field/index'   //输入框(正则太薄弱，输入框限制做不了完美)
import csLazy from './lazy/index'   //懒加载组件
import csSkeleton from './skeleton/index'   //骨架屏组件

const components = [
    csHeader,
    csDialog,
    csPopup,
    csPicker,
    csDateTimePicker,
    csSwipe,
    csSwipeItem,
    csPullRefresh,
    csSwipeCell,
    csImagePreview,
    csNumberKeyboard,
    csPasswordInput,
    csCollapse,
    csCollapseItem,
    csSwitch,
    csRadioGroup,
    csRadio,
    csStepper,
    csCheckbox,
    csCheckboxGroup,
    csNoticeBar,
    csActionSheet,
    csTab,
    csTabs,
    csCircle,
    csTabbar,
    csTabbarItem,
    csIndexBar,
    csIndexBarItem,
    csField,
    csLazy,
    csSkeleton
]

const install = function(Vue, options) {
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
    if(options) {
        document.documentElement.dataset.theme = options
    }

    Vue.directive('lazy', {    //图片懒加载
        inserted: function (el, binding, vnode ) {
            if(typeof IntersectionObserver !== 'undefined') {   //支持IntersectionObserver
                var observer  = new IntersectionObserver(
                    function (entries) {
                        entries.map((item)=> {
                            if(item.isIntersecting) {
                                if(vnode.tag === 'img') {   //图片懒加载
                                    el.src = binding.value
                                }
                                observer.unobserve(el)
                            } else {
                                if(vnode.tag === 'img') {   //图片懒加载
                                    el.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                                }
                            }
                        })
                    }
                )
                observer.observe(el)
            }
        }
    })

    Vue.directive('lazyBGImg', {    //背景图片懒加载
        inserted: function (el, binding, vnode ) {
            if(typeof IntersectionObserver !== 'undefined') {   //支持IntersectionObserver
                var observer  = new IntersectionObserver(
                    function (entries) {
                        entries.map((item)=> {
                            if(item.isIntersecting) {
                                el.style.backgroundImage = `url(${binding.value})`
                                observer.unobserve(el)
                            } else {
                                el.style.backgroundImage = 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)'
                            }
                        })
                    }
                )
                observer.observe(el)
            }
        }
    })

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
    script.src = '//at.alicdn.com/t/font_1665721_rljtpy8bxgg.js'
    script.type = 'text/javascript'
    css.href = '//at.alicdn.com/t/font_1665721_rljtpy8bxgg.css'
    css.rel = 'stylesheet'
    html.appendChild(css)
    html.appendChild(script)
    Array.prototype.shuffle = function() {   //打乱数组
        var array = this;
        var m = array.length,
            t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
}
icon()


export  {
    csHeader,
    csDialog,
    dialog,
    toast,
    chartRadar,
    imagePreview,
    csPopup,
    csPicker,
    csDateTimePicker,
    csSwipe,
    csSwipeItem,
    csPullRefresh,
    csSwipeCell,
    csImagePreview,
    csNumberKeyboard,
    csPasswordInput,
    csCollapse,
    csCollapseItem,
    csSwitch,
    csRadioGroup,
    csRadio,
    csStepper,
    csCheckbox,
    csCheckboxGroup,
    csNoticeBar,
    csActionSheet,
    csTab,
    csTabs,
    csCircle,
    csTabbar,
    csTabbarItem,
    csIndexBar,
    csIndexBarItem,
    csField,
    csLazy,
    csSkeleton
}

export default {
    install,
    csHeader,
    csDialog,
    csPopup,
    csPicker,
    csDateTimePicker,
    csSwipe,
    csSwipeItem,
    csPullRefresh,
    csSwipeCell,
    csImagePreview,
    csNumberKeyboard,
    csPasswordInput,
    csCollapse,
    csCollapseItem,
    csSwitch,
    csRadioGroup,
    csRadio,
    csStepper,
    csCheckbox,
    csCheckboxGroup,
    csNoticeBar,
    csActionSheet,
    csTab,
    csTabs,
    csCircle,
    csTabbar,
    csTabbarItem,
    csIndexBar,
    csIndexBarItem,
    csField,
    csLazy,
    csSkeleton
}