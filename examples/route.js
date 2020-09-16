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

import dialog from './docs/src/basis/src/dialog.md'


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
            }
        ]
    }
]

export default routes