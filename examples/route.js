import home from './docs/home.vue'

import content from './docs/content.vue'

import guide from './docs/src/guide/index.vue'
import basis from './docs/src/basis/index.vue'

import introduce from './docs/src/guide/src/introduce.md'
import install from './docs/src/guide/src/install.md'
import logs from './docs/src/guide/src/logs.md'
import quick from './docs/src/guide/src/quick.md'
import theme from './docs/src/guide/src/theme.md'

import popup from './docs/src/basis/src/popup.md'
import toast from './docs/src/basis/src/toast.md'
import button from './docs/src/basis/src/button.md'
import dialog from './docs/src/basis/src/dialog.md'

import demo from './demo/index.vue'
import popupDemo from './demo/src/popup.vue'
import buttonDemo from './demo/src/button.vue'

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
          {
              path: 'basis',
              name: 'basis',
              component: basis,
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
                  }
              ]
          }
      ]
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo,
        children: [
            {
                path: 'popup',
                name: 'popupDemo',
                component: popupDemo
            },
            {
                path: 'button',
                name: 'buttonDemo',
                component: buttonDemo
            }
        ]
    }
]

export default routes