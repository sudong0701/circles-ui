import '../main'
import DateTimePicker from './src/dateTimerPicker.vue'

DateTimePicker.install = function (Vue) {
    Vue.component(DateTimePicker.name, DateTimePicker)
}
export default DateTimePicker