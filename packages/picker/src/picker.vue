<!--
 * 文件描述：picker组件
 * 创建人：段素栋
 * 创建时间：2020.3.30
-->
<template>
    <div class="md_picker">
        <div class="md_picker-title">
            <div class="md_picker-title-left" @click="clickLeftBtn">{{leftButtonText}}</div>
            <div class="md_picker-title-right" @click="clickRightBtn">{{rightButtonText}}</div>
            <div class="md_picker-title-center">{{title}}</div>
        </div>
        <!--普通选择器组件-->
        <div class="md_picker-box" v-if="!isCascade">
            <div :class="`md_picker-column`" v-for="(list, key) in columns" :key="key">
                <div class="md_picker-column-inner">
                    <div class="md_picker-column-list" :ref="`md_pickerList${key}`" @touchstart.stop="touchStart($event)" @touchmove.stop="touchMove($event, key)" @touchend.stop="touchEnd($event, key)" :style="`transform: translate(0, ${(2 - defaultArr[key]) * 44}px)`">
                        <div @click="selectItem(key, index)" v-for="(item, index) in list.values" :key="index" :class="`md_picker-column-item ${index === defaultArr[key] ? 'md_picker-column-currItem' : ''}`">{{item[customName]}}</div>
                    </div>
                </div>
            </div>
            <div class="md_picker-column-overlay"></div>
            <div class="md_picker-column-frame"></div>
        </div>

        <!--级联选择器组件-->
        <div class="md_picker-box" v-if="isCascade">
            <div :class="`md_picker-column`" v-for="(list, key) in cascadeColumns" :key="key">
                <div class="md_picker-column-inner">
                    <div class="md_picker-column-list" :ref="`md_pickerList${key}`" @touchstart.stop="touchStart($event)" @touchmove.stop="touchMove($event, key)" @touchend.stop="touchEnd($event, key)" :style="`transform: translate(0, ${(2 - defaultArr[key]) * 44}px)`">
                        <div @click="selectItem(key, index)" v-for="(item, index) in list.values" :key="index" :class="`md_picker-column-item ${index === defaultArr[key] ? 'md_picker-column-currItem' : ''}`">{{item}}</div>
                    </div>
                </div>
            </div>
            <div class="md_picker-column-overlay"></div>
            <div class="md_picker-column-frame"></div>
        </div>
    </div>
</template>

