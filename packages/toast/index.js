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
['success','error','warning','close','loading'].forEach((type)=>{
    toast[type] = (options = {})=>{
        if(type !== 'close'){
            console.log(type)
            options.type = type
            return toast(options)
        }else {
            instance.close()
        }
    }
})
export default toast
