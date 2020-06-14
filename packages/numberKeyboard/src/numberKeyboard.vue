<template>
    <transition name="ani-popup-bottom">
        <div class="sd-numberKeyboard" v-if="show" :style="`animation-duration: ${(duration) / 1000}s; border-radius: ${isRound ? '0.4rem 0.4rem 0 0' : ''}`" @animationend="animationend">
            <div class="sd-numberKeyboard-header" v-if="title" @click.stop>
                <div class="sd-numberKeyboard-title">{{title}}</div>
                <div v-if="closeButtonText" class="sd-numberKeyboard-close" @click.stop="blur">{{closeButtonText}}</div>
            </div>
            <div class="sd-numberKeyboard-list">
                <div class="sd-numberKeyboard-default">
                    <div :class="`sd-numberKeyboard-item ${((extraKey === '.' && key === 9) || isKeyArray && extraKey.length === 1 && key === 9) ? 'sd-numberKeyboard-item-wider' : ''}`" v-for="(item, key) in keyboardData">
                        <div @click.stop="selectItem(item.value)" class="sd-numberKeyboardContent">
                            <span v-if="item.isShow">{{item.value}}</span>
                            <i @click.stop="blur" v-if="item.value === 'collapse'" class="iconfont iconnumberKeyboard_collapse"></i>
                            <i v-if="item.value === 'delete'" class="iconfont iconnumberKeyboard_delete" @click.stop="deleteNumber"></i>
                        </div>
                    </div>
                </div>
                <div class="sd-numberKeyboard-right" v-if="extraKey === '.' || isKeyArray">
                    <div @click.stop="deleteNumber">
                        <i class="iconfont iconnumberKeyboard_delete"></i>
                    </div>
                    <div @click.stop="blur">{{closeButtonText}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'sdNumberKeyboard',
        data() {
            return {
                keyboardData: [],
                isKeyArray: false
            }
        },
        props: {
            show: {
              type: Boolean,
              default: false
            },
            extraKey: '',
            duration: {
                type: Number,
                default: 300
            },
            closeButtonText: {
                type: String,
                default: '完成'
            },
            maxlength: {
                type: Number,
                default: 0
            },
            value: '',
            hideOnclickOutside: {   //点击外部时是否收起键盘
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            isRound: {   //是否展示圆角
                type: Boolean,
                default: true
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        mounted() {
            if(this.extraKey === '') {   //普通键盘
                this.keyboardData = [{isShow: true, value: 1}, {isShow: true, value: 2}, {isShow: true, value: 3}, {isShow: true, value: 4}, {isShow: true, value: 5}, {isShow: true, value: 6}, {isShow: true, value: 7}, {isShow: true, value: 8}, {isShow: true, value: 9}, {isShow: false, value: 'collapse'}, {isShow: true, value: 0}, {isShow: false, value: 'delete'}]
            } else if(this.extraKey === '.') {   //带有右侧栏的键盘
                this.keyboardData = [{isShow: true, value: 1}, {isShow: true, value: 2}, {isShow: true, value: 3}, {isShow: true, value: 4}, {isShow: true, value: 5}, {isShow: true, value: 6}, {isShow: true, value: 7}, {isShow: true, value: 8}, {isShow: true, value: 9}, {isShow: true, value: 0}, {isShow: true, value: '.'}]
            } else if(this.extraKey === 'X') {   //配置带有身份证号的键盘
                this.keyboardData = [{isShow: true, value: 1}, {isShow: true, value: 2}, {isShow: true, value: 3}, {isShow: true, value: 4}, {isShow: true, value: 5}, {isShow: true, value: 6}, {isShow: true, value: 7}, {isShow: true, value: 8}, {isShow: true, value: 9}, {isShow: true, value: 'X'}, {isShow: true, value: 0}, {isShow: false, value: 'delete'}]
            } else if(this.extraKey instanceof Array) {
                this.keyboardData = [{isShow: true, value: 1}, {isShow: true, value: 2}, {isShow: true, value: 3}, {isShow: true, value: 4}, {isShow: true, value: 5}, {isShow: true, value: 6}, {isShow: true, value: 7}, {isShow: true, value: 8}, {isShow: true, value: 9}, {isShow: true, value: this.extraKey[0]}, {isShow: true, value: 0}]
                if(this.extraKey.length === 2) {
                    this.keyboardData.push({isShow: true, value: this.extraKey[1]})
                }
            }
            this.isKeyArray = this.extraKey instanceof Array
        },
        methods: {
            /**
             点击选项时触发
             @param {string} item 值
             @return
             */
            selectItem(item) {
                if(!this.maxlength || this.value < this.maxlength) {
                    this.$emit('change', `${this.value}${item}`)     //内容改变时触发
                    this.$emit('input', item)    //点击输入内容时触发
                }
            },
            /**
             隐藏密码键盘
             @param
             @return
             */
            blur() {
                this.$emit('blur')    //隐藏密码时触发
            },
            /**
             点击删除按钮触发的事件
             @param
             @return
             */
            deleteNumber() {
                this.$emit('change', `${this.value.substring(0, this.value.length -1)}`)   //内容改变时触发
                this.$emit('delete', this.value)   //删除输入内容时出发
            },
            /**
             点击删除按钮触发的事件
             @param
             @return
             */
            animationend() {
                if(this.show) {
                    this.$emit('show')    //键盘完全出现时触发
                } else {
                    this.$emit('hide')   //键盘完全隐藏时触发
                }
            }
        },
        filters: {
            filterItem(item) {
                if(/^[0-9\.\X]*$/.test(item)) {
                    return item
                }
            }
        },
        watch: {
            show(show) {
                if(show) {
                    setTimeout(()=> {
                        let vm = this
                        if(this.hideOnclickOutside) {
                            document.getElementsByTagName('html')[0].style.height = '100%'
                            document.getElementsByTagName('html')[0].addEventListener('click', vm.blur)
                        }
                    }, this.duration)
                } else {
                    let vm = this
                    if(this.hideOnclickOutside) {
                        document.getElementsByTagName('html')[0].style.height = '100%'
                        document.getElementsByTagName('html')[0].removeEventListener('click', vm.blur)
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sd-numberKeyboard {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0.12rem 0 0 0.12rem;
        background-color: #f2f3f5;
        .sd-numberKeyboard-header {
            position: relative;
            height: 0.72rem;
            .sd-numberKeyboard-title {
                text-align: center;
                line-height: 0.72rem;
                color: rgba(100, 101, 102, 0.83);
            }
            .sd-numberKeyboard-close {
                position: absolute;
                right: 0;
                top: 0.12rem;
                height: 100%;
                padding: 0 0.32rem;
                color: #576b95;
                font-size: 0.28rem;
            }
        }
        .sd-numberKeyboard-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .sd-numberKeyboard-default {
                flex: 1;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .sd-numberKeyboard-item {
                    box-sizing: border-box;
                    flex: 1;
                    flex-basis: 33%;
                    padding: 0 0.12rem 0.12rem 0;
                    .sd-numberKeyboardContent {
                        height: 1.05rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0.16rem;
                        background-color: #fff;
                        >span {
                            font-size: 0.56rem;
                        }
                        >i {
                            font-size: 0.56rem;
                        }
                    }
                    .sd-numberKeyboardContent:active {
                        background-color: #ebedf0;
                    }
                }
                .sd-numberKeyboard-item-wider {
                    flex-basis: 66%;
                }
            }
            .sd-numberKeyboard-right {
                display: flex;
                flex-direction: column;
                width: 1.7rem;
                >div {
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    margin: 0 0.12rem 0.12rem 0;
                    border-radius: 0.16rem;
                    font-size: 0.56rem;
                    background-color: #fff;
                    >i {
                        font-size: 0.56rem;
                    }
                }
                >div:nth-child(2) {
                    font-size: 0.36rem;
                    background-color: #1989fa;
                    color: #fff;
                }
                >div:active {
                    background-color: #ebedf0;
                }
                >div:nth-child(2):active {
                    background-color: #0570db;
                }
            }
        }
    }
</style>