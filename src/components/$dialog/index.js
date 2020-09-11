import Vue from 'vue'
import '../main'
import $dialog from '../dialog/src/dialog.vue';

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
export default $dialog