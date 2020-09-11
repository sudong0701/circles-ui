/**
 * @author sudong.duan
 * description: 头部组件
 * Date: 20/2/28
 */
import '../main'
import Header from './src/header.vue';

Header.install = function (Vue) {
    Vue.component(Header.name, Header);
};

export default Header;