import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const test = () => import('../components/test.vue')
const imagePreview = () => import('../components/imagePreview.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/imagePreview',
            name: 'imagePreview',
            component: imagePreview
        }

    ]
})
