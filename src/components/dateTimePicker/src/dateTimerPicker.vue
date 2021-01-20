<template>
    <div class="cs_picker">
        <div class="cs_picker-title">
            <div class="cs_picker-title-left" @click="clickLeftBtn" :style="`color: ${leftButtonColor}`">{{leftButtonText}}</div>
            <div class="cs_picker-title-right" @click="clickRightBtn" :style="`color: ${rightButtonColor}`">{{rightButtonText}}</div>
            <div class="cs_picker-title-center">{{title}}</div>
        </div>
        <!--普通选择器组件-->
        <div class="cs_picker-box">
            <div :class="`cs_picker-column`" v-for="(list, key) in columns" :key="key">
                <div class="cs_picker-column-inner">
                    <div class="cs_picker-column-list" :ref="`cs_pickerList${key}`" @mousedown="touchStart($event, 'mouse')" @touchstart.stop="touchStart($event)"  @touchmove.stop="touchMove($event, key)" @touchend.stop="touchEnd($event, key)" :style="`transform: translate(0, ${(2 - (selectArr[key] - list.num)) * 44}px)`">
                        <div @click="selectItem(key, item, list.type)" v-for="(item, index) in list.values" :key="index" :class="`cs_picker-column-item ${item == selectArr[key] ? 'cs_picker-column-currItem' : ''}`">{{item}}{{list.name}}</div>
                    </div>
                </div>
            </div>
            <div class="cs_picker-column-overlay"></div>
            <div class="cs_picker-column-frame"></div>
        </div>
    </div>
</template>

