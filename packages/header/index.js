/**
 * @author sudong.duan
 * Date: 20/2/28
 */
import Header from './src/header.vue';

Header.install = function (Vue) {
    Vue.component(Header.name, Header);
};

export default Header;