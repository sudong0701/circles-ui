/**
 * @author sudong.duan
 * Date: 20/2/28
 */
import sdHeader from './header/index.js';

const components = [
    sdHeader
]

const install = function(Vue) {
    if (install.installed) return
    components.map((component) => {Vue.component(component.name, component)})
    //MetaInfo.install(Vue)
    //Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    sdHeader
}