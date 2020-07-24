import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const test = () => import('../components/test.vue')
const imagePreview = () => import('../components/imagePreview.vue')
const numberKeyboard = () => import('../components/numberKeyboard.vue')
const collapse = () => import('../components/collapse.vue')
const radio = ()=> import('../components/radio.vue')
const stepper = ()=> import('../components/stepper.vue')
const checkbox = ()=> import('../components/checkbox.vue')
const noticeBar = ()=> import('../components/noticeBar.vue')
const actionSheet = ()=> import('../components/actionSheet.vue')
const tabs = ()=> import('../components/tabs.vue')
const circle = ()=> import('../components/circle.vue')
const tabbar = ()=> import('../components/tabbar.vue')

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
        },
        {
            path: '/numberKeyboard',
            name: 'numberKeyboard',
            component: numberKeyboard
        },
        {
            path: '/collapse',
            name: 'collapse',
            component: collapse
        },
        {
            path: '/radio',
            name: 'radio',
            component: radio
        },
        {
            path: '/stepper',
            name: 'stepper',
            component: stepper
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: checkbox
        },
        {
            path: '/noticeBar',
            name: 'noticeBar',
            component: noticeBar
        },
        {
            path: '/actionSheet',
            name: 'actionSheet',
            component: actionSheet
        },
        {
            path: '/tabs',
            name: 'tabs',
            component: tabs
        },
        {
            path: '/circle',
            name: 'circle',
            component: circle
        },
        {
            path: '/tabbar',
            name: 'tabbar',
            component: tabbar
        }
    ]
})
