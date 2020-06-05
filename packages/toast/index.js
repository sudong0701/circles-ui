/**
 * @author sudong.duan
 * description: toast组件
 * Date: 20/3/23
 */

import Vue from 'vue'
import $toast from './src/toast.vue'
const ToastConstructor = Vue.extend($toast)

let instance

let toast  = (options = {})=> {
    //仅允许一个toast提示
    if(document.getElementById('sdToast')){
        return
    }
    instance = new ToastConstructor({
        data: options
    })
    document.body.appendChild(instance.$mount().$el)
}
['default','success','error','warning','close','loading'].forEach((type)=>{
    toast[type] = (options = {})=>{
        if(type !== 'close'){
            return new Promise((resolve, reject)=> {
                options.type = type
                toast(Object.assign(options, {
                    resolve: resolve,
                    reject: reject
                }))
            })
        }else {
            instance.close()
        }
    }
})
export default toast
