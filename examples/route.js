import install from './docs/install.md'
import quick from './docs/quick.md'
import theme from './docs/theme.md'
import popup from './docs/popup.md'

const routes = [
    {
        path: '/',
        component: install,
        name: 'default'
    },
    {
        path: '/guide/install',
        name: 'install',
        component: install
    },
    {
        path: '/guide/quick',
        name: 'quick',
        component: quick
    },
    {
        path: '/guide/theme',
        name: 'theme',
        component: theme
    },
    {
        path: '/popup',
        name: 'popup',
        component: popup
    }
]

export default routes