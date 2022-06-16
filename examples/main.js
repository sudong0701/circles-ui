import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import csUI from '../src/components/index.js'
//import '../lib/theme/index.css';
Vue.use(csUI)


if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    Vue.prototype.platform = 'phone'
}else {
    Vue.prototype.platform = 'PC'
}

// 引入demo-block
import DemoBlock from './components/demoBlock'
Vue.component('demo-block', DemoBlock)
// 引入项目样式入口
import './assets/scss/index.scss'

// 引入路由
import routes from './route'
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
    render(createElement) {
        return createElement(App)
    },
    router
}).$mount('#app')
