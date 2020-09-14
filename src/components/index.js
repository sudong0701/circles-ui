/**
 * @author sudong.duan
 * Date: 20/2/28
 */
import './global.css'
import './main.js'
import csHeader from './header/index.js';   //头部组件
import csDialog from './dialog/index.js';   //弹出框组件
import csButton from './button/index.js'
import dialog from './$dialog/index.js';   //弹出框组件(函数式)
import toast from './toast/index.js'   //toast弱提示组件
import csPopup from './popup/index.js'   //弹出层组件
import csPicker from './picker/index.js'   //普通选择器or级联选择器组件
import csDateTimePicker from './dateTimePicker/index.js'   //时间日期选择器
import csSwiper from './swiper/index.js'   //轮播图组件
import csSwiperItem from './swiperItem/index.js'   //轮播图组件
import csPullRefresh from './pullRefresh/index.js'   //下拉刷新or上拉加载组件
import csSwipeCell from './swipeCell/index.js'   //滑动单元格组件
import chartRadar from './chartRadar/index'   //绘制雷达图组件
import csImagePreview from './imagePreview/index'   //图片预览组件(有待优化)
import imagePreview from './$imagePreview/index'   //图片预览组件(函数式)(有待优化)
import csNumberKeyboard from  './numberKeyboard/index'   //数字键盘组件
import csPasswordInput from './passwordInput'   //密码输入框组件
import csCollapse from './collapse/index'   //折叠面板组件
import csCollapseItem from './collapseItem/index'   //折叠面板组件
import csSwitch from './switch/index'   //开关组件
import csRadio from './radio/index'   //单选组件
import csRadioGroup from './radioGroup/index'   //单选组件
import csStepper from './stepper/index'   //步进器组件
import csCheckbox from './checkbox/index'   //复选框组件
import csCheckboxGroup from './checkboxGroup/index'   //复选框组件
import csNoticeBar from './noticeBar/index'   //通知栏组件
import csActionSheet from  './actionSheet/index'   //动作面板组件
import csTab from './tab/index'   //标签页组件
import csTabs from './tabs/index'   //标签页组件
import csCircle from './circle/index'   //环形进度条组件
import csTabbar from './tabbar/index'   //标签栏组件组件
import csTabbarItem from './tabbarItem/index'   //标签栏组件组件
import csIndexBar from './indexBar/index'   //索引栏组件
import csIndexBarItem from './indexBarItem/index'   //索引栏组件
import csField from './field/index'   //输入框(正则太薄弱，输入框限制做不了完美)
import csLazy from './lazy/index'   //懒加载组件
import csSkeleton from './skeleton/index'   //骨架屏组件

const components = [
    csHeader,
    csDialog,
    csButton,
    csPopup,
    csPicker,
    csDateTimePicker,
    csSwiper,
    csSwiperItem,
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


export default {
    install,
    csHeader,
    csDialog,
    csButton,
    csPopup,
    csPicker,
    csDateTimePicker,
    csSwiper,
    csSwiperItem,
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