<script>
    let startPageY
    export default {
        name: 'sdPicker',
        data() {
            return {
                cascadeColumns: []
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
            columns: {   //数据数组
                type: Array,
                default: []
            },
            defaultArr: {   //初始数据的下标数组
                type: Array,
                default: function () {
                    return []
                }
            },
            isCascade: {   //是否级联 级联选择器和普通选择器数据不一致
                type: Boolean,
                default: false
            },
            customName: {   //自定义文字内容
                type: String,
                default: 'name'
            },
            customChild: {   //自定义子类数组名
                type: String,
                default: 'children'
            }
        },
        model: {
            prop: 'defaultArr',
            event: 'arrChange'
        },
        mounted() {
            //级联初始化数据
            if(this.isCascade) {
                this.initData(this.columns, 0)
                //非级联初始化数据
            } else {
                this.columns.map((item, key)=> {
                    if(!this.defaultArr[key]) {
                        this.$set(this.defaultArr, key, 0)
                    }
                })
            }
        },
        methods: {
            /**
             点击选项时触发
             @param {Number} key 列的索引
             @param {Number} index 行的索引
             @return
             */
            selectItem(key, index) {
                if(!this.isCascade){
                    if(index === this.defaultArr[key]){
                        return
                    }
                    this.$set(this.defaultArr, key, index)
                    const pickerList = this.$refs[`md_pickerList${key}`][0]
                    pickerList.style.transition="-webkit-transform 150ms ease-out";
                    pickerList.style.webkitTransform=`translate(0, ${(2 - index) * 44}px)`;
                    //选项改变时触发
                    this.$emit('change',this.getValue())
                } else {
                    if(index === this.defaultArr[key]){
                        return
                    }
                    this.$set(this.defaultArr, key, index)
                    const pickerList = this.$refs[`md_pickerList${key}`][0]
                    pickerList.style.transition="-webkit-transform 150ms ease-out";
                    pickerList.style.webkitTransform=`translate(0, ${(2 - index) * 44}px)`;
                    //这里可以优化，不能写死，但目前未想到好的解决方案
                    if(key === 0){
                        this.changeData(this.columns[index][this.customChild], key + 1)
                    } else if(key === 1) {
                        this.changeData(this.columns[this.defaultArr[0]][this.customChild][index][this.customChild], key + 1)
                    }
                    for(let i= key + 1; i < this.cascadeColumns.length; i++) {
                        const pickerList = this.$refs[`md_pickerList${i}`][0]
                        pickerList.style.transition="-webkit-transform 150ms ease-out";
                        pickerList.style.webkitTransform=`translate(0,88px)`;
                    }
                    this.$emit('change',this.getValue())
                }
            },
            /**
             级联选择器初始化数据
             @param {Array} columns 数据数组
             @param {Number} layer 级联层数
             @return
             */
            initData(columns, layer) {
                const columnObj = {}
                let defaultIndex
                if(this.defaultArr[layer]) {
                    defaultIndex = this.defaultArr[layer]
                } else {
                    defaultIndex = 0
                    this.$set(this.defaultArr, layer, 0)
                }
                columnObj.values = columns.map((item, key)=>{
                    return item[this.customName]
                })
                this.cascadeColumns.push(columnObj)
                if(columns.length && columns[defaultIndex][this.customChild]){
                    this.initData(columns[defaultIndex][this.customChild], ++layer)
                }
            },
            /**
             级联选择器变化数据
             @param {Array} columns 数据数组
             @param {Number} index 列的下标
             @return
             */
            changeData(columns, index) {
                if(!columns){
                    return
                }
                const columnObj = {}
                this.$set(this.defaultArr, index, 0)
                columnObj.values = columns.map((item, key)=>{
                    return item[this.customName]
                })
                this.cascadeColumns.splice(index, 1, columnObj)
                if(columns.length && columns[0][this.customChild]){
                    this.changeData(columns[0][this.customChild], ++index)
                }
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
            touchStart(e) {
                startPageY = e.targetTouches[0].pageY
                e.stopPropagation()
            },
            /**
             触摸移动事件
             @param {dom} e 触摸移动事件参数
             @param {Number} key 列的下标
             @return
             */
            touchMove(e, key) {
                const pickerList = this.$refs[`md_pickerList${key}`][0]
                pickerList.style.transform=`translate(0, ${e.targetTouches[0].pageY - startPageY + ((2 - this.defaultArr[key]) * 44)}px)`;
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
                const list = this.isCascade ? this.cascadeColumns[key] : this.columns[key]
                if(startPageY === endPageY){
                    return
                } else {
                    let currIndex = Math.round((startPageY - endPageY) / 44) + this.defaultArr[key]   //这里改动了
                    const pickerList = this.$refs[`md_pickerList${key}`][0]
                    if(currIndex < 0){
                        currIndex = 0
                        pickerList.style.transition="-webkit-transform 150ms ease-out";
                        pickerList.style.webkitTransform=`translate(0, 88px)`;
                    } else if(currIndex > list.values.length - 1) {
                        currIndex = list.values.length - 1
                        pickerList.style.transition="-webkit-transform 150ms ease-out";
                        pickerList.style.webkitTransform=`translate(0, ${(2 - currIndex) * 44}px)`;
                    } else {
                        pickerList.style.transition="-webkit-transform 150ms ease-out";
                        pickerList.style.webkitTransform=`translate(0, ${(2 - currIndex) * 44}px)`;
                    }
                    this.$set(this.defaultArr, key, currIndex)
                    //选项改变时触发
                    this.$emit('change',this.getValue())
                    if(this.isCascade) {
                        if(key === 0){
                            this.changeData(this.columns[currIndex][this.customChild], key + 1)
                        } else if(key === 1) {
                            this.changeData(this.columns[this.defaultArr[0]][this.customChild][currIndex][this.customChild], key + 1)
                        }
                        for(let i= key + 1; i < this.cascadeColumns.length; i++) {
                            const pickerList = this.$refs[`md_pickerList${i}`][0]
                            pickerList.style.transition="-webkit-transform 150ms ease-out";
                            pickerList.style.webkitTransform=`translate(0,88px)`;
                        }
                    }
                }
            },
            /**
             获取选中的值
             @param {Number} column 对应列选中的值,默认获取全部列的值
             @return {Number or Array} 对应列的下标，全部时为数组
             */
            getValue(column) {
                if(!this.isCascade) {
                    if(!column && column !== 0) {
                        return this.defaultArr.map((item, key)=> {
                            return Object.assign(this.columns[key].values[item], {key: item})
                        })
                    } else {
                        return Object.assign(this.defaultArr[column].values[this.defaultArr[column]], {key: this.defaultArr[column]})
                    }
                } else {
                    return this.defaultArr.map((item, key)=> {
                        return this.getCascadeValue(this.columns, item, key, 0)
                    })
                }
            },
            getCascadeValue(arr, item, key, num) {
                if(key === num) {
                    if(arr[item]) {
                        return  Object.assign(arr[item], {currIndex: item})
                    }
                } else {
                    return this.getCascadeValue(arr[this.defaultArr[num]][this.customChild], item, key, ++num)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .md_picker {
        .md_picker-title{
            height: 0.88rem;
            border-bottom: 0.01rem solid #f4f4f4;
            background-color: #fff;
            .md_picker-title-left{
                float: left;
                height: 100%;
                padding: 0 0.32rem;
                cursor: pointer;
                color: #1989fa;
                font-size: 0.28rem;
                background-color: transparent;
                line-height: .88rem;
            }
            .md_picker-title-right{
                float: right;
                height: 100%;
                padding: 0 0.32rem;
                cursor: pointer;
                color: #1989fa;
                font-size: 0.28rem;
                line-height: .88rem;
            }
            .md_picker-title-center{
                font-weight: 500;
                font-size: 0.32rem;
                text-align: center;
                line-height: 0.88rem;
            }
            .md_picker-title-left:active {
                background-color: #f2f2f2;
            }
            .md_picker-title-right:active {
                background-color: #f2f2f2;
            }
        }
        .md_picker-box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .md_picker-column {
                flex: 1;
                position: relative;
                height: 220px;
                overflow: hidden;
                .md_picker-column-inner {
                    width: 100%;
                    height: 100%;
                    overflow-y: hidden;
                    box-sizing: content-box;
                    .md_picker-column-list {
                        width: 100%;
                        transform: translate(0, 88px);
                        .md_picker-column-item {
                            width: 100%;  height: 44px;
                            line-height: 44px;
                            text-align: center;
                            font-weight: 500;
                            font-size: 0.28rem;
                        }
                        .md_picker-column-currItem {
                            font-size: 0.32rem;
                        }
                    }
                }
            }
            .md_picker-column-overlay {
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
            .md_picker-column-frame {
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
            .md_picker-column-frame::after {
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
