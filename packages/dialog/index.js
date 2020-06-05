/**
 * @author sudong.duan
 * description: 弹出框组件
 * Date: 20/2/28
 */
import Vue from 'vue'
import $dialog from './src/dialog.vue';
import sdDialog from './src/sdDialog.vue';

let DialogConstructor = Vue.extend($dialog)
let instance
let dialog = (options = {}) => {
    instance = new DialogConstructor({
        data: options
    })
    document.body.appendChild(instance.$mount().$el)
}

['alert', 'confirm', 'close'].forEach(type => {
    dialog[type] = options => {
        if(type !== 'close'){
            options.type = type;
            return new Promise((resolve, reject)=> {
                dialog(Object.assign(options, {
                    confirmBthFnc: resolve,
                    cancelBthFnc: reject
                }))
            })
        } else {
            instance.close()
        }
    }
})

sdDialog.install = function (Vue) {
    Vue.component(sdDialog.name, sdDialog);
};
export {dialog, sdDialog};