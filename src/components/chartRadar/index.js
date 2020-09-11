/**
 * @author sudong.duan
 * description: 雷达图组件
 * Date: 20/3/23
 */
import $chartRadar from './src/chartRadar.vue'
import Vue from 'vue'
import '../main'
const chartRadarConstructor = Vue.extend($chartRadar)

let instance

let chartRadar = (options = {})=> {
    instance = new chartRadarConstructor({
        data: options
    })
    document.body.appendChild(instance.$mount().$el)
}

['draw'].forEach((type)=> {
    chartRadar[type] = (options = {})=> {
        return new Promise((resolve, reject)=> {
            chartRadar(Object.assign(options, {
                finish: resolve,
                fail: reject
            }))
        })
    }
})

export default chartRadar