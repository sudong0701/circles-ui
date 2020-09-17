/**
 * @author sudong.duan
 * description: 弹出框组件
 * Date: 20/2/28
 */
import '../main'
import csDialog from './src/csDialog.vue';


csDialog.install = function (Vue) {
    Vue.component(csDialog.name, csDialog);
};

export default csDialog;