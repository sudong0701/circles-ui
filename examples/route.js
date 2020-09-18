import home from './docs/home.vue'

import content from './docs/content.vue'

import guide from './docs/src/guide/index.vue'
import components from './docs/src/basis/index.vue'

//开发指南
import introduce from './docs/src/guide/src/introduce.md'
import install from './docs/src/guide/src/install.md'
import logs from './docs/src/guide/src/logs.md'
import quick from './docs/src/guide/src/quick.md'
import theme from './docs/src/guide/src/theme.md'

//基础组件
import popup from './docs/src/basis/src/popup.md'
import toast from './docs/src/basis/src/toast.md'
import button from './docs/src/basis/src/button.md'
import icon from './docs/src/basis/src/icon.md'

//表单组件
import checkbox from './docs/src/basis/src/checkbox.md'
import dateTimePicker from './docs/src/basis/src/dateTimePicker.md'
import numberKeyboard from './docs/src/basis/src/numberKeyboard.md'
import passwordInput from './docs/src/basis/src/passwordInput.md'
import picker from './docs/src/basis/src/picker.md'
import radio from './docs/src/basis/src/radio.md'
import stepper from './docs/src/basis/src/stepper.md'
import csSwitch from './docs/src/basis/src/switch.md'

//反馈组件
import actionSheet from './docs/src/basis/src/actionSheet.md'
import dialog from './docs/src/basis/src/dialog.md'
import swipeCell from './docs/src/basis/src/swipeCell.md'

//展示组件
import circle from './docs/src/basis/src/circle.md'
import chartRadar from './docs/src/basis/src/chartRadar.md'
import collapse from './docs/src/basis/src/collapse.md'
import noticeBar from './docs/src/basis/src/noticeBar.md'
import skeleton from './docs/src/basis/src/skeleton.md'
import swiper from './docs/src/basis/src/swiper.md'

//导航组件
import indexBar from './docs/src/basis/src/indexBar.md'
import header from './docs/src/basis/src/header.md'

//演示页面
import demo from './demo/index.vue'
import popupDemo from './demo/src/popup.vue'
import buttonDemo from './demo/src/button.vue'
import toastDemo from './demo/src/toast.vue'
import iconDemo from './demo/src/icon.vue'
import checkboxDemo from './demo/src/checkbox.vue'
import dateTimePickerDemo from './demo/src/dateTimePicker.vue'
import numberKeyboardDemo from './demo/src/numberKeyboard.vue'
import passwordInputDemo from './demo/src/passwordInput.vue'
import pickerDemo from './demo/src/picker.vue'
import radioDemo from './demo/src/radio.vue'
import stepperDemo from './demo/src/stepper.vue'
import csSwitchDemo from './demo/src/switch.vue'
import actionSheetDemo from './demo/src/actionSheet.vue'
import dialogDemo from './demo/src/dialog.vue'
import swipeCellDemo from './demo/src/swipeCell.vue'
import circleDemo from './demo/src/circle.vue'
import chartRadarDemo from './demo/src/chartRadar.vue'
import collapseDemo from './demo/src/collapse.vue'
import noticeBarDemo from './demo/src/noticeBar.vue'
import skeletonDemo from './demo/src/skeleton.vue'
import swiperDemo from './demo/src/swiper.vue'
import indexBarDemo from './demo/src/indexBar.vue'
import headerDemo from './demo/src/header.vue'