<script>
    let startPageY
    export default {
        name: 'csDateTimePicker',
        data() {
            return {
                columns: [],
                selectArr: [],   //选中的下标
                minDateObj: {    //最小时间的对象
                    year: Number,
                    month: Number,
                    date: Number,
                    hour: Number,
                    minute: Number,
                    second: Number
                },
                maxDateObj: {    //最大时间的对象
                    year: Number,
                    month: Number,
                    date: Number,
                    hour: Number,
                    minute: Number,
                    second: Number
                }
            }
        },
        props: {
            isShowTitle: {   //是否展示title
                type: Boolean,
                default: true
            },
            title: {   //标题的文字
                type: String,
                default: '标题'
            },
            'right-button-text': {   //右边按钮文案
                type: String,
                default: '确认'
            },
            'left-button-text': {   //左边按钮文案
                type: String,
                default: '取消'
            },
            'right-button-color': {   //右边按钮颜色
                type: String,
                default: ''
            },
            'left-button-color': {   //左边按钮颜色
                type: String,
                default: ''
            },
            'minDate': {   //最小时间
                type: '',
                default: ()=> {
                    return new Date(new Date().getFullYear() - 10, new Date().getMonth(), new Date().getDate())
                }
            },
            'maxDate': {  //最大时间
                type: '',
                default: ()=> {
                    return new Date(new Date().getFullYear() + 10, new Date().getMonth(), new Date().getDate())
                }
            },
            type: {   //事件选择器类型
                type: String,
                default: 'date'
            },
            value: {
                type: ''
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            this.initData()
        },
        methods: {
            /**
             初始化页面
             @param
             @return
             */
            initData() {   //FIXME
                const minYear = new Date(this.minDate).getFullYear()
                const maxYear = new Date(this.maxDate).getFullYear()
                const minMonth = new Date(this.minDate).getMonth() + 1
                const maxMonth = new Date(this.maxDate).getMonth() + 1
                const minDay = new Date(this.minDate).getDate()
                const maxDay = new Date(this.maxDate).getDate()
                const minHour = new Date(this.minDate).getHours()
                const maxHour = new Date(this.maxDate).getHours()
                const minMinute = new Date(this.minDate).getMinutes()
                const maxMinute = new Date(this.maxDate).getMinutes()
                const minSecond = new Date(this.minDate).getSeconds()
                const maxSecond = new Date(this.maxDate).getSeconds()
                const minDateObj = {
                    year: minYear,
                    month: minMonth,
                    day: minDay,
                    hour: minHour,
                    minute: minMinute,
                    second: minSecond
                }
                const maxDateObj = {
                    year: maxYear,
                    month: maxMonth,
                    day: maxDay,
                    hour: maxHour,
                    minute: maxMinute,
                    second: maxSecond
                }
                this.minDateObj = minDateObj
                this.maxDateObj = maxDateObj
                let yearObj = {
                    type: 'year',
                    name: '年',
                    num: minYear,
                    values: this.getValues(minYear, maxYear)
                }, monthObj = {
                    type: 'month',
                    name: '月',
                }, dayObj = {
                    type: 'day',
                    name: '日',
                }, hourObj = {
                    type: 'hour',
                    name: '时',
                }, minuteObj = {
                    type: 'minute',
                    name: '分',
                }, secondObj = {
                    type: 'second',
                    name: '秒',
                }
                let yearValue, monthValue, dayValue, hourValue, minuteValue, secondValue, dateValue = this.value
                if(new Date(this.value).getTime() < new Date(this.minDate).getTime()) {
                    this.$emit('change', new Date(this.minDate))
                    dateValue = new Date(this.minDate)
                }
                if(new Date(this.value).getTime() > new Date(this.maxDate).getTime()) {
                    this.$emit('change', new Date(this.maxDate))
                    dateValue = new Date(this.maxDate)
                }
                if(!dateValue) {
                    if(minYear == maxYear) {
                        monthObj.values = this.getValues(minMonth, maxMonth)
                        if(minMonth == maxMonth) {
                            dayObj.values = this.getValues(minDay,maxDay)
                            if(minDay == maxDay) {
                                hourObj.values = this.getValues(minHour, maxHour)
                                if(minHour == maxHour) {
                                    minuteObj.values = this.getValues(minMinute, maxMinute)
                                    if(minMinute == maxMinute) {
                                        secondObj.values = this.getValues(minSecond, maxSecond)
                                    } else {
                                        secondObj.values = this.getValues(minSecond, 59)
                                    }
                                } else {
                                    minuteObj.values = this.getValues(minMinute, 59)
                                    secondObj.values = this.getValues(minSecond, 59)
                                }
                            } else {
                                hourObj.values = this.getValues(minHour, 23)
                                minuteObj.values = this.getValues(minMinute, 59)
                                secondObj.values = this.getValues(minSecond, 59)
                            }
                        } else {
                            dayObj.values = this.getValues(minDay,this.getCountDays(minYear, minMonth))
                            hourObj.values = this.getValues(minHour, 23)
                            minuteObj.values = this.getValues(minMinute, 59)
                            secondObj.values = this.getValues(minSecond, 59)
                        }
                    } else {
                        monthObj.values = this.getValues(minMonth, 12)
                        dayObj.values = this.getValues(minDay,this.getCountDays(minYear, minMonth))
                        hourObj.values = this.getValues(minHour, 23)
                        minuteObj.values = this.getValues(minMinute, 59)
                        secondObj.values = this.getValues(minSecond, 59)
                    }
                    monthObj.num = minMonth
                    dayObj.num = minDay
                    hourObj.num = minHour
                    minuteObj.num = minMinute
                    secondObj.num = minSecond
                } else {
                    yearValue = new Date(dateValue).getFullYear()
                    monthValue = new Date(dateValue).getMonth() + 1
                    dayValue = new Date(dateValue).getDate()
                    hourValue = new Date(dateValue).getHours()
                    minuteValue = new Date(dateValue).getMinutes()
                    secondValue = new Date(dateValue).getSeconds()
                    if(yearValue == minYear && yearValue == maxYear) {
                        monthObj.num = minMonth
                        monthObj.values = this.getValues(minMonth, maxMonth)
                        if(monthValue == minMonth && monthValue == maxMonth) {
                            dayObj.num = minDay
                            dayObj.values = this.getValues(minDay, maxDay)
                            if(dayValue == minDay && dayValue == maxDay) {
                                hourObj.num = minHour
                                hourObj.values = this.getValues(minHour, maxHour)
                                if(hourValue == minHour && hourValue == maxHour) {
                                    minuteObj.num = minMinute
                                    minuteObj.values = this.getValues(minMinute, maxMinute)
                                    if(minuteValue == minMinute && minuteValue == maxMinute) {
                                        secondObj.num = minMinute
                                        secondObj.values = this.getValues(minSecond, maxSecond)
                                    } else {
                                        if(minuteValue == minMinute) {
                                            secondObj.num = minMinute
                                            secondObj.values = this.getValues(minSecond, 59)
                                        } else if(minuteValue == maxMinute) {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, maxSecond)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    }
                                } else {
                                    if(hourValue == minHour) {
                                        minuteObj.num = minMinute
                                        minuteObj.values = this.getValues(minMinute, 59)
                                        if(minuteValue == minMinute) {
                                            secondObj.num = minSecond
                                            secondObj.values = this.getValues(minSecond, 59)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else if(hourValue == maxHour) {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, maxMinute)
                                        if(minuteValue == maxMinute) {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, maxSecond)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.num = 0
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                }
                            } else {
                                if(dayValue == minDay) {
                                    hourObj.num = minHour
                                    hourObj.values = this.getValues(minHour, 23)
                                    if(hourValue == minHour) {
                                        minuteObj.num = minMinute
                                        minuteObj.values = this.getValues(minMinute, 59)
                                        if(minuteValue == minMinute) {
                                            secondObj.num = minSecond
                                            secondObj.values = this.getValues(minSecond, 59)
                                        } else{
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.num = 0
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                } else if(dayValue == maxDay) {
                                    hourObj.num = 0
                                    hourObj.values = this.getValues(0, maxHour)
                                    if(hourValue == maxHour) {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, maxMinute)
                                        if(minuteValue == maxMinute) {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, maxSecond)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.num = 0
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                } else {
                                    hourObj.num = 0
                                    hourObj.values = this.getValues(0, 59)
                                    minuteObj.num = 0
                                    minuteObj.values = this.getValues(0, 59)
                                    secondObj.num = 0
                                    secondObj.values = this.getValues(0, 59)
                                }
                            }
                        } else {
                            if(monthValue == minMonth) {
                                dayObj.num = minDay
                                dayObj.values = this.getValues(minDay, this.getCountDays(yearValue, monthValue))
                                if(dayValue == minDay) {
                                    hourObj.num = minHour
                                    hourObj.values = this.getValues(minHour, 23)
                                    if(hourValue == minHour) {
                                        minuteObj.num = minMinute
                                        minuteObj.values = this.getValues(minMinute, 59)
                                        if(secondValue == minSecond) {
                                            secondObj.num = minSecond
                                            secondObj.values = this.getValues(minSecond, 59)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.num = 0
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                } else {
                                    hourObj.num = 0
                                    hourObj.values = this.getValues(0, 23)
                                    minuteObj.num = 0
                                    minuteObj.values = this.getValues(0, 59)
                                    secondObj.num = 0
                                    secondObj.values = this.getValues(0, 59)
                                }
                            } else if(monthValue == maxMonth) {
                                dayObj.num = 1
                                dayObj.values = this.getValues(1, maxDay)
                                if(dayValue == maxDay) {
                                    hourObj.num = 0
                                    hourObj.values = this.getValues(0, maxHour)
                                    if(hourValue == maxHour) {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, maxMinute)
                                        if(minuteValue == maxMinute) {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, maxSecond)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.num = 0
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                } else {
                                    hourObj.num = 0
                                    hourObj.values = this.getValues(0, 23)
                                    minuteObj.num = 0
                                    minuteObj.values = this.getValues(0, 59)
                                    secondObj.num = 0
                                    secondObj.values = this.getValues(0, 59)
                                }
                            } else {
                                dayObj.num = 1
                                dayObj.values = this.getValues(1, this.getCountDays(yearValue, monthValue))
                                minuteObj.num = 0
                                minuteObj.values = this.getValues(0, 59)
                                secondObj.num = 0
                                secondObj.values = this.getValues(0, 59)
                            }
                        }
                    } else {
                        if(yearValue == minYear) {
                            monthObj.num = minMonth
                            monthObj.values = this.getValues(minMonth, 12)
                            if(monthValue == minMonth) {
                                dayObj.num = minDay
                                dayObj.values = this.getValues(minDay,this.getCountDays(yearValue, monthValue))
                                if(dayValue == minDay) {
                                    hourObj.num = minHour
                                    hourObj.values = this.getValues(minHour, 23)
                                    if(hourValue == minHour) {
                                        minuteObj.num = minMinute
                                        minuteObj.values = this.getValues(minMinute, 59)
                                        if(minuteValue == minMinute) {
                                            secondObj.num = minSecond
                                            secondObj.values = this.getValues(minSecond, 59)
                                        } else {
                                            secondObj.num = 0
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.num = 0
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.num = 0
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                } else {
                                    hourObj.num = 0
                                    hourObj.values = this.getValues(0, 23)
                                    minuteObj.num = 0
                                    minuteObj.values = this.getValues(0, 59)
                                    secondObj.num = 0
                                    secondObj.values = this.getValues(0, 59)
                                }
                            } else {
                                dayObj.num = 1
                                dayObj.values = this.getValues(1,this.getCountDays(yearValue, monthValue))
                                hourObj.num = 0
                                hourObj.values = this.getValues(0, 23)
                                minuteObj.num = 0
                                minuteObj.values = this.getValues(0, 59)
                                secondObj.num = 0
                                secondObj.values = this.getValues(0, 59)
                            }
                        } else if(yearValue == maxYear) {
                            monthObj.num = 1
                            dayObj.num = 1
                            hourObj.num = 0
                            minuteObj.num = 0
                            secondObj.num = 0
                            monthObj.values = this.getValues(1, maxMonth)
                            if(monthValue == maxMonth) {
                                dayObj.values = this.getValues(1, maxDay)
                                if(dayValue == maxDay) {
                                    hourObj.values = this.getValues(1, maxHour)
                                    if(hourValue == maxHour) {
                                        minuteObj.values = this.getValues(1, maxMinute)
                                        if(minuteValue == maxMinute) {
                                            secondObj.values = this.getValues(1, maxSecond)
                                        } else {
                                            secondObj.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        minuteObj.values = this.getValues(0, 59)
                                        secondObj.values = this.getValues(0, 59)
                                    }
                                } else {
                                    hourObj.values = this.getValues(0, 23)
                                    minuteObj.values = this.getValues(0, 59)
                                    secondObj.values = this.getValues(0, 59)
                                }
                            } else {
                                dayObj.values = this.getValues(1, this.getCountDays(yearValue,monthValue))
                                hourObj.values = this.getValues(0, 23)
                                minuteObj.values = this.getValues(0, 59)
                                secondObj.values = this.getValues(0, 59)
                            }
                        } else {
                            monthObj.num = 1
                            dayObj.num = 1
                            hourObj.num = 0
                            minuteObj.num = 0
                            secondObj.num = 0
                            monthObj.values = this.getValues(1, 12)
                            dayObj.values = this.getValues(1, this.getCountDays(yearValue,monthValue))
                            hourObj.values = this.getValues(0, 23)
                            minuteObj.values = this.getValues(0, 59)
                            secondObj.values = this.getValues(0, 59)
                        }
                    }
                }
                if(this.type === 'year-month') {
                    this.columns.push(yearObj, monthObj)
                    if(!dateValue) {
                        this.selectArr = [minYear, minMonth]
                    } else {
                        this.selectArr = [yearValue, monthValue]
                    }
                    //年月日
                } else if(this.type === 'date') {
                    this.columns.push(yearObj, monthObj, dayObj)
                    if(!dateValue) {
                        this.selectArr = [minYear, minMonth, minDay]
                    } else {
                        this.selectArr = [yearValue, monthValue, dayValue]
                    }
                    //年月日时分秒
                } else if(this.type === 'datetime') {
                    this.columns.push(yearObj, monthObj, dayObj, hourObj, minuteObj, secondObj)
                    if(!dateValue) {
                        this.selectArr = [minYear, minMonth, minDay, minHour, minMinute, minSecond]
                    } else {
                        this.selectArr = [yearValue, monthValue, dayValue, hourValue, minuteValue, secondValue]
                    }
                }
                console.log(this.columns)
                console.log(this.selectArr)
            },
            /**
             根据选择变化选项
             @param {Number} key 列的索引
             @param {Number} item 行的值
             @return
             */
            changeData(key, item) {
                const minDateObj = this.minDateObj
                const maxDateObj = this.maxDateObj
                let columns = JSON.parse(JSON.stringify(this.columns))
                let selectArr = [...this.selectArr]
                if(key === 0) {
                    if(this.type === 'year-month' || this.type === 'date' || this.type === 'datetime') {
                        const year = item
                        const month = selectArr[1] - 1
                        let day = selectArr[2] ? selectArr[2] : 1
                        const hour = selectArr[3] ? selectArr[3] : 0
                        const minute = selectArr[4] ? selectArr[4] : 0
                        const second = selectArr[5] ? selectArr[5] : 0
                        let currTime = new Date(year, month, day, hour, minute, second).getTime()
                        const monthList = columns[1] ? columns[1] : {}
                        const dayList = columns[2] ? columns[2] : {}
                        const hourList = columns[3] ? columns[3] : {}
                        const minuteList = columns[4] ? columns[4] : {}
                        const secondList = columns[5] ? columns[5] : {}
                        let monthDay = this.getCountDays(item, selectArr[1])
                        if(this.type !== 'year-month' && monthDay < selectArr[2]) {
                            this.initTransform(2)
                            this.$set(this.selectArr, 2, monthDay)
                            day = monthDay
                            currTime = new Date(year, month, monthDay, hour, minute, second).getTime()
                        }
                        //如果时间小于最小时间()
                        if(currTime < new Date(this.minDate).getTime()) {
                            //改变月份
                            monthList.values = this.getValues((minDateObj.month), 12)
                            monthList.num = minDateObj.month
                            this.initTransform(1)
                            this.$set(this.selectArr, 1, minDateObj.month)
                            //改变天数
                            dayList.values = this.getValues((minDateObj.day), this.getCountDays(minDateObj.year, minDateObj.month))
                            dayList.num = minDateObj.day
                            this.initTransform(2)
                            this.$set(this.selectArr, 2, minDateObj.day)
                            //改变小时
                            hourList.values = this.getValues((minDateObj.hour), 23)
                            hourList.num = minDateObj.hour
                            this.initTransform(3)
                            this.$set(this.selectArr, 3, minDateObj.hour)
                            //改变分钟
                            minuteList.values = this.getValues((minDateObj.minute), 59)
                            minuteList.num = minDateObj.minute
                            this.initTransform(4)
                            this.$set(this.selectArr, 4, minDateObj.minute)
                            //改变秒数
                            secondList.values = this.getValues((minDateObj.second), 59)
                            secondList.num = minDateObj.second
                            this.initTransform(5)
                            this.$set(this.selectArr, 5, minDateObj.second)

                            //如果时间大于最大时间
                        } else if(currTime > new Date(this.maxDate).getTime()){
                            //改变月数
                            monthList.values = this.getValues(1, maxDateObj.month)
                            monthList.num = 1
                            this.initTransform(1)
                            this.$set(this.selectArr, 1, maxDateObj.month)
                            //改变天数
                            dayList.values = this.getValues(1, maxDateObj.day)
                            dayList.num = 1
                            this.initTransform(2)
                            this.$set(this.selectArr, 2, maxDateObj.day)
                            //改变小时
                            hourList.values = this.getValues(0, (maxDateObj.hour))
                            hourList.num = 0
                            this.initTransform(3)
                            this.$set(this.selectArr, 3, maxDateObj.hour)
                            //改变分钟
                            minuteList.values = this.getValues(0, (maxDateObj.minute))
                            minuteList.num = 0
                            this.initTransform(4)
                            this.$set(this.selectArr, 4, maxDateObj.minute)
                            //改变秒数
                            secondList.values = this.getValues(0, (maxDateObj.second))
                            secondList.num = 0
                            this.initTransform(5)
                            this.$set(this.selectArr, 5, maxDateObj.second)

                            //如果变化后的时间既不大于最大时间也不小于最小时间
                        } else {
                            if(year == minDateObj.year) {
                                monthList.values = this.getValues((minDateObj.month), 12)
                                monthList.num = minDateObj.month
                                if(selectArr[1] == minDateObj.month) {
                                    dayList.values = this.getValues((minDateObj.day), this.getCountDays(minDateObj.year, minDateObj.month))
                                    dayList.num = minDateObj.day
                                    if(selectArr[2] == minDateObj.day) {
                                        hourList.values = this.getValues((minDateObj.hour), 23)
                                        hourList.num = minDateObj.hour
                                        if(selectArr[3] == minDateObj.hour) {
                                            minuteList.values = this.getValues(minDateObj.minute, 59)
                                            minuteList.num = minDateObj.minute
                                            if(selectArr[4] == minDateObj.minute) {
                                                secondList.values = this.getValues(minDateObj.second, 59)
                                                secondList.num = minDateObj.second
                                            } else {
                                                secondList.values = this.getValues(0, 59)
                                                secondList.num = 0
                                            }
                                        } else {
                                            minuteList.values = this.getValues(0, 59)
                                            minuteList.num = 0
                                        }
                                    } else {
                                        hourList.values = this.getValues(0, 23)
                                        hourList.num = 0
                                    }
                                } else {
                                    dayList.values = this.getValues(1, this.getCountDays(year, selectArr[1]))
                                    dayList.num = 1
                                }
                            } else if(year == maxDateObj.year) {
                                monthList.values = this.getValues(1, maxDateObj.month)
                                if(selectArr[1] == maxDateObj.month) {
                                    dayList.values = this.getValues(1, maxDateObj.day)
                                    if(selectArr[2] == maxDateObj.day) {
                                        hourList.values = this.getValues(0, maxDateObj.hour)
                                        if(selectArr[3] == maxDateObj.hour) {
                                            minuteList.values = this.getValues(0, maxDateObj.minute)
                                            if(selectArr[4] == maxDateObj.minute) {
                                                secondList.values = this.getValues(0, maxDateObj.second)
                                            } else {
                                                secondList.values = this.getValues(0, 59)
                                            }
                                        } else {
                                            minuteList.values = this.getValues(0, 59)
                                        }
                                    } else {
                                        hourList.values = this.getValues(0, 23)
                                    }
                                } else {
                                    dayList.values = this.getValues(1, this.getCountDays(year, selectArr[1]))
                                }
                                monthList.num = 1
                                dayList.num = 1
                                hourList.num = 0
                                minuteList.num = 0
                                secondList.num = 0
                            } else {
                                monthList.values = this.getValues(1, 12)
                                monthList.num = 1
                                dayList.values = this.getValues(1, this.getCountDays(year, selectArr[1]))
                                dayList.num = 1
                                hourList.values = this.getValues(0, 23)
                                hourList.num = 0
                                minuteList.values = this.getValues(0, 59)
                                minuteList.num = 0
                                secondList.values = this.getValues(0, 59)
                                secondList.num = 0
                            }
                        }
                        this.$set(this.columns, 1, monthList)
                        if(this.type === 'date' || this.type === 'datetime') {
                            this.$set(this.columns, 2, dayList)
                        }
                        if(this.type === 'datetime') {
                            this.$set(this.columns, 3, hourList)
                            this.$set(this.columns, 4, minuteList)
                            this.$set(this.columns, 5, secondList)
                        }
                    }
                } else if(key === 1) {
                    const year = selectArr[0]
                    const month = item - 1
                    let day = selectArr[2] ? selectArr[2] : 1
                    const hour = selectArr[3] ? selectArr[3] : 0
                    const minute = selectArr[4] ? selectArr[4] : 0
                    const second = selectArr[5] ? selectArr[5] : 0
                    let currTime = new Date(year, month, day, hour, minute, second).getTime()
                    const dayList = columns[2] ? columns[2] : {}
                    const hourList = columns[3] ? columns[3] : {}
                    const minuteList = columns[4] ? columns[4] : {}
                    const secondList = columns[5] ? columns[5] : {}
                    const monthDay = this.getCountDays(year, item)
                    if(monthDay < selectArr[2]) {
                        this.initTransform(2)
                        this.$set(this.selectArr, 2 ,monthDay)
                        day = monthDay
                        currTime = new Date(year, month, monthDay, hour, minute, second).getTime()
                    }
                    //如果改变后的时间小于最小时间
                    if(currTime < new Date(this.minDate).getTime()) {
                        //改变天数
                        dayList.values = this.getValues((minDateObj.day), this.getCountDays(minDateObj.year, minDateObj.month))
                        dayList.num = minDateObj.day
                        this.initTransform(2)
                        this.$set(this.selectArr, 2, minDateObj.day)
                        //改变小时
                        hourList.values = this.getValues((minDateObj.hour), 23)
                        hourList.num = minDateObj.hour
                        this.initTransform(3)
                        this.$set(this.selectArr, 3, minDateObj.hour)
                        //改变分钟
                        minuteList.values = this.getValues((minDateObj.minute), 59)
                        minuteList.num = minDateObj.minute
                        this.initTransform(4)
                        this.$set(this.selectArr, 4, minDateObj.minute)
                        //改变秒数
                        secondList.values = this.getValues((minDateObj.second), 59)
                        secondList.num = minDateObj.second
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, minDateObj.second)
                        //如果改变后的时间大于最小时间
                    } else if(currTime > new Date(this.maxDate).getTime()) {
                        //改变天数
                        dayList.values = this.getValues(1, maxDateObj.day)
                        dayList.num = 1
                        this.initTransform(2)
                        this.$set(this.selectArr, 2, maxDateObj.day)
                        //改变小时
                        hourList.values = this.getValues(0, (maxDateObj.hour))
                        hourList.num = 0
                        this.initTransform(3)
                        this.$set(this.selectArr, 3, maxDateObj.hour)
                        //改变分钟
                        minuteList.values = this.getValues(0, (maxDateObj.minute))
                        minuteList.num = 0
                        this.initTransform(4)
                        this.$set(this.selectArr, 4, maxDateObj.minute)
                        //改变秒数
                        secondList.values = this.getValues(0, (maxDateObj.second))
                        secondList.num = 0
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, maxDateObj.second)
                        //如果改变后的时间既不小于最小时间又不大于最大时间
                    } else {
                        if(year == minDateObj.year && item == minDateObj.month) {
                            dayList.values = this.getValues((minDateObj.day), this.getCountDays(minDateObj.year, minDateObj.month))
                            dayList.num = minDateObj.day
                            if(day == minDateObj.day) {
                                hourList.values = this.getValues(minDateObj.hour, 23)
                                hourList.num = minDateObj.hour
                                if(hour == minDateObj.hour) {
                                    minuteList.values = this.getValues(minDateObj.minute, 59)
                                    minuteList.num = minDateObj.minute
                                    if(minute == minDateObj.minute) {
                                        secondList.values = this.getValues(minDateObj.second, 59)
                                        secondList.num = minDateObj.second
                                    } else {
                                        secondList.values = this.getValues(0, 59)
                                        secondList.num = 0
                                    }
                                } else {
                                    minuteList.values = this.getValues(0, 59)
                                    minuteList.num = 0
                                }
                            } else {
                                hourList.values = this.getValues(0, 23)
                                hourList.num = 0
                            }
                        } else if(year == maxDateObj.year && item == maxDateObj.month) {
                            dayList.values = this.getValues(1, maxDateObj.day)
                            if(selectArr[2] == maxDateObj.day) {
                                hourList.values = this.getValues(0, maxDateObj.hour)
                                if(selectArr[3] == maxDateObj.hour) {
                                    minuteList.values = this.getValues(0, maxDateObj.minute)
                                    if(selectArr[4] == maxDateObj.minute) {
                                        secondList.values = this.getValues(0, maxDateObj.second)
                                    } else {
                                        secondList.values = this.getValues(0, 59)
                                    }
                                } else {
                                    minuteList.values = this.getValues(0, 59)
                                }
                            } else {
                                hourList.values = this.getValues(0, 23)
                            }
                            dayList.num = 1
                            hourList.num = 0
                            minuteList.num = 0
                            secondList.num = 0
                        } else {
                            dayList.values = this.getValues(1, this.getCountDays(year, item))
                            dayList.num = 1
                            hourList.values = this.getValues(0, 23)
                            hourList.num = 0
                            minuteList.values = this.getValues(0, 59)
                            minuteList.num = 0
                            secondList.values = this.getValues(0, 59)
                            secondList.num = 0
                        }
                    }
                    if(this.type === 'date' || this.type === 'datetime') {
                        this.$set(this.columns, 2, dayList)
                    }
                    if(this.type === 'datetime') {
                        this.$set(this.columns, 3, hourList)
                        this.$set(this.columns, 4, minuteList)
                        this.$set(this.columns, 5, secondList)
                    }
                } else if(key === 2) {
                    const year = selectArr[0]
                    const month = selectArr[1] - 1
                    const day = item
                    const hour = selectArr[3] ? selectArr[3] : 0
                    const minute = selectArr[4] ? selectArr[4] : 0
                    const second = selectArr[5] ? selectArr[5] : 0
                    let currTime = new Date(year, month, day, hour, minute, second).getTime()
                    const hourList = columns[3] ? columns[3] : {}
                    const minuteList = columns[4] ? columns[4] : {}
                    const secondList = columns[5] ? columns[5] : {}
                    if(currTime < new Date(this.minDate).getTime()) {
                        //改变小时
                        hourList.values = this.getValues((minDateObj.hour), 23)
                        hourList.num = minDateObj.hour
                        this.initTransform(3)
                        this.$set(this.selectArr, 3, minDateObj.hour)
                        //改变分钟
                        minuteList.values = this.getValues((minDateObj.minute), 59)
                        minuteList.num = minDateObj.minute
                        this.initTransform(4)
                        this.$set(this.selectArr, 4, minDateObj.minute)
                        //改变秒数
                        secondList.values = this.getValues((minDateObj.second), 59)
                        secondList.num = minDateObj.second
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, minDateObj.second)
                    } else if(currTime > new Date(this.maxDate).getTime()) {
                        //改变小时
                        hourList.values = this.getValues(0, (maxDateObj.hour))
                        hourList.num = 0
                        this.initTransform(3)
                        this.$set(this.selectArr, 3, maxDateObj.hour)
                        //改变分钟
                        minuteList.values = this.getValues(0, (maxDateObj.minute))
                        minuteList.num = 0
                        this.initTransform(4)
                        this.$set(this.selectArr, 4, maxDateObj.minute)
                        //改变秒数
                        secondList.values = this.getValues(0, (maxDateObj.second))
                        secondList.num = 0
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, maxDateObj.second)
                        //如果改变后的时间既不小于最小时间又不大于最大时间
                    } else {
                        if(year == minDateObj.year && selectArr[1] == minDateObj.month && item == minDateObj.day) {
                            hourList.values = this.getValues(minDateObj.hour, 23)
                            hourList.num = minDateObj.hour
                            if(hour == minDateObj.hour) {
                                minuteList.values = this.getValues(minDateObj.minute, 59)
                                minuteList.num = minDateObj.minute
                                if(minute == minDateObj.minute) {
                                    secondList.values = this.getValues(minDateObj.second, 59)
                                    secondList.num = minDateObj.second
                                } else {
                                    secondList.values = this.getValues(0, 59)
                                    secondList.num = 0
                                }
                            } else {
                                minuteList.values = this.getValues(0, 59)
                                minuteList.num = 0
                            }
                        } else if(year == maxDateObj.year && selectArr[1] == maxDateObj.month && item == maxDateObj.day) {
                            hourList.values = this.getValues(0, maxDateObj.hour)
                            if(selectArr[3] == maxDateObj.hour) {
                                minuteList.values = this.getValues(0, maxDateObj.minute)
                                if(selectArr[4] == maxDateObj.minute) {
                                    secondList.values = this.getValues(0, maxDateObj.second)
                                } else {
                                    secondList.values = this.getValues(0, 59)
                                }
                            } else {
                                minuteList.values = this.getValues(0, 59)
                            }
                            hourList.num = 0
                            minuteList.num = 0
                            secondList.num = 0
                        } else {
                            hourList.values = this.getValues(0, 23)
                            hourList.num = 0
                            minuteList.values = this.getValues(0, 59)
                            minuteList.num = 0
                            secondList.values = this.getValues(0, 59)
                            secondList.num = 0
                        }
                    }
                    if(this.type === 'datetime') {
                        this.$set(this.columns, 3, hourList)
                        this.$set(this.columns, 4, minuteList)
                        this.$set(this.columns, 5, secondList)
                    }
                } else if(key === 3) {
                    const year = selectArr[0]
                    const month = selectArr[1] - 1
                    const day = selectArr[2]
                    const hour = item
                    const minute = selectArr[4] ? selectArr[4] : 0
                    const second = selectArr[5] ? selectArr[5] : 0
                    let currTime = new Date(year, month, day, hour, minute, second).getTime()
                    const minuteList = columns[4] ? columns[4] : {}
                    const secondList = columns[5] ? columns[5] : {}
                    if(currTime < new Date(this.minDate).getTime()) {
                        //改变分钟
                        minuteList.values = this.getValues((minDateObj.minute), 59)
                        minuteList.num = minDateObj.minute
                        this.initTransform(4)
                        this.$set(this.selectArr, 4, minDateObj.minute)
                        //改变秒数
                        secondList.values = this.getValues((minDateObj.second), 59)
                        secondList.num = minDateObj.second
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, minDateObj.second)
                    } else if(currTime > new Date(this.maxDate).getTime()) {
                        //改变分钟
                        minuteList.values = this.getValues(0, (maxDateObj.minute))
                        minuteList.num = 0
                        this.initTransform(4)
                        this.$set(this.selectArr, 4, maxDateObj.minute)
                        //改变秒数
                        secondList.values = this.getValues(0, (maxDateObj.second))
                        secondList.num = 0
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, maxDateObj.second)
                        //如果改变后的时间既不小于最小时间又不大于最大时间
                    } else {
                        if(year == minDateObj.year && selectArr[1] == minDateObj.month && day == minDateObj.day && item == minDateObj.hour) {
                            minuteList.values = this.getValues(minDateObj.minute, 59)
                            minuteList.num = minDateObj.minute
                            if(minute == minDateObj.minute) {
                                secondList.values = this.getValues(minDateObj.second, 59)
                                secondList.num = minDateObj.second
                            } else {
                                secondList.values = this.getValues(0, 59)
                                secondList.num = 0
                            }
                        } else if(year == maxDateObj.year && selectArr[1] == maxDateObj.month && day == maxDateObj.day && item == maxDateObj.hour) {
                            minuteList.values = this.getValues(0, maxDateObj.minute)
                            if(selectArr[4] == maxDateObj.minute) {
                                secondList.values = this.getValues(0, maxDateObj.second)
                            } else {
                                secondList.values = this.getValues(0, 59)
                            }
                            minuteList.num = 0
                            secondList.num = 0
                        } else {
                            minuteList.values = this.getValues(0, 59)
                            minuteList.num = 0
                            secondList.values = this.getValues(0, 59)
                            secondList.num = 0
                        }
                    }
                    if(this.type === 'datetime') {
                        this.$set(this.columns, 4, minuteList)
                        this.$set(this.columns, 5, secondList)
                    }
                } else if(key === 4) {
                    const year = selectArr[0]
                    const month = selectArr[1] - 1
                    const day = selectArr[2]
                    const hour = selectArr[3]
                    const minute = item
                    const second = selectArr[5] ? selectArr[5] : 0
                    let currTime = new Date(year, month, day, hour, minute, second).getTime()
                    const secondList = columns[5] ? columns[5] : {}
                    if(currTime < new Date(this.minDate).getTime()) {
                        //改变秒数
                        secondList.values = this.getValues((minDateObj.second), 59)
                        secondList.num = minDateObj.second
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, minDateObj.second)
                    } else if(currTime > new Date(this.maxDate).getTime()) {
                        //改变秒数
                        secondList.values = this.getValues(0, (maxDateObj.second))
                        secondList.num = maxDateObj.second
                        this.initTransform(5)
                        this.$set(this.selectArr, 5, maxDateObj.second)
                        //如果改变后的时间既不小于最小时间又不大于最大时间
                    } else {
                        if(year == minDateObj.year && selectArr[1] == minDateObj.month && day == minDateObj.day && hour == minDateObj.hour && item == minDateObj.minute) {
                            secondList.values = this.getValues(minDateObj.second, 59)
                            secondList.num = minDateObj.second
                        } else if(year == maxDateObj.year && selectArr[1] == maxDateObj.month && day == maxDateObj.day && hour == maxDateObj.hour && item == maxDateObj.minute) {
                            secondList.values = this.getValues(0, maxDateObj.second)
                            secondList.num = 0
                        } else {
                            secondList.values = this.getValues(0, 59)
                            secondList.num = 0
                        }
                    }
                    if(this.type === 'datetime') {
                        this.$set(this.columns, 5, secondList)
                    }
                }
            },
            /**
             点击选项时触发
             @param {Number} key 列的索引
             @param {Number} item 行的值
             @return
             */
            selectItem(key, item) {
                if(item === this.selectArr[key]){
                    return
                }
                this.changeData(key, item)
                this.$set(this.selectArr, key, item)
                const pickerList = this.$refs[`cs_pickerList${key}`][0]
                pickerList.style.transition="-webkit-transform 150ms ease-out";
                this.$emit('change',this.getValue())
            },
            /**
             点击左边按钮事件
             @param
             @return
             */
            clickLeftBtn() {
                this.$emit('clickLeftBtn', this.getValue())
            },
            /**
             点击右边按钮事件
             @param
             @return
             */
            clickRightBtn() {
                this.$emit('clickRightBtn', this.getValue())
            },
            /**
             触摸移动事件
             @param {dom} e 触摸开始事件参数
             @return
             */
            touchStart(e, type) {
                if(type === 'mouse') {
                    startPageY = e.pageY
                } else {
                    startPageY = e.targetTouches[0].pageY
                }
                e.stopPropagation()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸移动事件参数
             @param {Number} key 列的下标
             @return
             */
            touchMove(e, key) {
                const pickerList = this.$refs[`cs_pickerList${key}`][0]
                pickerList.style.transform=`translate(0, ${e.targetTouches[0].pageY - startPageY + ((2 - (this.selectArr[key] - this.columns[key].num)) * 44)}px)`;
                e.stopPropagation()
                e.preventDefault()
            },
            /**
             触摸事件结束事件
             @param {dom} e 触摸结束事件参数
             @param {Number} key 列的下标
             @return
             */
            touchEnd(e, key) {
                const endPageY = e.changedTouches[0].pageY
                const list = this.columns[key]
                if(startPageY === endPageY){
                    return
                } else {
                    let currIndex = Math.round((startPageY - endPageY) / 44) + (this.selectArr[key] - list.num)   //这里改动了
                    const pickerList = this.$refs[`cs_pickerList${key}`][0]
                    if(currIndex < 0){
                        currIndex = 0
                        pickerList.style.transition="-webkit-transform 150ms ease-out"
                    } else if(currIndex > list.values.length - 1) {
                        currIndex = list.values.length - 1
                        pickerList.style.transition="-webkit-transform 150ms ease-out"
                    } else {
                        pickerList.style.transition="-webkit-transform 150ms ease-out"
                    }
                    if((this.selectArr[key] - list.num) == currIndex) {
                        pickerList.style.webkitTransform=`translate(0, ${(2 - currIndex) * 44}px)`;
                    } else {
                        this.changeData(key, list.num + currIndex)
                    }
                    this.$set(this.selectArr, key, list.num + currIndex)
                    //选项改变时触发
                    this.$emit('change',this.getValue())
                }
            },
            /**
             获取选中的值
             @param
             @return
             */
            getValue() {
                const selectArr = this.selectArr
                if(this.type === 'year-month') {
                    return new Date(selectArr[0], selectArr[1] - 1)
                } else if(this.type === 'date') {
                    return new Date(selectArr[0], selectArr[1] - 1, selectArr[2])
                } else if(this.type === 'datetime') {
                    return new Date(selectArr[0], selectArr[1] - 1, selectArr[2], selectArr[3], selectArr[4], selectArr[5])
                }
                return new Date()
            },
            /**
             获取月份的天数
             @param {Number} year 年份
             @param {Number} month 月份
             @return {Number} 天数
             */
            getCountDays(year, month) {
                return new Date(year, month, 0).getDate()
            },
            /**
             获取时间信息数组
             @param {Number} min 最小值
             @param {Number} max 最大值
             @return {Array} 对应格式的数组
             */
            getValues(min, max) {
                let dateArr = []
                for(let i= min; i<= max; i++) {
                    dateArr.push(`${i}`)
                }
                return dateArr
            },
            /**
             初始化动画
             @param {Number} index 列数
             */
            initTransform(index) {
                if( this.$refs[`cs_pickerList${index}`]) {
                    const pickerList = this.$refs[`cs_pickerList${index}`][0]
                    pickerList.style.transition="-webkit-transform 0ms ease-out"
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .cs_picker {
        .cs_picker-title{
            height: 0.88rem;
            border-bottom: 0.01rem solid #f4f4f4;
            background-color: #fff;
            .cs_picker-title-left{
                float: left;
                height: 100%;
                padding: 0 0.32rem;
                cursor: pointer;
                font-size: 0.28rem;
                background-color: transparent;
                line-height: .88rem;
            }
            .cs_picker-title-right{
                float: right;
                height: 100%;
                padding: 0 0.32rem;
                cursor: pointer;
                color: var(--color);
                font-size: 0.28rem;
                line-height: .88rem;
            }
            .cs_picker-title-center{
                font-weight: 500;
                font-size: 0.32rem;
                text-align: center;
                line-height: 0.88rem;
            }
            .cs_picker-title-left:active {
                background-color: #f2f2f2;
            }
            .cs_picker-title-right:active {
                background-color: #f2f2f2;
            }
        }
        .cs_picker-box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            cursor: grab;
            user-select: none;
            .cs_picker-column {
                flex: 1;
                position: relative;
                height: 220px;
                overflow: hidden;
                .cs_picker-column-inner {
                    width: 100%;
                    height: 100%;
                    overflow-y: hidden;
                    box-sizing: content-box;
                    .cs_picker-column-list {
                        width: 100%;
                        transform: translate(0, 88px);
                        .cs_picker-column-item {
                            width: 100%;  height: 44px;
                            line-height: 44px;
                            text-align: center;
                            font-weight: 500;
                            font-size: 0.28rem;
                        }
                        .cs_picker-column-currItem {
                            font-size: 0.32rem;
                        }
                    }
                }
            }
            .cs_picker-column-overlay {
                position: absolute;
                left: 0; top: 0;
                height: 100%; width: 100%;
                z-index: 2;
                background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
                background-size: 100% 88px;
                background-position: top, bottom;
                background-repeat: no-repeat;
                pointer-events: none
            }
            .cs_picker-column-frame {
                position: absolute;
                top: 50%;
                left: 0;
                z-index: 3;
                width: 100%;
                height: 44px;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                pointer-events: none;
            }
            .cs_picker-column-frame::after {
                position: absolute;
                box-sizing: border-box;
                content: ' ';
                pointer-events: none;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
                border: 1px solid #ebedf0;
                -webkit-transform: scale(0.5);
                transform: scale(0.5)
            }
        }
    }
</style>