const routes = [
    {
        path: '/',
        component: home,
        name: 'home'
    },
    {
      path: '/docs',
      name: 'content',
      component: content,
      children: [
          {
              path: 'guide',
              name: 'guide',
              component: guide,
              children: [
                  {
                      path: 'introduce',
                      name: 'introduce',
                      component: introduce
                  },
                  {
                      path: 'install',
                      name: 'install',
                      component: install
                  },
                  {
                      path: 'quick',
                      name: 'quick',
                      component: quick
                  },
                  {
                      path: 'logs',
                      name: 'logs',
                      component: logs
                  },
                  {
                      path: 'theme',
                      name: 'theme',
                      component: theme
                  }
              ]
          },
          //组件
          {
              path: 'components',
              name: 'components',
              component: components,
              children: [
                  {
                      path: 'popup',
                      name: 'popup',
                      component: popup
                  },
                  {
                      path: 'button',
                      name: 'button',
                      component: button
                  },
                  {
                      path: 'toast',
                      name: 'toast',
                      component: toast
                  },
                  {
                      path: 'icon',
                      name: 'icon',
                      component: icon
                  },
                  {
                      path: 'checkbox',
                      name: 'checkbox',
                      component: checkbox
                  },
                  {
                      path: 'dateTimePicker',
                      name: 'dateTimePicker',
                      component: dateTimePicker
                  },
                  {
                      path: 'numberKeyboard',
                      name: 'numberKeyboard',
                      component: numberKeyboard
                  },
                  {
                      path: 'passwordInput',
                      name: 'passwordInput',
                      component: passwordInput
                  },
                  {
                      path: 'picker',
                      name: 'picker',
                      component: picker
                  },
                  {
                      path: 'radio',
                      name: 'radio',
                      component: radio
                  },
                  {
                      path: 'stepper',
                      name: 'stepper',
                      component: stepper
                  },
                  {
                      path: 'switch',
                      name: 'switch',
                      component: csSwitch
                  },
                  {
                      path: 'actionSheet',
                      name: 'actionSheet',
                      component: actionSheet
                  },
                  {
                      path: 'dialog',
                      name: 'dialog',
                      component: dialog
                  },
                  {
                      path: 'swipeCell',
                      name: 'swipeCell',
                      component: swipeCell
                  },
                  {
                      path: 'circle',
                      name: 'circle',
                      component: circle
                  },
                  {
                      path: 'chartRadar',
                      name: 'chartRadar',
                      component: chartRadar
                  },
                  {
                      path: 'collapse',
                      name: 'collapse',
                      component: collapse
                  },
                  {
                      path: 'noticeBar',
                      name: 'noticeBar',
                      component: noticeBar
                  },
                  {
                      path: 'skeleton',
                      name: 'skeleton',
                      component: skeleton
                  },
                  {
                      path: 'swiper',
                      name: 'swiper',
                      component: swiper
                  },
                  {
                      path: 'indexBar',
                      name: 'indexBar',
                      component: indexBar
                  },
                  {
                      path: 'header',
                      name: 'header',
                      component: header
                  }
              ]
          }
      ]
    },
    //演示页面
    {
        path: '/demo',
        name: 'demo',
        component: demo,
        children: [
            {
                path: 'popup',
                name: 'Popup',
                component: popupDemo
            },
            {
                path: 'button',
                name: 'Button',
                component: buttonDemo
            },
            {
                path: 'toast',
                name: 'Toast',
                component: toastDemo
            },
            {
                path: 'icon',
                name: 'Icon',
                component: iconDemo
            },
            {
                path: 'checkbox',
                name: 'Checkbox',
                component: checkboxDemo
            },
            {
                path: 'dateTimePicker',
                name: 'DateTimePicker',
                component: dateTimePickerDemo
            },
            {
                path: 'numberKeyboard',
                name: 'NumberKeyboard',
                component: numberKeyboardDemo
            },
            {
                path: 'passwordInput',
                name: 'PasswordInput',
                component: passwordInputDemo
            },
            {
                path: 'picker',
                name: 'Picker',
                component: pickerDemo
            },
            {
                path: 'radio',
                name: 'Radio',
                component: radioDemo
            },
            {
                path: 'stepper',
                name: 'Stepper',
                component: stepperDemo
            },
            {
                path: 'switch',
                name: 'Switch',
                component: csSwitchDemo
            },
            {
                path: 'actionSheet',
                name: 'ActionSheet',
                component: actionSheetDemo
            },
            {
                path: 'dialog',
                name: 'Dialog',
                component: dialogDemo
            },
            {
                path: 'swipeCell',
                name: 'SwipeCell',
                component: swipeCellDemo
            },
            {
                path: 'circle',
                name: 'circle',
                component: circleDemo
            },
            {
                path: 'chartRadar',
                name: 'ChartRadar',
                component: chartRadarDemo
            },
            {
                path: 'collapse',
                name: 'Collapse',
                component: collapseDemo
            },
            {
                path: 'noticeBar',
                name: 'NoticeBar',
                component: noticeBarDemo
            },
            {
                path: 'skeleton',
                name: 'Skeleton',
                component: skeletonDemo
            },
            {
                path: 'swiper',
                name: 'Swiper',
                component: swiperDemo
            },
            {
                path: 'indexBar',
                name: 'IndexBar',
                component: indexBarDemo
            },
            {
                path: 'header',
                name: 'Header',
                component: headerDemo
            }
        ]
    }
]

export default routes